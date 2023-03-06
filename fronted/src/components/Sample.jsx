import React, { useEffect, useState } from "react";
import Card from "./Card";
import NotFound from "./NotFound";
import {
  location,
  pressure,
  windmill,
  sunrise,
  sunset,
  visibility,
  country,
} from "../assests";
import axios from "axios";

const Sample = (props) => {
  const [data, setData] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [text, setText] = useState("°C");
  const [speedUnit, setSpeedUnit] = useState("m/sec");

  const sendurl = process.env.REACT_APP_URL;

  const sendData = async () => {
    await axios
      .post(sendurl, {
        cityName: props.cityName,
        unit: unit,
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setData(null);
      });
  };

  function handleClick(event) {
    const btn = event.target.name;
    if (btn === "F") {
      setText("°F");
      setUnit("imperial");
      setSpeedUnit("miles/h");
    } else {
      setText("°C");
      setUnit("metric");
      setSpeedUnit("m/sec");
    }
  }

  useEffect(() => {
    sendData();
  }, [unit]);

  return (
    <>
      {data === null ? (
        <NotFound />
      ) : (
        <div>
          <div className="max-w-[320px] sm:max-w-[480px] mx-auto">
            <div className="bg-third mx-auto flex max-w-full sm:max-w-full rounded-t-[25px]">
              <div className="bg-first rounded-t-[25px] text-third mx-auto flex w-full sm:max-w-full items-center justify-center rounded-bl-[25%]">
                <div className="mt-4 flex w-[320px] sm:w-[480px] flex-col items-center gap-4 ">
                  <div className="flex justify-center items-center">
                    <img
                      src={location}
                      alt="location-png"
                      className="w-10 h-10"
                    />
                    <h1 className="sm:text-[25px] capitalize">
                      {props.cityName}
                    </h1>
                  </div>
                  <div className="space-x-3 sm:space-x-8 w-ful h-4"></div>

                  <div className="flex gap-3 sm:text-[25px]">
                    <button
                      className="rounded-md border bg-inherit p-1 px-3 shadow-lg transition duration-300 ease-in-out hover:bg-violet-800"
                      name="C"
                      onClick={handleClick}
                    >
                      °C
                    </button>
                    <p>|</p>
                    <button
                      className="rounded-md border bg-inherit p-1 px-3 shadow-lg transition duration-300 ease-in-out hover:bg-violet-800"
                      name="F"
                      onClick={handleClick}
                    >
                      °F
                    </button>
                  </div>
                  <div className="flex items-center gap-24">
                    <div className="flex flex-col items-center justify-center gap-y-3">
                      <h1 className="sm:text-6xl text-2xl">
                        {data.Temp} {text}
                      </h1>
                      <p className="sm:text-2xl text-1xl">{data.Main}</p>
                    </div>
                    <div>
                      <img
                        src={`http://openweathermap.org/img/wn/${data.Icon}@2x.png`}
                        alt="logo"
                        className="h-[70px] w-[70px] border-2 border-third bg-inherit
                rounded-[20%] shadow-2xl z-40px hover:scale-110 duration-300 ease-in-out sm:h-[100px] sm:w-[100px]"
                      />
                    </div>
                  </div>

                  <div className="mb-3 flex gap-10 sm:gap-16 text-[20px]">
                    <div>
                      <p className="sm:text-xl text-sm">
                        Min: {data.Temp_min} {text}
                      </p>
                      <p className="sm:text-xl text-sm">
                        Max: {data.Temp_max} {text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-first mx-auto max-w-full sm:max-w-full rounded-b-[25px] mb-5">
                <div className="bg-third text-third flex w-full sm:w-full flex-col items-center rounded-tr-[25%] rounded-b-[25px] gap-5 ">
                  <div className="mt-10 flex w-full sm:w-full items-center justify-around sm:gap-10 gap-3">
                    <Card image={pressure} value={data.Pressure} unit="hpa" />
                    <Card image={windmill} value={data.Wind} unit={speedUnit} />
                    <Card
                      image={sunrise}
                      value={new Date(data.Sunrise * 1000).toLocaleTimeString(
                        "en-US"
                      )}
                      unit={null}
                    />
                  </div>
                  <div className="mt-9 mb-10 flex w-full sm:w-full items-center justify-around sm:gap-10 gap-3">
                    <Card
                      image={sunset}
                      value={new Date(data.Sunset * 1000).toLocaleTimeString(
                        "en-US"
                      )}
                      unit={null}
                    />
                    <Card
                      image={visibility}
                      value={data.Visibility}
                      unit="meter"
                    />
                    <Card image={country} value={data.Country} unit={null} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sample;
