function SectionInfo({ children }) {
  return (
    <section className=" mt-5 w-[90%] mx-auto  md:w-[60%] md:mx-auto flex flex-col md:flex-row md:items-center md:gap-x-4 gap-y-12 md:gap-y-0">
      {children}
    </section>
  );
}

export default SectionInfo;
