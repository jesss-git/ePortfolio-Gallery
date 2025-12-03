import React from "react";
import { ProjectGallery, UnderConstruction } from "eportfolio-shared";
import "./Gallery.css"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroBG from "../assets/Images/Background.png";
import heroFG from "../assets/Images/Foreground.png";
import heroP from "../assets/Images/Photographer.png";
import heroLens from "../assets/Images/Lens.png";

gsap.registerPlugin(ScrollTrigger);

//import heroImg from "../assets/Images/geeseinvasion.png"

export default function Gallery() {
  const GalleryProjects = [
    {
      id: 1,
      image: heroBG,
      title: "Gallery Prroj 1",
      date: "April 2025",
      description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
      tags: ["Python"],
    },
    {
      id: 2,
      image: heroBG,
      title: "Gallery Prroj 2",
      date: "April 2025",
      description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
      tags: ["Python"],
    },
    {
      id: 3,
      image: heroBG,
      title: "Gallery Prroj 3",
      date: "April 2025",
      description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
      tags: ["Python"],
    },
  ];

  return (

    <UnderConstruction />
    
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
