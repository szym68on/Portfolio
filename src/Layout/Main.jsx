function Main({ children }) {
  return (
    <main className="md:w-[60%] mx-auto md:mt-12 mt-[20px] w-[90%] flex flex-col md:flex-row md:gap-x-5 justify-center md:justify-normal">
      {children}
    </main>
  );
}

export default Main;
