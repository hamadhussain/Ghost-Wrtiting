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




"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Only apply dynamic styles after component mounts (client-side)
  const backgroundColor = scrolled ? 'white' : 'transparent';  // Change this based on scrolled state

  return (
    <header
      className={`header-section ${scrolled ? "no-bg shadow-2xl" : ""}`}
      style={{ backgroundColor }}  // Apply dynamically only after client mount
    >
      <nav className="navbar-expand-lg sticky">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <Link href="/">
                <img src="assets/images/logo.webp" alt="hire-a-ghostwriter" />
              </Link>
            </div>
            <div className="col-md-10 text-center m-auto navbarcollapse cllapse">
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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
