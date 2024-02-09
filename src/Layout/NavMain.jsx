function NavMain({ children }) {
  return (
    <ul className="border-b-[1px] border-dark-primary pb-3 border-opacity-30 md:h-[40px] w-[100%] flex justify-around">
      {children}
    </ul>
  );
}

export default NavMain;
