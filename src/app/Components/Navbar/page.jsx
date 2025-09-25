// "use client";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import "../../css/font-awesome.min.css";
// import "../../css/font-awesome.css";
// import "../../css/m-style.css";
// import "../../css/style-web.css";
// import "../../css/style.css";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 0); // Change state if page is scrolled even a bit
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll); // Clean up
//     };
//   }, []);

//   return (
// <header
//   className={`header-section ${scrolled ? "no-bg" : ""}`}
//   style={{ backgroundColor: scrolled ? 'white' : ' transparent' }}
// >
//       <nav className="navbar-expand-lg sticky">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-2">
//               <Link href="/">
//                 <img src="assets/images/logo.webp" alt="hire-a-ghostwriter" />
//               </Link>
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <i className="fa fa-bars" />
//               </button>
//             </div>
//             <div
//               className="col-md-10 text-center m-auto navbarcollapse cllapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="top1">
//                 <li>
//                   <Link title="Home" href="/">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link title="About" href="/About">
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link title="Contact" href="/contact">
//                     Contact
//                   </Link>
//                 </li>
//                 <li>
//                   <Link title="Portfolio" href="/portfolio">
//                     Portfolio
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;




// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
// const isLargeScreen = window.innerWidth > 785; 
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Only apply dynamic styles after component mounts (client-side)
//   const backgroundColor = scrolled ? 'white' : 'transparent';  // Change this based on scrolled state

//   return (
//     <header
//       className={`header-section ${scrolled ? "no-bg shadow-2xl" : ""}`}
//       style={{ backgroundColor }}  // Apply dynamically only after client mount
//     >
//       <nav className="navbar-expand-lg sticky">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-2">
//               <Link href="/">
//                 <img src="assets/images/logo.webp" alt="hire-a-ghostwriter" />
//               </Link>
//             </div>
//             <div className={`col-md-10 text-center m-auto navbarcollapse ${isLargeScreen ? 'block' : 'collapse'}`}>
//               <ul className="top1">
//                 <li>
//                   <Link title="Home" href="/">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link title="About" href="/About">
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link title="Contact" href="/contact">
//                     Contact
//                   </Link>
//                 </li>
//                 <li>
//                   <Link title="Portfolio" href="/portfolio">
//                     Portfolio
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


















"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TfiMenuAlt } from "react-icons/tfi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // NEW STATE

  useEffect(() => {
    const handleResize = () => {
      const large = window.innerWidth > 785;
      setIsLargeScreen(large);
      if (large) {
        setMenuOpen(false); // Hide mobile menu on large screen
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleResize(); // Initial check
    setHasMounted(true);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundColor = scrolled ? "white" : "transparent";

  if (!hasMounted) return null;

  return (
    <header
      className={`header-section ${scrolled ? "no-bg shadow-2xl" : ""}`}
      style={{ backgroundColor }}
    >
      <nav className="navbar-expand-lg sticky">
        <div className="container">
          <div className={`row  z-50 ${menuOpen ? 'bg-white  shadow-2xl h-screen' : ''}`}>
            <div className="col-md-2">
              <Link href="/">
                <img src="assets/images/logo.webp" alt="hire-a-ghostwriter" />
              </Link>
            </div>
            <div
              className={`col-md-10 text-center m-auto navbarcollapse ${
                isLargeScreen ? "block" : "collapse"
              }`}
            >
              <ul className="top1">
                <li>
                  <Link title="Home" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link title="About" href="/About">
                    About
                  </Link>
                </li>
                <li>
                  <Link title="Contact" href="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link title="Portfolio" href="/portfolio">
                    Portfolio
                  </Link>
                </li>
              </ul>
              
            </div>
            <div className="col-md-0 fixed top-4 right-0">
              <button
                className="navbar-toggler"
                type="button"
              onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Toggle navigation"
                
              >
<TfiMenuAlt />
              </button>
              </div>

 {(isLargeScreen || menuOpen) && (
              <div className=" text-center  h-screen w-full     md:bg-transparent p-5 md:h-auto md:w-auto  ">
                <ol className=" uppercase">
                  <li>
                    <Link title="Home" href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link title="About" href="/About">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link title="Contact" href="/contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link title="Portfolio" href="/portfolio">
                      Portfolio
                    </Link>
                  </li>
                </ol>
              </div>
            )}

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;











// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { TfiMenuAlt } from "react-icons/tfi";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isLargeScreen, setIsLargeScreen] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false); // NEW STATE

//   useEffect(() => {
//     const handleResize = () => {
//       const large = window.innerWidth > 785;
//       setIsLargeScreen(large);
//       if (large) {
//         setMenuOpen(false); // Hide mobile menu on large screen
//       }
//     };

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 0);
//     };

//     handleResize(); // Initial check
//     setHasMounted(true);
//     window.addEventListener("resize", handleResize);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const backgroundColor = scrolled ? "white" : "transparent";

//   if (!hasMounted) return null;

//   return (
//     <header
//       className={`header-section ${scrolled ? "no-bg shadow-2xl" : ""}`}
//       style={{ backgroundColor }}
//     >
//       <nav className="navbar-expand-lg sticky">
//         <div className="container">
//           <div className="row items-center">
//             {/* Logo */}
//             <div className="col-md-2">
//               <Link href="/">
//                 <img src="assets/images/logo.webp" alt="hire-a-ghostwriter" />
//               </Link>
//             </div>

//             {/* Menu Button (Only for small screens) */}
//             {!isLargeScreen && (
//               <div className="col-md-1 text-right ">
//                 <button
//                   className="navbar-toggler text-2xl"
//                   onClick={() => setMenuOpen(!menuOpen)}
//                   aria-label="Toggle navigation"
//                 >
//                   <TfiMenuAlt />
//                 </button>
//               </div>
//             )}

//             {/* Menu Items */}
//             {(isLargeScreen || menuOpen) && (
//               <div className="col-md-10 text-center m-auto navbarcollapse">
//                 <ul className="top1">
//                   <li>
//                     <Link title="Home" href="/">
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link title="About" href="/About">
//                       About
//                     </Link>
//                   </li>
//                   <li>
//                     <Link title="Contact" href="/contact">
//                       Contact
//                     </Link>
//                   </li>
//                   <li>
//                     <Link title="Portfolio" href="/portfolio">
//                       Portfolio
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
