import { useRouter } from "next/navigation";
import React from "react";
import WestIcon from "@mui/icons-material/West";
import StarIcon from "@mui/icons-material/Star";
import CallIcon from "@mui/icons-material/Call";
import KeyIcon from "@mui/icons-material/Key";
import { Avatar, Button, IconButton } from "@mui/material";

function RideDetails() {
  const router = useRouter();
  console.log(router);

  const goBack = () => {
    router.back();
  };

  return (
    <div>
      <div className=" items-center px-2 lg:px-5 py-2">
        <div>
          <WestIcon onClick={goBack} className="cursor-pointer" />
          <p className="text-center w-full">Ride Details</p>
        </div>

        <div className="px-2 lg:px-5 py-5">
          <div className="border rounded-md">
            <div className="flex items-center border-b p-3">
              <span className="pr-5 opacity-70 text-xs font-semibold">
                PICKUP :{" "}
              </span>
              <span>Chittagong CUET</span>
            </div>
            <div className="flex items-center border-b p-3">
              <span className="pr-5 opacity-70 text-xs font-semibold">
                DROP:{" "}
              </span>
              <span>DHAKA GOPALGANJ</span>
            </div>
          </div>
        </div>

        <p className="p-2 bg-green-400 text-white text-center">
          Picking arriving in 1 min
        </p>

        <div className="flex items-center justify-center w-full h-[42vh] ">
          <p className="text-center w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14749.389119861587!2d91.97837614999999!3d22.453580400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2fca34ae5549%3A0x35c88a37b3e90e97!2sChittagong%20University%20of%20Engineering%20and%20Technology%20(CUET)!5e0!3m2!1sen!2sbd!4v1711626483735!5m2!1sen!2sbd"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </p>
        </div>

        <div className="px-2 lg:px-5 mt-2">
          <div className="border rounded-md">
            <div className="flex-justify-between w-full border-b p-3">
              <div className="flex items-center">
                <Avatar
                  alt="Remy"
                  src="https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_640.png"
                />

                <div className="pl-4">
                  <p>BMW CAR</p>
                  <p className="text-xs font-semibold opacity-60">Mini Cab</p>
                </div>
              </div>

              <div>
                <p className="text-xs">DHA-789</p>
                <p className="font-semibold">0187979</p>
              </div>
            </div>

            <div className="flex justify-between w-full p-3">
              <div className="flex items-center">
                <Avatar
                  alt="Remy"
                  src="https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_640.jpg"
                />

                <div className="pl-4">
                  <p>Alice driver</p>
                  <p className="text-xs flex items-center">
                    4.7
                    <StarIcon className="text-yellow-50-500 text-sm" />
                  </p>
                </div>
              </div>

              <div>
                <IconButton color="success" aria-label="call driver">
                  <CallIcon />
                </IconButton>
              </div>
            </div>

            {
                true?(
                    <Button
                    className="bg-green-400"
                    variant="contained"
                    color="secondary"
                    sx={{
                        width:"100%",
                        padding:".5rem 0rem"
                    }}
                    >
                    Pay Now

                    </Button>

                ):(
                    <div className="flex justify-around items-center bg-yellow-600 text-white py-2 ">
                        <div className="flex items-center"> 
                            <KeyIcon/>
                            <p className="ml-4">OTP</p>
                        </div>

                        <p>0956</p>
                    </div>
                )
            }
          </div>


        </div>
      </div>
    </div>
  );
}

export default RideDetails;
