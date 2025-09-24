'use client'; 

import { useState } from 'react';
import './../css/font-awesome.min.css';
import './../css/font-awesome.css';
import  './../css/m-style.css'
import  './../css/style-web.css'
import  './../css/style.css'
import { SiGooglemessages } from "react-icons/si";
import { BsTelephone } from "react-icons/bs";
import Embla from './../Components/Portfolio/Embla/page.jsx'
import EmblaVid from './../Components/Portfolio/EmblaVid/page.jsx'

export default function Header() {
 
  return (
   <>
   <Home/>
   
   </>
  );
}

function Home() {
        const [isActive, setIsActive] = useState(false);
      const [isOpen, setIsOpen] = useState(true); 
    const bookImages = [
    "assets/work/book1.jpg",
        "assets/work/book2.jpg",

            "assets/work/book3.jpg",

                "assets/work/book4.jpeg",

                    "assets/work/book5.jpeg",

    "assets/work/book6.jpeg",
    "assets/work/book7.jpeg",
    "assets/work/book8.jpg",

  ];

  const App = [
    '/assets/work/app1.png',
    '/assets/work/app2.jpg',
    '/assets/work/app3.png',
    '/assets/work/app4.jpg',
    '/assets/work/app5.jpg',
    '/assets/work/app6.png',
    '/assets/work/app7.jpg',
    '/assets/work/app8.png',
  ]


    const Caro = [
    '/assets/work/caro1.jpg',
    '/assets/work/caro2.jpg',
    '/assets/work/caro3.jpg',
    '/assets/work/caro4.jpg',
    '/assets/work/caro5.png',
    '/assets/work/caro6.jpg',
    '/assets/work/caro7.jpg',
    '/assets/work/caro8.png',
  ]

     const Pro = [
    '/assets/work/pro1.png',
    '/assets/work/pro2.jpg',
    '/assets/work/pro3.jpg',
    '/assets/work/pro4.png',
    '/assets/work/pro5.png',
    '/assets/work/pro6.png',
    '/assets/work/pro7.png',
    '/assets/work/pro8.png',
  ]

const UI = [
    '/assets/work/ui1.png',
    '/assets/work/ui2.jpg',
    '/assets/work/ui3.jpg',
    '/assets/work/ui4.jpg',
    '/assets/work/ui5.jpg',
    '/assets/work/ui6.png',
    '/assets/work/ui7.jpg',
    '/assets/work/ui8.jpg',
  ]

     const Pos = [
    '/assets/work/pos1.jpg',
    '/assets/work/pos2.jpg',
    '/assets/work/pos3.jpg',
    '/assets/work/pos4.jpg',
    '/assets/work/pos5.jpg',
    '/assets/work/pos6.jpeg',
    '/assets/work/pos7.jpeg',
    '/assets/work/pos8.jpeg',
  ]


      const Vid = [
    '/assets/work/vid1.mp4',
    '/assets/work/vid2.mp4',
    '/assets/work/vid3.mp4',
    '/assets/work/vid4.mp4',
    '/assets/work/vid5.mp4',
    '/assets/work/vid6.mp4',
    '/assets/work/vid7.mp4',
    '/assets/work/vid8.mp4',
  ]
      const Reel = [
    '/assets/work/reel1.mp4',
    '/assets/work/reel2.mp4',
    '/assets/work/reel3.mp4',
    '/assets/work/reel4.mp4',
    '/assets/work/reel5.mp4',
    '/assets/work/reel6.mp4',
    '/assets/work/reel7.mp4',
    '/assets/work/reel8.mp4',
  ]


  return (
    <>
    
      <section className="section-home-main">
        <section className="section1-home">
          <img
            src="assets/images/ghost-text.webp"
            className="banner-left-text"
            alt="banner-left-text"
          />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <br />
                <br />
                <br />
                <br />
                <div
                  className="form-container wow fadeInUp       animated"
                  data-wow-duration="1.3s"
                  style={{ visibility: "visible", animationDuration: "1.3s" }}
                >
                  <h4>PROFESSIONAL GHOSTWRITING SERVICES</h4>
                  <h3>
                    HIRE A GHOSTWRITER:
                    <br /> A ONE-STOP-SOLUTION FOR ALL YOUR BOOK PUBLISHING
                    NEEDS
                  </h3>
                  <form
                    action="webpages/bottomFormController.php"
                    className="contact-form"
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-md-6 ">
                        <input
                          type="text"
                          placeholder="Your Name"
                          required=""
                          name="Name"
                        />
                      </div>
                      <div className="col-md-6 ">
                        <input
                          type="email"
                          name="Email"
                          required=""
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="col-md-12 ">
                        <div className="intl-tel-input allow-dropdown separate-dial-code iti-sdc-3">
                          <div className="flag-container">
                            <div
                              className="selected-flag"
                              tabIndex={0}
                              title="Pakistan : +92"
                            >
                              <div className="iti-flag pk" />
                              <div className="selected-dial-code">+92</div>
                              <div className="iti-arrow" />
                            </div>
                            <ul className="country-list hide">
                              <li
                                className="country preferred first"
                                data-dial-code={1}
                                data-country-code="us"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag us" />
                                </div>
                                <span className="country-name">
                                  United States
                                </span>
                                <span className="dial-code">+1</span>
                              </li>
                              <li
                                className="country preferred"
                                data-dial-code={44}
                                data-country-code="gb"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gb" />
                                </div>
                                <span className="country-name">
                                  United Kingdom
                                </span>
                                <span className="dial-code">+44</span>
                              </li>
                              <li className="divider" />
                              <li
                                className="country"
                                data-dial-code={93}
                                data-country-code="af"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag af" />
                                </div>
                                <span className="country-name">
                                  Afghanistan
                                </span>
                                <span className="dial-code">+93</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={358}
                                data-country-code="ax"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ax" />
                                </div>
                                <span className="country-name">
                                  Aland Islands
                                </span>
                                <span className="dial-code">+358</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={355}
                                data-country-code="al"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag al" />
                                </div>
                                <span className="country-name">Albania </span>
                                <span className="dial-code">+355</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={213}
                                data-country-code="dz"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag dz" />
                                </div>
                                <span className="country-name">Algeria</span>
                                <span className="dial-code">+213</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1684}
                                data-country-code="as"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag as" />
                                </div>
                                <span className="country-name">
                                  American Samoa
                                </span>
                                <span className="dial-code">+1684</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={244}
                                data-country-code="ao"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ao" />
                                </div>
                                <span className="country-name">Angola</span>
                                <span className="dial-code">+244</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1264}
                                data-country-code="ai"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ai" />
                                </div>
                                <span className="country-name">Anguilla</span>
                                <span className="dial-code">+1264</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1268}
                                data-country-code="ag"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ag" />
                                </div>
                                <span className="country-name">
                                  Antigua and Barbuda
                                </span>
                                <span className="dial-code">+1268</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={54}
                                data-country-code="ar"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ar" />
                                </div>
                                <span className="country-name">Argentina</span>
                                <span className="dial-code">+54</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={374}
                                data-country-code="am"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag am" />
                                </div>
                                <span className="country-name">Armenia </span>
                                <span className="dial-code">+374</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={297}
                                data-country-code="aw"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag aw" />
                                </div>
                                <span className="country-name">Aruba</span>
                                <span className="dial-code">+297</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={61}
                                data-country-code="au"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag au" />
                                </div>
                                <span className="country-name">Australia</span>
                                <span className="dial-code">+61</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={43}
                                data-country-code="at"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag at" />
                                </div>
                                <span className="country-name">Austria </span>
                                <span className="dial-code">+43</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={994}
                                data-country-code="az"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag az" />
                                </div>
                                <span className="country-name">Azerbaijan</span>
                                <span className="dial-code">+994</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1242}
                                data-country-code="bs"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag bs" />
                                </div>
                                <span className="country-name">Bahamas</span>
                                <span className="dial-code">+1242</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={973}
                                data-country-code="bh"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag bh" />
                                </div>
                                <span className="country-name">Bahrain</span>
                                <span className="dial-code">+973</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={880}
                                data-country-code="bd"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag bd" />
                                </div>
                                <span className="country-name">Bangladesh</span>
                                <span className="dial-code">+880</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1246}
                                data-country-code="bb"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag bb" />
                                </div>
                                <span className="country-name">Barbados</span>
                                <span className="dial-code">+1246</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={375}
                                data-country-code="by"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag by" />
                                </div>
                                <span className="country-name">Belarus</span>
                                <span className="dial-code">+375</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={32}
                                data-country-code="be"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag be" />
                                </div>
                                <span className="country-name">Belgium</span>
                                <span className="dial-code">+32</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={501}
                                data-country-code="bz"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag bz" />
                                </div>
                                <span className="country-name">Belize</span>
                                <span className="dial-code">+501</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={229}
                                data-country-code="bj"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag bj" />
                                </div>
                                <span className="country-name">Benin</span>
                                <span className="dial-code">+229</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1441}
                                data-country-code="bm"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag bm" />
                                </div>
                                <span className="country-name">Bermuda</span>
                                <span className="dial-code">+1441</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={975}
                                data-country-code="bt"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag bt" />
                                </div>
                                <span className="country-name">Bhutan </span>
                                <span className="dial-code">+975</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={591}
                                data-country-code="bo"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag bo" />
                                </div>
                                <span className="country-name">Bolivia</span>
                                <span className="dial-code">+591</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={387}
                                data-country-code="ba"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ba" />
                                </div>
                                <span className="country-name">
                                  Bosnia and Herzegovina{" "}
                                </span>
                                <span className="dial-code">+387</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={267}
                                data-country-code="bw"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag bw" />
                                </div>
                                <span className="country-name">Botswana</span>
                                <span className="dial-code">+267</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={55}
                                data-country-code="br"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag br" />
                                </div>
                                <span className="country-name">Brazil</span>
                                <span className="dial-code">+55</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={246}
                                data-country-code="io"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag io" />
                                </div>
                                <span className="country-name">
                                  British Indian Ocean Territory
                                </span>
                                <span className="dial-code">+246</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1284}
                                data-country-code="vg"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag vg" />
                                </div>
                                <span className="country-name">
                                  British Virgin Islands
                                </span>
                                <span className="dial-code">+1284</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={673}
                                data-country-code="bn"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag bn" />
                                </div>
                                <span className="country-name">Brunei</span>
                                <span className="dial-code">+673</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={359}
                                data-country-code="bg"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag bg" />
                                </div>
                                <span className="country-name">Bulgaria </span>
                                <span className="dial-code">+359</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={226}
                                data-country-code="bf"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag bf" />
                                </div>
                                <span className="country-name">
                                  Burkina Faso
                                </span>
                                <span className="dial-code">+226</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={257}
                                data-country-code="bi"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag bi" />
                                </div>
                                <span className="country-name">Burundi</span>
                                <span className="dial-code">+257</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={855}
                                data-country-code="kh"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag kh" />
                                </div>
                                <span className="country-name">Cambodia </span>
                                <span className="dial-code">+855</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={237}
                                data-country-code="cm"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag cm" />
                                </div>
                                <span className="country-name">Cameroon </span>
                                <span className="dial-code">+237</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1}
                                data-country-code="ca"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ca" />
                                </div>
                                <span className="country-name">Canada</span>
                                <span className="dial-code">+1</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={238}
                                data-country-code="cv"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag cv" />
                                </div>
                                <span className="country-name">Cape Verde</span>
                                <span className="dial-code">+238</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={599}
                                data-country-code="bq"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag bq" />
                                </div>
                                <span className="country-name">
                                  Caribbean Netherlands
                                </span>
                                <span className="dial-code">+599</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1345}
                                data-country-code="ky"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ky" />
                                </div>
                                <span className="country-name">
                                  Cayman Islands
                                </span>
                                <span className="dial-code">+1345</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={236}
                                data-country-code="cf"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag cf" />
                                </div>
                                <span className="country-name">
                                  Central African Republic
                                </span>
                                <span className="dial-code">+236</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={235}
                                data-country-code="td"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag td" />
                                </div>
                                <span className="country-name">Chad</span>
                                <span className="dial-code">+235</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={56}
                                data-country-code="cl"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag cl" />
                                </div>
                                <span className="country-name">Chile</span>
                                <span className="dial-code">+56</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={86}
                                data-country-code="cn"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag cn" />
                                </div>
                                <span className="country-name">China</span>
                                <span className="dial-code">+86</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={61}
                                data-country-code="cx"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag cx" />
                                </div>
                                <span className="country-name">
                                  Christmas Island
                                </span>
                                <span className="dial-code">+61</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={61}
                                data-country-code="cc"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag cc" />
                                </div>
                                <span className="country-name">Cocos</span>
                                <span className="dial-code">+61</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={57}
                                data-country-code="co"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag co" />
                                </div>
                                <span className="country-name">Colombia</span>
                                <span className="dial-code">+57</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={269}
                                data-country-code="km"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag km" />
                                </div>
                                <span className="country-name">Comoros </span>
                                <span className="dial-code">+269</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={242}
                                data-country-code="cg"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag cg" />
                                </div>
                                <span className="country-name">Congo</span>
                                <span className="dial-code">+242</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={682}
                                data-country-code="ck"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ck" />
                                </div>
                                <span className="country-name">
                                  Cook Islands
                                </span>
                                <span className="dial-code">+682</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={506}
                                data-country-code="cr"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag cr" />
                                </div>
                                <span className="country-name">Costa Rica</span>
                                <span className="dial-code">+506</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={225}
                                data-country-code="ci"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ci" />
                                </div>
                                <span className="country-name">
                                  Cote d'Ivoire
                                </span>
                                <span className="dial-code">+225</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={385}
                                data-country-code="hr"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag hr" />
                                </div>
                                <span className="country-name">Croatia</span>
                                <span className="dial-code">+385</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={53}
                                data-country-code="cu"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag cu" />
                                </div>
                                <span className="country-name">Cuba</span>
                                <span className="dial-code">+53</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={599}
                                data-country-code="cw"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag cw" />
                                </div>
                                <span className="country-name">Curacao</span>
                                <span className="dial-code">+599</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={357}
                                data-country-code="cy"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag cy" />
                                </div>
                                <span className="country-name">Cyprus</span>
                                <span className="dial-code">+357</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={420}
                                data-country-code="cz"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag cz" />
                                </div>
                                <span className="country-name">
                                  Czech Republic
                                </span>
                                <span className="dial-code">+420</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={45}
                                data-country-code="dk"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag dk" />
                                </div>
                                <span className="country-name">Denmark</span>
                                <span className="dial-code">+45</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={253}
                                data-country-code="dj"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag dj" />
                                </div>
                                <span className="country-name">Djibouti</span>
                                <span className="dial-code">+253</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1767}
                                data-country-code="dm"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag dm" />
                                </div>
                                <span className="country-name">Dominica</span>
                                <span className="dial-code">+1767</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1}
                                data-country-code="do"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag do" />
                                </div>
                                <span className="country-name">
                                  Dominican Republic
                                </span>
                                <span className="dial-code">+1</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={243}
                                data-country-code="cd"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag cd" />
                                </div>
                                <span className="country-name">DR Congo</span>
                                <span className="dial-code">+243</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={593}
                                data-country-code="ec"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ec" />
                                </div>
                                <span className="country-name">Ecuador</span>
                                <span className="dial-code">+593</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={20}
                                data-country-code="eg"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag eg" />
                                </div>
                                <span className="country-name">Egypt</span>
                                <span className="dial-code">+20</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={503}
                                data-country-code="sv"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag sv" />
                                </div>
                                <span className="country-name">
                                  El Salvador
                                </span>
                                <span className="dial-code">+503</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={240}
                                data-country-code="gq"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gq" />
                                </div>
                                <span className="country-name">
                                  Equatorial Guinea
                                </span>
                                <span className="dial-code">+240</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={291}
                                data-country-code="er"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag er" />
                                </div>
                                <span className="country-name">Eritrea</span>
                                <span className="dial-code">+291</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={372}
                                data-country-code="ee"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ee" />
                                </div>
                                <span className="country-name">
                                  Estonia (Eesti)
                                </span>
                                <span className="dial-code">+372</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={251}
                                data-country-code="et"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag et" />
                                </div>
                                <span className="country-name">Ethiopia</span>
                                <span className="dial-code">+251</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={500}
                                data-country-code="fk"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag fk" />
                                </div>
                                <span className="country-name">
                                  Falkland Islands
                                </span>
                                <span className="dial-code">+500</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={298}
                                data-country-code="fo"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag fo" />
                                </div>
                                <span className="country-name">
                                  Faroe Islands
                                </span>
                                <span className="dial-code">+298</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={679}
                                data-country-code="fj"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag fj" />
                                </div>
                                <span className="country-name">Fiji</span>
                                <span className="dial-code">+679</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={358}
                                data-country-code="fi"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag fi" />
                                </div>
                                <span className="country-name">Finland</span>
                                <span className="dial-code">+358</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={33}
                                data-country-code="fr"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag fr" />
                                </div>
                                <span className="country-name">France</span>
                                <span className="dial-code">+33</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={594}
                                data-country-code="gf"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gf" />
                                </div>
                                <span className="country-name">
                                  French Guiana{" "}
                                </span>
                                <span className="dial-code">+594</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={689}
                                data-country-code="pf"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag pf" />
                                </div>
                                <span className="country-name">
                                  French Polynesia
                                </span>
                                <span className="dial-code">+689</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={241}
                                data-country-code="ga"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ga" />
                                </div>
                                <span className="country-name">Gabon</span>
                                <span className="dial-code">+241</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={220}
                                data-country-code="gm"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gm" />
                                </div>
                                <span className="country-name">Gambia</span>
                                <span className="dial-code">+220</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={995}
                                data-country-code="ge"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ge" />
                                </div>
                                <span className="country-name">Georgia</span>
                                <span className="dial-code">+995</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={49}
                                data-country-code="de"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag de" />
                                </div>
                                <span className="country-name">Germany</span>
                                <span className="dial-code">+49</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={233}
                                data-country-code="gh"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gh" />
                                </div>
                                <span className="country-name">Ghana</span>
                                <span className="dial-code">+233</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={350}
                                data-country-code="gi"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gi" />
                                </div>
                                <span className="country-name">Gibraltar</span>
                                <span className="dial-code">+350</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={30}
                                data-country-code="gr"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gr" />
                                </div>
                                <span className="country-name">Greece</span>
                                <span className="dial-code">+30</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={299}
                                data-country-code="gl"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gl" />
                                </div>
                                <span className="country-name">Greenland</span>
                                <span className="dial-code">+299</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1473}
                                data-country-code="gd"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gd" />
                                </div>
                                <span className="country-name">Grenada</span>
                                <span className="dial-code">+1473</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={590}
                                data-country-code="gp"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gp" />
                                </div>
                                <span className="country-name">Guadeloupe</span>
                                <span className="dial-code">+590</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1671}
                                data-country-code="gu"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gu" />
                                </div>
                                <span className="country-name">Guam</span>
                                <span className="dial-code">+1671</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={502}
                                data-country-code="gt"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gt" />
                                </div>
                                <span className="country-name">Guatemala</span>
                                <span className="dial-code">+502</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={44}
                                data-country-code="gg"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gg" />
                                </div>
                                <span className="country-name">Guernsey</span>
                                <span className="dial-code">+44</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={224}
                                data-country-code="gn"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gn" />
                                </div>
                                <span className="country-name">Guinea</span>
                                <span className="dial-code">+224</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={245}
                                data-country-code="gw"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gw" />
                                </div>
                                <span className="country-name">
                                  Guinea-Bissau
                                </span>
                                <span className="dial-code">+245</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={592}
                                data-country-code="gy"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gy" />
                                </div>
                                <span className="country-name">Guyana</span>
                                <span className="dial-code">+592</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={509}
                                data-country-code="ht"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ht" />
                                </div>
                                <span className="country-name">Haiti</span>
                                <span className="dial-code">+509</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={504}
                                data-country-code="hn"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag hn" />
                                </div>
                                <span className="country-name">Honduras</span>
                                <span className="dial-code">+504</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={852}
                                data-country-code="hk"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag hk" />
                                </div>
                                <span className="country-name">Hong Kong</span>
                                <span className="dial-code">+852</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={36}
                                data-country-code="hu"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag hu" />
                                </div>
                                <span className="country-name">Hungary</span>
                                <span className="dial-code">+36</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={354}
                                data-country-code="is"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag is" />
                                </div>
                                <span className="country-name">Iceland</span>
                                <span className="dial-code">+354</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={91}
                                data-country-code="in"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag in" />
                                </div>
                                <span className="country-name">India</span>
                                <span className="dial-code">+91</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={62}
                                data-country-code="id"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag id" />
                                </div>
                                <span className="country-name">Indonesia</span>
                                <span className="dial-code">+62</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={98}
                                data-country-code="ir"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ir" />
                                </div>
                                <span className="country-name">Iran </span>
                                <span className="dial-code">+98</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={964}
                                data-country-code="iq"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag iq" />
                                </div>
                                <span className="country-name">Iraq </span>
                                <span className="dial-code">+964</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={353}
                                data-country-code="ie"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ie" />
                                </div>
                                <span className="country-name">Ireland</span>
                                <span className="dial-code">+353</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={44}
                                data-country-code="im"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag im" />
                                </div>
                                <span className="country-name">
                                  Isle of Man
                                </span>
                                <span className="dial-code">+44</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={972}
                                data-country-code="il"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag il" />
                                </div>
                                <span className="country-name">Israel</span>
                                <span className="dial-code">+972</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={39}
                                data-country-code="it"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag it" />
                                </div>
                                <span className="country-name">Italy</span>
                                <span className="dial-code">+39</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1876}
                                data-country-code="jm"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag jm" />
                                </div>
                                <span className="country-name">Jamaica</span>
                                <span className="dial-code">+1876</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={81}
                                data-country-code="jp"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag jp" />
                                </div>
                                <span className="country-name">Japan </span>
                                <span className="dial-code">+81</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={44}
                                data-country-code="je"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag je" />
                                </div>
                                <span className="country-name">Jersey</span>
                                <span className="dial-code">+44</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={962}
                                data-country-code="jo"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag jo" />
                                </div>
                                <span className="country-name">Jordan </span>
                                <span className="dial-code">+962</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={7}
                                data-country-code="kz"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag kz" />
                                </div>
                                <span className="country-name">Kazakhstan</span>
                                <span className="dial-code">+7</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={254}
                                data-country-code="ke"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ke" />
                                </div>
                                <span className="country-name">Kenya</span>
                                <span className="dial-code">+254</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={686}
                                data-country-code="ki"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ki" />
                                </div>
                                <span className="country-name">Kiribati</span>
                                <span className="dial-code">+686</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={383}
                                data-country-code="xk"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag xk" />
                                </div>
                                <span className="country-name">Kosovo</span>
                                <span className="dial-code">+383</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={965}
                                data-country-code="kw"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag kw" />
                                </div>
                                <span className="country-name">Kuwait</span>
                                <span className="dial-code">+965</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={996}
                                data-country-code="kg"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag kg" />
                                </div>
                                <span className="country-name">
                                  Kyrgyzstan{" "}
                                </span>
                                <span className="dial-code">+996</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={856}
                                data-country-code="la"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag la" />
                                </div>
                                <span className="country-name">Laos</span>
                                <span className="dial-code">+856</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={371}
                                data-country-code="lv"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag lv" />
                                </div>
                                <span className="country-name">Latvia</span>
                                <span className="dial-code">+371</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={961}
                                data-country-code="lb"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag lb" />
                                </div>
                                <span className="country-name">Lebanon</span>
                                <span className="dial-code">+961</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={266}
                                data-country-code="ls"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ls" />
                                </div>
                                <span className="country-name">Lesotho</span>
                                <span className="dial-code">+266</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={231}
                                data-country-code="lr"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag lr" />
                                </div>
                                <span className="country-name">Liberia</span>
                                <span className="dial-code">+231</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={218}
                                data-country-code="ly"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ly" />
                                </div>
                                <span className="country-name">Libya</span>
                                <span className="dial-code">+218</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={423}
                                data-country-code="li"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag li" />
                                </div>
                                <span className="country-name">
                                  Liechtenstein
                                </span>
                                <span className="dial-code">+423</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={370}
                                data-country-code="lt"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag lt" />
                                </div>
                                <span className="country-name">Lithuania</span>
                                <span className="dial-code">+370</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={352}
                                data-country-code="lu"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag lu" />
                                </div>
                                <span className="country-name">Luxembourg</span>
                                <span className="dial-code">+352</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={853}
                                data-country-code="mo"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mo" />
                                </div>
                                <span className="country-name">Macau</span>
                                <span className="dial-code">+853</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={389}
                                data-country-code="mk"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mk" />
                                </div>
                                <span className="country-name">Macedonia</span>
                                <span className="dial-code">+389</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={261}
                                data-country-code="mg"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mg" />
                                </div>
                                <span className="country-name">Madagascar</span>
                                <span className="dial-code">+261</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={265}
                                data-country-code="mw"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mw" />
                                </div>
                                <span className="country-name">Malawi</span>
                                <span className="dial-code">+265</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={60}
                                data-country-code="my"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag my" />
                                </div>
                                <span className="country-name">Malaysia</span>
                                <span className="dial-code">+60</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={960}
                                data-country-code="mv"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mv" />
                                </div>
                                <span className="country-name">Maldives</span>
                                <span className="dial-code">+960</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={223}
                                data-country-code="ml"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ml" />
                                </div>
                                <span className="country-name">Mali</span>
                                <span className="dial-code">+223</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={356}
                                data-country-code="mt"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mt" />
                                </div>
                                <span className="country-name">Malta</span>
                                <span className="dial-code">+356</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={692}
                                data-country-code="mh"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mh" />
                                </div>
                                <span className="country-name">
                                  Marshall Islands
                                </span>
                                <span className="dial-code">+692</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={596}
                                data-country-code="mq"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mq" />
                                </div>
                                <span className="country-name">Martinique</span>
                                <span className="dial-code">+596</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={222}
                                data-country-code="mr"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mr" />
                                </div>
                                <span className="country-name">Mauritania</span>
                                <span className="dial-code">+222</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={230}
                                data-country-code="mu"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mu" />
                                </div>
                                <span className="country-name">Mauritius</span>
                                <span className="dial-code">+230</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={262}
                                data-country-code="yt"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag yt" />
                                </div>
                                <span className="country-name">Mayotte</span>
                                <span className="dial-code">+262</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={52}
                                data-country-code="mx"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mx" />
                                </div>
                                <span className="country-name">Mexico</span>
                                <span className="dial-code">+52</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={691}
                                data-country-code="fm"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag fm" />
                                </div>
                                <span className="country-name">Micronesia</span>
                                <span className="dial-code">+691</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={373}
                                data-country-code="md"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag md" />
                                </div>
                                <span className="country-name">Moldova</span>
                                <span className="dial-code">+373</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={377}
                                data-country-code="mc"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mc" />
                                </div>
                                <span className="country-name">Monaco</span>
                                <span className="dial-code">+377</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={976}
                                data-country-code="mn"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mn" />
                                </div>
                                <span className="country-name">Mongolia</span>
                                <span className="dial-code">+976</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={382}
                                data-country-code="me"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag me" />
                                </div>
                                <span className="country-name">Montenegro</span>
                                <span className="dial-code">+382</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1664}
                                data-country-code="ms"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ms" />
                                </div>
                                <span className="country-name">Montserrat</span>
                                <span className="dial-code">+1664</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={212}
                                data-country-code="ma"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ma" />
                                </div>
                                <span className="country-name">Morocco</span>
                                <span className="dial-code">+212</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={258}
                                data-country-code="mz"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mz" />
                                </div>
                                <span className="country-name">Mozambique</span>
                                <span className="dial-code">+258</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={95}
                                data-country-code="mm"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mm" />
                                </div>
                                <span className="country-name">Myanmar</span>
                                <span className="dial-code">+95</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={264}
                                data-country-code="na"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag na" />
                                </div>
                                <span className="country-name">Namibia</span>
                                <span className="dial-code">+264</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={674}
                                data-country-code="nr"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag nr" />
                                </div>
                                <span className="country-name">Nauru</span>
                                <span className="dial-code">+674</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={977}
                                data-country-code="np"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag np" />
                                </div>
                                <span className="country-name">Nepal</span>
                                <span className="dial-code">+977</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={31}
                                data-country-code="nl"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag nl" />
                                </div>
                                <span className="country-name">
                                  Netherlands
                                </span>
                                <span className="dial-code">+31</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={687}
                                data-country-code="nc"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag nc" />
                                </div>
                                <span className="country-name">
                                  New Caledonia
                                </span>
                                <span className="dial-code">+687</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={64}
                                data-country-code="nz"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag nz" />
                                </div>
                                <span className="country-name">
                                  New Zealand
                                </span>
                                <span className="dial-code">+64</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={505}
                                data-country-code="ni"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ni" />
                                </div>
                                <span className="country-name">Nicaragua</span>
                                <span className="dial-code">+505</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={227}
                                data-country-code="ne"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ne" />
                                </div>
                                <span className="country-name">Niger</span>
                                <span className="dial-code">+227</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={234}
                                data-country-code="ng"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ng" />
                                </div>
                                <span className="country-name">Nigeria</span>
                                <span className="dial-code">+234</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={683}
                                data-country-code="nu"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag nu" />
                                </div>
                                <span className="country-name">Niue</span>
                                <span className="dial-code">+683</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={672}
                                data-country-code="nf"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag nf" />
                                </div>
                                <span className="country-name">
                                  Norfolk Island
                                </span>
                                <span className="dial-code">+672</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={850}
                                data-country-code="kp"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag kp" />
                                </div>
                                <span className="country-name">
                                  North Korea
                                </span>
                                <span className="dial-code">+850</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1670}
                                data-country-code="mp"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mp" />
                                </div>
                                <span className="country-name">
                                  Northern Mariana Islands
                                </span>
                                <span className="dial-code">+1670</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={47}
                                data-country-code="no"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag no" />
                                </div>
                                <span className="country-name">Norway</span>
                                <span className="dial-code">+47</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={968}
                                data-country-code="om"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag om" />
                                </div>
                                <span className="country-name">Oman</span>
                                <span className="dial-code">+968</span>
                              </li>
                              <li
                                className="country active"
                                data-dial-code={92}
                                data-country-code="pk"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag pk" />
                                </div>
                                <span className="country-name">Pakistan </span>
                                <span className="dial-code">+92</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={680}
                                data-country-code="pw"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag pw" />
                                </div>
                                <span className="country-name">Palau</span>
                                <span className="dial-code">+680</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={970}
                                data-country-code="ps"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ps" />
                                </div>
                                <span className="country-name">Palestine</span>
                                <span className="dial-code">+970</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={507}
                                data-country-code="pa"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag pa" />
                                </div>
                                <span className="country-name">Panama</span>
                                <span className="dial-code">+507</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={675}
                                data-country-code="pg"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag pg" />
                                </div>
                                <span className="country-name">
                                  Papua New Guinea
                                </span>
                                <span className="dial-code">+675</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={595}
                                data-country-code="py"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag py" />
                                </div>
                                <span className="country-name">Paraguay</span>
                                <span className="dial-code">+595</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={51}
                                data-country-code="pe"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag pe" />
                                </div>
                                <span className="country-name">Peru</span>
                                <span className="dial-code">+51</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={63}
                                data-country-code="ph"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ph" />
                                </div>
                                <span className="country-name">
                                  Philippines
                                </span>
                                <span className="dial-code">+63</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={48}
                                data-country-code="pl"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag pl" />
                                </div>
                                <span className="country-name">Poland </span>
                                <span className="dial-code">+48</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={351}
                                data-country-code="pt"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag pt" />
                                </div>
                                <span className="country-name">Portugal</span>
                                <span className="dial-code">+351</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1}
                                data-country-code="pr"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag pr" />
                                </div>
                                <span className="country-name">
                                  Puerto Rico
                                </span>
                                <span className="dial-code">+1</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={974}
                                data-country-code="qa"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag qa" />
                                </div>
                                <span className="country-name">Qatar</span>
                                <span className="dial-code">+974</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={262}
                                data-country-code="re"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag re" />
                                </div>
                                <span className="country-name">Reunion</span>
                                <span className="dial-code">+262</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={40}
                                data-country-code="ro"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ro" />
                                </div>
                                <span className="country-name">Romania </span>
                                <span className="dial-code">+40</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={7}
                                data-country-code="ru"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ru" />
                                </div>
                                <span className="country-name">Russia</span>
                                <span className="dial-code">+7</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={250}
                                data-country-code="rw"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag rw" />
                                </div>
                                <span className="country-name">Rwanda</span>
                                <span className="dial-code">+250</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={590}
                                data-country-code="bl"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag bl" />
                                </div>
                                <span className="country-name">
                                  Saint Barthelemy
                                </span>
                                <span className="dial-code">+590</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={290}
                                data-country-code="sh"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag sh" />
                                </div>
                                <span className="country-name">
                                  Saint Helena
                                </span>
                                <span className="dial-code">+290</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1869}
                                data-country-code="kn"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag kn" />
                                </div>
                                <span className="country-name">
                                  Saint Kitts and Nevis
                                </span>
                                <span className="dial-code">+1869</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1758}
                                data-country-code="lc"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag lc" />
                                </div>
                                <span className="country-name">
                                  Saint Lucia
                                </span>
                                <span className="dial-code">+1758</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={590}
                                data-country-code="mf"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag mf" />
                                </div>
                                <span className="country-name">
                                  Saint Martin
                                </span>
                                <span className="dial-code">+590</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={508}
                                data-country-code="pm"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag pm" />
                                </div>
                                <span className="country-name">
                                  Saint Pierre and Miquelon
                                </span>
                                <span className="dial-code">+508</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1784}
                                data-country-code="vc"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag vc" />
                                </div>
                                <span className="country-name">
                                  Saint Vincent and the Grenadines
                                </span>
                                <span className="dial-code">+1784</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={685}
                                data-country-code="ws"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ws" />
                                </div>
                                <span className="country-name">Samoa</span>
                                <span className="dial-code">+685</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={378}
                                data-country-code="sm"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag sm" />
                                </div>
                                <span className="country-name">San Marino</span>
                                <span className="dial-code">+378</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={239}
                                data-country-code="st"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag st" />
                                </div>
                                <span className="country-name">
                                  Sao Tome and Principe
                                </span>
                                <span className="dial-code">+239</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={966}
                                data-country-code="sa"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag sa" />
                                </div>
                                <span className="country-name">
                                  Saudi Arabia
                                </span>
                                <span className="dial-code">+966</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={221}
                                data-country-code="sn"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag sn" />
                                </div>
                                <span className="country-name">Senegal</span>
                                <span className="dial-code">+221</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={381}
                                data-country-code="rs"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag rs" />
                                </div>
                                <span className="country-name">Serbia</span>
                                <span className="dial-code">+381</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={248}
                                data-country-code="sc"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag sc" />
                                </div>
                                <span className="country-name">Seychelles</span>
                                <span className="dial-code">+248</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={232}
                                data-country-code="sl"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag sl" />
                                </div>
                                <span className="country-name">
                                  Sierra Leone
                                </span>
                                <span className="dial-code">+232</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={65}
                                data-country-code="sg"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag sg" />
                                </div>
                                <span className="country-name">Singapore</span>
                                <span className="dial-code">+65</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1721}
                                data-country-code="sx"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag sx" />
                                </div>
                                <span className="country-name">
                                  Sint Maarten
                                </span>
                                <span className="dial-code">+1721</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={421}
                                data-country-code="sk"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag sk" />
                                </div>
                                <span className="country-name">Slovakia</span>
                                <span className="dial-code">+421</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={386}
                                data-country-code="si"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag si" />
                                </div>
                                <span className="country-name">Slovenia</span>
                                <span className="dial-code">+386</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={677}
                                data-country-code="sb"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag sb" />
                                </div>
                                <span className="country-name">
                                  Solomon Islands
                                </span>
                                <span className="dial-code">+677</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={252}
                                data-country-code="so"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag so" />
                                </div>
                                <span className="country-name">Somalia</span>
                                <span className="dial-code">+252</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={27}
                                data-country-code="za"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag za" />
                                </div>
                                <span className="country-name">
                                  South Africa
                                </span>
                                <span className="dial-code">+27</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={82}
                                data-country-code="kr"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag kr" />
                                </div>
                                <span className="country-name">
                                  South Korea
                                </span>
                                <span className="dial-code">+82</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={211}
                                data-country-code="ss"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ss" />
                                </div>
                                <span className="country-name">
                                  South Sudan
                                </span>
                                <span className="dial-code">+211</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={34}
                                data-country-code="es"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag es" />
                                </div>
                                <span className="country-name">Spain </span>
                                <span className="dial-code">+34</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={94}
                                data-country-code="lk"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag lk" />
                                </div>
                                <span className="country-name">Sri Lanka </span>
                                <span className="dial-code">+94</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={249}
                                data-country-code="sd"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag sd" />
                                </div>
                                <span className="country-name">Sudan</span>
                                <span className="dial-code">+249</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={597}
                                data-country-code="sr"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag sr" />
                                </div>
                                <span className="country-name">Suriname</span>
                                <span className="dial-code">+597</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={47}
                                data-country-code="sj"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag sj" />
                                </div>
                                <span className="country-name">
                                  Svalbard and Jan Mayen
                                </span>
                                <span className="dial-code">+47</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={268}
                                data-country-code="sz"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag sz" />
                                </div>
                                <span className="country-name">Swaziland</span>
                                <span className="dial-code">+268</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={46}
                                data-country-code="se"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag se" />
                                </div>
                                <span className="country-name">Sweden</span>
                                <span className="dial-code">+46</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={41}
                                data-country-code="ch"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ch" />
                                </div>
                                <span className="country-name">
                                  Switzerland
                                </span>
                                <span className="dial-code">+41</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={963}
                                data-country-code="sy"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag sy" />
                                </div>
                                <span className="country-name">Syria </span>
                                <span className="dial-code">+963</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={886}
                                data-country-code="tw"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag tw" />
                                </div>
                                <span className="country-name">Taiwan</span>
                                <span className="dial-code">+886</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={992}
                                data-country-code="tj"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag tj" />
                                </div>
                                <span className="country-name">Tajikistan</span>
                                <span className="dial-code">+992</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={255}
                                data-country-code="tz"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag tz" />
                                </div>
                                <span className="country-name">Tanzania</span>
                                <span className="dial-code">+255</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={66}
                                data-country-code="th"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag th" />
                                </div>
                                <span className="country-name">Thailand</span>
                                <span className="dial-code">+66</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={670}
                                data-country-code="tl"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag tl" />
                                </div>
                                <span className="country-name">
                                  Timor-Leste
                                </span>
                                <span className="dial-code">+670</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={228}
                                data-country-code="tg"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag tg" />
                                </div>
                                <span className="country-name">Togo</span>
                                <span className="dial-code">+228</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={690}
                                data-country-code="tk"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag tk" />
                                </div>
                                <span className="country-name">Tokelau</span>
                                <span className="dial-code">+690</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={676}
                                data-country-code="to"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag to" />
                                </div>
                                <span className="country-name">Tonga</span>
                                <span className="dial-code">+676</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1868}
                                data-country-code="tt"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag tt" />
                                </div>
                                <span className="country-name">
                                  Trinidad and Tobago
                                </span>
                                <span className="dial-code">+1868</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={216}
                                data-country-code="tn"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag tn" />
                                </div>
                                <span className="country-name">Tunisia</span>
                                <span className="dial-code">+216</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={90}
                                data-country-code="tr"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag tr" />
                                </div>
                                <span className="country-name">Turkey</span>
                                <span className="dial-code">+90</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={993}
                                data-country-code="tm"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag tm" />
                                </div>
                                <span className="country-name">
                                  Turkmenistan
                                </span>
                                <span className="dial-code">+993</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1649}
                                data-country-code="tc"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag tc" />
                                </div>
                                <span className="country-name">
                                  Turks and Caicos Islands
                                </span>
                                <span className="dial-code">+1649</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={688}
                                data-country-code="tv"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag tv" />
                                </div>
                                <span className="country-name">Tuvalu</span>
                                <span className="dial-code">+688</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1340}
                                data-country-code="vi"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag vi" />
                                </div>
                                <span className="country-name">
                                  U.S. Virgin Islands
                                </span>
                                <span className="dial-code">+1340</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={256}
                                data-country-code="ug"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ug" />
                                </div>
                                <span className="country-name">Uganda</span>
                                <span className="dial-code">+256</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={380}
                                data-country-code="ua"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ua" />
                                </div>
                                <span className="country-name">Ukraine</span>
                                <span className="dial-code">+380</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={971}
                                data-country-code="ae"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ae" />
                                </div>
                                <span className="country-name">
                                  United Arab Emirates
                                </span>
                                <span className="dial-code">+971</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={44}
                                data-country-code="gb"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag gb" />
                                </div>
                                <span className="country-name">
                                  United Kingdom
                                </span>
                                <span className="dial-code">+44</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={1}
                                data-country-code="us"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag us" />
                                </div>
                                <span className="country-name">
                                  United States
                                </span>
                                <span className="dial-code">+1</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={598}
                                data-country-code="uy"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag uy" />
                                </div>
                                <span className="country-name">Uruguay</span>
                                <span className="dial-code">+598</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={998}
                                data-country-code="uz"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag uz" />
                                </div>
                                <span className="country-name">Uzbekistan</span>
                                <span className="dial-code">+998</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={678}
                                data-country-code="vu"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag vu" />
                                </div>
                                <span className="country-name">Vanuatu</span>
                                <span className="dial-code">+678</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={39}
                                data-country-code="va"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag va" />
                                </div>
                                <span className="country-name">
                                  Vatican City
                                </span>
                                <span className="dial-code">+39</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={58}
                                data-country-code="ve"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ve" />
                                </div>
                                <span className="country-name">Venezuela</span>
                                <span className="dial-code">+58</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={84}
                                data-country-code="vn"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag vn" />
                                </div>
                                <span className="country-name">Vietnam</span>
                                <span className="dial-code">+84</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={681}
                                data-country-code="wf"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag wf" />
                                </div>
                                <span className="country-name">
                                  Wallis and Futuna
                                </span>
                                <span className="dial-code">+681</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={212}
                                data-country-code="eh"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag eh" />
                                </div>
                                <span className="country-name">
                                  Western Sahara
                                </span>
                                <span className="dial-code">+212</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={967}
                                data-country-code="ye"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag ye" />
                                </div>
                                <span className="country-name">Yemen</span>
                                <span className="dial-code">+967</span>
                              </li>
                              <li
                                className="country"
                                data-dial-code={260}
                                data-country-code="zm"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag zm" />
                                </div>
                                <span className="country-name">Zambia</span>
                                <span className="dial-code">+260</span>
                              </li>
                              <li
                                className="country last"
                                data-dial-code={263}
                                data-country-code="zw"
                              >
                                <div className="flag-box">
                                  <div className="iti-flag zw" />
                                </div>
                                <span className="country-name">Zimbabwe</span>
                                <span className="dial-code">+263</span>
                              </li>
                            </ul>
                          </div>
                          <input
                            name="Number"
                            className="phone phone-country"
                            required=""
                            id="phone-coun"
                            type="text"
                            minLength={10}
                            maxLength={10}
                            autoComplete="off"
                            // onkeypress="return ((event.charCode >= 48 && event.charCode <= 57) )"
                            placeholder="Contact Number"
                            style={{ marginBottom: "10px!important" }}
                          />
                        </div>
                      </div>

<div className="col-md-6 ">
                    <div className="form-floating">
                     <select
  className="form-select"
  id="floatingSelect"
  required
  name="Services"
  aria-label="Floating label select example"
  defaultValue="ghostwriting"
>
  <option value="ghostwriting">ghostwriting</option>
  <option value="book cover">book cover</option>
  <option value="illustration">illustration</option>
  <option value="publishing">publishing</option>
</select>

                      <label htmlFor="floatingSelect" style={{ color: "#000" }}>
                        Select Service
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="form-floating">
                     <select
  className="form-select"
  id="floatingSelect"
  required
  name="budget"
  aria-label="Floating label select example"
  defaultValue="£999-£2000"
>
  <option value="£999-£2000">£999-£2000</option>
  <option value="£2000-£3000">£2000-£3000</option>
  <option value="£3000-£4000">£3000-£4000</option>
  <option value="£4000-£5000">£4000-£5000</option>
</select>

                      <label htmlFor="floatingSelect" style={{ color: "#000" }}>
                        Select Budget
                      </label>
                    </div>
                  </div>
                      <div className="col-md-12">
                        {/*<a href="javascript:;" class='submit'>Submit<i class="fa-solid fa-arrow-right"></i></a>*/}
                        <button type="submit" className="submit">
                          Submit
                          <i className="fa-solid fa-arrow-right" />
                        </button>
                      </div>
                    </div>
                    <input
                      type="hidden"
                      name="ctry"
                      defaultValue="Pakistan Pakistan Pakistan Pakistan "
                    />
                    <input
                      type="hidden"
                      name="cip"
                      defaultValue="103.74.21.183"
                    />
                    <input
                      type="hidden"
                      name="pc"
                      defaultValue="+92+92+92+92"
                    />
                    <input type="hidden" name="hiddencapcha" defaultValue="" />
                    <input
                      type="hidden"
                      id="location"
                      name="locationURL"
                      defaultValue="https://hireaghostwriter.co.uk/"
                    />
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src="assets/images/arrow-big-orange.webp"
                  className="bannerright-arrow"
                  alt="bannerright-arrow"
                />
                <img
                  src="assets/images/Bookshelf.webp"
                  className="wow fadeInUp       animated"
                  data-wow-duration="1.3s"
                  style={{ visibility: "visible", animationDuration: "1.3s" }}
                  alt="banner-book-shelf"
                />
                <div
                  className="banner-content wow fadeInRight       animated"
                  data-wow-duration="1.3s"
                  style={{ visibility: "visible", animationDuration: "1.3s" }}
                >
                  <h1>From Writing To Marketing</h1>
                  <h3 className="orange-text">
                    We Can Take <br />
                    Care Of All!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section#2 start */}
        <section className="section2-home">
          <img
            src="assets/images/writer-text.webp"
            className="banner-right-text"
            alt="banner-left-text"
          />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="banner-logos slick-initialized slick-slider">
                  <button
                    type="button"
                    data-role="none"
                    className="slick-prev slick-arrow"
                    aria-label="Previous"
                    role="button"
                    style={{}}
                  >
                    Previous
                  </button>
                  <div aria-live="polite" className="slick-list draggable">
                    <div
                      className="slick-track"
                      role="listbox"
                      style={{
                        opacity: 1,
                        width: 3892,
                        transform: "translate3d(-2224px, 0px, 0px)",
                      }}
                    >
                      <li
                        className="wow fadeInUp slick-slide slick-cloned first animated"
                        data-wow-duration="1.3s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.3s",
                          width: 278,
                        }}
                        data-slick-index={-4}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          src="assets/images/amazon.webp"
                          alt="banner-book-shelf"
                        />
                      </li>
                      <li
                        className="wow fadeInDown slick-slide slick-cloned animated"
                        data-wow-duration="1.3s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.3s",
                          width: 278,
                        }}
                        data-slick-index={-3}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          src="assets/images/iBookStore.webp"
                          alt="banner-book-shelf"
                        />
                      </li>
                      <li
                        className="wow fadeInUp slick-slide slick-cloned animated"
                        data-wow-duration="1.3s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.3s",
                          width: 278,
                        }}
                        data-slick-index={-2}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          src="assets/images/gwv-lulu.webp"
                          alt="banner-book-shelf"
                        />
                      </li>
                      <li
                        className="wow fadeInDown slick-slide slick-cloned animated"
                        data-wow-duration="1.3s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.3s",
                          width: 278,
                        }}
                        data-slick-index={-1}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          src="assets/images/gwv-alibris.webp"
                          alt="banner-book-shelf"
                        />
                      </li>
                      <li
                        className="wow fadeInUp slick-slide animated"
                        data-wow-duration="1.3s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.3s",
                          width: 278,
                        }}
                        data-slick-index={0}
                        aria-hidden="true"
                        tabIndex={-1}
                        role="option"
                        aria-describedby="slick-slide00"
                      >
                        <img
                          src="assets/images/nyt.webp"
                          alt="banner-book-shelf"
                        />
                      </li>
                      <li
                        className="wow fadeInDown slick-slide animated"
                        data-wow-duration="1.3s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.3s",
                          width: 278,
                        }}
                        data-slick-index={1}
                        aria-hidden="true"
                        tabIndex={-1}
                        role="option"
                        aria-describedby="slick-slide01"
                      >
                        <img
                          src="assets/images/BarnesNoble.webp"
                          alt="banner-book-shelf"
                        />
                      </li>
                      <li
                        className="wow fadeInUp slick-slide animated"
                        data-wow-duration="1.3s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.3s",
                          width: 278,
                        }}
                        data-slick-index={2}
                        aria-hidden="true"
                        tabIndex={-1}
                        role="option"
                        aria-describedby="slick-slide02"
                      >
                        <img
                          src="assets/images/amazon.webp"
                          alt="banner-book-shelf"
                        />
                      </li>
                      <li
                        className="wow fadeInDown slick-slide animated"
                        data-wow-duration="1.3s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.3s",
                          width: 278,
                        }}
                        data-slick-index={3}
                        aria-hidden="true"
                        tabIndex={-1}
                        role="option"
                        aria-describedby="slick-slide03"
                      >
                        <img
                          src="assets/images/iBookStore.webp"
                          alt="banner-book-shelf"
                        />
                      </li>
                      <li
                        className="wow fadeInUp slick-slide animated slick-current slick-active"
                        data-wow-duration="1.3s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.3s",
                          width: 278,
                        }}
                        data-slick-index={4}
                        aria-hidden="false"
                        tabIndex={-1}
                        role="option"
                        aria-describedby="slick-slide04"
                      >
                        <img
                          src="assets/images/gwv-lulu.webp"
                          alt="banner-book-shelf"
                        />
                      </li>
                      <li
                        className="wow fadeInDown slick-slide animated slick-active"
                        data-wow-duration="1.3s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.3s",
                          width: 278,
                        }}
                        data-slick-index={5}
                        aria-hidden="false"
                        tabIndex={-1}
                        role="option"
                        aria-describedby="slick-slide05"
                      >
                        <img
                          src="assets/images/gwv-alibris.webp"
                          alt="banner-book-shelf"
                        />
                      </li>
                      <li
                        className="wow fadeInUp slick-slide slick-cloned animated slick-active"
                        data-wow-duration="1.3s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.3s",
                          width: 278,
                        }}
                        data-slick-index={6}
                        aria-hidden="false"
                        tabIndex={-1}
                      >
                        <img
                          src="assets/images/nyt.webp"
                          alt="banner-book-shelf"
                        />
                      </li>
                      <li
                        className="wow fadeInDown slick-slide slick-cloned animated slick-active"
                        data-wow-duration="1.3s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.3s",
                          width: 278,
                        }}
                        data-slick-index={7}
                        aria-hidden="false"
                        tabIndex={-1}
                      >
                        <img
                          src="assets/images/BarnesNoble.webp"
                          alt="banner-book-shelf"
                        />
                      </li>
                      <li
                        className="wow fadeInUp slick-slide slick-cloned animated"
                        data-wow-duration="1.3s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.3s",
                          width: 278,
                        }}
                        data-slick-index={8}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          src="assets/images/amazon.webp"
                          alt="banner-book-shelf"
                        />
                      </li>
                      <li
                        className="wow fadeInDown slick-slide slick-cloned last animated"
                        data-wow-duration="1.3s"
                        style={{
                          visibility: "visible",
                          animationDuration: "1.3s",
                          width: 278,
                        }}
                        data-slick-index={9}
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          src="assets/images/iBookStore.webp"
                          alt="banner-book-shelf"
                        />
                      </li>
                    </div>
                  </div>
                  <button
                    type="button"
                    data-role="none"
                    className="slick-next slick-arrow"
                    aria-label="Next"
                    role="button"
                    style={{}}
                  >
                    Next
                  </button>
                </ul>
              </div>
            </div>{" "}
            <br />
            <br />
            <div className="row">
              <div
                className="col-md-6 m-auto wow fadeInLeft     animated"
                data-wow-duration="1.3s"
                style={{ visibility: "visible", animationDuration: "1.3s" }}
              >
                <h2 className="mb-4">
                  <span>Professional </span> Ghostwriting, Editing, And
                  Publishing <span> Services</span>
                </h2>
                <p>
                  Hire A Ghostwriter is a prominent agency providing
                  professional ghostwriting services in the UK. Our mission is
                  to help individuals and businesses bring their ideas to life
                  by creating high-quality books that meet their unique needs
                  and expectations.
                </p>
                <p>
                  The industry that we work in can get a bit pricey, that's why
                  our goal is to provide impressive book writing, editing, and
                  proofreading services that won't break the bank.{" "}
                </p>
                <p>
                  We know how crucial it is to make your work shine, so whether
                  you need a little guidance or trustworthy writing services,
                  we've got your back. We'll help you bring your ideas to life
                  and make your masterpiece even more exquisite by eliminating
                  any conceptual errors and giving it the right tone. Our team
                  of incredible writers, editors, and proofreaders is dedicated
                  to providing the best possible consultation and solutions to
                  authors like yourself from all over the world.
                </p>
              </div>
              <div
                className="col-md-6 wow fadeInRight     animated"
                data-wow-duration="1.3s"
                style={{ visibility: "visible", animationDuration: "1.3s" }}
              >
                <img
                  src="assets/images/hire-a-ghost-writers-img.webp"
                  className="mb-2 main-img"
                  alt="banner-book-shelf"
                />
                <h3>
                  We Strive For <span>Excellence</span>
                </h3>
                <p>
                  We have committed to ourselves that we will only provide a
                  personalized, collaborative, and professional experience for
                  our clients. We value clear communication, integrity, and
                  quality, and we strive to exceed our client's expectations in
                  every project we undertake.
                </p>
                <p>
                  Hire A Ghostwriter's mission is to help you reach your goals,
                  and we're serious about delivering high-quality work that sets
                  you apart. With our expert team on your side, you'll have the
                  confidence to be the best author you can be. Let us take your
                  work to the next level with our pro touch - you won't regret
                  it!
                </p>
                <br />
                <a
                  href="javascript:;"
                  className="view-pricing-txt various ani-btn"
                >
                  Get a quote
                  <i className="fa-solid fa-arrow-right" />
                </a>
                <a
                  href="javascript:void(Tawk_API.toggle())"
                  className="ani-btn"
                >
                  Let's Chat
                  <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* section#2 end */}
      </section>









      <section className="section3-home">
        <div className="container">
          <div className="row">
            <div
              className="col-md-7 m-auto wow fadeInLeft       animated"
              data-wow-duration="1.3s"
              style={{ visibility: "visible", animationDuration: "1.3s" }}
            >
              <h3>Cost-effective Book Writing And Publishing Solutions </h3>
              <p>
                You don’t need to have a 6-digit bank account to become a
                published author.
              </p>
              <a
                href="javascript:;"
                className="view-pricing-txt various ani-btn"
              >
                Let's Start
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="javascript:void(Tawk_API.toggle())" className="ani-btn">
                Let's Chat
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="tel:+447418620480" className="call-now-btn">
                <span>+44</span> 741 862 0480
              </a>
            </div>
            <div
              className="col-md-5 m-auto wow fadeInUp       animated"
              data-wow-duration="1.3s"
              style={{ visibility: "visible", animationDuration: "1.3s" }}
            >
              <img
                src="assets/images/3rd-section-book.webp"
                alt="banner-book-shelf"
              />
            </div>
          </div>
        </div>
      </section>

  <section className="section4-home">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>
                Whether You're A First-Timer Or An Experienced Writer,{" "}
                <span>We Can Help!</span>
              </h2>
              <p>
                Regardless of your experience in the book writing and publishing
                industry, you can rely on Hire A Ghostwriter to add value to
                your projects.{" "}
              </p>
<Embla slide={bookImages}/>
              <a
                href="https://hireaghostwriter.co.uk/book-cover-samples"
                className="ani-btn"
              >
                Check My Work
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a
                href="https://hireaghostwriter.co.uk/book-cover-samples"
                className="ani-btn"
              >
                Check Binance
                <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <img
          src="assets/images/writer-text.webp"
          className="banner-right-text"
          alt="banner-left-text"
        />
      </section>
      <section className="section5-home">
        <div className="container">
          <div className="row">
            <div className="col-md-5 m-auto">
              <img src="assets/images/CTA-book.webp" alt="banner-book-shelf" />
            </div>
            <div className="col-md-7 m-auto">
              <h3>Get Your Book Written At Affordable Rates</h3>
              <p>We are here to take your book to the next level.</p>
              <a
                href="javascript:;"
                className="view-pricing-txt various ani-btn"
              >
                Let's Start
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="javascript:void(Tawk_API.toggle())" className="ani-btn">
                Let's Chat
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="tel:+447418620480" className="call-now-btn">
                <span>+44</span> 741 862 0480
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section7-home">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>
                Whether You're A First-Timer Or An Experienced Writer,{" "}
                <span>We Can Help!</span>
              </h2>
              <p>
                Regardless of your experience in the book writing and publishing
                industry, you can rely on Hire A Ghostwriter to add value to
                your projects.{" "}
              </p>
<Embla slide={App}/>
              <a
                href="https://hireaghostwriter.co.uk/book-cover-samples"
                className="ani-btn"
              >
                Check My Work
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a
                href="https://hireaghostwriter.co.uk/book-cover-samples"
                className="ani-btn"
              >
                Check Binance
                <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <img
          src="assets/images/writer-text.webp"
          className="banner-right-text"
          alt="banner-left-text"
        />
      </section>









      <section className="section3-home">
        <div className="container">
          <div className="row">
            <div
              className="col-md-7 m-auto wow fadeInLeft       animated"
              data-wow-duration="1.3s"
              style={{ visibility: "visible", animationDuration: "1.3s" }}
            >
              <h3>Cost-effective Book Writing And Publishing Solutions </h3>
              <p>
                You don’t need to have a 6-digit bank account to become a
                published author.
              </p>
              <a
                href="javascript:;"
                className="view-pricing-txt various ani-btn"
              >
                Let's Start
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="javascript:void(Tawk_API.toggle())" className="ani-btn">
                Let's Chat
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="tel:+447418620480" className="call-now-btn">
                <span>+44</span> 741 862 0480
              </a>
            </div>
            <div
              className="col-md-5 m-auto wow fadeInUp       animated"
              data-wow-duration="1.3s"
              style={{ visibility: "visible", animationDuration: "1.3s" }}
            >
              <img
                src="assets/images/3rd-section-book.webp"
                alt="banner-book-shelf"
              />
            </div>
          </div>
        </div>
      </section>

  <section className="section4-home">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>
                Whether You're A First-Timer Or An Experienced Writer,{" "}
                <span>We Can Help!</span>
              </h2>
              <p>
                Regardless of your experience in the book writing and publishing
                industry, you can rely on Hire A Ghostwriter to add value to
                your projects.{" "}
              </p>
<Embla slide={Caro}/>
              <a
                href="https://hireaghostwriter.co.uk/book-cover-samples"
                className="ani-btn"
              >
                Check My Work
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a
                href="https://hireaghostwriter.co.uk/book-cover-samples"
                className="ani-btn"
              >
                Check Binance
                <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <img
          src="assets/images/writer-text.webp"
          className="banner-right-text"
          alt="banner-left-text"
        />
      </section>
      <section className="section5-home">
        <div className="container">
          <div className="row">
            <div className="col-md-5 m-auto">
              <img src="assets/images/CTA-book.webp" alt="banner-book-shelf" />
            </div>
            <div className="col-md-7 m-auto">
              <h3>Get Your Book Written At Affordable Rates</h3>
              <p>We are here to take your book to the next level.</p>
              <a
                href="javascript:;"
                className="view-pricing-txt various ani-btn"
              >
                Let's Start
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="javascript:void(Tawk_API.toggle())" className="ani-btn">
                Let's Chat
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="tel:+447418620480" className="call-now-btn">
                <span>+44</span> 741 862 0480
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section7-home">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>
                Whether You're A First-Timer Or An Experienced Writer,{" "}
                <span>We Can Help!</span>
              </h2>
              <p>
                Regardless of your experience in the book writing and publishing
                industry, you can rely on Hire A Ghostwriter to add value to
                your projects.{" "}
              </p>
<Embla slide={Pro}/><a
                href="https://hireaghostwriter.co.uk/book-cover-samples"
                className="ani-btn"
              >
                Check My Work
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a
                href="https://hireaghostwriter.co.uk/book-cover-samples"
                className="ani-btn"
              >
                Check Binance
                <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <img
          src="assets/images/writer-text.webp"
          className="banner-right-text"
          alt="banner-left-text"
        />
      </section>





      <section className="section3-home">
        <div className="container">
          <div className="row">
            <div
              className="col-md-7 m-auto wow fadeInLeft       animated"
              data-wow-duration="1.3s"
              style={{ visibility: "visible", animationDuration: "1.3s" }}
            >
              <h3>Cost-effective Book Writing And Publishing Solutions </h3>
              <p>
                You don’t need to have a 6-digit bank account to become a
                published author.
              </p>
              <a
                href="javascript:;"
                className="view-pricing-txt various ani-btn"
              >
                Let's Start
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="javascript:void(Tawk_API.toggle())" className="ani-btn">
                Let's Chat
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="tel:+447418620480" className="call-now-btn">
                <span>+44</span> 741 862 0480
              </a>
            </div>
            <div
              className="col-md-5 m-auto wow fadeInUp       animated"
              data-wow-duration="1.3s"
              style={{ visibility: "visible", animationDuration: "1.3s" }}
            >
              <img
                src="assets/images/3rd-section-book.webp"
                alt="banner-book-shelf"
              />
            </div>
          </div>
        </div>
      </section>

  <section className="section4-home">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>
                Whether You're A First-Timer Or An Experienced Writer,{" "}
                <span>We Can Help!</span>
              </h2>
              <p>
                Regardless of your experience in the book writing and publishing
                industry, you can rely on Hire A Ghostwriter to add value to
                your projects.{" "}
              </p>
<Embla slide={UI}/>
              <a
                href="https://hireaghostwriter.co.uk/book-cover-samples"
                className="ani-btn"
              >
                Check My Work
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a
                href="https://hireaghostwriter.co.uk/book-cover-samples"
                className="ani-btn"
              >
                Check Binance
                <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <img
          src="assets/images/writer-text.webp"
          className="banner-right-text"
          alt="banner-left-text"
        />
      </section>
      <section className="section5-home">
        <div className="container">
          <div className="row">
            <div className="col-md-5 m-auto">
              <img src="assets/images/CTA-book.webp" alt="banner-book-shelf" />
            </div>
            <div className="col-md-7 m-auto">
              <h3>Get Your Book Written At Affordable Rates</h3>
              <p>We are here to take your book to the next level.</p>
              <a
                href="javascript:;"
                className="view-pricing-txt various ani-btn"
              >
                Let's Start
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="javascript:void(Tawk_API.toggle())" className="ani-btn">
                Let's Chat
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="tel:+447418620480" className="call-now-btn">
                <span>+44</span> 741 862 0480
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section7-home">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>
                Whether You're A First-Timer Or An Experienced Writer,{" "}
                <span>We Can Help!</span>
              </h2>
              <p>
                Regardless of your experience in the book writing and publishing
                industry, you can rely on Hire A Ghostwriter to add value to
                your projects.{" "}
              </p>
<Embla slide={Pos}/><a
                href="https://hireaghostwriter.co.uk/book-cover-samples"
                className="ani-btn"
              >
                Check My Work
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a
                href="https://hireaghostwriter.co.uk/book-cover-samples"
                className="ani-btn"
              >
                Check Binance
                <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <img
          src="assets/images/writer-text.webp"
          className="banner-right-text"
          alt="banner-left-text"
        />
      </section>


















            <section className="section3-home">
        <div className="container">
          <div className="row">
            <div
              className="col-md-7 m-auto wow fadeInLeft       animated"
              data-wow-duration="1.3s"
              style={{ visibility: "visible", animationDuration: "1.3s" }}
            >
              <h3>Cost-effective Book Writing And Publishing Solutions </h3>
              <p>
                You don’t need to have a 6-digit bank account to become a
                published author.
              </p>
              <a
                href="javascript:;"
                className="view-pricing-txt various ani-btn"
              >
                Let's Start
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="javascript:void(Tawk_API.toggle())" className="ani-btn">
                Let's Chat
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="tel:+447418620480" className="call-now-btn">
                <span>+44</span> 741 862 0480
              </a>
            </div>
            <div
              className="col-md-5 m-auto wow fadeInUp       animated"
              data-wow-duration="1.3s"
              style={{ visibility: "visible", animationDuration: "1.3s" }}
            >
              <img
                src="assets/images/3rd-section-book.webp"
                alt="banner-book-shelf"
              />
            </div>
          </div>
        </div>
      </section>

  <section className="section4-home">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>
                Whether You're A First-Timer Or An Experienced Writer,{" "}
                <span>We Can Help!</span>
              </h2>
              <p>
                Regardless of your experience in the book writing and publishing
                industry, you can rely on Hire A Ghostwriter to add value to
                your projects.{" "}
              </p>
<EmblaVid slide={Vid}/>
             <a
                href="https://hireaghostwriter.co.uk/book-cover-samples"
                className="ani-btn"
              >
                Check My Work
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a
                href="https://hireaghostwriter.co.uk/book-cover-samples"
                className="ani-btn"
              >
                Check Binance
                <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <img
          src="assets/images/writer-text.webp"
          className="banner-right-text"
          alt="banner-left-text"
        />
      </section>
      <section className="section5-home">
        <div className="container">
          <div className="row">
            <div className="col-md-5 m-auto">
              <img src="assets/images/CTA-book.webp" alt="banner-book-shelf" />
            </div>
            <div className="col-md-7 m-auto">
              <h3>Get Your Book Written At Affordable Rates</h3>
              <p>We are here to take your book to the next level.</p>
              <a
                href="javascript:;"
                className="view-pricing-txt various ani-btn"
              >
                Let's Start
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="javascript:void(Tawk_API.toggle())" className="ani-btn">
                Let's Chat
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="tel:+447418620480" className="call-now-btn">
                <span>+44</span> 741 862 0480
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section7-home">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>
                Whether You're A First-Timer Or An Experienced Writer,{" "}
                <span>We Can Help!</span>
              </h2>
              <p>
                Regardless of your experience in the book writing and publishing
                industry, you can rely on Hire A Ghostwriter to add value to
                your projects.{" "}
              </p>
<EmblaVid slide={Reel}/>
              <a
                href="https://hireaghostwriter.co.uk/book-cover-samples"
                className="ani-btn"
              >
                Check My Work
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a
                href="https://hireaghostwriter.co.uk/book-cover-samples"
                className="ani-btn"
              >
                Check Binance
                <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <img
          src="assets/images/writer-text.webp"
          className="banner-right-text"
          alt="banner-left-text"
        />
      </section>








      <section className="section10-home">
        {/*<img src="assets/images/ghost-text.webp" class="banner-left-text" alt="banner-left-text">*/}
        <div className="container">
          <div className="row">
            <div
              className="col-md-6 m-auto wow fadeInUp     animated"
              data-wow-duration="1.3s"
              style={{ visibility: "visible", animationDuration: "1.3s" }}
            >
              <img
                src="assets/images/CTA-bottom-book.webp"
                alt="banner-book-shelf"
              />
            </div>
            <div
              className="col-md-6 m-auto wow fadeInRight       animated"
              data-wow-duration="1.3s"
              style={{ visibility: "visible", animationDuration: "1.3s" }}
            >
              <h2>
                Start Your Journey Towards Becoming{" "}
                <span>A Published Author</span>
              </h2>
              <p>Connect with us today and reach where you want to reach.</p>
              <br />
              <a
                href="javascript:;"
                className="view-pricing-txt various ani-btn"
              >
                Get Started
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="javascript:void(Tawk_API.toggle())" className="ani-btn">
                Let's Chat
                <i className="fa-solid fa-arrow-right" />
              </a>
              <br />
              <a href="tel:+447418620480" className="call-now-btn">
                <span>+44</span> 741 862 0480
              </a>
            </div>
          </div>
        </div>
        {/*<img src="assets/images/writer-text.webp" class="banner-right-text" alt="banner-left-text">*/}
      </section>
      <br />
      <br />
      <br />
      <br />
      <footer>
        <div className="container">
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row mb-4">
                <div className="col-md-4 m-auto">
                  <img
                    src="assets/images/footer-logo.webp"
                    className="logofooter"
                    alt="logo-footer"
                  />
                </div>
                <div className="col-md-8 m-auto">
                  <p>
                    Men cannot live by exchanging articles, but producing them.
                    They live by work not trade.
                  </p>
                </div>
              </div>
              <hr />
              <div className="row mb-2">
                <div className="col-md-4">
                  <h3>We Offer</h3>
                  <ul>
                    <li className="first">
                      <a href="https://hireaghostwriter.co.uk/memoir-autobiography-ghostwriting.php">
                        GhostWriting
                      </a>
                    </li>
                    <li>
                      <a href="https://hireaghostwriter.co.uk/book-editing-formatting-services.php">
                        Book formating
                      </a>
                    </li>
                    <li>
                      <a href="https://hireaghostwriter.co.uk/publishing-consultancy.php">
                        Publishing
                      </a>
                    </li>
                    <li>
                      <a href="https://hireaghostwriter.co.uk/book-cover-design.php">
                        Book Cover
                      </a>
                    </li>
                    <li className="last">
                      <a href="https://hireaghostwriter.co.uk/book-editing-formatting-services.php">
                        Editing
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h3>Main Links</h3>
                  <ul>
                    <li className="first">
                      <a href="https://hireaghostwriter.co.uk/">Home</a>
                    </li>
                    <li>
                      <a href="https://hireaghostwriter.co.uk/about.php">
                        AboutUs
                      </a>
                    </li>
                    {/* <li><a href="https://hireaghostwriter.co.uk/blog">Blogs</a></li> */}
                    <li>
                      <a href="https://hireaghostwriter.co.uk/book-cover-samples.php">
                        Portfolio
                      </a>
                    </li>
                    <li className="last">
                      <a href="https://hireaghostwriter.co.uk/contact.php">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h3>Social Links</h3>
                  <ul>
                    <li className="first">
                      <a href="https://www.linkedin.com/company/hireaghostwriter/">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/HireAGW">Twitter</a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.co.uk/HireAGhostwriter/">
                        Pinterest
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/HireAGhostwriter1">
                        Facebook
                      </a>
                    </li>
                    <li className="last">
                      <a href="https://www.instagram.com/hire.a.ghostwriter/">
                        Instagram
                      </a>
                    </li>
                    {/* <li><a href="javascript:;">Contact Us</a></li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 border-col">
              {/* <div class="form-container">
    <h4>BOOK WRITING AGENCY</h4>
    <h3>FOR ALL KINDS OF BOOK WRITING, PUBLISHING & MARKETING SERVICES</h3>
    <form action="javascript:;" class="contact-form" method="POST">
      <div class="row">
          <div class="col-md-6 ">
              <input type="text" placeholder="Full Name"  name="Name">
          </div>
          <div class="col-md-6 ">
              <input type="email" name="Email"  placeholder="Email Address*">
          </div>
          <div class="col-md-12 ">
              <input name="Number" id="phone-coun" class="phone-country" required="" type="text" minlength="10"
                  maxlength="10" autocomplete="off"
                  onkeypress="return ((event.charCode >= 48 && event.charCode <= 57) )"
                  placeholder="Phone Number">
          </div>
          <div class="col-md-6 ">
            <div class="form-floating">
              <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option selected>Ghostwriting</option>
                <option value="1">Editing</option>
                <option value="2">Publishing</option>
                <option value="3">Design</option>
              </select>
              <label for="floatingSelect" style="color: #000;">Select Service</label>
            </div>
          </div>
          <div class="col-md-6 ">
            <div class="form-floating">
              <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option selected>$999-$2000</option>
                <option value="1">$2000-$3000</option>
                <option value="2">$3000-$4000</option>
                <option value="3">$4000-$5000</option>
              </select>
              <label for="floatingSelect" style="color: #000;">Select Budget</label>
            </div>
          </div>
          <div class="col-md-12">
            <a href="javascript:;" class='submit'>Submit<i class="fa-solid fa-arrow-right"></i></a>
          </div>
      </div>
    </form>
  </div> */}
              <div className="form-container">
                <h4>PROFESSIONAL GHOSTWRITING SERVICES</h4>
                <h3>
                  HIRE A GHOSTWRITER:
                  <br /> A ONE-STOP-SOLUTION FOR ALL YOUR BOOK PUBLISHING NEEDS
                </h3>
                <form
                  action="webpages/bottomFormController.php"
                  className="contact-form"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-md-6 ">
                      <input type="text" placeholder="Full Name" name="Name" />
                    </div>
                    <div className="col-md-6 ">
                      <input
                        type="email"
                        name="Email"
                        placeholder="Email Address*"
                      />
                    </div>
                    <div className="col-md-12 ">
                      <div className="intl-tel-input allow-dropdown separate-dial-code iti-sdc-3">
                        <div className="flag-container">
                          <div
                            className="selected-flag"
                            tabIndex={0}
                            title="Pakistan : +92"
                          >
                            <div className="iti-flag pk" />
                            <div className="selected-dial-code">+92</div>
                            <div className="iti-arrow" />
                          </div>
                          <ul className="country-list hide">
                            <li
                              className="country preferred first"
                              data-dial-code={1}
                              data-country-code="us"
                            >
                              <div className="flag-box">
                                <div className="iti-flag us" />
                              </div>
                              <span className="country-name">
                                United States
                              </span>
                              <span className="dial-code">+1</span>
                            </li>
                            <li
                              className="country preferred"
                              data-dial-code={44}
                              data-country-code="gb"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gb" />
                              </div>
                              <span className="country-name">
                                United Kingdom
                              </span>
                              <span className="dial-code">+44</span>
                            </li>
                            <li className="divider" />
                            <li
                              className="country"
                              data-dial-code={93}
                              data-country-code="af"
                            >
                              <div className="flag-box">
                                <div className="iti-flag af" />
                              </div>
                              <span className="country-name">Afghanistan</span>
                              <span className="dial-code">+93</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={358}
                              data-country-code="ax"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ax" />
                              </div>
                              <span className="country-name">
                                Aland Islands
                              </span>
                              <span className="dial-code">+358</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={355}
                              data-country-code="al"
                            >
                              <div className="flag-box">
                                <div className="iti-flag al" />
                              </div>
                              <span className="country-name">Albania </span>
                              <span className="dial-code">+355</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={213}
                              data-country-code="dz"
                            >
                              <div className="flag-box">
                                <div className="iti-flag dz" />
                              </div>
                              <span className="country-name">Algeria</span>
                              <span className="dial-code">+213</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1684}
                              data-country-code="as"
                            >
                              <div className="flag-box">
                                <div className="iti-flag as" />
                              </div>
                              <span className="country-name">
                                American Samoa
                              </span>
                              <span className="dial-code">+1684</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={244}
                              data-country-code="ao"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ao" />
                              </div>
                              <span className="country-name">Angola</span>
                              <span className="dial-code">+244</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1264}
                              data-country-code="ai"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ai" />
                              </div>
                              <span className="country-name">Anguilla</span>
                              <span className="dial-code">+1264</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1268}
                              data-country-code="ag"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ag" />
                              </div>
                              <span className="country-name">
                                Antigua and Barbuda
                              </span>
                              <span className="dial-code">+1268</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={54}
                              data-country-code="ar"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ar" />
                              </div>
                              <span className="country-name">Argentina</span>
                              <span className="dial-code">+54</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={374}
                              data-country-code="am"
                            >
                              <div className="flag-box">
                                <div className="iti-flag am" />
                              </div>
                              <span className="country-name">Armenia </span>
                              <span className="dial-code">+374</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={297}
                              data-country-code="aw"
                            >
                              <div className="flag-box">
                                <div className="iti-flag aw" />
                              </div>
                              <span className="country-name">Aruba</span>
                              <span className="dial-code">+297</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={61}
                              data-country-code="au"
                            >
                              <div className="flag-box">
                                <div className="iti-flag au" />
                              </div>
                              <span className="country-name">Australia</span>
                              <span className="dial-code">+61</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={43}
                              data-country-code="at"
                            >
                              <div className="flag-box">
                                <div className="iti-flag at" />
                              </div>
                              <span className="country-name">Austria </span>
                              <span className="dial-code">+43</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={994}
                              data-country-code="az"
                            >
                              <div className="flag-box">
                                <div className="iti-flag az" />
                              </div>
                              <span className="country-name">Azerbaijan</span>
                              <span className="dial-code">+994</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1242}
                              data-country-code="bs"
                            >
                              <div className="flag-box">
                                <div className="iti-flag bs" />
                              </div>
                              <span className="country-name">Bahamas</span>
                              <span className="dial-code">+1242</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={973}
                              data-country-code="bh"
                            >
                              <div className="flag-box">
                                <div className="iti-flag bh" />
                              </div>
                              <span className="country-name">Bahrain</span>
                              <span className="dial-code">+973</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={880}
                              data-country-code="bd"
                            >
                              <div className="flag-box">
                                <div className="iti-flag bd" />
                              </div>
                              <span className="country-name">Bangladesh</span>
                              <span className="dial-code">+880</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1246}
                              data-country-code="bb"
                            >
                              <div className="flag-box">
                                <div className="iti-flag bb" />
                              </div>
                              <span className="country-name">Barbados</span>
                              <span className="dial-code">+1246</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={375}
                              data-country-code="by"
                            >
                              <div className="flag-box">
                                <div className="iti-flag by" />
                              </div>
                              <span className="country-name">Belarus</span>
                              <span className="dial-code">+375</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={32}
                              data-country-code="be"
                            >
                              <div className="flag-box">
                                <div className="iti-flag be" />
                              </div>
                              <span className="country-name">Belgium</span>
                              <span className="dial-code">+32</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={501}
                              data-country-code="bz"
                            >
                              <div className="flag-box">
                                <div className="iti-flag bz" />
                              </div>
                              <span className="country-name">Belize</span>
                              <span className="dial-code">+501</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={229}
                              data-country-code="bj"
                            >
                              <div className="flag-box">
                                <div className="iti-flag bj" />
                              </div>
                              <span className="country-name">Benin</span>
                              <span className="dial-code">+229</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1441}
                              data-country-code="bm"
                            >
                              <div className="flag-box">
                                <div className="iti-flag bm" />
                              </div>
                              <span className="country-name">Bermuda</span>
                              <span className="dial-code">+1441</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={975}
                              data-country-code="bt"
                            >
                              <div className="flag-box">
                                <div className="iti-flag bt" />
                              </div>
                              <span className="country-name">Bhutan </span>
                              <span className="dial-code">+975</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={591}
                              data-country-code="bo"
                            >
                              <div className="flag-box">
                                <div className="iti-flag bo" />
                              </div>
                              <span className="country-name">Bolivia</span>
                              <span className="dial-code">+591</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={387}
                              data-country-code="ba"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ba" />
                              </div>
                              <span className="country-name">
                                Bosnia and Herzegovina{" "}
                              </span>
                              <span className="dial-code">+387</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={267}
                              data-country-code="bw"
                            >
                              <div className="flag-box">
                                <div className="iti-flag bw" />
                              </div>
                              <span className="country-name">Botswana</span>
                              <span className="dial-code">+267</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={55}
                              data-country-code="br"
                            >
                              <div className="flag-box">
                                <div className="iti-flag br" />
                              </div>
                              <span className="country-name">Brazil</span>
                              <span className="dial-code">+55</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={246}
                              data-country-code="io"
                            >
                              <div className="flag-box">
                                <div className="iti-flag io" />
                              </div>
                              <span className="country-name">
                                British Indian Ocean Territory
                              </span>
                              <span className="dial-code">+246</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1284}
                              data-country-code="vg"
                            >
                              <div className="flag-box">
                                <div className="iti-flag vg" />
                              </div>
                              <span className="country-name">
                                British Virgin Islands
                              </span>
                              <span className="dial-code">+1284</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={673}
                              data-country-code="bn"
                            >
                              <div className="flag-box">
                                <div className="iti-flag bn" />
                              </div>
                              <span className="country-name">Brunei</span>
                              <span className="dial-code">+673</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={359}
                              data-country-code="bg"
                            >
                              <div className="flag-box">
                                <div className="iti-flag bg" />
                              </div>
                              <span className="country-name">Bulgaria </span>
                              <span className="dial-code">+359</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={226}
                              data-country-code="bf"
                            >
                              <div className="flag-box">
                                <div className="iti-flag bf" />
                              </div>
                              <span className="country-name">Burkina Faso</span>
                              <span className="dial-code">+226</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={257}
                              data-country-code="bi"
                            >
                              <div className="flag-box">
                                <div className="iti-flag bi" />
                              </div>
                              <span className="country-name">Burundi</span>
                              <span className="dial-code">+257</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={855}
                              data-country-code="kh"
                            >
                              <div className="flag-box">
                                <div className="iti-flag kh" />
                              </div>
                              <span className="country-name">Cambodia </span>
                              <span className="dial-code">+855</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={237}
                              data-country-code="cm"
                            >
                              <div className="flag-box">
                                <div className="iti-flag cm" />
                              </div>
                              <span className="country-name">Cameroon </span>
                              <span className="dial-code">+237</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1}
                              data-country-code="ca"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ca" />
                              </div>
                              <span className="country-name">Canada</span>
                              <span className="dial-code">+1</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={238}
                              data-country-code="cv"
                            >
                              <div className="flag-box">
                                <div className="iti-flag cv" />
                              </div>
                              <span className="country-name">Cape Verde</span>
                              <span className="dial-code">+238</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={599}
                              data-country-code="bq"
                            >
                              <div className="flag-box">
                                <div className="iti-flag bq" />
                              </div>
                              <span className="country-name">
                                Caribbean Netherlands
                              </span>
                              <span className="dial-code">+599</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1345}
                              data-country-code="ky"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ky" />
                              </div>
                              <span className="country-name">
                                Cayman Islands
                              </span>
                              <span className="dial-code">+1345</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={236}
                              data-country-code="cf"
                            >
                              <div className="flag-box">
                                <div className="iti-flag cf" />
                              </div>
                              <span className="country-name">
                                Central African Republic
                              </span>
                              <span className="dial-code">+236</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={235}
                              data-country-code="td"
                            >
                              <div className="flag-box">
                                <div className="iti-flag td" />
                              </div>
                              <span className="country-name">Chad</span>
                              <span className="dial-code">+235</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={56}
                              data-country-code="cl"
                            >
                              <div className="flag-box">
                                <div className="iti-flag cl" />
                              </div>
                              <span className="country-name">Chile</span>
                              <span className="dial-code">+56</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={86}
                              data-country-code="cn"
                            >
                              <div className="flag-box">
                                <div className="iti-flag cn" />
                              </div>
                              <span className="country-name">China</span>
                              <span className="dial-code">+86</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={61}
                              data-country-code="cx"
                            >
                              <div className="flag-box">
                                <div className="iti-flag cx" />
                              </div>
                              <span className="country-name">
                                Christmas Island
                              </span>
                              <span className="dial-code">+61</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={61}
                              data-country-code="cc"
                            >
                              <div className="flag-box">
                                <div className="iti-flag cc" />
                              </div>
                              <span className="country-name">Cocos</span>
                              <span className="dial-code">+61</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={57}
                              data-country-code="co"
                            >
                              <div className="flag-box">
                                <div className="iti-flag co" />
                              </div>
                              <span className="country-name">Colombia</span>
                              <span className="dial-code">+57</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={269}
                              data-country-code="km"
                            >
                              <div className="flag-box">
                                <div className="iti-flag km" />
                              </div>
                              <span className="country-name">Comoros </span>
                              <span className="dial-code">+269</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={242}
                              data-country-code="cg"
                            >
                              <div className="flag-box">
                                <div className="iti-flag cg" />
                              </div>
                              <span className="country-name">Congo</span>
                              <span className="dial-code">+242</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={682}
                              data-country-code="ck"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ck" />
                              </div>
                              <span className="country-name">Cook Islands</span>
                              <span className="dial-code">+682</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={506}
                              data-country-code="cr"
                            >
                              <div className="flag-box">
                                <div className="iti-flag cr" />
                              </div>
                              <span className="country-name">Costa Rica</span>
                              <span className="dial-code">+506</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={225}
                              data-country-code="ci"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ci" />
                              </div>
                              <span className="country-name">
                                Cote d'Ivoire
                              </span>
                              <span className="dial-code">+225</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={385}
                              data-country-code="hr"
                            >
                              <div className="flag-box">
                                <div className="iti-flag hr" />
                              </div>
                              <span className="country-name">Croatia</span>
                              <span className="dial-code">+385</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={53}
                              data-country-code="cu"
                            >
                              <div className="flag-box">
                                <div className="iti-flag cu" />
                              </div>
                              <span className="country-name">Cuba</span>
                              <span className="dial-code">+53</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={599}
                              data-country-code="cw"
                            >
                              <div className="flag-box">
                                <div className="iti-flag cw" />
                              </div>
                              <span className="country-name">Curacao</span>
                              <span className="dial-code">+599</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={357}
                              data-country-code="cy"
                            >
                              <div className="flag-box">
                                <div className="iti-flag cy" />
                              </div>
                              <span className="country-name">Cyprus</span>
                              <span className="dial-code">+357</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={420}
                              data-country-code="cz"
                            >
                              <div className="flag-box">
                                <div className="iti-flag cz" />
                              </div>
                              <span className="country-name">
                                Czech Republic
                              </span>
                              <span className="dial-code">+420</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={45}
                              data-country-code="dk"
                            >
                              <div className="flag-box">
                                <div className="iti-flag dk" />
                              </div>
                              <span className="country-name">Denmark</span>
                              <span className="dial-code">+45</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={253}
                              data-country-code="dj"
                            >
                              <div className="flag-box">
                                <div className="iti-flag dj" />
                              </div>
                              <span className="country-name">Djibouti</span>
                              <span className="dial-code">+253</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1767}
                              data-country-code="dm"
                            >
                              <div className="flag-box">
                                <div className="iti-flag dm" />
                              </div>
                              <span className="country-name">Dominica</span>
                              <span className="dial-code">+1767</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1}
                              data-country-code="do"
                            >
                              <div className="flag-box">
                                <div className="iti-flag do" />
                              </div>
                              <span className="country-name">
                                Dominican Republic
                              </span>
                              <span className="dial-code">+1</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={243}
                              data-country-code="cd"
                            >
                              <div className="flag-box">
                                <div className="iti-flag cd" />
                              </div>
                              <span className="country-name">DR Congo</span>
                              <span className="dial-code">+243</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={593}
                              data-country-code="ec"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ec" />
                              </div>
                              <span className="country-name">Ecuador</span>
                              <span className="dial-code">+593</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={20}
                              data-country-code="eg"
                            >
                              <div className="flag-box">
                                <div className="iti-flag eg" />
                              </div>
                              <span className="country-name">Egypt</span>
                              <span className="dial-code">+20</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={503}
                              data-country-code="sv"
                            >
                              <div className="flag-box">
                                <div className="iti-flag sv" />
                              </div>
                              <span className="country-name">El Salvador</span>
                              <span className="dial-code">+503</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={240}
                              data-country-code="gq"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gq" />
                              </div>
                              <span className="country-name">
                                Equatorial Guinea
                              </span>
                              <span className="dial-code">+240</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={291}
                              data-country-code="er"
                            >
                              <div className="flag-box">
                                <div className="iti-flag er" />
                              </div>
                              <span className="country-name">Eritrea</span>
                              <span className="dial-code">+291</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={372}
                              data-country-code="ee"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ee" />
                              </div>
                              <span className="country-name">
                                Estonia (Eesti)
                              </span>
                              <span className="dial-code">+372</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={251}
                              data-country-code="et"
                            >
                              <div className="flag-box">
                                <div className="iti-flag et" />
                              </div>
                              <span className="country-name">Ethiopia</span>
                              <span className="dial-code">+251</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={500}
                              data-country-code="fk"
                            >
                              <div className="flag-box">
                                <div className="iti-flag fk" />
                              </div>
                              <span className="country-name">
                                Falkland Islands
                              </span>
                              <span className="dial-code">+500</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={298}
                              data-country-code="fo"
                            >
                              <div className="flag-box">
                                <div className="iti-flag fo" />
                              </div>
                              <span className="country-name">
                                Faroe Islands
                              </span>
                              <span className="dial-code">+298</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={679}
                              data-country-code="fj"
                            >
                              <div className="flag-box">
                                <div className="iti-flag fj" />
                              </div>
                              <span className="country-name">Fiji</span>
                              <span className="dial-code">+679</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={358}
                              data-country-code="fi"
                            >
                              <div className="flag-box">
                                <div className="iti-flag fi" />
                              </div>
                              <span className="country-name">Finland</span>
                              <span className="dial-code">+358</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={33}
                              data-country-code="fr"
                            >
                              <div className="flag-box">
                                <div className="iti-flag fr" />
                              </div>
                              <span className="country-name">France</span>
                              <span className="dial-code">+33</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={594}
                              data-country-code="gf"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gf" />
                              </div>
                              <span className="country-name">
                                French Guiana{" "}
                              </span>
                              <span className="dial-code">+594</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={689}
                              data-country-code="pf"
                            >
                              <div className="flag-box">
                                <div className="iti-flag pf" />
                              </div>
                              <span className="country-name">
                                French Polynesia
                              </span>
                              <span className="dial-code">+689</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={241}
                              data-country-code="ga"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ga" />
                              </div>
                              <span className="country-name">Gabon</span>
                              <span className="dial-code">+241</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={220}
                              data-country-code="gm"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gm" />
                              </div>
                              <span className="country-name">Gambia</span>
                              <span className="dial-code">+220</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={995}
                              data-country-code="ge"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ge" />
                              </div>
                              <span className="country-name">Georgia</span>
                              <span className="dial-code">+995</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={49}
                              data-country-code="de"
                            >
                              <div className="flag-box">
                                <div className="iti-flag de" />
                              </div>
                              <span className="country-name">Germany</span>
                              <span className="dial-code">+49</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={233}
                              data-country-code="gh"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gh" />
                              </div>
                              <span className="country-name">Ghana</span>
                              <span className="dial-code">+233</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={350}
                              data-country-code="gi"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gi" />
                              </div>
                              <span className="country-name">Gibraltar</span>
                              <span className="dial-code">+350</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={30}
                              data-country-code="gr"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gr" />
                              </div>
                              <span className="country-name">Greece</span>
                              <span className="dial-code">+30</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={299}
                              data-country-code="gl"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gl" />
                              </div>
                              <span className="country-name">Greenland</span>
                              <span className="dial-code">+299</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1473}
                              data-country-code="gd"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gd" />
                              </div>
                              <span className="country-name">Grenada</span>
                              <span className="dial-code">+1473</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={590}
                              data-country-code="gp"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gp" />
                              </div>
                              <span className="country-name">Guadeloupe</span>
                              <span className="dial-code">+590</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1671}
                              data-country-code="gu"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gu" />
                              </div>
                              <span className="country-name">Guam</span>
                              <span className="dial-code">+1671</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={502}
                              data-country-code="gt"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gt" />
                              </div>
                              <span className="country-name">Guatemala</span>
                              <span className="dial-code">+502</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={44}
                              data-country-code="gg"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gg" />
                              </div>
                              <span className="country-name">Guernsey</span>
                              <span className="dial-code">+44</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={224}
                              data-country-code="gn"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gn" />
                              </div>
                              <span className="country-name">Guinea</span>
                              <span className="dial-code">+224</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={245}
                              data-country-code="gw"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gw" />
                              </div>
                              <span className="country-name">
                                Guinea-Bissau
                              </span>
                              <span className="dial-code">+245</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={592}
                              data-country-code="gy"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gy" />
                              </div>
                              <span className="country-name">Guyana</span>
                              <span className="dial-code">+592</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={509}
                              data-country-code="ht"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ht" />
                              </div>
                              <span className="country-name">Haiti</span>
                              <span className="dial-code">+509</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={504}
                              data-country-code="hn"
                            >
                              <div className="flag-box">
                                <div className="iti-flag hn" />
                              </div>
                              <span className="country-name">Honduras</span>
                              <span className="dial-code">+504</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={852}
                              data-country-code="hk"
                            >
                              <div className="flag-box">
                                <div className="iti-flag hk" />
                              </div>
                              <span className="country-name">Hong Kong</span>
                              <span className="dial-code">+852</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={36}
                              data-country-code="hu"
                            >
                              <div className="flag-box">
                                <div className="iti-flag hu" />
                              </div>
                              <span className="country-name">Hungary</span>
                              <span className="dial-code">+36</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={354}
                              data-country-code="is"
                            >
                              <div className="flag-box">
                                <div className="iti-flag is" />
                              </div>
                              <span className="country-name">Iceland</span>
                              <span className="dial-code">+354</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={91}
                              data-country-code="in"
                            >
                              <div className="flag-box">
                                <div className="iti-flag in" />
                              </div>
                              <span className="country-name">India</span>
                              <span className="dial-code">+91</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={62}
                              data-country-code="id"
                            >
                              <div className="flag-box">
                                <div className="iti-flag id" />
                              </div>
                              <span className="country-name">Indonesia</span>
                              <span className="dial-code">+62</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={98}
                              data-country-code="ir"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ir" />
                              </div>
                              <span className="country-name">Iran </span>
                              <span className="dial-code">+98</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={964}
                              data-country-code="iq"
                            >
                              <div className="flag-box">
                                <div className="iti-flag iq" />
                              </div>
                              <span className="country-name">Iraq </span>
                              <span className="dial-code">+964</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={353}
                              data-country-code="ie"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ie" />
                              </div>
                              <span className="country-name">Ireland</span>
                              <span className="dial-code">+353</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={44}
                              data-country-code="im"
                            >
                              <div className="flag-box">
                                <div className="iti-flag im" />
                              </div>
                              <span className="country-name">Isle of Man</span>
                              <span className="dial-code">+44</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={972}
                              data-country-code="il"
                            >
                              <div className="flag-box">
                                <div className="iti-flag il" />
                              </div>
                              <span className="country-name">Israel</span>
                              <span className="dial-code">+972</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={39}
                              data-country-code="it"
                            >
                              <div className="flag-box">
                                <div className="iti-flag it" />
                              </div>
                              <span className="country-name">Italy</span>
                              <span className="dial-code">+39</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1876}
                              data-country-code="jm"
                            >
                              <div className="flag-box">
                                <div className="iti-flag jm" />
                              </div>
                              <span className="country-name">Jamaica</span>
                              <span className="dial-code">+1876</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={81}
                              data-country-code="jp"
                            >
                              <div className="flag-box">
                                <div className="iti-flag jp" />
                              </div>
                              <span className="country-name">Japan </span>
                              <span className="dial-code">+81</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={44}
                              data-country-code="je"
                            >
                              <div className="flag-box">
                                <div className="iti-flag je" />
                              </div>
                              <span className="country-name">Jersey</span>
                              <span className="dial-code">+44</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={962}
                              data-country-code="jo"
                            >
                              <div className="flag-box">
                                <div className="iti-flag jo" />
                              </div>
                              <span className="country-name">Jordan </span>
                              <span className="dial-code">+962</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={7}
                              data-country-code="kz"
                            >
                              <div className="flag-box">
                                <div className="iti-flag kz" />
                              </div>
                              <span className="country-name">Kazakhstan</span>
                              <span className="dial-code">+7</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={254}
                              data-country-code="ke"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ke" />
                              </div>
                              <span className="country-name">Kenya</span>
                              <span className="dial-code">+254</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={686}
                              data-country-code="ki"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ki" />
                              </div>
                              <span className="country-name">Kiribati</span>
                              <span className="dial-code">+686</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={383}
                              data-country-code="xk"
                            >
                              <div className="flag-box">
                                <div className="iti-flag xk" />
                              </div>
                              <span className="country-name">Kosovo</span>
                              <span className="dial-code">+383</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={965}
                              data-country-code="kw"
                            >
                              <div className="flag-box">
                                <div className="iti-flag kw" />
                              </div>
                              <span className="country-name">Kuwait</span>
                              <span className="dial-code">+965</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={996}
                              data-country-code="kg"
                            >
                              <div className="flag-box">
                                <div className="iti-flag kg" />
                              </div>
                              <span className="country-name">Kyrgyzstan </span>
                              <span className="dial-code">+996</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={856}
                              data-country-code="la"
                            >
                              <div className="flag-box">
                                <div className="iti-flag la" />
                              </div>
                              <span className="country-name">Laos</span>
                              <span className="dial-code">+856</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={371}
                              data-country-code="lv"
                            >
                              <div className="flag-box">
                                <div className="iti-flag lv" />
                              </div>
                              <span className="country-name">Latvia</span>
                              <span className="dial-code">+371</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={961}
                              data-country-code="lb"
                            >
                              <div className="flag-box">
                                <div className="iti-flag lb" />
                              </div>
                              <span className="country-name">Lebanon</span>
                              <span className="dial-code">+961</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={266}
                              data-country-code="ls"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ls" />
                              </div>
                              <span className="country-name">Lesotho</span>
                              <span className="dial-code">+266</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={231}
                              data-country-code="lr"
                            >
                              <div className="flag-box">
                                <div className="iti-flag lr" />
                              </div>
                              <span className="country-name">Liberia</span>
                              <span className="dial-code">+231</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={218}
                              data-country-code="ly"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ly" />
                              </div>
                              <span className="country-name">Libya</span>
                              <span className="dial-code">+218</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={423}
                              data-country-code="li"
                            >
                              <div className="flag-box">
                                <div className="iti-flag li" />
                              </div>
                              <span className="country-name">
                                Liechtenstein
                              </span>
                              <span className="dial-code">+423</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={370}
                              data-country-code="lt"
                            >
                              <div className="flag-box">
                                <div className="iti-flag lt" />
                              </div>
                              <span className="country-name">Lithuania</span>
                              <span className="dial-code">+370</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={352}
                              data-country-code="lu"
                            >
                              <div className="flag-box">
                                <div className="iti-flag lu" />
                              </div>
                              <span className="country-name">Luxembourg</span>
                              <span className="dial-code">+352</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={853}
                              data-country-code="mo"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mo" />
                              </div>
                              <span className="country-name">Macau</span>
                              <span className="dial-code">+853</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={389}
                              data-country-code="mk"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mk" />
                              </div>
                              <span className="country-name">Macedonia</span>
                              <span className="dial-code">+389</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={261}
                              data-country-code="mg"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mg" />
                              </div>
                              <span className="country-name">Madagascar</span>
                              <span className="dial-code">+261</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={265}
                              data-country-code="mw"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mw" />
                              </div>
                              <span className="country-name">Malawi</span>
                              <span className="dial-code">+265</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={60}
                              data-country-code="my"
                            >
                              <div className="flag-box">
                                <div className="iti-flag my" />
                              </div>
                              <span className="country-name">Malaysia</span>
                              <span className="dial-code">+60</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={960}
                              data-country-code="mv"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mv" />
                              </div>
                              <span className="country-name">Maldives</span>
                              <span className="dial-code">+960</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={223}
                              data-country-code="ml"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ml" />
                              </div>
                              <span className="country-name">Mali</span>
                              <span className="dial-code">+223</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={356}
                              data-country-code="mt"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mt" />
                              </div>
                              <span className="country-name">Malta</span>
                              <span className="dial-code">+356</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={692}
                              data-country-code="mh"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mh" />
                              </div>
                              <span className="country-name">
                                Marshall Islands
                              </span>
                              <span className="dial-code">+692</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={596}
                              data-country-code="mq"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mq" />
                              </div>
                              <span className="country-name">Martinique</span>
                              <span className="dial-code">+596</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={222}
                              data-country-code="mr"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mr" />
                              </div>
                              <span className="country-name">Mauritania</span>
                              <span className="dial-code">+222</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={230}
                              data-country-code="mu"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mu" />
                              </div>
                              <span className="country-name">Mauritius</span>
                              <span className="dial-code">+230</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={262}
                              data-country-code="yt"
                            >
                              <div className="flag-box">
                                <div className="iti-flag yt" />
                              </div>
                              <span className="country-name">Mayotte</span>
                              <span className="dial-code">+262</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={52}
                              data-country-code="mx"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mx" />
                              </div>
                              <span className="country-name">Mexico</span>
                              <span className="dial-code">+52</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={691}
                              data-country-code="fm"
                            >
                              <div className="flag-box">
                                <div className="iti-flag fm" />
                              </div>
                              <span className="country-name">Micronesia</span>
                              <span className="dial-code">+691</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={373}
                              data-country-code="md"
                            >
                              <div className="flag-box">
                                <div className="iti-flag md" />
                              </div>
                              <span className="country-name">Moldova</span>
                              <span className="dial-code">+373</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={377}
                              data-country-code="mc"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mc" />
                              </div>
                              <span className="country-name">Monaco</span>
                              <span className="dial-code">+377</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={976}
                              data-country-code="mn"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mn" />
                              </div>
                              <span className="country-name">Mongolia</span>
                              <span className="dial-code">+976</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={382}
                              data-country-code="me"
                            >
                              <div className="flag-box">
                                <div className="iti-flag me" />
                              </div>
                              <span className="country-name">Montenegro</span>
                              <span className="dial-code">+382</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1664}
                              data-country-code="ms"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ms" />
                              </div>
                              <span className="country-name">Montserrat</span>
                              <span className="dial-code">+1664</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={212}
                              data-country-code="ma"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ma" />
                              </div>
                              <span className="country-name">Morocco</span>
                              <span className="dial-code">+212</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={258}
                              data-country-code="mz"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mz" />
                              </div>
                              <span className="country-name">Mozambique</span>
                              <span className="dial-code">+258</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={95}
                              data-country-code="mm"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mm" />
                              </div>
                              <span className="country-name">Myanmar</span>
                              <span className="dial-code">+95</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={264}
                              data-country-code="na"
                            >
                              <div className="flag-box">
                                <div className="iti-flag na" />
                              </div>
                              <span className="country-name">Namibia</span>
                              <span className="dial-code">+264</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={674}
                              data-country-code="nr"
                            >
                              <div className="flag-box">
                                <div className="iti-flag nr" />
                              </div>
                              <span className="country-name">Nauru</span>
                              <span className="dial-code">+674</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={977}
                              data-country-code="np"
                            >
                              <div className="flag-box">
                                <div className="iti-flag np" />
                              </div>
                              <span className="country-name">Nepal</span>
                              <span className="dial-code">+977</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={31}
                              data-country-code="nl"
                            >
                              <div className="flag-box">
                                <div className="iti-flag nl" />
                              </div>
                              <span className="country-name">Netherlands</span>
                              <span className="dial-code">+31</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={687}
                              data-country-code="nc"
                            >
                              <div className="flag-box">
                                <div className="iti-flag nc" />
                              </div>
                              <span className="country-name">
                                New Caledonia
                              </span>
                              <span className="dial-code">+687</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={64}
                              data-country-code="nz"
                            >
                              <div className="flag-box">
                                <div className="iti-flag nz" />
                              </div>
                              <span className="country-name">New Zealand</span>
                              <span className="dial-code">+64</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={505}
                              data-country-code="ni"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ni" />
                              </div>
                              <span className="country-name">Nicaragua</span>
                              <span className="dial-code">+505</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={227}
                              data-country-code="ne"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ne" />
                              </div>
                              <span className="country-name">Niger</span>
                              <span className="dial-code">+227</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={234}
                              data-country-code="ng"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ng" />
                              </div>
                              <span className="country-name">Nigeria</span>
                              <span className="dial-code">+234</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={683}
                              data-country-code="nu"
                            >
                              <div className="flag-box">
                                <div className="iti-flag nu" />
                              </div>
                              <span className="country-name">Niue</span>
                              <span className="dial-code">+683</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={672}
                              data-country-code="nf"
                            >
                              <div className="flag-box">
                                <div className="iti-flag nf" />
                              </div>
                              <span className="country-name">
                                Norfolk Island
                              </span>
                              <span className="dial-code">+672</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={850}
                              data-country-code="kp"
                            >
                              <div className="flag-box">
                                <div className="iti-flag kp" />
                              </div>
                              <span className="country-name">North Korea</span>
                              <span className="dial-code">+850</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1670}
                              data-country-code="mp"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mp" />
                              </div>
                              <span className="country-name">
                                Northern Mariana Islands
                              </span>
                              <span className="dial-code">+1670</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={47}
                              data-country-code="no"
                            >
                              <div className="flag-box">
                                <div className="iti-flag no" />
                              </div>
                              <span className="country-name">Norway</span>
                              <span className="dial-code">+47</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={968}
                              data-country-code="om"
                            >
                              <div className="flag-box">
                                <div className="iti-flag om" />
                              </div>
                              <span className="country-name">Oman</span>
                              <span className="dial-code">+968</span>
                            </li>
                            <li
                              className="country active"
                              data-dial-code={92}
                              data-country-code="pk"
                            >
                              <div className="flag-box">
                                <div className="iti-flag pk" />
                              </div>
                              <span className="country-name">Pakistan </span>
                              <span className="dial-code">+92</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={680}
                              data-country-code="pw"
                            >
                              <div className="flag-box">
                                <div className="iti-flag pw" />
                              </div>
                              <span className="country-name">Palau</span>
                              <span className="dial-code">+680</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={970}
                              data-country-code="ps"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ps" />
                              </div>
                              <span className="country-name">Palestine</span>
                              <span className="dial-code">+970</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={507}
                              data-country-code="pa"
                            >
                              <div className="flag-box">
                                <div className="iti-flag pa" />
                              </div>
                              <span className="country-name">Panama</span>
                              <span className="dial-code">+507</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={675}
                              data-country-code="pg"
                            >
                              <div className="flag-box">
                                <div className="iti-flag pg" />
                              </div>
                              <span className="country-name">
                                Papua New Guinea
                              </span>
                              <span className="dial-code">+675</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={595}
                              data-country-code="py"
                            >
                              <div className="flag-box">
                                <div className="iti-flag py" />
                              </div>
                              <span className="country-name">Paraguay</span>
                              <span className="dial-code">+595</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={51}
                              data-country-code="pe"
                            >
                              <div className="flag-box">
                                <div className="iti-flag pe" />
                              </div>
                              <span className="country-name">Peru</span>
                              <span className="dial-code">+51</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={63}
                              data-country-code="ph"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ph" />
                              </div>
                              <span className="country-name">Philippines</span>
                              <span className="dial-code">+63</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={48}
                              data-country-code="pl"
                            >
                              <div className="flag-box">
                                <div className="iti-flag pl" />
                              </div>
                              <span className="country-name">Poland </span>
                              <span className="dial-code">+48</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={351}
                              data-country-code="pt"
                            >
                              <div className="flag-box">
                                <div className="iti-flag pt" />
                              </div>
                              <span className="country-name">Portugal</span>
                              <span className="dial-code">+351</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1}
                              data-country-code="pr"
                            >
                              <div className="flag-box">
                                <div className="iti-flag pr" />
                              </div>
                              <span className="country-name">Puerto Rico</span>
                              <span className="dial-code">+1</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={974}
                              data-country-code="qa"
                            >
                              <div className="flag-box">
                                <div className="iti-flag qa" />
                              </div>
                              <span className="country-name">Qatar</span>
                              <span className="dial-code">+974</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={262}
                              data-country-code="re"
                            >
                              <div className="flag-box">
                                <div className="iti-flag re" />
                              </div>
                              <span className="country-name">Reunion</span>
                              <span className="dial-code">+262</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={40}
                              data-country-code="ro"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ro" />
                              </div>
                              <span className="country-name">Romania </span>
                              <span className="dial-code">+40</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={7}
                              data-country-code="ru"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ru" />
                              </div>
                              <span className="country-name">Russia</span>
                              <span className="dial-code">+7</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={250}
                              data-country-code="rw"
                            >
                              <div className="flag-box">
                                <div className="iti-flag rw" />
                              </div>
                              <span className="country-name">Rwanda</span>
                              <span className="dial-code">+250</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={590}
                              data-country-code="bl"
                            >
                              <div className="flag-box">
                                <div className="iti-flag bl" />
                              </div>
                              <span className="country-name">
                                Saint Barthelemy
                              </span>
                              <span className="dial-code">+590</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={290}
                              data-country-code="sh"
                            >
                              <div className="flag-box">
                                <div className="iti-flag sh" />
                              </div>
                              <span className="country-name">Saint Helena</span>
                              <span className="dial-code">+290</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1869}
                              data-country-code="kn"
                            >
                              <div className="flag-box">
                                <div className="iti-flag kn" />
                              </div>
                              <span className="country-name">
                                Saint Kitts and Nevis
                              </span>
                              <span className="dial-code">+1869</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1758}
                              data-country-code="lc"
                            >
                              <div className="flag-box">
                                <div className="iti-flag lc" />
                              </div>
                              <span className="country-name">Saint Lucia</span>
                              <span className="dial-code">+1758</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={590}
                              data-country-code="mf"
                            >
                              <div className="flag-box">
                                <div className="iti-flag mf" />
                              </div>
                              <span className="country-name">Saint Martin</span>
                              <span className="dial-code">+590</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={508}
                              data-country-code="pm"
                            >
                              <div className="flag-box">
                                <div className="iti-flag pm" />
                              </div>
                              <span className="country-name">
                                Saint Pierre and Miquelon
                              </span>
                              <span className="dial-code">+508</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1784}
                              data-country-code="vc"
                            >
                              <div className="flag-box">
                                <div className="iti-flag vc" />
                              </div>
                              <span className="country-name">
                                Saint Vincent and the Grenadines
                              </span>
                              <span className="dial-code">+1784</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={685}
                              data-country-code="ws"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ws" />
                              </div>
                              <span className="country-name">Samoa</span>
                              <span className="dial-code">+685</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={378}
                              data-country-code="sm"
                            >
                              <div className="flag-box">
                                <div className="iti-flag sm" />
                              </div>
                              <span className="country-name">San Marino</span>
                              <span className="dial-code">+378</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={239}
                              data-country-code="st"
                            >
                              <div className="flag-box">
                                <div className="iti-flag st" />
                              </div>
                              <span className="country-name">
                                Sao Tome and Principe
                              </span>
                              <span className="dial-code">+239</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={966}
                              data-country-code="sa"
                            >
                              <div className="flag-box">
                                <div className="iti-flag sa" />
                              </div>
                              <span className="country-name">Saudi Arabia</span>
                              <span className="dial-code">+966</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={221}
                              data-country-code="sn"
                            >
                              <div className="flag-box">
                                <div className="iti-flag sn" />
                              </div>
                              <span className="country-name">Senegal</span>
                              <span className="dial-code">+221</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={381}
                              data-country-code="rs"
                            >
                              <div className="flag-box">
                                <div className="iti-flag rs" />
                              </div>
                              <span className="country-name">Serbia</span>
                              <span className="dial-code">+381</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={248}
                              data-country-code="sc"
                            >
                              <div className="flag-box">
                                <div className="iti-flag sc" />
                              </div>
                              <span className="country-name">Seychelles</span>
                              <span className="dial-code">+248</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={232}
                              data-country-code="sl"
                            >
                              <div className="flag-box">
                                <div className="iti-flag sl" />
                              </div>
                              <span className="country-name">Sierra Leone</span>
                              <span className="dial-code">+232</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={65}
                              data-country-code="sg"
                            >
                              <div className="flag-box">
                                <div className="iti-flag sg" />
                              </div>
                              <span className="country-name">Singapore</span>
                              <span className="dial-code">+65</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1721}
                              data-country-code="sx"
                            >
                              <div className="flag-box">
                                <div className="iti-flag sx" />
                              </div>
                              <span className="country-name">Sint Maarten</span>
                              <span className="dial-code">+1721</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={421}
                              data-country-code="sk"
                            >
                              <div className="flag-box">
                                <div className="iti-flag sk" />
                              </div>
                              <span className="country-name">Slovakia</span>
                              <span className="dial-code">+421</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={386}
                              data-country-code="si"
                            >
                              <div className="flag-box">
                                <div className="iti-flag si" />
                              </div>
                              <span className="country-name">Slovenia</span>
                              <span className="dial-code">+386</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={677}
                              data-country-code="sb"
                            >
                              <div className="flag-box">
                                <div className="iti-flag sb" />
                              </div>
                              <span className="country-name">
                                Solomon Islands
                              </span>
                              <span className="dial-code">+677</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={252}
                              data-country-code="so"
                            >
                              <div className="flag-box">
                                <div className="iti-flag so" />
                              </div>
                              <span className="country-name">Somalia</span>
                              <span className="dial-code">+252</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={27}
                              data-country-code="za"
                            >
                              <div className="flag-box">
                                <div className="iti-flag za" />
                              </div>
                              <span className="country-name">South Africa</span>
                              <span className="dial-code">+27</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={82}
                              data-country-code="kr"
                            >
                              <div className="flag-box">
                                <div className="iti-flag kr" />
                              </div>
                              <span className="country-name">South Korea</span>
                              <span className="dial-code">+82</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={211}
                              data-country-code="ss"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ss" />
                              </div>
                              <span className="country-name">South Sudan</span>
                              <span className="dial-code">+211</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={34}
                              data-country-code="es"
                            >
                              <div className="flag-box">
                                <div className="iti-flag es" />
                              </div>
                              <span className="country-name">Spain </span>
                              <span className="dial-code">+34</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={94}
                              data-country-code="lk"
                            >
                              <div className="flag-box">
                                <div className="iti-flag lk" />
                              </div>
                              <span className="country-name">Sri Lanka </span>
                              <span className="dial-code">+94</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={249}
                              data-country-code="sd"
                            >
                              <div className="flag-box">
                                <div className="iti-flag sd" />
                              </div>
                              <span className="country-name">Sudan</span>
                              <span className="dial-code">+249</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={597}
                              data-country-code="sr"
                            >
                              <div className="flag-box">
                                <div className="iti-flag sr" />
                              </div>
                              <span className="country-name">Suriname</span>
                              <span className="dial-code">+597</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={47}
                              data-country-code="sj"
                            >
                              <div className="flag-box">
                                <div className="iti-flag sj" />
                              </div>
                              <span className="country-name">
                                Svalbard and Jan Mayen
                              </span>
                              <span className="dial-code">+47</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={268}
                              data-country-code="sz"
                            >
                              <div className="flag-box">
                                <div className="iti-flag sz" />
                              </div>
                              <span className="country-name">Swaziland</span>
                              <span className="dial-code">+268</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={46}
                              data-country-code="se"
                            >
                              <div className="flag-box">
                                <div className="iti-flag se" />
                              </div>
                              <span className="country-name">Sweden</span>
                              <span className="dial-code">+46</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={41}
                              data-country-code="ch"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ch" />
                              </div>
                              <span className="country-name">Switzerland</span>
                              <span className="dial-code">+41</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={963}
                              data-country-code="sy"
                            >
                              <div className="flag-box">
                                <div className="iti-flag sy" />
                              </div>
                              <span className="country-name">Syria </span>
                              <span className="dial-code">+963</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={886}
                              data-country-code="tw"
                            >
                              <div className="flag-box">
                                <div className="iti-flag tw" />
                              </div>
                              <span className="country-name">Taiwan</span>
                              <span className="dial-code">+886</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={992}
                              data-country-code="tj"
                            >
                              <div className="flag-box">
                                <div className="iti-flag tj" />
                              </div>
                              <span className="country-name">Tajikistan</span>
                              <span className="dial-code">+992</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={255}
                              data-country-code="tz"
                            >
                              <div className="flag-box">
                                <div className="iti-flag tz" />
                              </div>
                              <span className="country-name">Tanzania</span>
                              <span className="dial-code">+255</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={66}
                              data-country-code="th"
                            >
                              <div className="flag-box">
                                <div className="iti-flag th" />
                              </div>
                              <span className="country-name">Thailand</span>
                              <span className="dial-code">+66</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={670}
                              data-country-code="tl"
                            >
                              <div className="flag-box">
                                <div className="iti-flag tl" />
                              </div>
                              <span className="country-name">Timor-Leste</span>
                              <span className="dial-code">+670</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={228}
                              data-country-code="tg"
                            >
                              <div className="flag-box">
                                <div className="iti-flag tg" />
                              </div>
                              <span className="country-name">Togo</span>
                              <span className="dial-code">+228</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={690}
                              data-country-code="tk"
                            >
                              <div className="flag-box">
                                <div className="iti-flag tk" />
                              </div>
                              <span className="country-name">Tokelau</span>
                              <span className="dial-code">+690</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={676}
                              data-country-code="to"
                            >
                              <div className="flag-box">
                                <div className="iti-flag to" />
                              </div>
                              <span className="country-name">Tonga</span>
                              <span className="dial-code">+676</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1868}
                              data-country-code="tt"
                            >
                              <div className="flag-box">
                                <div className="iti-flag tt" />
                              </div>
                              <span className="country-name">
                                Trinidad and Tobago
                              </span>
                              <span className="dial-code">+1868</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={216}
                              data-country-code="tn"
                            >
                              <div className="flag-box">
                                <div className="iti-flag tn" />
                              </div>
                              <span className="country-name">Tunisia</span>
                              <span className="dial-code">+216</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={90}
                              data-country-code="tr"
                            >
                              <div className="flag-box">
                                <div className="iti-flag tr" />
                              </div>
                              <span className="country-name">Turkey</span>
                              <span className="dial-code">+90</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={993}
                              data-country-code="tm"
                            >
                              <div className="flag-box">
                                <div className="iti-flag tm" />
                              </div>
                              <span className="country-name">Turkmenistan</span>
                              <span className="dial-code">+993</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1649}
                              data-country-code="tc"
                            >
                              <div className="flag-box">
                                <div className="iti-flag tc" />
                              </div>
                              <span className="country-name">
                                Turks and Caicos Islands
                              </span>
                              <span className="dial-code">+1649</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={688}
                              data-country-code="tv"
                            >
                              <div className="flag-box">
                                <div className="iti-flag tv" />
                              </div>
                              <span className="country-name">Tuvalu</span>
                              <span className="dial-code">+688</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1340}
                              data-country-code="vi"
                            >
                              <div className="flag-box">
                                <div className="iti-flag vi" />
                              </div>
                              <span className="country-name">
                                U.S. Virgin Islands
                              </span>
                              <span className="dial-code">+1340</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={256}
                              data-country-code="ug"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ug" />
                              </div>
                              <span className="country-name">Uganda</span>
                              <span className="dial-code">+256</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={380}
                              data-country-code="ua"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ua" />
                              </div>
                              <span className="country-name">Ukraine</span>
                              <span className="dial-code">+380</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={971}
                              data-country-code="ae"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ae" />
                              </div>
                              <span className="country-name">
                                United Arab Emirates
                              </span>
                              <span className="dial-code">+971</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={44}
                              data-country-code="gb"
                            >
                              <div className="flag-box">
                                <div className="iti-flag gb" />
                              </div>
                              <span className="country-name">
                                United Kingdom
                              </span>
                              <span className="dial-code">+44</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={1}
                              data-country-code="us"
                            >
                              <div className="flag-box">
                                <div className="iti-flag us" />
                              </div>
                              <span className="country-name">
                                United States
                              </span>
                              <span className="dial-code">+1</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={598}
                              data-country-code="uy"
                            >
                              <div className="flag-box">
                                <div className="iti-flag uy" />
                              </div>
                              <span className="country-name">Uruguay</span>
                              <span className="dial-code">+598</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={998}
                              data-country-code="uz"
                            >
                              <div className="flag-box">
                                <div className="iti-flag uz" />
                              </div>
                              <span className="country-name">Uzbekistan</span>
                              <span className="dial-code">+998</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={678}
                              data-country-code="vu"
                            >
                              <div className="flag-box">
                                <div className="iti-flag vu" />
                              </div>
                              <span className="country-name">Vanuatu</span>
                              <span className="dial-code">+678</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={39}
                              data-country-code="va"
                            >
                              <div className="flag-box">
                                <div className="iti-flag va" />
                              </div>
                              <span className="country-name">Vatican City</span>
                              <span className="dial-code">+39</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={58}
                              data-country-code="ve"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ve" />
                              </div>
                              <span className="country-name">Venezuela</span>
                              <span className="dial-code">+58</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={84}
                              data-country-code="vn"
                            >
                              <div className="flag-box">
                                <div className="iti-flag vn" />
                              </div>
                              <span className="country-name">Vietnam</span>
                              <span className="dial-code">+84</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={681}
                              data-country-code="wf"
                            >
                              <div className="flag-box">
                                <div className="iti-flag wf" />
                              </div>
                              <span className="country-name">
                                Wallis and Futuna
                              </span>
                              <span className="dial-code">+681</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={212}
                              data-country-code="eh"
                            >
                              <div className="flag-box">
                                <div className="iti-flag eh" />
                              </div>
                              <span className="country-name">
                                Western Sahara
                              </span>
                              <span className="dial-code">+212</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={967}
                              data-country-code="ye"
                            >
                              <div className="flag-box">
                                <div className="iti-flag ye" />
                              </div>
                              <span className="country-name">Yemen</span>
                              <span className="dial-code">+967</span>
                            </li>
                            <li
                              className="country"
                              data-dial-code={260}
                              data-country-code="zm"
                            >
                              <div className="flag-box">
                                <div className="iti-flag zm" />
                              </div>
                              <span className="country-name">Zambia</span>
                              <span className="dial-code">+260</span>
                            </li>
                            <li
                              className="country last"
                              data-dial-code={263}
                              data-country-code="zw"
                            >
                              <div className="flag-box">
                                <div className="iti-flag zw" />
                              </div>
                              <span className="country-name">Zimbabwe</span>
                              <span className="dial-code">+263</span>
                            </li>
                          </ul>
                        </div>
                        <input
                          name="Number"
                          id="phone-country"
                          className="phone-c phone-country"
                          required=""
                          type="text"
                          minLength={10}
                          maxLength={10}
                          autoComplete="off"
                          // onkeypress="return ((event.charCode >= 48 && event.charCode <= 57) )"
                          placeholder="Phone Number"
                          style={{ marginBottom: "10px!important" }}
                        />
                      </div>
                    </div>
<div className="col-md-6 ">
                    <div className="form-floating">
                     <select
  className="form-select"
  id="floatingSelect"
  required
  name="Services"
  aria-label="Floating label select example"
  defaultValue="ghostwriting"
>
  <option value="ghostwriting">ghostwriting</option>
  <option value="book cover">book cover</option>
  <option value="illustration">illustration</option>
  <option value="publishing">publishing</option>
</select>

                      <label htmlFor="floatingSelect" style={{ color: "#000" }}>
                        Select Service
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="form-floating">
                     <select
  className="form-select"
  id="floatingSelect"
  required
  name="budget"
  aria-label="Floating label select example"
  defaultValue="£999-£2000"
>
  <option value="£999-£2000">£999-£2000</option>
  <option value="£2000-£3000">£2000-£3000</option>
  <option value="£3000-£4000">£3000-£4000</option>
  <option value="£4000-£5000">£4000-£5000</option>
</select>

                      <label htmlFor="floatingSelect" style={{ color: "#000" }}>
                        Select Budget
                      </label>
                    </div>
                  </div>
                    <div className="col-md-12">
                      <button type="submit" className="submit">
                        Submit
                        <i className="fa-solid fa-arrow-right my-icon" />
                      </button>
                      {/*<a href="javascript:;" class='submit'>Submit<i class="fa-solid fa-arrow-right"></i></a>*/}
                    </div>
                  </div>
                  <input
                    type="hidden"
                    name="ctry"
                    defaultValue="Pakistan Pakistan Pakistan Pakistan "
                  />
                  <input
                    type="hidden"
                    name="cip"
                    defaultValue="103.74.21.183"
                  />
                  <input type="hidden" name="pc" defaultValue="+92+92+92+92" />
                  <input type="hidden" name="hiddencapcha" defaultValue="" />
                  <input
                    type="hidden"
                    id="location"
                    name="locationURL"
                    defaultValue="http://hireaghostwriter.co.uk/"
                  />
                </form>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <ul className="contact-details">
                    <li className="first">
                      <a href="javascript:;">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                        <strong>Head office:</strong>124 City Road London ,
                        <br />
                        United Kingdom EC1V 2NP
                      </a>
                    </li>
                    <li className="last">
                      <a href="javascript:;">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                        <strong>Corporate office:</strong>4900 California Ave,
                        <br /> Bakersfield, CA 93309, USA
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="contact-details">
                    <li className="first">
                      <a href="tel:+447418620480">
                        <i className="fa fa-phone-square" aria-hidden="true" />
                        +44 7418620480 (UK)
                      </a>
                    </li>
                    <li>
                      <a href="tel:+14099043404">
                        <i className="fa fa-phone-square" aria-hidden="true" />
                        +1 (409) 9043404 (USA)
                      </a>
                    </li>
                    <li className="last">
                      <a href="mailto:info@hireaghostwriter.co.uk">
                        <i className="fa fa-envelope-o" aria-hidden="true" />
                        info@hireaghostwriter.co.uk
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 float-right">
              <ul className="contact-details pri">
                <li className="first">
                  <p>
                    <a href="https://hireaghostwriter.co.uk/terms-conditions.php">
                      Terms &amp; Conditions
                    </a>{" "}
                    &nbsp; | &nbsp;{" "}
                    <a href="https://hireaghostwriter.co.uk/privacypolicy.php">
                      Privacy Policy
                    </a>
                  </p>
                </li>
                <li className="last">
                  <a href="javascript:;">
                    © 2025 Hire A Ghost Writer. All rights reserved.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/*float form start*/}
  <div className={`floatbutton ${isActive ? 'active' : ''}`}>
 
       {/* <div className="floatbutton"> */}
         <div className="btns_wrap">
           <a href="javascript:void(Tawk_API.toggle())" className="chat_wrap">
             <span className="icoo">
 <SiGooglemessages />
             </span>
             {/* <SiGooglemessages /> */}
 
             <span>Chat With Us</span>
           </a>
           <a href="tel:+447418620480" className="call_wrap">
             <span className="icoo">
 <BsTelephone />
 
               {/* <i className="fa fa-phone" /> */}
             </span>
             <span> +44 741 862 0480 </span>
           </a>
         </div>
         {/* <div className="clickbutton">
           <div className="crossplus"> LET'S GET STARTED</div>
         </div> */}
         
               <div
         className="clickbutton"
         onClick={() => setIsActive(!isActive)}
       >
         <div className="crossplus">LET'S GET STARTED</div>
       </div>
         <div className="banner-form">
           <h3>
             Sign Up Now &amp; <br />
             <strong>Let’s Get Started</strong>
           </h3>
           <div className="banform">
             <div className="container">
               <div className="row">
                 <div className="ban-form">
                   <form
                     className="cmxform"
                     id="bannerform"
                     method="POST"
                     action="webpages/bottomFormController.php"
                   >
                     <div className="row">
                       <div className="col-lg-12">
                         <div className="fldset">
                           <input
                             // onkeypress="return ((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32))"
                             id="username"
                             name="Name"
                             minLength={2}
                             type="text"
                             placeholder="Your Name"
                             required=""
                           />
                         </div>
                       </div>
                       <div className="col-lg-12">
                         <div className="fldset">
                           <input
                             id="cemail"
                             type="email"
                             name="Email"
                             placeholder="Your Email"
                             required=""
                           />
                         </div>
                       </div>
                       <div className="col-lg-12">
                         <div className="fldset">
                           <div className="intl-tel-input allow-dropdown separate-dial-code iti-sdc-3">
                             <div className="flag-container">
                               <div
                                 className="selected-flag"
                                 tabIndex={0}
                                 title="Pakistan : +92"
                               >
                                 <div className="iti-flag pk" />
                                 <div className="selected-dial-code">+92</div>
                                 <div className="iti-arrow" />
                               </div>
                               <ul className="country-list hide">
                                 <li
                                   className="country preferred first"
                                   data-dial-code={1}
                                   data-country-code="us"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag us" />
                                   </div>
                                   <span className="country-name">
                                     United States
                                   </span>
                                   <span className="dial-code">+1</span>
                                 </li>
                                 <li
                                   className="country preferred"
                                   data-dial-code={44}
                                   data-country-code="gb"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gb" />
                                   </div>
                                   <span className="country-name">
                                     United Kingdom
                                   </span>
                                   <span className="dial-code">+44</span>
                                 </li>
                                 <li className="divider" />
                                 <li
                                   className="country"
                                   data-dial-code={93}
                                   data-country-code="af"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag af" />
                                   </div>
                                   <span className="country-name">
                                     Afghanistan
                                   </span>
                                   <span className="dial-code">+93</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={358}
                                   data-country-code="ax"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ax" />
                                   </div>
                                   <span className="country-name">
                                     Aland Islands
                                   </span>
                                   <span className="dial-code">+358</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={355}
                                   data-country-code="al"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag al" />
                                   </div>
                                   <span className="country-name">Albania </span>
                                   <span className="dial-code">+355</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={213}
                                   data-country-code="dz"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag dz" />
                                   </div>
                                   <span className="country-name">Algeria</span>
                                   <span className="dial-code">+213</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1684}
                                   data-country-code="as"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag as" />
                                   </div>
                                   <span className="country-name">
                                     American Samoa
                                   </span>
                                   <span className="dial-code">+1684</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={244}
                                   data-country-code="ao"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ao" />
                                   </div>
                                   <span className="country-name">Angola</span>
                                   <span className="dial-code">+244</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1264}
                                   data-country-code="ai"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ai" />
                                   </div>
                                   <span className="country-name">Anguilla</span>
                                   <span className="dial-code">+1264</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1268}
                                   data-country-code="ag"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ag" />
                                   </div>
                                   <span className="country-name">
                                     Antigua and Barbuda
                                   </span>
                                   <span className="dial-code">+1268</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={54}
                                   data-country-code="ar"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ar" />
                                   </div>
                                   <span className="country-name">
                                     Argentina
                                   </span>
                                   <span className="dial-code">+54</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={374}
                                   data-country-code="am"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag am" />
                                   </div>
                                   <span className="country-name">Armenia </span>
                                   <span className="dial-code">+374</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={297}
                                   data-country-code="aw"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag aw" />
                                   </div>
                                   <span className="country-name">Aruba</span>
                                   <span className="dial-code">+297</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={61}
                                   data-country-code="au"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag au" />
                                   </div>
                                   <span className="country-name">
                                     Australia
                                   </span>
                                   <span className="dial-code">+61</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={43}
                                   data-country-code="at"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag at" />
                                   </div>
                                   <span className="country-name">Austria </span>
                                   <span className="dial-code">+43</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={994}
                                   data-country-code="az"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag az" />
                                   </div>
                                   <span className="country-name">
                                     Azerbaijan
                                   </span>
                                   <span className="dial-code">+994</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1242}
                                   data-country-code="bs"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag bs" />
                                   </div>
                                   <span className="country-name">Bahamas</span>
                                   <span className="dial-code">+1242</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={973}
                                   data-country-code="bh"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag bh" />
                                   </div>
                                   <span className="country-name">Bahrain</span>
                                   <span className="dial-code">+973</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={880}
                                   data-country-code="bd"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag bd" />
                                   </div>
                                   <span className="country-name">
                                     Bangladesh
                                   </span>
                                   <span className="dial-code">+880</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1246}
                                   data-country-code="bb"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag bb" />
                                   </div>
                                   <span className="country-name">Barbados</span>
                                   <span className="dial-code">+1246</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={375}
                                   data-country-code="by"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag by" />
                                   </div>
                                   <span className="country-name">Belarus</span>
                                   <span className="dial-code">+375</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={32}
                                   data-country-code="be"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag be" />
                                   </div>
                                   <span className="country-name">Belgium</span>
                                   <span className="dial-code">+32</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={501}
                                   data-country-code="bz"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag bz" />
                                   </div>
                                   <span className="country-name">Belize</span>
                                   <span className="dial-code">+501</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={229}
                                   data-country-code="bj"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag bj" />
                                   </div>
                                   <span className="country-name">Benin</span>
                                   <span className="dial-code">+229</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1441}
                                   data-country-code="bm"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag bm" />
                                   </div>
                                   <span className="country-name">Bermuda</span>
                                   <span className="dial-code">+1441</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={975}
                                   data-country-code="bt"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag bt" />
                                   </div>
                                   <span className="country-name">Bhutan </span>
                                   <span className="dial-code">+975</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={591}
                                   data-country-code="bo"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag bo" />
                                   </div>
                                   <span className="country-name">Bolivia</span>
                                   <span className="dial-code">+591</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={387}
                                   data-country-code="ba"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ba" />
                                   </div>
                                   <span className="country-name">
                                     Bosnia and Herzegovina{" "}
                                   </span>
                                   <span className="dial-code">+387</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={267}
                                   data-country-code="bw"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag bw" />
                                   </div>
                                   <span className="country-name">Botswana</span>
                                   <span className="dial-code">+267</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={55}
                                   data-country-code="br"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag br" />
                                   </div>
                                   <span className="country-name">Brazil</span>
                                   <span className="dial-code">+55</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={246}
                                   data-country-code="io"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag io" />
                                   </div>
                                   <span className="country-name">
                                     British Indian Ocean Territory
                                   </span>
                                   <span className="dial-code">+246</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1284}
                                   data-country-code="vg"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag vg" />
                                   </div>
                                   <span className="country-name">
                                     British Virgin Islands
                                   </span>
                                   <span className="dial-code">+1284</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={673}
                                   data-country-code="bn"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag bn" />
                                   </div>
                                   <span className="country-name">Brunei</span>
                                   <span className="dial-code">+673</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={359}
                                   data-country-code="bg"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag bg" />
                                   </div>
                                   <span className="country-name">
                                     Bulgaria{" "}
                                   </span>
                                   <span className="dial-code">+359</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={226}
                                   data-country-code="bf"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag bf" />
                                   </div>
                                   <span className="country-name">
                                     Burkina Faso
                                   </span>
                                   <span className="dial-code">+226</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={257}
                                   data-country-code="bi"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag bi" />
                                   </div>
                                   <span className="country-name">Burundi</span>
                                   <span className="dial-code">+257</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={855}
                                   data-country-code="kh"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag kh" />
                                   </div>
                                   <span className="country-name">
                                     Cambodia{" "}
                                   </span>
                                   <span className="dial-code">+855</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={237}
                                   data-country-code="cm"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag cm" />
                                   </div>
                                   <span className="country-name">
                                     Cameroon{" "}
                                   </span>
                                   <span className="dial-code">+237</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1}
                                   data-country-code="ca"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ca" />
                                   </div>
                                   <span className="country-name">Canada</span>
                                   <span className="dial-code">+1</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={238}
                                   data-country-code="cv"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag cv" />
                                   </div>
                                   <span className="country-name">
                                     Cape Verde
                                   </span>
                                   <span className="dial-code">+238</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={599}
                                   data-country-code="bq"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag bq" />
                                   </div>
                                   <span className="country-name">
                                     Caribbean Netherlands
                                   </span>
                                   <span className="dial-code">+599</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1345}
                                   data-country-code="ky"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ky" />
                                   </div>
                                   <span className="country-name">
                                     Cayman Islands
                                   </span>
                                   <span className="dial-code">+1345</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={236}
                                   data-country-code="cf"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag cf" />
                                   </div>
                                   <span className="country-name">
                                     Central African Republic
                                   </span>
                                   <span className="dial-code">+236</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={235}
                                   data-country-code="td"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag td" />
                                   </div>
                                   <span className="country-name">Chad</span>
                                   <span className="dial-code">+235</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={56}
                                   data-country-code="cl"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag cl" />
                                   </div>
                                   <span className="country-name">Chile</span>
                                   <span className="dial-code">+56</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={86}
                                   data-country-code="cn"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag cn" />
                                   </div>
                                   <span className="country-name">China</span>
                                   <span className="dial-code">+86</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={61}
                                   data-country-code="cx"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag cx" />
                                   </div>
                                   <span className="country-name">
                                     Christmas Island
                                   </span>
                                   <span className="dial-code">+61</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={61}
                                   data-country-code="cc"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag cc" />
                                   </div>
                                   <span className="country-name">Cocos</span>
                                   <span className="dial-code">+61</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={57}
                                   data-country-code="co"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag co" />
                                   </div>
                                   <span className="country-name">Colombia</span>
                                   <span className="dial-code">+57</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={269}
                                   data-country-code="km"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag km" />
                                   </div>
                                   <span className="country-name">Comoros </span>
                                   <span className="dial-code">+269</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={242}
                                   data-country-code="cg"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag cg" />
                                   </div>
                                   <span className="country-name">Congo</span>
                                   <span className="dial-code">+242</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={682}
                                   data-country-code="ck"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ck" />
                                   </div>
                                   <span className="country-name">
                                     Cook Islands
                                   </span>
                                   <span className="dial-code">+682</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={506}
                                   data-country-code="cr"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag cr" />
                                   </div>
                                   <span className="country-name">
                                     Costa Rica
                                   </span>
                                   <span className="dial-code">+506</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={225}
                                   data-country-code="ci"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ci" />
                                   </div>
                                   <span className="country-name">
                                     Cote d'Ivoire
                                   </span>
                                   <span className="dial-code">+225</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={385}
                                   data-country-code="hr"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag hr" />
                                   </div>
                                   <span className="country-name">Croatia</span>
                                   <span className="dial-code">+385</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={53}
                                   data-country-code="cu"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag cu" />
                                   </div>
                                   <span className="country-name">Cuba</span>
                                   <span className="dial-code">+53</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={599}
                                   data-country-code="cw"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag cw" />
                                   </div>
                                   <span className="country-name">Curacao</span>
                                   <span className="dial-code">+599</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={357}
                                   data-country-code="cy"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag cy" />
                                   </div>
                                   <span className="country-name">Cyprus</span>
                                   <span className="dial-code">+357</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={420}
                                   data-country-code="cz"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag cz" />
                                   </div>
                                   <span className="country-name">
                                     Czech Republic
                                   </span>
                                   <span className="dial-code">+420</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={45}
                                   data-country-code="dk"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag dk" />
                                   </div>
                                   <span className="country-name">Denmark</span>
                                   <span className="dial-code">+45</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={253}
                                   data-country-code="dj"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag dj" />
                                   </div>
                                   <span className="country-name">Djibouti</span>
                                   <span className="dial-code">+253</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1767}
                                   data-country-code="dm"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag dm" />
                                   </div>
                                   <span className="country-name">Dominica</span>
                                   <span className="dial-code">+1767</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1}
                                   data-country-code="do"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag do" />
                                   </div>
                                   <span className="country-name">
                                     Dominican Republic
                                   </span>
                                   <span className="dial-code">+1</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={243}
                                   data-country-code="cd"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag cd" />
                                   </div>
                                   <span className="country-name">DR Congo</span>
                                   <span className="dial-code">+243</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={593}
                                   data-country-code="ec"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ec" />
                                   </div>
                                   <span className="country-name">Ecuador</span>
                                   <span className="dial-code">+593</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={20}
                                   data-country-code="eg"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag eg" />
                                   </div>
                                   <span className="country-name">Egypt</span>
                                   <span className="dial-code">+20</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={503}
                                   data-country-code="sv"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag sv" />
                                   </div>
                                   <span className="country-name">
                                     El Salvador
                                   </span>
                                   <span className="dial-code">+503</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={240}
                                   data-country-code="gq"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gq" />
                                   </div>
                                   <span className="country-name">
                                     Equatorial Guinea
                                   </span>
                                   <span className="dial-code">+240</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={291}
                                   data-country-code="er"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag er" />
                                   </div>
                                   <span className="country-name">Eritrea</span>
                                   <span className="dial-code">+291</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={372}
                                   data-country-code="ee"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ee" />
                                   </div>
                                   <span className="country-name">
                                     Estonia (Eesti)
                                   </span>
                                   <span className="dial-code">+372</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={251}
                                   data-country-code="et"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag et" />
                                   </div>
                                   <span className="country-name">Ethiopia</span>
                                   <span className="dial-code">+251</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={500}
                                   data-country-code="fk"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag fk" />
                                   </div>
                                   <span className="country-name">
                                     Falkland Islands
                                   </span>
                                   <span className="dial-code">+500</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={298}
                                   data-country-code="fo"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag fo" />
                                   </div>
                                   <span className="country-name">
                                     Faroe Islands
                                   </span>
                                   <span className="dial-code">+298</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={679}
                                   data-country-code="fj"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag fj" />
                                   </div>
                                   <span className="country-name">Fiji</span>
                                   <span className="dial-code">+679</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={358}
                                   data-country-code="fi"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag fi" />
                                   </div>
                                   <span className="country-name">Finland</span>
                                   <span className="dial-code">+358</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={33}
                                   data-country-code="fr"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag fr" />
                                   </div>
                                   <span className="country-name">France</span>
                                   <span className="dial-code">+33</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={594}
                                   data-country-code="gf"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gf" />
                                   </div>
                                   <span className="country-name">
                                     French Guiana{" "}
                                   </span>
                                   <span className="dial-code">+594</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={689}
                                   data-country-code="pf"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag pf" />
                                   </div>
                                   <span className="country-name">
                                     French Polynesia
                                   </span>
                                   <span className="dial-code">+689</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={241}
                                   data-country-code="ga"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ga" />
                                   </div>
                                   <span className="country-name">Gabon</span>
                                   <span className="dial-code">+241</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={220}
                                   data-country-code="gm"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gm" />
                                   </div>
                                   <span className="country-name">Gambia</span>
                                   <span className="dial-code">+220</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={995}
                                   data-country-code="ge"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ge" />
                                   </div>
                                   <span className="country-name">Georgia</span>
                                   <span className="dial-code">+995</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={49}
                                   data-country-code="de"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag de" />
                                   </div>
                                   <span className="country-name">Germany</span>
                                   <span className="dial-code">+49</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={233}
                                   data-country-code="gh"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gh" />
                                   </div>
                                   <span className="country-name">Ghana</span>
                                   <span className="dial-code">+233</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={350}
                                   data-country-code="gi"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gi" />
                                   </div>
                                   <span className="country-name">
                                     Gibraltar
                                   </span>
                                   <span className="dial-code">+350</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={30}
                                   data-country-code="gr"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gr" />
                                   </div>
                                   <span className="country-name">Greece</span>
                                   <span className="dial-code">+30</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={299}
                                   data-country-code="gl"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gl" />
                                   </div>
                                   <span className="country-name">
                                     Greenland
                                   </span>
                                   <span className="dial-code">+299</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1473}
                                   data-country-code="gd"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gd" />
                                   </div>
                                   <span className="country-name">Grenada</span>
                                   <span className="dial-code">+1473</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={590}
                                   data-country-code="gp"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gp" />
                                   </div>
                                   <span className="country-name">
                                     Guadeloupe
                                   </span>
                                   <span className="dial-code">+590</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1671}
                                   data-country-code="gu"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gu" />
                                   </div>
                                   <span className="country-name">Guam</span>
                                   <span className="dial-code">+1671</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={502}
                                   data-country-code="gt"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gt" />
                                   </div>
                                   <span className="country-name">
                                     Guatemala
                                   </span>
                                   <span className="dial-code">+502</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={44}
                                   data-country-code="gg"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gg" />
                                   </div>
                                   <span className="country-name">Guernsey</span>
                                   <span className="dial-code">+44</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={224}
                                   data-country-code="gn"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gn" />
                                   </div>
                                   <span className="country-name">Guinea</span>
                                   <span className="dial-code">+224</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={245}
                                   data-country-code="gw"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gw" />
                                   </div>
                                   <span className="country-name">
                                     Guinea-Bissau
                                   </span>
                                   <span className="dial-code">+245</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={592}
                                   data-country-code="gy"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gy" />
                                   </div>
                                   <span className="country-name">Guyana</span>
                                   <span className="dial-code">+592</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={509}
                                   data-country-code="ht"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ht" />
                                   </div>
                                   <span className="country-name">Haiti</span>
                                   <span className="dial-code">+509</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={504}
                                   data-country-code="hn"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag hn" />
                                   </div>
                                   <span className="country-name">Honduras</span>
                                   <span className="dial-code">+504</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={852}
                                   data-country-code="hk"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag hk" />
                                   </div>
                                   <span className="country-name">
                                     Hong Kong
                                   </span>
                                   <span className="dial-code">+852</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={36}
                                   data-country-code="hu"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag hu" />
                                   </div>
                                   <span className="country-name">Hungary</span>
                                   <span className="dial-code">+36</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={354}
                                   data-country-code="is"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag is" />
                                   </div>
                                   <span className="country-name">Iceland</span>
                                   <span className="dial-code">+354</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={91}
                                   data-country-code="in"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag in" />
                                   </div>
                                   <span className="country-name">India</span>
                                   <span className="dial-code">+91</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={62}
                                   data-country-code="id"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag id" />
                                   </div>
                                   <span className="country-name">
                                     Indonesia
                                   </span>
                                   <span className="dial-code">+62</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={98}
                                   data-country-code="ir"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ir" />
                                   </div>
                                   <span className="country-name">Iran </span>
                                   <span className="dial-code">+98</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={964}
                                   data-country-code="iq"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag iq" />
                                   </div>
                                   <span className="country-name">Iraq </span>
                                   <span className="dial-code">+964</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={353}
                                   data-country-code="ie"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ie" />
                                   </div>
                                   <span className="country-name">Ireland</span>
                                   <span className="dial-code">+353</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={44}
                                   data-country-code="im"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag im" />
                                   </div>
                                   <span className="country-name">
                                     Isle of Man
                                   </span>
                                   <span className="dial-code">+44</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={972}
                                   data-country-code="il"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag il" />
                                   </div>
                                   <span className="country-name">Israel</span>
                                   <span className="dial-code">+972</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={39}
                                   data-country-code="it"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag it" />
                                   </div>
                                   <span className="country-name">Italy</span>
                                   <span className="dial-code">+39</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1876}
                                   data-country-code="jm"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag jm" />
                                   </div>
                                   <span className="country-name">Jamaica</span>
                                   <span className="dial-code">+1876</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={81}
                                   data-country-code="jp"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag jp" />
                                   </div>
                                   <span className="country-name">Japan </span>
                                   <span className="dial-code">+81</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={44}
                                   data-country-code="je"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag je" />
                                   </div>
                                   <span className="country-name">Jersey</span>
                                   <span className="dial-code">+44</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={962}
                                   data-country-code="jo"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag jo" />
                                   </div>
                                   <span className="country-name">Jordan </span>
                                   <span className="dial-code">+962</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={7}
                                   data-country-code="kz"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag kz" />
                                   </div>
                                   <span className="country-name">
                                     Kazakhstan
                                   </span>
                                   <span className="dial-code">+7</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={254}
                                   data-country-code="ke"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ke" />
                                   </div>
                                   <span className="country-name">Kenya</span>
                                   <span className="dial-code">+254</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={686}
                                   data-country-code="ki"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ki" />
                                   </div>
                                   <span className="country-name">Kiribati</span>
                                   <span className="dial-code">+686</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={383}
                                   data-country-code="xk"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag xk" />
                                   </div>
                                   <span className="country-name">Kosovo</span>
                                   <span className="dial-code">+383</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={965}
                                   data-country-code="kw"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag kw" />
                                   </div>
                                   <span className="country-name">Kuwait</span>
                                   <span className="dial-code">+965</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={996}
                                   data-country-code="kg"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag kg" />
                                   </div>
                                   <span className="country-name">
                                     Kyrgyzstan{" "}
                                   </span>
                                   <span className="dial-code">+996</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={856}
                                   data-country-code="la"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag la" />
                                   </div>
                                   <span className="country-name">Laos</span>
                                   <span className="dial-code">+856</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={371}
                                   data-country-code="lv"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag lv" />
                                   </div>
                                   <span className="country-name">Latvia</span>
                                   <span className="dial-code">+371</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={961}
                                   data-country-code="lb"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag lb" />
                                   </div>
                                   <span className="country-name">Lebanon</span>
                                   <span className="dial-code">+961</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={266}
                                   data-country-code="ls"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ls" />
                                   </div>
                                   <span className="country-name">Lesotho</span>
                                   <span className="dial-code">+266</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={231}
                                   data-country-code="lr"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag lr" />
                                   </div>
                                   <span className="country-name">Liberia</span>
                                   <span className="dial-code">+231</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={218}
                                   data-country-code="ly"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ly" />
                                   </div>
                                   <span className="country-name">Libya</span>
                                   <span className="dial-code">+218</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={423}
                                   data-country-code="li"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag li" />
                                   </div>
                                   <span className="country-name">
                                     Liechtenstein
                                   </span>
                                   <span className="dial-code">+423</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={370}
                                   data-country-code="lt"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag lt" />
                                   </div>
                                   <span className="country-name">
                                     Lithuania
                                   </span>
                                   <span className="dial-code">+370</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={352}
                                   data-country-code="lu"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag lu" />
                                   </div>
                                   <span className="country-name">
                                     Luxembourg
                                   </span>
                                   <span className="dial-code">+352</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={853}
                                   data-country-code="mo"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mo" />
                                   </div>
                                   <span className="country-name">Macau</span>
                                   <span className="dial-code">+853</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={389}
                                   data-country-code="mk"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mk" />
                                   </div>
                                   <span className="country-name">
                                     Macedonia
                                   </span>
                                   <span className="dial-code">+389</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={261}
                                   data-country-code="mg"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mg" />
                                   </div>
                                   <span className="country-name">
                                     Madagascar
                                   </span>
                                   <span className="dial-code">+261</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={265}
                                   data-country-code="mw"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mw" />
                                   </div>
                                   <span className="country-name">Malawi</span>
                                   <span className="dial-code">+265</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={60}
                                   data-country-code="my"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag my" />
                                   </div>
                                   <span className="country-name">Malaysia</span>
                                   <span className="dial-code">+60</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={960}
                                   data-country-code="mv"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mv" />
                                   </div>
                                   <span className="country-name">Maldives</span>
                                   <span className="dial-code">+960</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={223}
                                   data-country-code="ml"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ml" />
                                   </div>
                                   <span className="country-name">Mali</span>
                                   <span className="dial-code">+223</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={356}
                                   data-country-code="mt"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mt" />
                                   </div>
                                   <span className="country-name">Malta</span>
                                   <span className="dial-code">+356</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={692}
                                   data-country-code="mh"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mh" />
                                   </div>
                                   <span className="country-name">
                                     Marshall Islands
                                   </span>
                                   <span className="dial-code">+692</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={596}
                                   data-country-code="mq"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mq" />
                                   </div>
                                   <span className="country-name">
                                     Martinique
                                   </span>
                                   <span className="dial-code">+596</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={222}
                                   data-country-code="mr"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mr" />
                                   </div>
                                   <span className="country-name">
                                     Mauritania
                                   </span>
                                   <span className="dial-code">+222</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={230}
                                   data-country-code="mu"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mu" />
                                   </div>
                                   <span className="country-name">
                                     Mauritius
                                   </span>
                                   <span className="dial-code">+230</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={262}
                                   data-country-code="yt"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag yt" />
                                   </div>
                                   <span className="country-name">Mayotte</span>
                                   <span className="dial-code">+262</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={52}
                                   data-country-code="mx"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mx" />
                                   </div>
                                   <span className="country-name">Mexico</span>
                                   <span className="dial-code">+52</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={691}
                                   data-country-code="fm"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag fm" />
                                   </div>
                                   <span className="country-name">
                                     Micronesia
                                   </span>
                                   <span className="dial-code">+691</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={373}
                                   data-country-code="md"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag md" />
                                   </div>
                                   <span className="country-name">Moldova</span>
                                   <span className="dial-code">+373</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={377}
                                   data-country-code="mc"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mc" />
                                   </div>
                                   <span className="country-name">Monaco</span>
                                   <span className="dial-code">+377</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={976}
                                   data-country-code="mn"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mn" />
                                   </div>
                                   <span className="country-name">Mongolia</span>
                                   <span className="dial-code">+976</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={382}
                                   data-country-code="me"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag me" />
                                   </div>
                                   <span className="country-name">
                                     Montenegro
                                   </span>
                                   <span className="dial-code">+382</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1664}
                                   data-country-code="ms"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ms" />
                                   </div>
                                   <span className="country-name">
                                     Montserrat
                                   </span>
                                   <span className="dial-code">+1664</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={212}
                                   data-country-code="ma"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ma" />
                                   </div>
                                   <span className="country-name">Morocco</span>
                                   <span className="dial-code">+212</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={258}
                                   data-country-code="mz"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mz" />
                                   </div>
                                   <span className="country-name">
                                     Mozambique
                                   </span>
                                   <span className="dial-code">+258</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={95}
                                   data-country-code="mm"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mm" />
                                   </div>
                                   <span className="country-name">Myanmar</span>
                                   <span className="dial-code">+95</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={264}
                                   data-country-code="na"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag na" />
                                   </div>
                                   <span className="country-name">Namibia</span>
                                   <span className="dial-code">+264</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={674}
                                   data-country-code="nr"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag nr" />
                                   </div>
                                   <span className="country-name">Nauru</span>
                                   <span className="dial-code">+674</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={977}
                                   data-country-code="np"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag np" />
                                   </div>
                                   <span className="country-name">Nepal</span>
                                   <span className="dial-code">+977</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={31}
                                   data-country-code="nl"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag nl" />
                                   </div>
                                   <span className="country-name">
                                     Netherlands
                                   </span>
                                   <span className="dial-code">+31</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={687}
                                   data-country-code="nc"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag nc" />
                                   </div>
                                   <span className="country-name">
                                     New Caledonia
                                   </span>
                                   <span className="dial-code">+687</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={64}
                                   data-country-code="nz"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag nz" />
                                   </div>
                                   <span className="country-name">
                                     New Zealand
                                   </span>
                                   <span className="dial-code">+64</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={505}
                                   data-country-code="ni"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ni" />
                                   </div>
                                   <span className="country-name">
                                     Nicaragua
                                   </span>
                                   <span className="dial-code">+505</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={227}
                                   data-country-code="ne"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ne" />
                                   </div>
                                   <span className="country-name">Niger</span>
                                   <span className="dial-code">+227</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={234}
                                   data-country-code="ng"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ng" />
                                   </div>
                                   <span className="country-name">Nigeria</span>
                                   <span className="dial-code">+234</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={683}
                                   data-country-code="nu"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag nu" />
                                   </div>
                                   <span className="country-name">Niue</span>
                                   <span className="dial-code">+683</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={672}
                                   data-country-code="nf"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag nf" />
                                   </div>
                                   <span className="country-name">
                                     Norfolk Island
                                   </span>
                                   <span className="dial-code">+672</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={850}
                                   data-country-code="kp"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag kp" />
                                   </div>
                                   <span className="country-name">
                                     North Korea
                                   </span>
                                   <span className="dial-code">+850</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1670}
                                   data-country-code="mp"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mp" />
                                   </div>
                                   <span className="country-name">
                                     Northern Mariana Islands
                                   </span>
                                   <span className="dial-code">+1670</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={47}
                                   data-country-code="no"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag no" />
                                   </div>
                                   <span className="country-name">Norway</span>
                                   <span className="dial-code">+47</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={968}
                                   data-country-code="om"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag om" />
                                   </div>
                                   <span className="country-name">Oman</span>
                                   <span className="dial-code">+968</span>
                                 </li>
                                 <li
                                   className="country active"
                                   data-dial-code={92}
                                   data-country-code="pk"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag pk" />
                                   </div>
                                   <span className="country-name">
                                     Pakistan{" "}
                                   </span>
                                   <span className="dial-code">+92</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={680}
                                   data-country-code="pw"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag pw" />
                                   </div>
                                   <span className="country-name">Palau</span>
                                   <span className="dial-code">+680</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={970}
                                   data-country-code="ps"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ps" />
                                   </div>
                                   <span className="country-name">
                                     Palestine
                                   </span>
                                   <span className="dial-code">+970</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={507}
                                   data-country-code="pa"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag pa" />
                                   </div>
                                   <span className="country-name">Panama</span>
                                   <span className="dial-code">+507</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={675}
                                   data-country-code="pg"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag pg" />
                                   </div>
                                   <span className="country-name">
                                     Papua New Guinea
                                   </span>
                                   <span className="dial-code">+675</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={595}
                                   data-country-code="py"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag py" />
                                   </div>
                                   <span className="country-name">Paraguay</span>
                                   <span className="dial-code">+595</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={51}
                                   data-country-code="pe"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag pe" />
                                   </div>
                                   <span className="country-name">Peru</span>
                                   <span className="dial-code">+51</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={63}
                                   data-country-code="ph"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ph" />
                                   </div>
                                   <span className="country-name">
                                     Philippines
                                   </span>
                                   <span className="dial-code">+63</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={48}
                                   data-country-code="pl"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag pl" />
                                   </div>
                                   <span className="country-name">Poland </span>
                                   <span className="dial-code">+48</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={351}
                                   data-country-code="pt"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag pt" />
                                   </div>
                                   <span className="country-name">Portugal</span>
                                   <span className="dial-code">+351</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1}
                                   data-country-code="pr"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag pr" />
                                   </div>
                                   <span className="country-name">
                                     Puerto Rico
                                   </span>
                                   <span className="dial-code">+1</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={974}
                                   data-country-code="qa"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag qa" />
                                   </div>
                                   <span className="country-name">Qatar</span>
                                   <span className="dial-code">+974</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={262}
                                   data-country-code="re"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag re" />
                                   </div>
                                   <span className="country-name">Reunion</span>
                                   <span className="dial-code">+262</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={40}
                                   data-country-code="ro"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ro" />
                                   </div>
                                   <span className="country-name">Romania </span>
                                   <span className="dial-code">+40</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={7}
                                   data-country-code="ru"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ru" />
                                   </div>
                                   <span className="country-name">Russia</span>
                                   <span className="dial-code">+7</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={250}
                                   data-country-code="rw"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag rw" />
                                   </div>
                                   <span className="country-name">Rwanda</span>
                                   <span className="dial-code">+250</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={590}
                                   data-country-code="bl"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag bl" />
                                   </div>
                                   <span className="country-name">
                                     Saint Barthelemy
                                   </span>
                                   <span className="dial-code">+590</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={290}
                                   data-country-code="sh"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag sh" />
                                   </div>
                                   <span className="country-name">
                                     Saint Helena
                                   </span>
                                   <span className="dial-code">+290</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1869}
                                   data-country-code="kn"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag kn" />
                                   </div>
                                   <span className="country-name">
                                     Saint Kitts and Nevis
                                   </span>
                                   <span className="dial-code">+1869</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1758}
                                   data-country-code="lc"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag lc" />
                                   </div>
                                   <span className="country-name">
                                     Saint Lucia
                                   </span>
                                   <span className="dial-code">+1758</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={590}
                                   data-country-code="mf"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag mf" />
                                   </div>
                                   <span className="country-name">
                                     Saint Martin
                                   </span>
                                   <span className="dial-code">+590</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={508}
                                   data-country-code="pm"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag pm" />
                                   </div>
                                   <span className="country-name">
                                     Saint Pierre and Miquelon
                                   </span>
                                   <span className="dial-code">+508</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1784}
                                   data-country-code="vc"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag vc" />
                                   </div>
                                   <span className="country-name">
                                     Saint Vincent and the Grenadines
                                   </span>
                                   <span className="dial-code">+1784</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={685}
                                   data-country-code="ws"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ws" />
                                   </div>
                                   <span className="country-name">Samoa</span>
                                   <span className="dial-code">+685</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={378}
                                   data-country-code="sm"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag sm" />
                                   </div>
                                   <span className="country-name">
                                     San Marino
                                   </span>
                                   <span className="dial-code">+378</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={239}
                                   data-country-code="st"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag st" />
                                   </div>
                                   <span className="country-name">
                                     Sao Tome and Principe
                                   </span>
                                   <span className="dial-code">+239</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={966}
                                   data-country-code="sa"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag sa" />
                                   </div>
                                   <span className="country-name">
                                     Saudi Arabia
                                   </span>
                                   <span className="dial-code">+966</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={221}
                                   data-country-code="sn"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag sn" />
                                   </div>
                                   <span className="country-name">Senegal</span>
                                   <span className="dial-code">+221</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={381}
                                   data-country-code="rs"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag rs" />
                                   </div>
                                   <span className="country-name">Serbia</span>
                                   <span className="dial-code">+381</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={248}
                                   data-country-code="sc"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag sc" />
                                   </div>
                                   <span className="country-name">
                                     Seychelles
                                   </span>
                                   <span className="dial-code">+248</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={232}
                                   data-country-code="sl"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag sl" />
                                   </div>
                                   <span className="country-name">
                                     Sierra Leone
                                   </span>
                                   <span className="dial-code">+232</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={65}
                                   data-country-code="sg"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag sg" />
                                   </div>
                                   <span className="country-name">
                                     Singapore
                                   </span>
                                   <span className="dial-code">+65</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1721}
                                   data-country-code="sx"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag sx" />
                                   </div>
                                   <span className="country-name">
                                     Sint Maarten
                                   </span>
                                   <span className="dial-code">+1721</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={421}
                                   data-country-code="sk"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag sk" />
                                   </div>
                                   <span className="country-name">Slovakia</span>
                                   <span className="dial-code">+421</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={386}
                                   data-country-code="si"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag si" />
                                   </div>
                                   <span className="country-name">Slovenia</span>
                                   <span className="dial-code">+386</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={677}
                                   data-country-code="sb"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag sb" />
                                   </div>
                                   <span className="country-name">
                                     Solomon Islands
                                   </span>
                                   <span className="dial-code">+677</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={252}
                                   data-country-code="so"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag so" />
                                   </div>
                                   <span className="country-name">Somalia</span>
                                   <span className="dial-code">+252</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={27}
                                   data-country-code="za"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag za" />
                                   </div>
                                   <span className="country-name">
                                     South Africa
                                   </span>
                                   <span className="dial-code">+27</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={82}
                                   data-country-code="kr"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag kr" />
                                   </div>
                                   <span className="country-name">
                                     South Korea
                                   </span>
                                   <span className="dial-code">+82</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={211}
                                   data-country-code="ss"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ss" />
                                   </div>
                                   <span className="country-name">
                                     South Sudan
                                   </span>
                                   <span className="dial-code">+211</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={34}
                                   data-country-code="es"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag es" />
                                   </div>
                                   <span className="country-name">Spain </span>
                                   <span className="dial-code">+34</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={94}
                                   data-country-code="lk"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag lk" />
                                   </div>
                                   <span className="country-name">
                                     Sri Lanka{" "}
                                   </span>
                                   <span className="dial-code">+94</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={249}
                                   data-country-code="sd"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag sd" />
                                   </div>
                                   <span className="country-name">Sudan</span>
                                   <span className="dial-code">+249</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={597}
                                   data-country-code="sr"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag sr" />
                                   </div>
                                   <span className="country-name">Suriname</span>
                                   <span className="dial-code">+597</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={47}
                                   data-country-code="sj"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag sj" />
                                   </div>
                                   <span className="country-name">
                                     Svalbard and Jan Mayen
                                   </span>
                                   <span className="dial-code">+47</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={268}
                                   data-country-code="sz"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag sz" />
                                   </div>
                                   <span className="country-name">
                                     Swaziland
                                   </span>
                                   <span className="dial-code">+268</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={46}
                                   data-country-code="se"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag se" />
                                   </div>
                                   <span className="country-name">Sweden</span>
                                   <span className="dial-code">+46</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={41}
                                   data-country-code="ch"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ch" />
                                   </div>
                                   <span className="country-name">
                                     Switzerland
                                   </span>
                                   <span className="dial-code">+41</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={963}
                                   data-country-code="sy"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag sy" />
                                   </div>
                                   <span className="country-name">Syria </span>
                                   <span className="dial-code">+963</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={886}
                                   data-country-code="tw"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag tw" />
                                   </div>
                                   <span className="country-name">Taiwan</span>
                                   <span className="dial-code">+886</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={992}
                                   data-country-code="tj"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag tj" />
                                   </div>
                                   <span className="country-name">
                                     Tajikistan
                                   </span>
                                   <span className="dial-code">+992</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={255}
                                   data-country-code="tz"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag tz" />
                                   </div>
                                   <span className="country-name">Tanzania</span>
                                   <span className="dial-code">+255</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={66}
                                   data-country-code="th"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag th" />
                                   </div>
                                   <span className="country-name">Thailand</span>
                                   <span className="dial-code">+66</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={670}
                                   data-country-code="tl"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag tl" />
                                   </div>
                                   <span className="country-name">
                                     Timor-Leste
                                   </span>
                                   <span className="dial-code">+670</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={228}
                                   data-country-code="tg"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag tg" />
                                   </div>
                                   <span className="country-name">Togo</span>
                                   <span className="dial-code">+228</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={690}
                                   data-country-code="tk"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag tk" />
                                   </div>
                                   <span className="country-name">Tokelau</span>
                                   <span className="dial-code">+690</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={676}
                                   data-country-code="to"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag to" />
                                   </div>
                                   <span className="country-name">Tonga</span>
                                   <span className="dial-code">+676</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1868}
                                   data-country-code="tt"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag tt" />
                                   </div>
                                   <span className="country-name">
                                     Trinidad and Tobago
                                   </span>
                                   <span className="dial-code">+1868</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={216}
                                   data-country-code="tn"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag tn" />
                                   </div>
                                   <span className="country-name">Tunisia</span>
                                   <span className="dial-code">+216</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={90}
                                   data-country-code="tr"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag tr" />
                                   </div>
                                   <span className="country-name">Turkey</span>
                                   <span className="dial-code">+90</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={993}
                                   data-country-code="tm"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag tm" />
                                   </div>
                                   <span className="country-name">
                                     Turkmenistan
                                   </span>
                                   <span className="dial-code">+993</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1649}
                                   data-country-code="tc"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag tc" />
                                   </div>
                                   <span className="country-name">
                                     Turks and Caicos Islands
                                   </span>
                                   <span className="dial-code">+1649</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={688}
                                   data-country-code="tv"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag tv" />
                                   </div>
                                   <span className="country-name">Tuvalu</span>
                                   <span className="dial-code">+688</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1340}
                                   data-country-code="vi"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag vi" />
                                   </div>
                                   <span className="country-name">
                                     U.S. Virgin Islands
                                   </span>
                                   <span className="dial-code">+1340</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={256}
                                   data-country-code="ug"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ug" />
                                   </div>
                                   <span className="country-name">Uganda</span>
                                   <span className="dial-code">+256</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={380}
                                   data-country-code="ua"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ua" />
                                   </div>
                                   <span className="country-name">Ukraine</span>
                                   <span className="dial-code">+380</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={971}
                                   data-country-code="ae"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ae" />
                                   </div>
                                   <span className="country-name">
                                     United Arab Emirates
                                   </span>
                                   <span className="dial-code">+971</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={44}
                                   data-country-code="gb"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag gb" />
                                   </div>
                                   <span className="country-name">
                                     United Kingdom
                                   </span>
                                   <span className="dial-code">+44</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={1}
                                   data-country-code="us"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag us" />
                                   </div>
                                   <span className="country-name">
                                     United States
                                   </span>
                                   <span className="dial-code">+1</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={598}
                                   data-country-code="uy"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag uy" />
                                   </div>
                                   <span className="country-name">Uruguay</span>
                                   <span className="dial-code">+598</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={998}
                                   data-country-code="uz"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag uz" />
                                   </div>
                                   <span className="country-name">
                                     Uzbekistan
                                   </span>
                                   <span className="dial-code">+998</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={678}
                                   data-country-code="vu"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag vu" />
                                   </div>
                                   <span className="country-name">Vanuatu</span>
                                   <span className="dial-code">+678</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={39}
                                   data-country-code="va"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag va" />
                                   </div>
                                   <span className="country-name">
                                     Vatican City
                                   </span>
                                   <span className="dial-code">+39</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={58}
                                   data-country-code="ve"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ve" />
                                   </div>
                                   <span className="country-name">
                                     Venezuela
                                   </span>
                                   <span className="dial-code">+58</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={84}
                                   data-country-code="vn"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag vn" />
                                   </div>
                                   <span className="country-name">Vietnam</span>
                                   <span className="dial-code">+84</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={681}
                                   data-country-code="wf"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag wf" />
                                   </div>
                                   <span className="country-name">
                                     Wallis and Futuna
                                   </span>
                                   <span className="dial-code">+681</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={212}
                                   data-country-code="eh"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag eh" />
                                   </div>
                                   <span className="country-name">
                                     Western Sahara
                                   </span>
                                   <span className="dial-code">+212</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={967}
                                   data-country-code="ye"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag ye" />
                                   </div>
                                   <span className="country-name">Yemen</span>
                                   <span className="dial-code">+967</span>
                                 </li>
                                 <li
                                   className="country"
                                   data-dial-code={260}
                                   data-country-code="zm"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag zm" />
                                   </div>
                                   <span className="country-name">Zambia</span>
                                   <span className="dial-code">+260</span>
                                 </li>
                                 <li
                                   className="country last"
                                   data-dial-code={263}
                                   data-country-code="zw"
                                 >
                                   <div className="flag-box">
                                     <div className="iti-flag zw" />
                                   </div>
                                   <span className="country-name">Zimbabwe</span>
                                   <span className="dial-code">+263</span>
                                 </li>
                               </ul>
                             </div>
                             <input
                               name="Number"
                               id="phone-country"
                               className="phone-float"
                               required=""
                               type="text"
                               minLength={10}
                               maxLength={10}
                               autoComplete="off"
                               // onkeypress="return ((event.charCode >= 48 && event.charCode <= 57) )"
                               placeholder="Contact Number"
                             />
                           </div>
                         </div>
                       </div>
                       <div className="col-lg-12">
                         <div className="fldset">
                           <textarea
                             name="Message"
                             id=""
                             rows={7}
                             placeholder="Talk About Your Project"
                             defaultValue={""}
                           />
                         </div>
                       </div>
                       <div className="col-lg-12">
                         <div className="fldset">
                           <input
                             name="submit"
                             type="submit"
                             placeholder="Connect With Us"
                             required=""
                           />
                           <input
                             type="hidden"
                             name="hiddencapcha"
                             defaultValue=""
                           />
                           <input
                             type="hidden"
                             name="ctry"
                             defaultValue="Pakistan Pakistan Pakistan Pakistan "
                           />
                           <input
                             type="hidden"
                             name="pc"
                             defaultValue="+92+92+92+92"
                           />
                           <input
                             type="hidden"
                             name="cip"
                             defaultValue="103.74.21.183"
                           />
                           <input
                             type="hidden"
                             id="location"
                             name="locationURL"
                             defaultValue="http://hireaghostwriter.co.uk/"
                           />
                           <input
                             type="hidden"
                             id="location"
                             name="Form_name"
                             defaultValue="Floating Form"
                           />
                         </div>
                       </div>
                     </div>
                   </form>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
      {/*float form end*/}
      {/* popup */}

<div className={`form-container popupform   ${isOpen ? "visibleit": "hidden"}`} id="popupform">
          {/* <a href="javascript:;" title="" className="close" /> */}
                <a
        href="#"
        title="Close"
        className="close"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(false);    
          console.log("Popup closed, isOpen:", isOpen);
        }}
        // onClick={setIsOpen(false)}
      >
        &times;
      </a>
          <h4>PROFESSIONAL GHOSTWRITING SERVICES</h4>
          <h3>
            HIRE A GHOSTWRITER:
            <br /> A ONE-STOP-SOLUTION FOR ALL YOUR BOOK PUBLISHING NEEDS
          </h3>
          <form
            action="webpages/bottomFormController.php"
            className="contact-form"
            method="POST"
          >
            <div className="row">
              <div className="col-md-6 ">
                <input
                  type="text"
                  placeholder="Full Name"
                  required=""
                  name="Name"
                />
              </div>
              <div className="col-md-6 ">
                <input
                  type="email"
                  name="Email"
                  required=""
                  placeholder="Email Address*"
                />
              </div>
              <div className="col-md-12 ">
                <input
                  name="Number"
                  id="phone-country"
                  className="phone-popup phone-country"
                  required=""
                  type="text"
                  minLength={10}
                  maxLength={10}
                  autoComplete="off"
                  // onkeypress="return ((event.charCode >= 48 && event.charCode <= 57) )"
                  placeholder="Phone Number"
                  style={{ marginBottom: "10px!important" }}
                />
              </div>
              <div className="col-md-6 ">
                <div className="form-floating">
                  {/* <select
                    className="form-select"
                    id="floatingSelect"
                    name="Services"
                    required=""
                    aria-label="Floating label select example"
                  >
                    <option selected="" value="ghostwriting">
                      ghostwriting
                    </option>
                    <option value="book cover">book cover</option>
                    <option value="illustration">illustration</option>
                    <option value="publishing">publishing</option>
                  </select> */}
                  <label htmlFor="floatingSelect" style={{ color: "#000" }}>
                    Select Service
                  </label>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="form-floating">
                  {/* <select
                    className="form-select"
                    id="floatingSelect"
                    name="budget"
                    required=""
                    aria-label="Floating label select example"
                  >
                    <option selected="" value="£999-£2000">
                      £999-£2000
                    </option>
                    <option value="£2000-£3000">£2000-£3000</option>
                    <option value="£3000-£4000">£3000-£4000</option>
                    <option value="£4000-£5000">£4000-£5000</option>
                  </select> */}
                  <label htmlFor="floatingSelect" style={{ color: "#000" }}>
                    Select Budget
                  </label>
                </div>
              </div>
              <input type="hidden" name="hiddencapcha" defaultValue="" />
              <input type="hidden" name="ctry" defaultValue="" />
              <input type="hidden" name="pc" defaultValue="" />
              <input type="hidden" name="cip" />
              <input
                type="hidden"
                id="location"
                name="locationURL"
                defaultValue="http://hireaghostwriter.co.uk/book-cover-design.php"
              />
              <input
                type="hidden"
                id="location"
                name="Form_name"
                defaultValue="Floating Form"
              />
              <div className="col-md-12">
                <button type="submit" className="submit">
                  Submit
                  <i className="fa-solid fa-arrow-right my-icon" />
                </button>
              </div>
            </div>
          </form>
        </div>

<div
  className="cus-overlay"
  style={{ display: isOpen ? "block" : "none" }}
/>
      // <iframe
      //   height={0}
      //   width={0}
      //   style={{ display: "none", visibility: "hidden" }}
      // />
      // <div id="wl8a1qgod97o1757974395354" className="widget-visible">
      //   <iframe
      //     src="about:blank"
      //     frameBorder={0}
      //     scrolling="no"
      //     width="64px"
      //     height="60px"
      //     style={{
      //       outline: "none !important",
      //       visibility: "visible !important",
      //       resize: "none !important",
      //       boxShadow: "none !important",
      //       overflow: "visible !important",
      //       background: "none !important",
      //       opacity: "1 !important",
      //       filter: "alpha(opacity=100) !important",
      //       msFilter:
      //         "progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important",
      //       MzOpacity: "1 !important",
      //       KhtmlOpacity: "1 !important",
      //       top: "auto !important",
      //       right: "20px !important",
      //       bottom: "20px !important",
      //       left: "auto !important",
      //       position: "fixed !important",
      //       border: "0 !important",
      //       minHeight: "60px !important",
      //       minWidth: "64px !important",
      //       maxHeight: "60px !important",
      //       maxWidth: "64px !important",
      //       padding: "0 !important",
      //       margin: "0 !important",
      //       MozTransitionProperty: "none !important",
      //       WebkitTransitionProperty: "none !important",
      //       OTransitionProperty: "none !important",
      //       transitionProperty: "none !important",
      //       transform: "none !important",
      //       WebkitTransform: "none !important",
      //       msTransform: "none !important",
      //       width: "64px !important",
      //       height: "60px !important",
      //       display: "block !important",
      //       zIndex: "1000003 !important",
      //       backgroundColor: "transparent !important",
      //       cursor: "none !important",
      //       float: "none !important",
      //       borderRadius: "unset !important",
      //       pointerEvents: "auto !important",
      //       clip: "auto !important",
      //       colorScheme: "light !important",
      //     }}
      //     id="y0bpvg0ldlb1757974395507"
      //     className=""
      //     title="chat widget"
      //   />
      //   <iframe
      //     src="about:blank"
      //     frameBorder={0}
      //     scrolling="no"
      //     width="350px"
      //     height="520px"
      //     style={{
      //       outline: "none !important",
      //       visibility: "visible !important",
      //       resize: "none !important",
      //       boxShadow: "none !important",
      //       overflow: "visible !important",
      //       background: "none !important",
      //       opacity: "1 !important",
      //       filter: "alpha(opacity=100) !important",
      //       msFilter:
      //         "progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important",
      //       MzOpacity: "1 !important",
      //       KhtmlOpacity: "1 !important",
      //       top: "auto !important",
      //       right: "20px !important",
      //       bottom: "98px !important",
      //       left: "auto !important",
      //       position: "fixed !important",
      //       border: "0 !important",
      //       minHeight: "520px !important",
      //       minWidth: "350px !important",
      //       maxHeight: "520px !important",
      //       maxWidth: "350px !important",
      //       padding: "0 !important",
      //       margin: "0 !important",
      //       MozTransitionProperty: "none !important",
      //       WebkitTransitionProperty: "none !important",
      //       OTransitionProperty: "none !important",
      //       transitionProperty: "none !important",
      //       transform: "none !important",
      //       WebkitTransform: "none !important",
      //       msTransform: "none !important",
      //       width: "350px !important",
      //       height: "520px !important",
      //       display: "none !important",
      //       zIndex: "1000002 !important",
      //       backgroundColor: "transparent !important",
      //       cursor: "none !important",
      //       float: "none !important",
      //       borderRadius: "18px !important",
      //       pointerEvents: "auto !important",
      //       clip: "auto !important",
      //       colorScheme: "light !important",
      //     }}
      //     id="fvr008jeaqa81757974395704"
      //     className=""
      //     title="chat widget"
      //   />
      //   <iframe
      //     src="about:blank"
      //     frameBorder={0}
      //     scrolling="no"
      //     height="30px"
      //     style={{
      //       outline: "none !important",
      //       visibility: "visible !important",
      //       resize: "none !important",
      //       boxShadow: "none !important",
      //       overflow: "visible !important",
      //       background: "none !important",
      //       opacity: "1 !important",
      //       filter: "alpha(opacity=100) !important",
      //       msFilter:
      //         "progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important",
      //       MzOpacity: "1 !important",
      //       KhtmlOpacity: "1 !important",
      //       top: "auto !important",
      //       right: "20px !important",
      //       bottom: "30px !important",
      //       left: "auto !important",
      //       position: "fixed !important",
      //       border: "0 !important",
      //       minHeight: "45px !important",
      //       minWidth: "350px !important",
      //       maxHeight: "45px !important",
      //       maxWidth: "350px !important",
      //       padding: "0 !important",
      //       margin: "0 !important",
      //       MozTransitionProperty: "none !important",
      //       WebkitTransitionProperty: "none !important",
      //       OTransitionProperty: "none !important",
      //       transitionProperty: "none !important",
      //       transform: "none !important",
      //       WebkitTransform: "none !important",
      //       msTransform: "none !important",
      //       width: "350px !important",
      //       height: "45px !important",
      //       display: "none !important",
      //       zIndex: "1000002 !important",
      //       backgroundColor: "transparent !important",
      //       cursor: "none !important",
      //       float: "none !important",
      //       borderRadius: "unset !important",
      //       pointerEvents: "auto !important",
      //       clip: "auto !important",
      //       colorScheme: "light !important",
      //     }}
      //     id="b1ut2asqq1bk1757974395752"
      //     className=""
      //     title="chat widget"
      //   />
      //   <iframe
      //     src="about:blank"
      //     frameBorder={0}
      //     scrolling="no"
      //     width="360px"
      //     height="145px"
      //     style={{
      //       outline: "none !important",
      //       visibility: "visible !important",
      //       resize: "none !important",
      //       boxShadow: "none !important",
      //       overflow: "visible !important",
      //       background: "none !important",
      //       opacity: "1 !important",
      //       filter: "alpha(opacity=100) !important",
      //       msFilter:
      //         "progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important",
      //       MzOpacity: "1 !important",
      //       KhtmlOpacity: "1 !important",
      //       top: "auto !important",
      //       right: "20px !important",
      //       bottom: 90,
      //       left: "auto !important",
      //       position: "fixed !important",
      //       border: "0 !important",
      //       minHeight: "145px !important",
      //       minWidth: "360px !important",
      //       maxHeight: "145px !important",
      //       maxWidth: "360px !important",
      //       padding: "0 !important",
      //       margin: "0 !important",
      //       MozTransitionProperty: "none !important",
      //       WebkitTransitionProperty: "none !important",
      //       OTransitionProperty: "none !important",
      //       transitionProperty: "none !important",
      //       transform: "none !important",
      //       WebkitTransform: "none !important",
      //       msTransform: "none !important",
      //       width: "360px !important",
      //       height: "145px !important",
      //       display: "none !important",
      //       zIndex: "auto !important",
      //       backgroundColor: "transparent !important",
      //       cursor: "none !important",
      //       float: "none !important",
      //       borderRadius: "unset !important",
      //       pointerEvents: "auto !important",
      //       clip: "auto !important",
      //       colorScheme: "light !important",
      //     }}
      //     id="inhjbis8531757974395591"
      //     className=""
      //     title="chat widget"
      //   />
      //   <iframe
      //     src="about:blank"
      //     frameBorder={0}
      //     scrolling="no"
      //     width="124px"
      //     height="95px"
      //     style={{
      //       outline: "none !important",
      //       visibility: "visible !important",
      //       resize: "none !important",
      //       boxShadow: "none !important",
      //       overflow: "visible !important",
      //       background: "none !important",
      //       opacity: "1 !important",
      //       filter: "alpha(opacity=100) !important",
      //       msFilter:
      //         "progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important",
      //       MzOpacity: "1 !important",
      //       KhtmlOpacity: "1 !important",
      //       top: "auto !important",
      //       right: "0px !important",
      //       bottom: "30px !important",
      //       left: "auto !important",
      //       position: "fixed !important",
      //       border: "0 !important",
      //       minHeight: "95px !important",
      //       minWidth: "124px !important",
      //       maxHeight: "95px !important",
      //       maxWidth: "124px !important",
      //       padding: "0 !important",
      //       margin: "0px 0 0 0 !important",
      //       MozTransitionProperty: "none !important",
      //       WebkitTransitionProperty: "none !important",
      //       OTransitionProperty: "none !important",
      //       transitionProperty: "none !important",
      //       transform: "rotate(0deg) translateZ(0)",
      //       WebkitTransform: "rotate(0deg) translateZ(0)",
      //       msTransform: "rotate(0deg) translateZ(0)",
      //       width: "124px !important",
      //       height: "95px !important",
      //       display: "block !important",
      //       zIndex: "1000004 !important",
      //       backgroundColor: "transparent !important",
      //       cursor: "none !important",
      //       float: "none !important",
      //       borderRadius: "unset !important",
      //       pointerEvents: "auto !important",
      //       clip: "auto !important",
      //       colorScheme: "light !important",
      //       MozTransform: "rotate(0deg) translateZ(0)",
      //       OTransform: "rotate(0deg) translateZ(0)",
      //       transformOrigin: 0,
      //       MozTransformOrigin: 0,
      //       WebkitTransformOrigin: 0,
      //       OTransformOrigin: 0,
      //       msTransformOrigin: 0,
      //     }}
      //     id="jqfjgc91sujg1757974395551"
      //     className=""
      //     title="chat widget"
      //   />
      // </div>
    </>
  );
}