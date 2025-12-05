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

  const heroBoxRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    const fg = fgRef.current;
    const lens = lensRef.current;
    const overlay = overlayRef.current;
  
    let currentRadius = 0; // needed for overlay update
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom+=1200 top",
        scrub: true,
        pin: true,
        onUpdate: () => {
          const rect = lens.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
  
          gsap.set(overlay, {
            clipPath: `circle(${currentRadius}px at ${cx}px ${cy}px)`,
            webkitClipPath: `circle(${currentRadius}px at ${cx}px ${cy}px)`
          });
        }
      }
    });
  
    // scale & move entire photographer + lens container
    tl.to(heroBoxRef.current, {
      scale: 30,
      y: -3100,
      transformOrigin: "center center",
      ease: "none"
    }, 0);
  
    // parallax
    tl.to(bg, { y: -110, ease: "none" }, 0);
    tl.to(fg, { y: 70, ease: "none" }, 0);
  
    // reveal radius
    const maxR = Math.hypot(window.innerWidth, window.innerHeight);
  
    tl.to({}, {
      currentRadius: maxR,
      ease: "none",
      onUpdate() {
        currentRadius = this.targets()[0].currentRadius;
      }
    }, 0.2);
  
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
          <div className="hero-box" ref={heroBoxRef}>
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
