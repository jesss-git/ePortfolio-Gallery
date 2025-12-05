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

export default function Gallery() {

  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const fgRef = useRef(null);
  const photographerRef = useRef(null);
  const lensRef = useRef(null);

  const overlayRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    const fg = fgRef.current;
    const photographer = photographerRef.current;
    const lens = lensRef.current;
    const overlay = overlayRef.current;

    // compute lens center in page coords and starting radius
    const lensRect = lens.getBoundingClientRect();
    const startCx = lensRect.left + lensRect.width / 2;
    const startCy = lensRect.top + lensRect.height / 2;
    const startR = Math.max(lensRect.width, lensRect.height) / 2;

    // convert to pixels and set the overlay clip-path initial state (pixel coords)
    gsap.set(overlay, {
      clipPath: `circle(${startR}px at ${startCx}px ${startCy}px)`,
      webkitClipPath: `circle(${startR}px at ${startCx}px ${startCy}px)`,
    });

    // Create timeline and pin the hero
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom+=1200 top",
        scrub: true,
        pin: true,
      },
    });

    // photographer subtle zoom
    tl.to(photographer, {
      scale: 2.6,
      y: -120,
      transformOrigin: "center bottom",
      ease: "none",
    }, 0);

    // keep lens scaling subtle — the overlay does the reveal
    tl.to(lens, {
      scale: 1.8,
      transformOrigin: "center center",
      ease: "none",
    }, 0);

    // background/foreground parallax
    tl.to(bg, { y: -110, ease: "none" }, 0);
    tl.to(fg, { y: 70, ease: "none" }, 0);

    // animate the overlay's clip-path from small circle to LARGE (full screen)
    // compute a big radius that definitely covers the viewport diagonal
    const maxRadius = Math.hypot(window.innerWidth, window.innerHeight);

    tl.to(overlay, {
      clipPath: `circle(${maxRadius}px at ${startCx}px ${startCy}px)`,
      webkitClipPath: `circle(${maxRadius}px at ${startCx}px ${startCy}px)`,
      ease: "none",
    }, 0.6); // start later in the timeline - tweak 0.6 as desired

    // cleanup function is recommended
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      tl.kill();
    };
  }, []);

  

  return (
    <>

      <section className="gallery-hero" ref={heroRef}>
        <img className="hero-bg" ref={bgRef} src={heroBG} alt="Background" />
        <img className="hero-fg" ref={fgRef} src={heroFG} alt="Foreground" />

        <div className="hero-photographer-wrapper">
          <div className="hero-box">
            <img className="hero-photographer" ref={photographerRef} src={heroP} alt="Photographer" />
            <img className="hero-lens" ref={lensRef} src={heroLens} alt="Lens" />
          </div>
        </div>

        <div className="portal-overlay" ref={overlayRef} />

      </section>

      <section className="gallery">
        <ProjectGallery
          title="Featured Gallery Projects"
          subtitle="Apps, tools, and experiments inspired by climbing and nature."
          projects={[
            { id: 1, image: heroBG, title: "Gallery Proj 1" },
            { id: 2, image: heroBG, title: "Gallery Proj 2" },
            { id: 3, image: heroBG, title: "Gallery Proj 3" },
          ]}
        />
      </section>
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
