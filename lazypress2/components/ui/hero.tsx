import BGSquiggle from "./bg-squiggle";
const Hero = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="relative -mt-16 flex min-h-svh w-full flex-col items-center justify-center overflow-hidden">
      <BGSquiggle />
      {children}
    </section>
  );
};

export default Hero;
