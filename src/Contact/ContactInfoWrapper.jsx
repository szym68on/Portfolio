function ContactInfoWrapper({ children }) {
  return (
    <div className=" border-b-[1px] md:border-b-[0px] border-dark-on-background pb-3 border-opacity-30 mb-3">
      {children}
    </div>
  );
}

export default ContactInfoWrapper;
