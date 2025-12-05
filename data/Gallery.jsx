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
  const galleryRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bg = bgRef.current;
    const fg = fgRef.current;
    const lens = lensRef.current;
    const overlay = overlayRef.current;
    const heroBox = heroBoxRef.current;
    const gallery = galleryRef.current;
  
    let portalRadius = 0;
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=1500",
        scrub: true,
        pin: true,
        pinSpacing: false,   // ⬅ prevents gallery from being pushed down
        onUpdate: () => {
          const r = lens.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
  
          gsap.set(overlay, {
            clipPath: `circle(${portalRadius}px at ${cx}px ${cy}px)`
          });
        },
        onLeave: () => {
          gsap.to(gallery, { opacity: 1, duration: 1, ease: "power1.out" });
        }
      }
    });
  
    // 1. Photographer zooms dramatically while staying centered
    tl.to(heroBox, {
      scale: 30,
      y: -2950,
      transformOrigin: "center center",
      ease: "none"
    }, 0);
  
    // 2. Subtle parallax 
    tl.to(bg, { y: -300, scale: 10, ease: "none" }, 0);
    tl.to(fg, { y: 140, scale: 7, ease: "none" }, 0);
  
    // 3. Expand portal radius (lens → entire screen)
    const maxRadius = Math.hypot(window.innerWidth, window.innerHeight);
  
    tl.to({ radius: 0 }, {
      radius: maxRadius,
      ease: "none",
      onUpdate: function () {
        portalRadius = this.targets()[0].radius;
      }
    }, 0.15);
  
    // 4. Fade in the gallery once portal reaches full-screen
    tl.to(gallery, {
      opacity: 1,
      duration: 1,
      ease: "power1.out"
    });
  
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

      <section className="gallery" ref={galleryRef}>
        <ProjectGallery
          title="Featured Gallery Projects"
          subtitle="Apps, tools, and experiments inspired by climbing and nature."
          projects={[
            { id: 1, image: heroBG, title: "Gallery Proj 1" },
            { id: 2, image: heroBG, title: "Gallery Proj 2" },
            { id: 3, image: heroBG, title: "Gallery Proj 3" },
            // { id: 4, image: heroBG, title: "Gallery Proj 4" },
            // { id: 5, image: heroBG, title: "Gallery Proj 5" },
            // { id: 6, image: heroBG, title: "Gallery Proj 6" },
            // { id: 7, image: heroBG, title: "Gallery Proj 7" },
            // { id: 8, image: heroBG, title: "Gallery Proj 8" },
            // { id: 9, image: heroBG, title: "Gallery Proj 9" },
            // { id: 10, image: heroBG, title: "Gallery Proj 10" },
            // { id: 11, image: heroBG, title: "Gallery Proj 11" },
            // { id: 12, image: heroBG, title: "Gallery Proj 12" },
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
