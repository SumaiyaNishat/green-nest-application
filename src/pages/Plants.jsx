import React from "react";
import { useLoaderData, Link } from "react-router";

const Plants = () => {
  const plants = useLoaderData() || []; 

  if (plants.length === 0) return <p>No plants available</p>;

  return (
    <div>
      {plants.map((p) => (
        <div key={p.plantId}>
          <h3>{p.name}</h3>
          <Link to={`/plants/${p.plantId}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Plants;
