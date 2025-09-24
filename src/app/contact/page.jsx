'use client'; 

import { useState } from 'react';
import './../css/font-awesome.min.css';
import './../css/font-awesome.css';
import  './../css/m-style.css'
import  './../css/style-web.css'
import  './../css/style.css'
import { SiGooglemessages } from "react-icons/si";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";

const Contact = () => {
      const [isActive, setIsActive] = useState(false);
    const [isOpen, setIsOpen] = useState(true); // popup initially open

  return (
    <>
      <div>
        <div className="hompg">
          <section className="section-about-main">
            <img
              src="assets/images/ghost-text.webp"
              className="banner-left-text"
              alt="banner-left-text"
            />
            {/* section#1 start */}
            <section className="section1-about">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 m-auto">
                    <h2>Contact Us</h2>
                    <p>
                      Professional Ghostwriting, Editing, And Publishing
                      Services Just A Few Clicks Away
                    </p>
                    <br />
                    <a href="javascript:;" className="view-pricing-txt various">
                      Get a quote
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                    <a href="javascript:void(Tawk_API.toggle())">
                      Let's Chat
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                    <ul className="bannerhead-logo">
                      <li>
                        <img
                          src="assets/images/trustpilot-logo.webp"
                          alt="banner-head-logo"
                        />
                      </li>
                      <li>
                        <img
                          src="assets/images/accredited-logo.webp"
                          alt="banner-head-logo"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 m-auto">
                    <img
                      src="assets/images/contact-banner-img.webp"
                      alt="banner-right-image"
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* section#1 end */}
            {/* section#2 start */}
            <section className="section2-contact">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h2>
                      Got any questions<span>?</span>
                    </h2>
                    <p>
                      We believe that without proper customer service, a
                      business cannot flourish the way it can. That’s why our
                      support team is available 24/7 to answer your queries and
                      assist you. Regardless of the type of query, you may have
                      related to our service, we will gladly answer it. When you
                      become our customer, this customer service will go to the
                      next level.
                    </p>
                    <p>
                      You can call us or just fill out this form below and one
                      of our agents will give you a call as soon as possible to
                      assist you.{" "}
                    </p>
                    <h3>For immediate support, feel free to call us on</h3>

                    <button type="submit" className="submit">
                      Let's Chat
                      <i className="fa-solid fa-arrow-right my-icon" />
                    </button>

                    <a href="tel:+447418620480" className="call-now-btn">
                      <span>+44</span> 741 862 0480
                    </a>
                  </div>
                  <div className="col-md-6">
                    <div className="form-container">
                      <h4>HIRE A GHOSTWRITER</h4>
                      <h3>
                        FOR ALL KINDS OF BOOK WRITING, PUBLISHING &amp;
                        MARKETING SERVICES
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
                              placeholder="Email Address*"
                            />
                          </div>
                          <div className="col-md-12 ">
                            <input
                              name="Number"
                              id="phone-country"
                              required=""
                              className="phone-contact phone-country"
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
                              <select
                                className="form-select"
                                id="floatingSelect"
                                required
                                name="Services"
                                aria-label="Floating label select example"
                                defaultValue="ghostwriting"
                              >
                                <option value="ghostwriting">
                                  ghostwriting
                                </option>
                                <option value="book cover">book cover</option>
                                <option value="illustration">
                                  illustration
                                </option>
                                <option value="publishing">publishing</option>
                              </select>

                              <label
                                htmlFor="floatingSelect"
                                style={{ color: "#000" }}
                              >
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

                              <label
                                htmlFor="floatingSelect"
                                style={{ color: "#000" }}
                              >
                                Select Budget
                              </label>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button type="submit" className="submit">
                              Submit
                              <i className="fa-solid fa-arrow-right my-icon" />
                            </button>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="hiddencapcha"
                          defaultValue=""
                        />
                        <input type="hidden" name="ctry" defaultValue="" />
                        <input type="hidden" name="pc" defaultValue="" />
                        <input type="hidden" name="cip" />
                        <input
                          type="hidden"
                          id="location"
                          name="locationURL"
                          defaultValue="http://hireaghostwriter.co.uk/contact.php"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* section#2 end */}
            <Image
            // <img
              src="/assets/images/banner-winning-img.png"
              className="banner-right-image"
              width={300  }
              height={600}
              alt="banner-left-text"
            />
          </section>


          {/* section#3 start */}
          <section className="section3-contact">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.206930087822!2d-0.09081102301528453!3d51.52669190929333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca671bbca5f%3A0x137edcd9e2d92eb1!2s124%20City%20Rd%2C%20London%20EC1V%202NX%2C%20UK!5e1!3m2!1sen!2s!4v1741291073824!5m2!1sen!2s"
                    width="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <br />
                  <br />
                  {/* <div className="row">
                    <div className="col-md-12">
                      <ul className="banner-logos">
                        <li
                          className="wow fadeInUp animated"
                          data-wow-duration="1.3s"
                          style={{
                            visibility: "visible",
                            animationDuration: "1.3s",
                          }}
                        >
                           <Image
            // <img
              // src="/assets/images/banner-winning-img.png"
              // className="banner-right-image"
              width={300  }
              height={600}
                            src="/assets/images/nyt.png"
                            alt="banner-book-shelf"
                          />
                        </li>
                        <li
                          className="wow fadeInDown animated"
                          data-wow-duration="1.3s"
                          style={{
                            visibility: "visible",
                            animationDuration: "1.3s",
                          }}
                        >
                               <Image
            // <img
              // src="/assets/images/banner-winning-img.png"
              // className="banner-right-image"
              width={300  }
              height={600}
                            src="/assets/images/BarnesNoble.png"
                            alt="banner-book-shelf"
                          />
                        </li>
                        <li
                          className="wow fadeInUp animated"
                          data-wow-duration="1.3s"
                          style={{
                            visibility: "visible",
                            animationDuration: "1.3s",
                          }}
                        >
                               <Image
            // <img
              // src="/assets/images/banner-winning-img.png"
              // className="banner-right-image"
              width={300  }
              height={600}
                            src="/assets/images/amazon.png"
                            alt="banner-book-shelf"
                          />
                        </li>
                        <li
                          className="wow fadeInDown animated"
                          data-wow-duration="1.3s"
                          style={{
                            visibility: "visible",
                            animationDuration: "1.3s",
                          }}
                        >
                               <Image
            // <img
              // src="/assets/images/banner-winning-img.png"
              // className="banner-right-image"
              width={300  }
              height={600}
                            src="/assets/images/iBookStore.png"
                            alt="banner-book-shelf"
                          />
                        </li>
                        <li
                          className="wow fadeInUp animated"
                          data-wow-duration="1.3s"
                          style={{
                            visibility: "visible",
                            animationDuration: "1.3s",
                          }}
                        >
                               <Image
            // <img
              // src="/assets/images/banner-winning-img.png"
              // className="banner-right-image"
              width={300  }
              height={600}
                            src="/assets/images/gwv-lulu.png"
                            alt="banner-book-shelf"
                          />
                        </li>
                        <li
                          className="wow fadeInDown animated"
                          data-wow-duration="1.3s"
                          style={{
                            visibility: "visible",
                            animationDuration: "1.3s",
                          }}
                        >
                               <Image
            // <img
              // src="/assets/images/banner-winning-img.png"
              // className="banner-right-image"
              width={300  }
              height={600}
                            src="/assets/images/gwv-alibris.png"
                            alt="banner-book-shelf"
                          />
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <Image
              src="/assets/images/writer-text.png"
              className="banner-right-text"
              width={300  }
              height={600}
              alt="banner-left-text"
            />
          </section>
          {/* section#2 end */}
          {/* <//?php
			$bottomform = $_SERVER['HTTP_HOST']; 
			$bottomform = $srcurl."bottomform.php"; 
			include($bottomform);  
			?>  */}
          <footer>
            <div className="container">
              <div className="row mb-2">
                <div className="col-md-6">
                  <div className="row mb-4">
                    <div className="col-md-4 m-auto">
                      <img
                        src="assets/images/footer-logo.png"
                        className="logofooter"
                        alt="logo-footer"
                      />
                    </div>
                    <div className="col-md-8 m-auto">
                      <p>
                        Men cannot live by exchanging articles, but producing
                        them. They live by work not trade.
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row mb-2">
                    <div className="col-md-4">
                      <h3>We Offer</h3>
                      <ul>
                        <li>
                          <a href="https://hireaghostwriter.co.uk/memoir-autobiography-ghostwriting">
                            GhostWriting
                          </a>
                        </li>
                        <li>
                          <a href="https://hireaghostwriter.co.uk/book-editing-formatting-services">
                            Book formating
                          </a>
                        </li>
                        <li>
                          <a href="https://hireaghostwriter.co.uk/publishing-consultancy">
                            Publishing
                          </a>
                        </li>
                        <li>
                          <a href="https://hireaghostwriter.co.uk/book-cover-design">
                            Book Cover
                          </a>
                        </li>
                        <li>
                          <a href="https://hireaghostwriter.co.uk/book-editing-formatting-services">
                            Editing
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h3>Main Links</h3>
                      <ul>
                        <li>
                          <a href="https://hireaghostwriter.co.uk/">Home</a>
                        </li>
                        <li>
                          <a href="https://hireaghostwriter.co.uk/about">
                            AboutUs
                          </a>
                        </li>
                        {/* <li><a href="https://hireaghostwriter.co.uk/blog">Blogs</a></li> */}
                        <li>
                          <a href="https://hireaghostwriter.co.uk/book-cover-samples">
                            Portfolio
                          </a>
                        </li>
                        <li>
                          <a href="https://hireaghostwriter.co.uk/contact">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h3>Social Links</h3>
                      <ul>
                        <li>
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
                        <li>
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
                  {/* <div className="form-container">
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
                          placeholder="Full Name"
                          name="Name"
                        />
                      </div>
                      <div className="col-md-6 ">
                        <input
                          type="email"
                          name="Email"
                          placeholder="Email Address*"
                        />
                      </div>
                      <div className="col-md-12 ">
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
                      </div>
                    </div>
                    <input
                      type="hidden"
                      name="ctry"
                      defaultValue="Pakistan Pakistan Pakistan Pakistan Pakistan "
                    />
                    <input
                      type="hidden"
                      name="cip"
                      defaultValue="192.140.145.64"
                    />
                    <input
                      type="hidden"
                      name="pc"
                      defaultValue="+92+92+92+92+92"
                    />
                    <input type="hidden" name="hiddencapcha" defaultValue="" />
                    <input
                      type="hidden"
                      id="location"
                      name="locationURL"
                      defaultValue="http://hireaghostwriter.co.uk/contact.php"
                    />
                  </form>
                </div> */}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="contact-details">
                        <li>
                          <a href="javascript:;">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
                            <strong>Head office:</strong>124 City Road London ,
                            <br />
                            United Kingdom EC1V 2NP
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            />
                            <strong>Corporate office:</strong>4900 California
                            Ave,
                            <br /> Bakersfield, CA 93309, USA
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="contact-details">
                        <li>
                          <a href="tel:+14099043404">
                            <i
                              className="fa fa-phone-square"
                              aria-hidden="true"
                            />
                            +1 (409) 9043404 (USA)
                          </a>
                        </li>
                        <li>
                          <a href="tel:+447418620480">
                            <i
                              className="fa fa-phone-square"
                              aria-hidden="true"
                            />
                            +44 7418620480 (UK)
                          </a>
                        </li>
                        <li>
                          <a href="mailto:info@hireaghostwriter.co.uk">
                            <i
                              className="fa fa-envelope-o"
                              aria-hidden="true"
                            />
                            info@hireaghostwriter.co.uk
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 float-right">
                  <ul className="contact-details pri">
                    <li>
                      <p>
                        <a href="https://hireaghostwriter.co.uk/terms-conditions">
                          Terms &amp; Conditions
                        </a>{" "}
                        &nbsp; | &nbsp;{" "}
                        <a href="https://hireaghostwriter.co.uk/privacypolicy">
                          Privacy Policy
                        </a>
                      </p>
                    </li>
                    <li>
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
          {/* <div className="floatbutton">
          <div className="btns_wrap">
            <a href="javascript:void(Tawk_API.toggle())" className="chat_wrap">
              <span className="icoo">
                <i className="fa fa-comment" />
              </span>
              <span>Chat With Us</span>
            </a>
            <a href="tel:+447418620480" className="call_wrap">
              <span className="icoo">
                <i className="fa fa-phone" />
              </span>
              <span> +44 741 862 0480 </span>
            </a>
          </div>
          <div className="clickbutton">
            <div className="crossplus"> LET'S GET STARTED</div>
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
                            <input
                              name="Number"
                              id="phone-country"
                              className="phone-float"
                              required=""
                              type="text"
                              minLength={10}
                              maxLength={10}
                              autoComplete="off"
                              // onkeypress="return ((event.charCode >= 48 &, event.charCode <= 57) )"
                              placeholder="Contact Number"
                            />
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
                            <input type="hidden" name="ctry" defaultValue="" />
                            <input type="hidden" name="pc" defaultValue="" />
                            <input type="hidden" name="cip" />
                            <input
                              type="hidden"
                              id="location"
                              name="locationURL"
                              defaultValue="http://hireaghostwriter.co.uk/contact.php"
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
        </div> */}

          {/*float form end*/}
          {/* popup */}
          {/* <div style="" class="popupform visibleit" id="popupform">  */}
          {/* <div className="form-container popupform visibleit" id="popupform">
          <a href="javascript:;" title="" className="close" />
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
              <input type="hidden" name="hiddencapcha" defaultValue="" />
              <input type="hidden" name="ctry" defaultValue="" />
              <input type="hidden" name="pc" defaultValue="" />
              <input type="hidden" name="cip" />
              <input
                type="hidden"
                id="location"
                name="locationURL"
                defaultValue="http://hireaghostwriter.co.uk/contact.php"
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
        </div> */}
          {/* <div className="cus-overlay" /> */}
          {/*  */}
        </div>
      </div>


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
    </>
  );
};

export default Contact;
