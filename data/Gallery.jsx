import React from "react";
import { ProjectGallery, UnderConstruction } from "eportfolio-shared";
import "./Gallery.css"

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroBG from "../assets/Images/Hero/Background.png";
import heroFG from "../assets/Images/Hero/Foreground.png";
import heroP from "../assets/Images/Hero/Photographer.png";
import heroLens from "../assets/Images/Hero/Lens.png";

gsap.registerPlugin(ScrollTrigger);

//import heroImg from "../assets/Images/geeseinvasion.png"

export default function Gallery() {

  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const fgRef = useRef(null);
  const photographerRef = useRef(null);
  const lensRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    const fg = fgRef.current;
    const photographer = photographerRef.current;
    const lens = lensRef.current;

    // 🎥 Photographer zoom-in
    gsap.to(photographer, {
      scale: 2.8,
      y: -150,
      ease: "none",
      transformOrigin: "center bottom",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // 🔍 Lens expand to fill screen
    gsap.to(lens, {
      scale: 15,
      ease: "none",
      transformOrigin: "center",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // 🌄 Background parallax
    gsap.to(bg, {
      y: -120,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // 🌿 Foreground parallax
    gsap.to(fg, {
      y: 60,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      {/* 🌟 HERO SECTION */}
      <section className="gallery-hero" ref={heroRef}>
        <img className="hero-bg" ref={bgRef} src={heroBG} alt="Background" />
        <img className="hero-photographer" ref={photographerRef} src={heroP} alt="Photographer" />
        <img className="hero-fg" ref={fgRef} src={heroFG} alt="Foreground" />
        <img className="hero-lens" ref={lensRef} src={heroLens} alt="Lens" />
      </section>

      {/* 📸 Your actual gallery after the hero */}
      <ProjectGallery
        title="Featured Gallery Projects"
        subtitle="Apps, tools, and experiments inspired by climbing and nature."
        projects={[
          { id: 1, image: heroBG, title: "Gallery Proj 1" },
          { id: 2, image: heroBG, title: "Gallery Proj 2" },
          { id: 3, image: heroBG, title: "Gallery Proj 3" },
        ]}
      />
    </>
  );

  // const GalleryProjects = [
  //   {
  //     id: 1,
  //     image: heroBG,
  //     title: "Gallery Prroj 1",
  //     date: "April 2025",
  //     description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
  //     tags: ["Python"],
  //   },
  //   {
  //     id: 2,
  //     image: heroBG,
  //     title: "Gallery Prroj 2",
  //     date: "April 2025",
  //     description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
  //     tags: ["Python"],
  //   },
  //   {
  //     id: 3,
  //     image: heroBG,
  //     title: "Gallery Prroj 3",
  //     date: "April 2025",
  //     description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
  //     tags: ["Python"],
  //   },
  // ];


  // return (

  //   <UnderConstruction />
    
  //   // <>
  //   //   <section
  //   //     className="codehero"
  //   //     style={{
  //   //       backgroundImage: `url(${heroImg})`, 
  //   //     }}
  //   //   ></section>


  //   //   <ProjectGallery
  //   //     title="Featured Gallery Projects"
  //   //     subtitle="Apps, tools, and experiments inspired by climbing and nature."
  //   //     projects={GalleryProjects}
  //   //   />
  //   // </>
  // );
}
