import images from "../src/assets";

const Projects = () => {
  return (
    <div
      id="projects"
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-2xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-50">
          <div
            style={{ backgroundImage: `url(${images.Attend})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-60 bg-cover bg-center"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-300 bg-black/60 w-full h-full flex flex-col justify-center items-center">
              <span className="text-xl font-bold text-white tracking-wider">
                Face Recognition Attend
              </span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${images.Coffe})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-60 bg-cover bg-center"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-300 bg-black/60 w-full h-full flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Coffe Shop
              </span>
              <div className="pt-8 text-center">
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${images.SereneVisa})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-60 bg-cover bg-center"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-300 bg-black/60 w-full h-full flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Serene (Travel agent)
              </span>
              <div className="pt-8 text-center">
                <a href="https://sereneubud.com">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${images.Bakoel})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-60 bg-cover bg-center"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-300 bg-black/60 w-full h-full flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Bakoelide
              </span>
              <div className="pt-8 text-center">
                <a href="https://bakoelide.com">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${images.Visa})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-60 bg-cover bg-center"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-300 bg-black/60 w-full h-full flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Project Title
              </span>
              <div className="pt-8 text-center">
                <a href="https://myvisa.co.id">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="#">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
