const BecomeInstructor = () => {
    return (
      <section className="grid grid-cols-2  px-8 py-12 ">
        {/* Left Side - Text */}
        <div className="shadow-lg p-7 mr-5 text-white text-center md:text-left bg-orange-500">
          <h2 className="text-3xl font-bold mb-4">Become an instructor</h2>
          <p className="text-gray-200 mb-6">
            Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
          </p>
          <button className="bg-white text-orange-500 px-6 py-3 shadow-md hover:bg-orange-600 transition">
            Start Teaching
          </button>
        </div>
  
        {/* Right Side - Steps */}
        <div className="p-6 shadow-lg ">
          <h2 className="text-lg font-bold mb-4">Your teaching & earning steps</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { step: 1, text: "Apply to become instructor", color: "bg-blue-500" },
              { step: 2, text: "Build & edit your profile", color: "bg-green-500" },
              { step: 3, text: "Create your new course", color: "bg-yellow-500" },
              { step: 4, text: "Start teaching & earning", color: "bg-purple-500" }
            ].map(({ step, text, color }) => (
              <div key={step} className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${color} text-white flex items-center justify-center rounded-full text-lg font-bold shadow-lg`}>
                  {step}
                </div>
                <p className="text-gray-800">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BecomeInstructor;
  