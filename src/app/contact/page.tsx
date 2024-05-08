import { Mail, Github, Linkedin } from "lucide-react";
import { contactInfo } from "@/app/data";

const ContactItem = ({ contentType }: { contentType: string }) => {
  return (
    <span className="flex gap-4">
      {contentType === "email" && (
        <>
          <Mail className="contactIcons" />
          <a
            href="mailto:cerrahoglu.erim@gmail.com"
            className="hover:underline"
          >
            <p>cerrahoglu.erim@gmail.com</p>
          </a>
        </>
      )}
      {contentType === "github" && (
        <>
          <Github className="contactIcons" />
          <a
            href="https://github.com/Ceraho"
            className="hover:underline"
            target="_blank"
          >
            <p>GitHub</p>
          </a>
        </>
      )}
      {contentType === "linkedin" && (
        <>
          <Linkedin className="contactIcons" />
          <a
            href="https://www.linkedin.com/in/erim-cerraho%C4%9Flu-620653207/"
            className="hover:underline"
            target="_blank"
          >
            <p>LinkedIn</p>
          </a>
        </>
      )}
    </span>
  );
};

const ContactPage = () => {
  const contactItems = contactInfo.map((item) => (
    <ContactItem key={item.id} contentType={item.type} />
  ));

  return <div className="contactStyles">{contactItems}</div>;
};

export default ContactPage;
