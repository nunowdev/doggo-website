import React, { useEffect, useState } from "react";
import DogImage from "../assets/dog.png";
import axios from "axios";

// https://dog.ceo/api/breeds/list/all

const Select = () => {
  //const [breeds, setBreeds] = useState({});
  const [breedsArr, setBreedsArr] = useState([]);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((response) => {
        console.log(Object.keys(response.data.message));
        setBreedsArr(Object.keys(response.data.message));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="h-screen bg-neutral-100 w-screen flex items-center justify-center font-poppins">
      <div className="container flex flex-col md:flex-row w-3/4 h-3/4 items-center justify-center">
        <div className="h-full w-full flex flex-col items-start pl-0  md:pl-40 justify-center ">
          <h1 className="text-3xl sm:text-4xl text-black w-[200px] sm:w-[400px] mb-5">
            Select a Dog Breed.
          </h1>
          <h2 className="mb-4">Choose your favourite Doggo breed :D</h2>
          <select className="text-white bg-neutral-700 w-1/2 p-2 rounded">
            <option defaultValue={{ label: "Select", value: "select" }} hidden>
              Select
            </option>
            {breedsArr.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
            <option value="hello">Hello</option>
          </select>
        </div>
        <div className="h-2/6 sm:h-3/6 md:h-2/4 lg:h-3/4 w-full flex">
          <img src={DogImage} alt="" className="min-w-1/3 max-w-lg"></img>
        </div>
      </div>
    </section>
  );
};

export default Select;
