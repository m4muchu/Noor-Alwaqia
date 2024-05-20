"use client";
import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import HeroSection from "@/src/components/hero-section";
import Header from "@/src/components/header";
import AboutUs from "../../components/about-us/about-us";
import Products from "../../components/products";
import Contact from "../../components/contact";
import { NAV_LINK_TEXT } from "../consts/nav.enum";

function Home() {
  const heroSectionRef = useRef(null);
  const aboutUsRef = useRef(null);
  const productsRef = useRef(null);
  const contactRef = useRef(null);
  const [currentNav, setCurrentNav] = useState("");

  const onHandleSelectedNav = (nav: string) => {
    setCurrentNav(nav);
    let selectedRefNav;

    if (nav === NAV_LINK_TEXT[0]) {
      selectedRefNav = heroSectionRef;
    } else if (nav === NAV_LINK_TEXT[1]) {
      selectedRefNav = aboutUsRef;
    } else if (nav === NAV_LINK_TEXT[2]) {
      selectedRefNav = productsRef;
    } else if (nav === NAV_LINK_TEXT[3]) {
      selectedRefNav = contactRef;
    } else {
      selectedRefNav = heroSectionRef;
    }

    // @ts-expect-error
    if (selectedRefNav?.current?.scrollIntoView) {
      // @ts-expect-error
      selectedRefNav?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Header
        onHandleSelectedNav={onHandleSelectedNav}
        selectedNav={currentNav}
      />
      <div ref={heroSectionRef}>
        <HeroSection />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={productsRef}>
        <Products />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

Home.propTypes = {};

export default Home;
