import Image from "next/image";
import squiggle from "../../public/images/3DShape.jpg";

const BGSquiggle = () => {
  return (
    <Image
      src={squiggle}
      alt="A 3D purple squiggle"
      className="pointer-events-none absolute -z-1 h-full w-full"
    />
  );
};

export default BGSquiggle;
