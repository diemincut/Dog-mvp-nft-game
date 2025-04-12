import React, { useEffect, useState } from "react";

export default function Kennel() {
  const [dog, setDog] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("starterDog");
    if (saved) setDog(JSON.parse(saved));
  }, []);

  if (!dog) return <p className="p-4">No dog selected yet.</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Kennel</h1>
      <div className="border rounded-xl p-4 shadow bg-white">
        <h2 className="text-xl font-semibold">{dog.name}</h2>
        <p>{dog.description}</p>
        <p className="text-sm text-gray-500">Traits: {dog.traitHint}</p>
      </div>
    </div>
  );
}