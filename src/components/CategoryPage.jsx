import React from "react";
import {
  Cpu, Handshake, CreditCard, FolderOpen,
  Bug, ClipboardPlus, Music2, Server, Megaphone,
  Brain, DollarSign, Layout
} from "lucide-react";

const categories = [
  { name: "Label", courses: "63,476 Courses", icon: <Cpu size={32} /> },
  { name: "Business", courses: "45,872 Courses", icon: <Handshake size={32} /> },
  { name: "Finance & Accounting", courses: "32,984 Courses", icon: <CreditCard size={32} /> },
  { name: "IT & Software", courses: "54,120 Courses", icon: <FolderOpen size={32} /> },
  { name: "Personal Development", courses: "29,543 Courses", icon: <Bug size={32} /> },
  { name: "Office Productivity", courses: "38,761 Courses", icon: <Server size={32} /> },
  { name: "Marketing", courses: "22,678 Courses", icon: <Megaphone size={32} /> },
  { name: "Photography And Video", courses: "17,542 Courses", icon: <Brain size={32} /> },
  { name: "Lifestyle", courses: "19,856 Courses", icon: <DollarSign size={32} /> },
  { name: "Design", courses: "25,476 Courses", icon: <Layout size={32} /> },
  { name: "Health and Fitness", courses: "30,742 Courses", icon: <ClipboardPlus size={32} /> },
  { name: "Music", courses: "15,623 Courses", icon: <Music2 size={32} /> },
];

// List of background colors
const colors = [
  "#EBEBFF", "#E1F7E3", "#FFF2E5", "#FFF0F0",
  "#FFFFFF", "#F5F7FA", "#EBEBFF", "#F5F7FA",
  "#FFF2E5", "#FFEEE8", "#E1F7E3", "#FFF2E5"
];

const CategoryPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Browse Top Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex items-center p-6 shadow-md"
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            <div className="mr-4 text-blue-600">{category.icon}</div>

            <div>
              <h2 className="text-xl font-semibold">{category.name}</h2>
              <p className="text-gray-600 text-sm">{category.courses}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <p>
          We have more categories & subcategories.{" "}
          <button className="font-semibold" style={{ color: "#FF6636" }}>
            Browse All
          </button>
        </p>
      </div>
    </div>
  );
};

export default CategoryPage;
