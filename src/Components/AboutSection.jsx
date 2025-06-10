import AboutText from "./AboutText";
import AboutImage from "./AboutImage";

const AboutSection = () => {
  return (
    <div id="about" className="bg-gray-800 w-full min-h-screen bg-cover bg-center">
      <div className="flex">
        <AboutText />
        <AboutImage />
      </div>
    </div>
  );
};

export default AboutSection;
