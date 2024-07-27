import NavBar from "./NavBar";
import kamal from "../assets/kamal.jpg";
import { AiFillLinkedin, AiFillGithub, AiFillYoutube } from "react-icons/ai";
const Hero = () => {
  return (
    <section id="hero" className="min-h-screen">
      <NavBar />
      <div className="p-10 text-center">
        <h1 className="py-2 text-5xl font-medium text-teal-600">Kamalesh</h1>
        <h2 className="text-2xl">Web Developer</h2>
        <p className="text-md py-5 text-sm leading-8 text-gray-800">
          I am a dedicated developer and enthusiastic coder. I like to bring my
          ideas into reality. And I love anime!
        </p>
      </div>
      <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600">
        <a href="https://github.com/N-Kamalesh" target="_blank">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kamalesh-n-360481250/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://www.youtube.com/@TamilVideoTimeTVT" target="_blank">
          <AiFillYoutube />
        </a>
      </div>
      <div>
        <img src={kamal} alt="my-photo" />
      </div>
    </section>
  );
};

export default Hero;
