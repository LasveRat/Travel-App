import React from "react";
import SectionHeading from "../../Helpers/SectionHeading";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
  return (
    <div className=" pt-20 pb-20">
      {/* Section Heading */}
      <SectionHeading heading="Exploring Popular Destination" />
      {/* Section Content */}
      <div className="w-[80%] mx-auto mt-14">
        {/* Slider */}
        <DestinationSlider />
      </div>
    </div>
  );
};

export default Destination;
