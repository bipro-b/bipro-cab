"use client";
import { Avatar } from "@mui/material";

import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";

function RideCard() {
  return (
    <div className="flex justify-between items-center shadow-md rounded-s-sm p-3 cursor-pointer ">
      <div className="flex items-center">
        <img
          style={{width:"30px", height:"20px",marginRight:"10px"}}
          src="https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_640.png"
          alt=""
        />
        <div className="space-y-1">
          <p className="text-sm font-semibold">Today 10:08 pm</p>
          <p className="text-xs font-semibold opacity-60">Cab KWL990</p>
          <p className="text-xs opacity-60">CUET</p>
          <p className="text-xs opacity-60">DHAKA</p>
        </div>
      </div>

      {true ? (
        <div>
          <VerifiedIcon className="text-green-800 text-4xl" fontSize="3rem" />
        </div>
      ) : (
        <div className="flex  justify-between pl-5">
          <p className="text-green-500 ">Schedule..</p>
          <Avatar
            alt="REMY"
            src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_640.jpg"
          />
        </div>
      )}
    </div>
  );
}

export default RideCard;
