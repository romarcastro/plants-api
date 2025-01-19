import { useEffect, useState } from "react";
import "./App.css";

// components
import Card from "./components/Card";

// image
import logo from "./assets/PlantEd.svg";
import logoFull from "./assets/PlantEd full.svg";
import search from "./assets/search.svg";
import github from "./assets/github.svg";
import Recommendations from "./components/Recommendations";
import bgLeaves from "./assets/bg-leaves.svg";
function App() {
  interface Plant {
    id: number;
    common_name: string;
    scientific_name: string;
    default_image: {
      medium_url: string;
      thumbnail: string;
    };
    flatMap(arg0: (plant: any) => string[]): string[];
  }

  const [plants, setPlants] = useState<Plant[]>([]);
  const [isFetched, setIsFetched] = useState(false);

  const getRecommendations = (plants: Plant[]) => {
    const allPlants = plants.flatMap((plant) => plant);
    const uniquePlants = [...new Set(allPlants)];
    return uniquePlants.sort(() => Math.random() - 0.5);
  };
  const getNumbers = (plants: Plant[]) => {
    const allPlants = plants.flatMap((plant) => plant);
    const uniquePlants = [...new Set(allPlants)];
    return uniquePlants.length;
  };

  async function getPlants() {
    if (isFetched) return;
    try {
      const response = await fetch(
        "https://perenual.com/api/species-list?key=sk-6gy8678a7d49d05048265"
      );
      const data = await response.json();
      console.log(data);
      setPlants(data.data);
      setIsFetched(true);
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
      <div className="flex justify-between items-center p-6">
        <img src={logo} alt="" />
        <div className="flex gap-4">
          <a href="" className="">
            Bookmarks
          </a>
          <a href="">About</a>
        </div>
      </div>

      {/* Hero */}
      <div className="flex justify-center flex-col items-center gap-3">
        <img src={logoFull} className="h-28" />

        {/* Searchbar */}
        <div className="border border-slate-400  flex items-center gap-2 p-2 rounded-full w-[30rem] focus-within:border-[#386641]">
          <img src={search} alt="" className="h-6" />
          <input
            type="text"
            placeholder="What do you want to search?"
            className="w-full placeholder-gray-300 focus-within:outline-none"
          />
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {getRecommendations(plants)
          .slice(0, 3)
          .map((plant) => (
            <Recommendations key={plant.id} plant={plant} />
          ))}
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {plants.map((plant) => (
          <Card key={plant.id} plant={plant} />
        ))}
      </div>
      <div
        className="bg-cover bg-no-repeat flex flex-col justify-center items-center mt-4"
        style={{
          height: "200px",
          backgroundImage: `url(${bgLeaves})`,
        }}
      >
        <p className="tracking-tighter text-[1rem] text-center mt-4 text-[#386641]">
          Discover the wonders of plants and their fascinating details with
          <span className="font-semibold text-[#467e51]"> PlantEd</span>, where
          knowledge takes root and grows in you!
        </p>
        <div className="flex justify-center gap-64 mt-4">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[2rem] font-bold tracking-tighter  text-[#386641]">
              10,000+
            </h2>
            <p className="text-[1.5rem] tracking-tighter -mt-4 text-[#386641]">
              Plant Species
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center gap-2 my-6">
        <img src={github} alt="Github repository" />
        <div>
          <p className="font-bold">Developed by Romar Castro</p>
          <p className="font-light -mt-1">using Plant API from Perenual</p>
        </div>
      </div>
    </>
  );
}

export default App;
