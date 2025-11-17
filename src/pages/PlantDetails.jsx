import React, { useContext } from "react";
import { useLoaderData, Link, Navigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const PlantDetails = () => {
  const plant = useLoaderData();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("🌿 Consultation booked successfully!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  if (!plant) return <p className="text-center mt-10">Plant not found</p>;

  return (
    <div className="bg-green-100">
      <div className="w-8/12 mx-auto py-10 px-6">
      <ToastContainer />

      <div className="flex flex-col md:flex-row gap-8 items-center bg-base-200 shadow-md">
       <img src={plant.image} alt="" className="w-75 h-75" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-green-700 mb-2">
            {plant.plantName}
          </h2>
          <p className="text-gray-700 mb-3">{plant.description}</p>
          <p>Price: ${plant.price}</p>
          <p>Rating: {plant.rating}</p>
          <p>In Stock: {plant.availableStock}</p>
          <p className="text-sm text-gray-600 mt-2">
            Provided by: {plant.providerName}
          </p>
        </div>
      </div>

     
      <div className="mt-10 bg-green-50 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          Book Consultation
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Book Now
          </button>
        </form>
      </div>

      <div className="mt-6 text-center">
        <Link to="/plants" className=" btn text-green-700 hover:underline">
          ← Back to Plants
        </Link>
      </div>
    </div>
    </div>
  );
};

export default PlantDetails;
