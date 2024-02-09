function WrapperTechnologies({ children }) {
  return (
    <div className="w-[100%] mx-auto mt-5 grid grid-cols-2 md:grid-cols-4 place-items-center gap-y-5 gap-x-3">
      {children}
    </div>
  );
}

export default WrapperTechnologies;
