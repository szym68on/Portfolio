import EducationItem from "./EducationItem";
import TitleResume from "./TitleResume";
import WrapperResume from "./WrapperResume";
import WrapperTechnologies from "./WrapperTechnologies";
import ItemTechnology from "./ItemTechnology";

const dataTechnologies = [
  { imgTech: "/images/html.png", nameTech: "HTML5" },
  { imgTech: "/images/css-3.png", nameTech: "Css3" },
  { imgTech: "/images/js.png", nameTech: "Javascript" },
  { imgTech: "/images/react.png", nameTech: "React" },
  { imgTech: "/images/typescript.png", nameTech: "TypeScript" },
  { imgTech: "/images/wind.png", nameTech: "Tailwind CSS" },
  { imgTech: "/images/c-.png", nameTech: "C++" },
  { imgTech: "/images/letter-c.png", nameTech: "C" },
  { imgTech: "/images/git.png", nameTech: "Git" },
];

function ResumeLayout() {
  return (
    <section className="w-[100%] mx-auto mt-5 ml-1 animate-fade-in ">
      <TitleResume title="Education" />
      <WrapperResume>
        <EducationItem
          name={
            " Uniwersytet Kardynała Stefena Wyszyńskiego w Warszawie - Informatyka"
          }
          date={"2021 - Present"}
        />
        <EducationItem
          name={"Technikum Elektroniczne nr 3 im. Żołnierzy Armii Krajowej"}
          date={"2017-2021"}
        />
      </WrapperResume>
      <TitleResume title="Skills and Technologies" />
      <WrapperTechnologies>
        {dataTechnologies.map((technology, index) => (
          <ItemTechnology
            key={index}
            imgTech={technology.imgTech}
            nameTech={technology.nameTech}
          />
        ))}
      </WrapperTechnologies>
    </section>
  );
}

export default ResumeLayout;
