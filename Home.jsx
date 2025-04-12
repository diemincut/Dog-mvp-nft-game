import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const starters = [
  { name: "Boston Terrier", description: "Playful and eager to bond.", traitHint: "Loyalty, Obedience" },
  { name: "Beagle", description: "Curious and intelligent.", traitHint: "Intelligence, Instinct" },
  { name: "Boxer", description: "Loyal and balanced temperament.", traitHint: "Vitality, Bravery" }
];

export default function Home() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  function confirmSelection() {
    localStorage.setItem("starterDog", JSON.stringify(starters[selected]));
    navigate("/kennel");
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Choose Your Starter Dog</h1>
      <div className="grid gap-4">
        {starters.map((dog, index) => (
          <div
            key={index}
            className={\`p-4 border rounded-xl shadow cursor-pointer \${selected === index ? "bg-blue-100 border-blue-500" : "bg-white"}\`}
            onClick={() => setSelected(index)}
          >
            <h2 className="text-xl font-semibold">{dog.name}</h2>
            <p>{dog.description}</p>
            <p className="text-sm text-gray-500">Traits: {dog.traitHint}</p>
          </div>
        ))}
      </div>
      {selected !== null && (
        <div className="mt-6 text-center">
          <button onClick={confirmSelection} className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
            Confirm {starters[selected].name}
          </button>
        </div>
      )}
    </div>
  );
}