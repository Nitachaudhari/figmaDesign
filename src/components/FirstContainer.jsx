import myImage from "./first.png"; 

const FirstContainer = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-12 max-w-6xl mx-auto">
      {/* Left Side - Text */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Learn with experts anytime, anywhere</h2>
        <p className="text-gray-700 mb-6">
          Our mission is to help people find the best courses online and learn from experts anytime, anywhere.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 shadow-md hover:bg-orange-600 transition">
          Create Account
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="max-w-lg">
        <img src={myImage} alt="Illustration" className="w-full h-auto object-cover" />
      </div>
    </section>
  );
};

export default FirstContainer;
