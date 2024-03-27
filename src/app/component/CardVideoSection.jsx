import React from "react";
// import car from "../../../resources/car.mp4"
function CardVideoSection() {
  return (
    <div className="mt-32">
      <h1 className="text-5xl font-body my-10 text-center">
        Bangladesh's most ambition car
      </h1>
      <div>
        <video
        autoPlay loop controls
          style={{ width: "100%", height: "100%" }}
          src="../../../resources/car.mp4"
        >

        </video>
      </div>
    </div>
  );
}

export default CardVideoSection;
