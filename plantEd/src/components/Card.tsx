import bookmark from "./assets/bookmark-icon.svg";
import noImg from "./assets/placeholder-noimg.svg";
interface Plant {
  common_name: string;
  scientific_name: string;
  default_image: {
    medium_url: string;
    thumbnail: string;
  };
}

interface CardProps {
  plant: Plant;
}

const Card: React.FC<CardProps> = ({ plant }) => {
  const { common_name, scientific_name, default_image } = plant;

  return (
    <div className="flex flex-col p-4">
      <div className="w-60 h-36 rounded-lg overflow-hidden">
        {default_image ? (
          <img src={default_image.medium_url} />
        ) : (
          <img src={noImg} alt="" className="w-60 h-50" />
        )}
      </div>

      <div className="flex  text-left justify-between mt-1">
        <div className="flex-col ">
          <h2 className="tracking-tight font-semibold truncate max-w-48">
            {common_name}
          </h2>
          <p className="tracking-tight -mt-1 text-xs italic text-gray-600 ">
            {scientific_name}
          </p>
        </div>
        <div className="bg-[#386641] flex item-center w-8 h-8 rounded-full justify-center hover:bg-[#669770] ease-in duration-100">
          <img src={bookmark} alt="bookmark" className="h-3 self-center" />
        </div>
      </div>
    </div>
  );
};

export default Card;
