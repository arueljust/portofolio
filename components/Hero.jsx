import images from "../src/assets";

const Hero = () => {
  return (
    <div
      id="hero"
      name="hero"
      className="w-full bg-[#0a192f] px-6 py-16 sm:py-20 md:py-32 pt-20"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-pink-600 text-base sm:text-lg">Hi, my name is</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white">Mazrul Khoiri</h1>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#8892b0] mt-2">
            I'm a Web Developer
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px] mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
            I handle both frontend and backend development to build complete web solutions that
            are fast, scalable, and user-friendly.
          </p>
          <div className="mt-4">
            <a href="#projects">
              <button className="text-white bg-pink-600 border-pink-600 group border-2 px-6 py-3 flex items-center justify-center mx-auto md:mx-0 hover:bg-[#8892b0] hover:border-[#8892b0] transition duration-300 text-sm sm:text-base">
                View Work
              </button>
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <img
            src={images.Hero}
            alt="Developer Illustration"
            className="rounded-lg w-[280px] h-[280px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
