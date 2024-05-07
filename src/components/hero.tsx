import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { landingPageParagraphsContent } from "@/app/data";

const Hero = () => {
  const CtaGroup = () => (
    <>
      <Button asChild variant="hireMe" size="hireMeSize">
        <Link href="/contact">Get In Touch</Link>
      </Button>
      <Button asChild variant="hireMeLink" size={"hireMeSize"}>
        <a href="/erim_cerrahoglu_cv.pdf" target="_blank">
          Resume <ArrowUpRight />
        </a>
      </Button>
    </>
  );

  const paragraphContent = landingPageParagraphsContent.map((item, index) => (
    <div key={index}>
      <p className="font-light text-lg lg:text-base leading-loose lg:leading-9 text-slate-400">{item}</p>
      <br />
    </div>
  ));

  return (
    <div className="m-8 mt-20 flex flex-col gap-12 lg:gap-18 lg:flex-row lg:mx-24">
      <div className="flex flex-col gap-6 lg:gap-10">
        <div>
          <p className="font-thin text-4xl lg:text-5xl">Hi, I'm</p>
          <p className="font-bold text-4xl lg:text-5xl">Erim Cerrahoglu</p>
        </div>
        <p className="font-medium text-xl lg:text-xl">Software Engineer</p>
        <div className="hidden lg:flex gap-4">
          <CtaGroup />
        </div>
      </div>
      <div>{paragraphContent}</div>
      <div className="lg:hidden flex flex-col gap-6 items-center">
        <CtaGroup />
      </div>
    </div>
  );
};

export default Hero;
