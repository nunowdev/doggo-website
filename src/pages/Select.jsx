import React, { useEffect, useState } from "react";
import DogImage from "../assets/dog.png";
import axios from "axios";

const Select = () => {
  const [breeds, setBreeds] = useState({});
  async function listBreeds() {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/list/all");
      // console.log(response.data.message);
      setBreeds(response);
      console.log(breeds);
    } catch {
      console.log("error");
    }
  }

  useEffect(() => {
    listBreeds();
  }, []);

  return (
    <section className="h-screen bg-neutral-100 w-screen flex items-center justify-center font-poppins">
      <div className="container flex flex-col md:flex-row w-3/4 h-3/4 items-center justify-center">
        <div className="h-full w-full flex flex-col items-start pl-0  md:pl-40 justify-center ">
          <h1 className="text-3xl sm:text-4xl text-black w-[200px] sm:w-[400px] mb-5">
            Select a Dog Breed.
          </h1>
          <h2 className="mb-4">Choose your favourite Doggo breed :D</h2>
          <select className="text-white bg-neutral-700 text-xl p-2 rounded">
            <option defaultValue={{ label: "Select", value: "select" }} hidden>
              Select
            </option>
            {/* {breeds.map((item) => {
              <option value={item}></option>;
            })} */}
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
