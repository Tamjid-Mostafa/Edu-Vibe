import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaDesktop, FaMoon, FaSun, FaUser } from "react-icons/fa";
import logo from "../../../logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { useEffect } from "react";

const Header = () => {
  const { user, providerSignOut } = useContext(AuthContext);
  /* Handle Sign Out */
  const handleSignOut = () => {
    providerSignOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const options = [
    {
      icon: <FaSun/>,
      text: "light",
    },
    {
      icon: <FaMoon/>,
      text: "dark",
    },
    {
      icon: <FaDesktop/>,
      text: "system",
    },
  ];

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");

        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");

        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  const HTML = document.querySelector("html").getAttribute("class");

  const [fix, setFix] = useState(false);

  useEffect(() => {
    const fixedHeader = () => {
      if (window.scrollY >= 392) {
        setFix(true);
      } else {
        setFix(false);
      }
    };
    window.addEventListener("scroll", fixedHeader);
    return () => window.removeEventListener("scroll", fixedHeader);
  }, []);

  return (
    <>
    
      <div className="relative ">
      
      <Navbar
        className={`${fix ? "fix z-10 top-0 left-0 right-0" : ""}`}
        fluid={false}
        rounded={false}
      >
        {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
        <Navbar.Brand>
          
        <Link
            to="/"
            className="normal-case text-2xl flex flex-rows items-center font-bold "
          >
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="EduVibe Logo" />
            Edu<span className="text-rose-600 px-1 ">Vibe</span>
          </Link>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              user?.uid ? (
                <Avatar
                  alt="User settings"
                  status="online"
                  img={user?.photoURL}
                  rounded={true}
                />
              ) : (
                <Avatar rounded={true} />
              )
            }
          >
            
            <Dropdown.Header>
              {user?.displayName ? (
                <span className="block text-sm">{user?.displayName}</span>
              ) : (
                <span className="block text-sm">Anonymous</span>
              )}
              {user?.email ? (
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              ) : (
                <span className="block truncate text-sm font-medium">
                  anonymous@anonymous.com
                </span>
              )}
            </Dropdown.Header>
            <Dropdown.Item><Link to="/dashboard">Dashboard</Link></Dropdown.Item>
            <Dropdown.Item>My Sell Post</Dropdown.Item>
            <Dropdown.Item>My Orders</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Log Out</Dropdown.Item>
          </Dropdown>
          <div className="flex justify-center items-center mx-2">
          <Dropdown
          className=""
            arrowIcon={false}
            inline={true}
            label={theme === "light" ? <FaSun/> : <FaMoon/>}
          >
            {options?.map((opt, index) => (
           <Dropdown.Item key={index}> <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`text-xl rounded-full m-1 ${
                theme === opt.text && "text-sky-600"
              }`}
            >{opt.icon}
            </button></Dropdown.Item>
          ))}
          </Dropdown>
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
          <Link to="/courses">Courses</Link>
          </Navbar.Link>
          
          <Navbar.Link>
          <Link to="/blog">Blog</Link>
          </Navbar.Link>
          <Navbar.Link>
          <Link to="/contact">Contact</Link>
          </Navbar.Link>
          <Navbar.Link>
          <Link to="/faq">FAQ</Link>
          </Navbar.Link>

          {user?.uid ? (
            <>
              <Navbar.Link>
                <Link to="/dashboard">Dashboard</Link>
              </Navbar.Link>
              <Navbar.Link>
                <Link to="/blogs">Blogs</Link>
              </Navbar.Link>
              <Navbar.Link>
                <button onClick={handleSignOut}>Log Out</button>
              </Navbar.Link>
            </>
          ) : (
            <>
              <Navbar.Link>
                <Link to="/login">Log In</Link>
              </Navbar.Link>
              <Navbar.Link>
                <Link to="/signup">Sign Up</Link>
              </Navbar.Link>
            </>
          )}
          
        </Navbar.Collapse>
      </Navbar>
    </div>
    </>
  );
};

export default Header;
