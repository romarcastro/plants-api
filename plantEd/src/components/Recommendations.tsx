import leaf from "../components/assets/leaf.svg";

interface Plant {
  common_name: string;
}

interface RecommendationsProps {
  plant: Plant;
}

const Recommendations: React.FC<RecommendationsProps> = ({ plant }) => {
  return (
    <div className="flex flex-col py-2 px-3">
      <div className="text-[#386641] flex items-center gap-1 tracking-tight font-medium text-sm">
        <p>{plant.common_name}</p>
        <img src={leaf} className="h-4" />
      </div>
    </div>
  );
};

export default Recommendations;
