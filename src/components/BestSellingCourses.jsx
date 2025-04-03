import React from "react";

// Importing images from src/images
import jsImage from "../images/design.png";
import businessImage from "../images/development.png";
import designImage from "../images/business.png";
import photographyImage from "../images/marketing.png";
import musicImage from "../images/IT.png";
import securityImage from "../images/music.png";
import marketingImage from "../images/marketing1.png";
import financeImage from "../images/health.png";
import financeImage1 from "../images/design1.png";
import financeImage2 from "../images/lifestyle.png";

const bestSellingCourses = [
  {
    id: 1,
    image: jsImage,
    title: "Machine Learning A-Z™: Hands-On Python & R In Data...",
    category: "Design",
    price: "$49.99",
    rating: 4.8,
    students: "25,476",
  },
  {
    id: 2,
    image: businessImage,
    title: "The Complete 2021 Web Development Bootcamp",
    category: "Development",
    price: "$59.99",
    rating: 4.7,
    students: "32,874",
  },
  {
    id: 3,
    image: designImage,
    title: "Learn Python Programming Masterclass",
    category: "Business",
    price: "$29.99",
    rating: 4.5,
    students: "15,678",
  },
  {
    id: 4,
    image: photographyImage,
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    category: "Marketing",
    price: "$39.99",
    rating: 4.9,
    students: "18,234",
  },
  {
    id: 5,
    image: musicImage,
    title: "Reiki Level I, II and Master/Teacher Program",
    category: "IT and Software",
    price: "$69.99",
    rating: 4.6,
    students: "42,871",
  },
  {
    id: 6,
    image: securityImage,
    title: "The Complete Foundation Stock Trading Course",
    category: "Music",
    price: "$79.99",
    rating: 4.9,
    students: "10,432",
  },
  {
    id: 7,
    image: marketingImage,
    title: "Beginner to Pro in Excel: Financial Modeling and Valuati...",
    category: "Marketing",
    price: "$45.99",
    rating: 4.7,
    students: "22,879",
  },
  {
    id: 8,
    image: financeImage,
    title: "The Python Mega Course: Build 10 Real World Applications",
    category: "Health & Fitness",
    price: "$89.99",
    rating: 4.8,
    students: "19,543",
  },
  {
    id: 9,
    image: financeImage1,
    title: "Copywriting - Become a Freelance Copywriter, your ow...",
    category: "Design",
    price: "$89.99",
    rating: 4.8,
    students: "19,543",
  },
  {
    id: 10,
    image: financeImage2,
    title: "Google Analytics Certification - Learn How To Pass The Exam",
    category: "Lifestyle",
    price: "$89.99",
    rating: 4.8,
    students: "19,543",
  },
];

const BestSellingCourses = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Best Selling Courses</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {bestSellingCourses.map((course) => (
          <div key={course.id} className="shadow-lg flex flex-col items-center space-y-3">
            
            <img src={course.image} alt={course.title} className=" object-cover" />

            <div className="flex justify-between w-full px-5 text-sm text-gray-700 font-semibold">
              <span>{course.category}</span>
              <span className="text-red-600 font-bold text-lg">{course.price}</span>
            </div>

            <h2 className="text-lg font-bold px-3">{course.title}</h2>

            <hr className="w-full border-gray-300 mb-auto" />

            <div className="flex justify-between items-center text-sm text-gray-600 w-full p-3 mt-auto">
              <span className="text-yellow-500">⭐ {course.rating}</span>
              <span>({course.students} students)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingCourses;
