function Wrapper({ children }) {
  return (
    <div className="w-[100%] md:w-[70%] mx-auto  flex flex-col mt-5 md:mt-0">
      {children}
    </div>
  );
}

export default Wrapper;
