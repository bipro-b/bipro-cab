"use client";
import React from "react";
import WestIcon from "@mui/icons-material/West";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import WifiIcon from "@mui/icons-material/Wifi";

import { useRouter } from "next/navigation";
import { Avatar, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import RideCard from "@/component/user/RideCard/RideCard";

function Profile() {
  const router = useRouter();
  console.log(router);

  const goBack = () => {
    router.back();
  };

  return (
    <div className="px-2 lg:px-5 ">
      <div className="px-2 lg:px-5 py-2">
        <WestIcon onClick={goBack} className="cursor-pointer" />

        <div className="flex flex-col items-center space-y-2">
          <Avatar sx={{ bgColor: deepOrange[500] }}>B</Avatar>
          <p>Bipro</p>
          <p>909090</p>
        </div>

        <div className="border rounded-sm mt-5">
          <RideCard />
          <div className="flex flex-col items-center p-3">
            <Button
              variant="text"
              onClick={() => router.push("/your-rides")}
              color="secondary"
            >
              See all rides
            </Button>
          </div>
        </div>

        <div className="border mt-5">
          <div className="flex items-center p-3 border=b">
            <AccountBalanceWalletIcon className="text-green-600" />
            <p className="ml-4">Ola Money</p>
          </div>

          <div className="flex items-center p-3 border=b">
            <ContactPhoneIcon className="text-green-600" />
            <p className="ml-4">Ola Contact</p>
          </div>

          <div className="flex items-center p-3 border=b">
            <WifiIcon className="text-green-600" />
            <p className="ml-4">Ola Wifi</p>
          </div>
        </div>

        <div>
          <Button
            className="w-full bg-red-500 "
            variant="contained"
            color="error"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
