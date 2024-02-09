import TitleResume from "../Resume/TitleResume";
import ContactInfo from "./ContactInfo";
import ContactInfoWrapper from "./ContactInfoWrapper";
import SocialInfoWrapper from "./SocialInfoWrapper";
import SocialInfo from "./SocialInfo";
import ContactInfoPhone from "./ContactInfoPhone";
import FormWrapper from "./FormWrapper";
import FormComponent from "./FormComponent";
import TitleForm from "./TitleForm";
import NameInput from "./NameInput";
import MailInput from "./MailInput";
import SubjectInput from "./SubjectInput";
import TextAreaInput from "./TextAreaInput";
import ButtonForm from "./ButtonForm";
const socialData = [
  {
    name: "facebook",
    imgPath: "/images/facebook.png",
    link: "https://www.facebook.com/szymon.swiercz.9",
  },
  {
    name: "Instagram",
    imgPath: "/images/instagram.png",
    link: "https://www.instagram.com/szymon__swiercz/",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/szym68on",
  },
];
function ContactLayout() {
  return (
    <section className="w-[100%] mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 gap-y-5">
      <div>
        <TitleResume title="Contact Info" />

        <ContactInfoWrapper>
          <ContactInfo />
          <ContactInfoPhone />
        </ContactInfoWrapper>
        <TitleResume title="Social Info" />
        <SocialInfoWrapper>
          {socialData.map((social, index) => (
            <SocialInfo
              key={index}
              path={social.imgPath}
              name={social.name}
              link={social.link}
            />
          ))}
        </SocialInfoWrapper>
      </div>
      <FormWrapper>
        <FormComponent>
          <TitleForm />
          <NameInput />
          <MailInput />
          <SubjectInput />
          <TextAreaInput />
          <ButtonForm />
        </FormComponent>
      </FormWrapper>
    </section>
  );
}

export default ContactLayout;
