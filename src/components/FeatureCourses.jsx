import React from "react";

// Importing images
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";

const FeatureCourses = () => {
  return (
    <div className="container mx-auto mt-20">
      {/* Title & Description */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-left md:w-1/2 ml-5">Our feature courses</h1>
        <p className="text-gray-600 text-lg md:w-1/2">
        Vestibulum sed dolor sed diam mollis maximus vel nec dolor.<br/>
         Donec varius purus et eleifend porta.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 m-5">
        {[img1, img2, img3, img4].map((image, index) => (
          <div key={index} className="shadow-lg overflow-hidden">
            <img src={image} alt={`Card ${index + 1}`} className="w-full  object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCourses;
