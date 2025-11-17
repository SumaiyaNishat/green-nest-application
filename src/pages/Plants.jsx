import React from "react";
import { useLoaderData, Link } from "react-router";

const Plants = () => {
  const plants = useLoaderData();

  return (
    <div className="plants-container bg-green-100 py-10 px-4 min-h-screen">
      <h2 className="text-center text-4xl font-bold text-green-700 mb-10">
        Our Indoor Plants
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-ro-3 w-11/12 mx-auto">
        {plants.map((plant) => (
          <div
            key={plant.plantId}
            className="card bg-base-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform"
          >
            <figure className="px-6 pt-6">
              <img
                src={plant.image}
                alt={plant.name}
                className="rounded-xl w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title text-green-700">{plant.plantName}</h3>
              <p className="text-gray-600">Price: ${plant.price}</p>
              <div className="card-actions mt-2">
                <Link
                  to={`/plants/${plant.plantId}`}
                  className="btn btn-sm bg-green-600 hover:bg-green-700 text-white border-none"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plants;
