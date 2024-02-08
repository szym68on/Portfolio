function Header({ children }) {
  return (
    <header className="w-[95%] mx-auto flex justify-between mt-2 items-center">
      {children}
    </header>
  );
}

export default Header;
