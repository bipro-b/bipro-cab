import React from "react";
import LocationIcon from "@mui/icons-material/LocationOn";
import { usePathname, useSearchParams,useRouter } from "next/navigation";


const SearchResultCard = ({
  item,
  latitude_key,
  longitude_key,
  setActiveField,
  area_key,
}) => {

  const pickup_latitude=19.078541
  const pickup_longitude=72.878176
  const pickup_area = "Chittagong CUET"
  const destination_latitude=42.45453
  const destination_longitude= 74.92343
  const destination_area="Dhaka Gopalganj, New york, United States"

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSelect=()=>{
    const params = new URLSearchParams(searchParams)
    params.set([latitude_key],pickup_latitude)
    params.set([longitude_key],pickup_longitude)
    params.set([area_key],pickup_area)

   
    router.replace(pathname+"?"+params.toString())

    // params.set([latitude_key],destination_latitude)
    // params.set([longitude_key],destination_longitude)
    // params.set([area_key],destination_area)


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
