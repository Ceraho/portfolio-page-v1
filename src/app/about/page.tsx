import { aboutPageContent } from "@/app/data";

const AboutPage = () => {
  const workExperienceList = aboutPageContent.workContent.map((item) => {
    return (
      <div className="flex flex-col gap-2 mx-6" key={item.id}>
        <h4 className="text-xl font-thin">{item.year}</h4>
        <h4 className="text-xl font-thin">
          {item.company}, {item.role}
        </h4>
        <p className="text-slate-400 leading-loose">{item.desc}</p>
      </div>
    );
  });

  return (
    <div className="pt-4 lg:pt-4 w-full items-center flex flex-col gap-12 lg:p-20">
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-6 ml-3">Work Experience</h2>
        <section className="flex flex-col gap-8">{workExperienceList}</section>
      </div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 ml-3">Education Experience</h2>
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 mx-6" key={aboutPageContent.educationContent.id}>
            <h4 className="text-xl font-thin">{aboutPageContent.educationContent.year}</h4>
            <h4 className="text-xl font-thin">
              {aboutPageContent.educationContent.company}, {aboutPageContent.educationContent.role}
            </h4>
            <p className="text-slate-400 leading-loose">{aboutPageContent.educationContent.desc}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
