import Hero from "@/components/ui/hero";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <Hero>
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
      </Hero>
    </>
  );
}
