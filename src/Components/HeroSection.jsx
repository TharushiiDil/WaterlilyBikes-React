import BIKEE2 from "../assets/BIKE2.mp4";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="hero relative flex flex-col items-center justify-center px-4 lg:px-12 lg:min-h-screen "
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src={BIKEE2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide text-white">
          Find your Perfect Ride at
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            Waterlily RIDE
          </span>
        </h1>
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-300 max-w-3xl mx-auto">
          Ride in style. Experience freedom!
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center mt-10 space-y-4 sm:space-y-0 sm:space-x-6 mb-20 lg:mb-0">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 rounded-md text-center text-white hover:opacity-90 transition duration-300"
        >
          Get RIDE for Free
        </a>
        <a
          href="#"
          className="py-3 px-6 rounded-md border text-center text-white border-neutral-300 hover:bg-neutral-800 transition duration-300"
        >
          Documentation
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

