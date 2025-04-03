import Image from "next/image";
import squiggle from "../../public/images/3DShape.jpg";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <section className="relative -mt-16 flex min-h-svh w-full flex-col items-center justify-center overflow-hidden">
      <Image
        src={squiggle}
        alt="A 3D purple squiggle"
        className="pointer-events-none absolute -z-1 h-full w-full"
      />

      <h2 className="neon-text mb-16 text-8xl font-extrabold tracking-wide">
        You Sleep <br /> We Code
      </h2>
      <Button
        size="pill"
        variant="jelly"
        className="h-10 w-48 px-30 py-10 text-3xl"
      >
        Get Started
      </Button>
    </section>
  );
};

export default Hero;
