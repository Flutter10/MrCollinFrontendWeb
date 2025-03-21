// src/components/Navbar.js
import { useEffect , useState} from "react";
import logo1 from "../assets/Navbar/logo1.png";
import logo2 from "../assets/Navbar/logo2.png";
import userSvg from "../assets/Navbar/SVG.png";
import Login from "./Login";
import Register from "./Register";
import video from "../assets/home/header_video.mp4";
import ServicesDropdown from "./ServicesDropdown";
import "../styles/navbar.css";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUser, clearUser } from "../redux/slices/authSlice";
import { userService } from "../services/userService";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  console.log("User:", user);

  useEffect(() => {
    const userData = userService.getUserData();

    if (userData) {
      dispatch(setUser({ user: userData.user, accessToken: userData.accessToken }));
    }
  }, [dispatch]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLogin(true);
    setShowRegister(false);
    setMobileMenuOpen(false);
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setShowRegister(true);
    setShowLogin(false);
    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLoginSuccess = () => {
    const userData = userService.getUserData();
    if (userData) {
      dispatch(setUser({ user: userData.user, accessToken: userData.accessToken }));
    }
    setShowLogin(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    userService.logout();
    dispatch(clearUser());
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-black/80 backdrop-blur-sm sticky top-0 z-[9000]">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-50"
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="container mx-auto py-2 px-2 relative">
          <div className="flex items-center justify-between">
            <a className="flex items-center" href="#">
              <div className="flex items-center lg:gap-6">
                <div>
                  <img src={logo1} alt="Logo 1" className="h-7" />
                </div>
                <div className="md:h-[76px]">
                  <img
                    src={logo2}
                    className="h-[70px] md:h-full transition-all duration-300"
                    alt="Logo 2"
                  />
                </div>
              </div>
            </a>

            <button
              className="lg:hidden p-2 text-white"
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white block transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white block transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white block transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>

            <div className="hidden lg:block" id="navbarSupportedContent">
              <ul className="nav-menu flex items-center gap-8">
                <li>
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="relative group">
                  <ServicesDropdown />
                </li>
                <li>
                  <a className="nav-link" href="/blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/subscription">
                    Subscriptions
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/vision">
                    Vision
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/more">
                    More
                  </a>
                </li>

                <li className="flex items-center ml-4">
                  <div className="login-button">
                    {user ? (
                      <div className="flex items-center">
                        <a className="login-link" href="#">
                          <img
                            src={userSvg}
                            className="w-5 h-5 mr-2"
                            alt="User Icon"
                          />
                          {user.firstName}
                        </a>
                        <a
                          className="ml-4 text-white hover:text-gray-300"
                          href="#"
                          onClick={handleLogout}
                        >
                          Logout
                        </a>
                      </div>
                    ) : (
                      <a
                        className="login-link"
                        href="#"
                        onClick={handleLoginClick}
                      >
                        <img
                          src={userSvg}
                          className="w-5 h-5 mr-2"
                          alt="User Icon"
                        />
                        Log In
                      </a>
                    )}
                  </div>
                </li>

                {!user && (
                  <li>
                    <a
                      className="get-started-button"
                      href="#"
                      onClick={handleRegisterClick}
                    >
                      Get Started
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div
            className={`lg:hidden mobile-menu overflow-hidden transition-all duration-300 ${
              mobileMenuOpen
                ? "max-h-[500px] opacity-100 py-2"
                : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col items-start gap-2">
              <li>
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="w-full">
                <div className="mobile-services-dropdown">
                  <a className="nav-link flex items-center justify-between w-full" href="#">
                    <ServicesDropdown onItemClick={closeMobileMenu} />
                  </a>
                </div>
              </li>
              <li>
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li>
                <a className="nav-link" href="/subscription">
                  Subscriptions
                </a>
              </li>
              <li>
                <a className="nav-link" href="/vision">
                  Vision
                </a>
              </li>
              <li>
                <a className="nav-link" href="/more">
                  More
                </a>
              </li>

              <li className="flex w-full gap-0 mt-1">
                <div className="login-button w-full mr-0">
                  {user ? (
                    <div className="flex flex-col">
                      <a className="login-link" href="#">
                        <img
                          src={userSvg}
                          className="w-5 h-5 mr-2"
                          alt="User Icon"
                        />
                        {user.firstName}
                      </a>
                      <a
                        className="nav-link mt-2"
                        href="#"
                        onClick={handleLogout}
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    <>
                      <a
                        className="login-link"
                        href="#"
                        onClick={handleLoginClick}
                      >
                        <img
                          src={userSvg}
                          className="w-5 h-5 mr-2"
                          alt="User Icon"
                        />
                        Log In
                      </a>
                      <a
                        className="get-started-button ml-4"
                        href="#"
                        onClick={handleRegisterClick}
                      >
                        Get Started
                      </a>
                    </>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      {showRegister && <Register onClose={() => setShowRegister(false)} />}
    </>
  );
}