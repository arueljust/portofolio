import { FaCss3Alt, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <div name="skills" className="w-full bg-[#0a192f] text-gray-300 py-20">
      <div className="max-w-[1000px] mx-auto px-8">
        <div className="pb-8">
          <p className="text-2xl font-bold inline border-b-4 border-pink-600">Skills</p>
          <p className="py-4">These are the technologies I’ve worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {/* Skill Item */}
          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:scale-105 duration-300">
            <FaHtml5 className="text-6xl text-orange-500 mx-auto mb-2" />
            <p>HTML5</p>
          </div>
          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:scale-105 duration-300">
            <FaCss3Alt className="text-6xl text-blue-500 mx-auto mb-2" />
            <p>CSS3</p>
          </div>
          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:scale-105 duration-300">
            <FaJs className="text-6xl text-yellow-400 mx-auto mb-2" />
            <p>JavaScript</p>
          </div>
          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:scale-105 duration-300">
            <FaReact className="text-6xl text-cyan-400 mx-auto mb-2" />
            <p>React</p>
          </div>
          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:scale-105 duration-300">
            <FaPhp className="text-6xl text-indigo-400 mx-auto mb-2" />
            <p>PHP</p>
          </div>
          <div className="bg-[#112240] p-6 rounded-lg shadow-md hover:scale-105 duration-300">
            <FaLaravel className="text-6xl text-red-500 mx-auto mb-2" />
            <p>Laravel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
