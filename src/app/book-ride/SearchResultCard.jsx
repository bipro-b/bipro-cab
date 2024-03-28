import React from "react";
import LocationIcon from "@mui/icons-material/LocationOn";

const SearchResultCard = ({
  item,
  latitude_key,
  longitude_key,
  setActiveField,
  area_key,
}) => {

  const handleSelect=()=>{
    console.log();
  }

  return (
    <div
      onClick={handleSelect}
      className="flex items-center py-2 z-10 bg-white cursor-pointer"
    >
      <div className="pr-5">
        <LocationIcon />
      </div>
      <div>
        <p className="font-semibold">Ctg market</p>
        <p className="font-semibold opacity-60">Dha</p>
      </div>
    </div>
  );
};

export default SearchResultCard;
