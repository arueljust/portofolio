const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="w-full h-100 bg-[#0a192f] text-gray-300 px-4 py-16 md:min-h-screen md:pb-100"
    >
      <div className="flex flex-col justify-center items-center max-w-[1000px] mx-auto h-full">
        {/* Title */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-2xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        {/* Content */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="text-xl sm:text-xl font-bold text-center sm:text-right">
            <p>
              Hi. I'm Mazrul, nice to meet you.<br className="hidden sm:block" /> Please take a look around.
            </p>
          </div>
          <div className="text-sm sm:text-base text-justify sm:text-left leading-relaxed">
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software for
              clients ranging from individuals and small businesses all the way to
              large enterprise corporations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
