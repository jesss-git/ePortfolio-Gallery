import React from "react";
import { ProjectGallery, UnderConstruction } from "eportfolio-shared";
import "./Gallery.css"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroBG from "../assets/Images/Hero/Background.png";
import heroFG from "../assets/Images/Hero/Foreground.png";
import heroP from "../assets/Images/Hero/Photographer.png";
import heroLens from "../assets/Images/Hero/Lens.png";

gsap.registerPlugin(ScrollTrigger);

//import heroImg from "../assets/Images/geeseinvasion.png"

export default function Gallery() {
  // const GalleryProjects = [
  //   {
  //     id: 1,
  //     image: heroImg,
  //     title: "Gallery Prroj 1",
  //     date: "April 2025",
  //     description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
  //     tags: ["Python"],
  //   },
  //   {
  //     id: 2,
  //     image: heroImg,
  //     title: "Gallery Prroj 2",
  //     date: "April 2025",
  //     description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
  //     tags: ["Python"],
  //   },
  //   {
  //     id: 3,
  //     image: heroImg,
  //     title: "Gallery Prroj 3",
  //     date: "April 2025",
  //     description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
  //     tags: ["Python"],
  //   },
  // ];

  const bgRef = useRef(null);
  const fgRef = useRef(null);
  const photographerRef = useRef(null);
  const lensRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    const fg = fgRef.current;
    const photographer = photographerRef.current;
    const lens = lensRef.current;

    // photographer zoom-in
    gsap.to(photographer, {
      scale: 2.8,
      y: -150,
      transformOrigin: "center bottom",
      ease: "none",
      scrollTrigger: {
        trigger: bg,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // lens expansion
    gsap.to(lens, {
      scale: 15,
      transformOrigin: "center",
      ease: "none",
      scrollTrigger: {
        trigger: bg,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (

    <>
      <section className="photo-hero" ref={bgRef}>
        <img
          src="/assets/Images/Hero/Background.png"
          className="bg-layer"
          alt="bg"
        />

        <img
          src="/assets/Images/Hero/Photographer.png"
          ref={photographerRef}
          className="photographer"
          alt="photographer"
        />

        <img
          src="/assets/Images/Hero/Foreground.png"
          className="fg-layer"
          alt="foreground"
        />

        <img
          src="/assets/Images/Hero/Lens.png"
          ref={lensRef}
          className="lens"
          alt="lens"
        />
      </section>

      <section className="gallery-section">
        <h2>Your Photography Gallery</h2>
        {/* Your photos grid */}
      </section>
    </>


    // <UnderConstruction />
    
    // <>
    //   <section
    //     className="codehero"
    //     style={{
    //       backgroundImage: `url(${heroImg})`, 
    //     }}
    //   ></section>


    //   <ProjectGallery
    //     title="Featured Gallery Projects"
    //     subtitle="Apps, tools, and experiments inspired by climbing and nature."
    //     projects={GalleryProjects}
    //   />
    // </>
  );
}
