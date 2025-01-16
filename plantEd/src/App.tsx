import { useEffect, useState } from "react";
import "./App.css";

function App() {
  interface Plant {
    id: number;
    common_name: string;
    scientific_name: string;
  }

  const [plants, setPlants] = useState<Plant[]>([]);

  async function getPlants() {
    try {
      const response = await fetch(
        "https://perenual.com/api/species-list?key=sk-AqKo6789029c785e68246"
      );
      const data = await response.json();
      setPlants(data.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getPlants();
  }, []);

  return (
    <>
      {/* Navbar */}
      <h1 className="text-green-400">PlantEd</h1>

      {/* Content */}
      <div>
        {plants.map((plant) => (
          <div key={plant.id}>
            <h2 className="text-slate-900">{plant.common_name}</h2>
            <p>{plant.scientific_name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
