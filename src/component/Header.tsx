import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { Context } from "../context/context";
const Header = () => {
  const { themes, changeThemes } = useContext(Context);

  return (
    <header>
      <nav
        className={`${
          themes
            ? `bg-[#2b3743] text-white border-b-[1px] border-b-[#2b3743]`
            : `bg-white text-black border-b-[1px] border-b-gray-200`
        } py-4`}
      >
        <div className="container m-auto px-4 md:px-0 flex items-center justify-between">
          <h1 className="md:text-2xl font-bold">where in the world?</h1>
          <div
            onClick={changeThemes}
            className="capitalize flex items-center gap-2 cursor-pointer select-none"
          >
            {themes ? (
              <>
                <FaSun />
                <span className="text-xs italic font-mono tracking-wide block">
                  light mode
                </span>
              </>
            ) : (
              <>
                <FaMoon />
                <span className="text-xs italic font-mono tracking-wide block">
                  dark mode
                </span>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
