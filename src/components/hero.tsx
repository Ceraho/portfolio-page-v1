import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { landingPageParagraphsContent } from "@/app/data";

const Hero = () => {
  const CtaGroup = () => (
    <>
      <Button asChild variant="getInTouchCTA" size="getInTouchCTASize">
        <Link href="/contact">Get In Touch</Link>
      </Button>
      <Button asChild variant="resumeCTA" size="resumeCTASize">
        <a href="/erim_cerrahoglu_cv.pdf" target="_blank">
          Resume <ArrowUpRight />
        </a>
      </Button>
    </>
  );

  const paragraphContent = landingPageParagraphsContent.map((item, index) => (
    <div key={index}>
      <p className="font-light text-lg leading-loose lg:leading-9 text-slate-400">{item}</p>
      <br />
    </div>
  ));

  return (
    <div className="m-8 lg:mt-24 flex flex-col scroll-mt-32 lg:flex-row lg:w-screen lg:justify-evenly">
      <div className="flex flex-col gap-6 lg:gap-10">
        <div>
          <p className="font-thin text-4xl lg:text-6xl">Hi, I'm</p>
          <p className="font-bold text-4xl lg:text-6xl">Erim Cerrahoglu</p>
        </div>
        <p className="font-medium text-xl lg:text-3xl mb-8 lg:mb-0">Software Engineer</p>
        <div className="hidden lg:flex gap-32">
          <CtaGroup />
        </div>
      </div>
      <div className="lg:w-[700px] h-full">{paragraphContent}</div>
      <div className="lg:hidden flex flex-col gap-8 items-center">
        <CtaGroup />
      </div>
    </div>
  );
};

export default Hero;
