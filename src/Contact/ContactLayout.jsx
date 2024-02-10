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

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { CSSTransition } from "react-transition-group";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sentForm, setSentForm] = useState(false);
  const form = useRef();
  const nodeRef = useRef(null);

  useEffect(
    function () {
      if (sentForm === true) {
        setTimeout(function () {
          setSentForm((flag) => !flag);
        }, 2000);
      }
    },
    [sentForm]
  );

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors({});
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
      // } else if (!/\S+@\S\.\S+/.test(formData.email)) {
      //   validationErrors.email = "Email is not valid";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }
    setErrors(validationErrors);
    const lengthErrors = Object.keys(validationErrors).length;
    if (lengthErrors === 0) {
      emailjs
        .sendForm("service_kkh5ohb", "template_n5q2udq", form.current, {
          publicKey: "X-Be5CFQ2YXlmVlPB",
        })
        .then(
          () => {},
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSentForm((flag) => !flag);
    }
  }

  return (
    <section className="w-[100%] mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 gap-y-5 animate-fade-in">
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
      <CSSTransition
        in={!sentForm}
        classNames="fade"
        timeout={300}
        nodeRef={nodeRef}
        unmountOnExit
      >
        <FormWrapper>
          <FormComponent handleSubmit={handleSubmit} formRef={form}>
            <TitleForm />
            <NameInput
              handleChange={handleChange}
              errorName={errors.name}
              valueInpt={formData.name}
            />
            <MailInput
              handleChange={handleChange}
              errorName={errors.email}
              valueInpt={formData.email}
            />
            <SubjectInput
              handleChange={handleChange}
              valueInpt={formData.subject}
            />
            <TextAreaInput
              handleChange={handleChange}
              errorName={errors.message}
              valueInpt={formData.message}
            />
            <ButtonForm />
          </FormComponent>
        </FormWrapper>
      </CSSTransition>
      <CSSTransition
        in={sentForm}
        classNames="fade"
        timeout={300}
        nodeRef={nodeRef}
        unmountOnExit
      >
        <div>
          <p className="text-green-500">Thank you for sending message !</p>
        </div>
      </CSSTransition>
    </section>
  );
}

export default ContactLayout;
