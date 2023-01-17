import React, { useState, useEffect } from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FaStreetView } from "react-icons/fa";
import Error from "./Error";
import "../styles/main.css";

const Main = () => {
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("India");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=13be7043b4b2dce2d07d7e1b6c462754`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);
  return (
    <>
      <div className="main-home">
        <div className="header">
          <input
            type="text"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            placeholder="Enter  Your City"
          ></input>
        </div>
        {!city ? (
          <Error />
        ) : (
          <>
            <div className="home-body">
              <div className="wicon">
                <BsFillCloudSunFill id="weather-icon" />
              </div>

              <div className="city">
                <div className="cityicon">
                  <FaStreetView id="street" />
                </div>
                <h1>{search}</h1>
              </div>
            </div>

            <div className="result">
              <h1>{city.temp}°Cel</h1>
              <h3 className="tempmin-max">
                min:{city.temp_min}°Cel | max:{city.temp_max}°Cel
              </h3>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Main;
