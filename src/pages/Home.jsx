import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Hero from "../components/Hero/Hero";
import { FaStar } from "react-icons/fa";
import EcoDecor from "../components/EcoDecor/EcoDecor";
import PlantCare from "../components/PlantCare/PlantCare";
import PlantOfWeek from "../components/PlantOfWeek/PlantOfWeek";

const Home = () => {
  const [plants, setPlants] = useState([]);
  const [experts, setExperts] = useState([]);

  const topPlants = plants.filter((p) => p.rating >= 4.8);
  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  useEffect(() => {
    fetch("/experts.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);


  return (
    <div className="bg-green-50">
      <section className="pb-2 w-11/12 mx-auto">
        <Hero></Hero>
      </section>
      <section className="py-12 bg-green-100">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Top Rated Indoor Plants
          </h2>
          <p className="font-semibold text-lg text-gray-400 mb-12">
            Discover the top-rated indoor plants loved online for their low
            maintenance, air-purifying qualities, and stylish appearance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-12 w-10/12 mx-auto">
          {topPlants.map((plant) => (
            <div
              key={plant.plantId}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={plant.image}
                alt=""
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-green-700">
                <h3 className="text-xl font-semibold">{plant.plantName}</h3>
                <div className="flex justify-between py-2 font-semibold">
                  <p className="">Price: ${plant.price}</p>
                  <p className="text-yellow-500 flex justify-center items-center gap-1">
                    Rating: {plant.rating}
                    <FaStar className="w-3 h-3" />
                  </p>
                </div>
                <Link
                  to={`/plants/${plant.plantId}`}
                  className="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      < PlantCare></PlantCare>

      {/* experts section */}
      <section className="py-12 bg-white">
        <h2 className="text-center text-3xl font-bold text-green-700 mb-10">
          Meet Our Green Experts
        </h2>

        <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-green-50 p-5 rounded-2xl shadow-md text-center border border-green-100"
            >
              <img
                src={expert.image}
                alt=""
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 shadow"
              />

              <h3 className="text-xl font-semibold text-green-800">
                {expert.name}
              </h3>
              <p className="text-gray-600 mt-1">{expert.role}</p>
            </div>
          ))}
        </div>
      </section>

      <EcoDecor></EcoDecor>
      <PlantOfWeek></PlantOfWeek>
    </div>
  );
};

export default Home;
