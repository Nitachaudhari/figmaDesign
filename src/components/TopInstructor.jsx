import React from "react";

// Importing instructor images from src/images
import instructor1 from "../images/i1.png";
import instructor2 from "../images/i2.png";
import instructor3 from "../images/i3.png";
import instructor4 from "../images/i4.png";
import instructor5 from "../images/i5.png";

// Instructors Data
const instructors = [
  { 
    id: 1, 
    name: "Devon Lane", 
    image: instructor1, 
    description: "Senior Developer", 
    rating: 4.6, 
    students: "854 students" 
  },
  { 
    id: 2, 
    name: "Darrell Steward", 
    image: instructor2, 
    description: "Digital Product Designer", 
    rating: 4.9, 
    students: "451,444 students" 
  },
  { 
    id: 3, 
    name: "Jane Cooper", 
    image: instructor3, 
    description: "UI/UX Designer", 
    rating: 4.8, 
    students: "435,671 students" 
  },
  { 
    id: 4, 
    name: "Albert Flores", 
    image: instructor4, 
    description: "Adobe Instructor", 
    rating: 4.7, 
    students: "511,123 students" 
  },
  { 
    id: 5, 
    name: "Kathryn Murphy", 
    image: instructor5, 
    description: "Lead Developer", 
    rating: 4.2, 
    students: "2,711 students" 
  }
];

const TopInstructors = () => {
  return (
    <div className="container px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Top Instructors</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {instructors.map((instructor) => (
          <div 
            key={instructor.id} 
            className="flex flex-col items-center bg-white border border-gray-300"
          >
            <img 
              src={instructor.image} 
              alt={instructor.name} 
              className="w-full object-cover mb-3 border-b border-gray-300"
            />

            <h2 className="text-lg font-semibold">{instructor.name}</h2>

            <p className="text-gray-600 text-sm text-center">{instructor.description}</p>

            <div className="w-full border-t border-gray-300 my-2 "></div>

            <div className="flex justify-between items-center text-sm text-gray-600 w-full p-2 mt-auto">
              <span className="text-yellow-500">⭐ {instructor.rating}</span>
              <span>{instructor.students}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <p>
        Thousands of students waiting for a instructor. Start teaching & earning now!{" "}
          <button className="font-semibold" style={{ color: "#FF6636" }}>
          Become Instructor
          </button>
        </p>
      </div>
    </div>
  );
};

export default TopInstructors;
