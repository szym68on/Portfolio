function WrapperResume({ children }) {
  return (
    <div className="w-[100%] mx-auto mt-5 grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-5 mb-8">
      {children}
    </div>
  );
}

export default WrapperResume;
