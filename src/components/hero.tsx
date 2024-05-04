import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-1 justify-center">
      <div className="flex flex-col w-5/6 lg:w-2/5 items-center gap-10 2xl:gap-16 mt-8">
        <img
          src="/MyPic.png"
          alt="My Picture"
          className="rounded-full outline outline-offset-4 outline-4 outline-blue-500 w-[100px] lg:w-[130px] mt-10 lg:mt-0"
        ></img>
        <div className="text-center">
          <h2 className="font-thin text-5xl lg:text-7xl">Hi, I'm</h2>
          <h2 className="text-5xl lg:text-7xl text-wrap">Erim Cerrahoglu</h2>
        </div>
        <p className="font-light lg:text-lg leading-loose">
          A computer engineer with solid foundation and three years of hands-on
          experience in quality assurance and software development. I bring a
          unique blend of technical expertise and attention to detail to every
          project.
        </p>
        <div className="flex flex-1 flex-col lg:flex-row gap-12 lg:gap-36 mt-4">
          <Button asChild variant="hireMe" size="hireMeSize">
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <a href="/erim_cerrahoglu_cv.pdf" target="_blank">
            <Button variant="hireMeLink" size="hireMeSize" className="ml-3 lg:ml-0">
              Resume <ArrowUpRight size={20} className="ml-1" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
