import { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import {
  FaAngleUp,
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa6";

const SubLink = ({ slink }) => (
  <li className="py-2 flex flex-direction-col ">
    {/* {console.log(slink.productCategory)} */}
    <Link
      to={slink.link}
      state={{ productCategory: slink.name }}
      className="hover:text-red-400"
    >
      {slink.name}
    </Link>
  </li>
);

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="text-left cursor-pointer group ml-5">
            {link.link != null ? (
              <Link to={link.link}>
                <h2
                  className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                  onClick={() => {
                    setHeading((prevHeading) =>
                      prevHeading === link.name ? "" : link.name
                    );
                    setSubHeading("");
                  }}
                >
                  {link.name}
                  <span className="text-xl md:hidden inline">
                    {heading === link.name ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                  <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                    <FaAngleDown />
                  </span>
                </h2>
              </Link>
            ) : (
              <h2
                className="flex justify-between items-center md:pr-0 pr-5 group hover:text-red-400 text-xl"
                onClick={() => {
                  setHeading((prevHeading) =>
                    prevHeading === link.name ? "" : link.name
                  );
                  setSubHeading("");
                }}
              >
                {link.name}
                <span className="text-xl md:hidden inline">
                  {heading === link.name ? <FaAngleUp /> : <FaAngleDown />}
                </span>
                <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <FaAngleDown />
                </span>
              </h2>
            )}

            {link.submenu && (
              <div className="absolute top-15 hidden group-hover:md:block hover:md:block z-10">
                <div className="py-0">
                  <div className="w-4 h-4 left-3 absolute mt-1 rotate-45"></div>
                </div>
                <div className="bg-[#161D24] p-4 flex rounded-xl -mr-20 overflow-y-auto">
                  {link.sublinks.map((mysublinks) => (
                    <div key={mysublinks.Head}>
                      {mysublinks.sublink.map((slink) => {
                        return <SubLink key={slink.name} slink={slink} />;
                      })}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          {link.sublinks.map((slinks) => (
            <div
              key={slinks.Head}
              className={`${heading === link.name ? "md:hidden" : "hidden"}`}
            >
              <div>
                <h2
                  onClick={() =>
                    setSubHeading((prevSubHeading) =>
                      prevSubHeading === slinks.Head ? "" : slinks.Head
                    )
                  }
                  className="font-semibold md:pr-0 pr-5 flex justify-between items-center"
                >
                  <ul className="pl-10">
                    {slinks.sublink.map((slink) => (
                      <SubLink key={slink.name} slink={slink} />
                    ))}
                  </ul>
                </h2>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
