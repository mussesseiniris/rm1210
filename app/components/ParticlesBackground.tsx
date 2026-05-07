"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      // options={{
      //   background: { color: "#0a0a0a" },
      //   particles: {
      //     number: { value: 80 },
      //     color: { value: ["#ffffff"] },
      //     size: {
      //       value: { min: 1, max: 4 },
      //       animation: {
      //         enable: true,
      //         speed: 3,
      //         sync: false,
      //       },
      //     },
      //     shape: { type: "star" },
      //     mode: { value: "bubble" },
      //     move: { enable: true, speed: 1 },
      //     links: {
      //       enable: false, // 粒子之间连线
      //       color: "#ffffff",
      //       opacity: 0.2,
      //     },
      //     opacity: { value: 0.5 },
      //   },
      //   interactivity: {
      //     events: {
      //       onHover: { enable: true, mode: "repulse" }, // 鼠标推开粒子
      //     },
      //   },
      // }}
className="fixed inset-0 z-50 pointer-events-none" 
      options={{
  background: { color: "white" },
  particles: {
    number: { value: 40 },
    color: { value: ["#ff6b9d", "#9b6bff", "#6bccff"] },
    // shape: { type: "circle" },
//     shape: {
//   type: "image",
//   options: {
//     image: [
//       { src: "/flower.png", width: 100, height: 100 },
//       // { src: "/img2.png", width: 100, height: 100 },
//       // { src: "/img3.png", width: 100, height: 100 },
//     ]
//   }
// },

shape: {
  type: "image",
  options: {
    image: {
      src: "https://img.icons8.com/?size=100&id=2Q20ppfWneqT&format=png&color=000000",
      width: 100,
      height: 100,
    }
  }
},
    size: {
      value: { min: 5, max: 30 },  // 大小不一的泡泡
      animation: {
        enable: true,
        speed: 2,
        sync: false,
      }
    },
    opacity: {
      value: { min: 0.1, max: 0.4 },  // 半透明
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "top",    // 向上飘
      outModes: "out",
    },
    links: { enable: false },  // 不连线
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "bubble" },
      onClick: { enable: true, mode: "push" },  // 点击冒出新泡泡
    },
    modes: {
      bubble: {
        distance: 100,
        size: 40,       // 鼠标靠近泡泡变大
        opacity: 0.6,
      }
    }
  },
}}
    />
  );
}
