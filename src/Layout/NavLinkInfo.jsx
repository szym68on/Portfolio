import { NavLink } from "react-router-dom";
function NavLinkInfo({ name, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? "active-link" : "custom-link")}
    >
      <span className="hover:text-light-primary dark:hover:text-dark-primary py-2 px-3 rounded-lg transition duration-300 ease-in-out text-[0.8rem] md:text-[1rem]">
        {name}
      </span>
    </NavLink>
  );
}

export default NavLinkInfo;
