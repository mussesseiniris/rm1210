"use client";
import { useEffect, useRef, useState } from "react";

export default function AnimatedBackground({ children }: { children: React.ReactNode }) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && (window as any).THREE) {
      // @ts-ignore
      import("vanta/dist/vanta.waves.min").then((WAVES) => {
        setVantaEffect(
          WAVES.default({
            el: vantaRef.current,
            THREE: (window as any).THREE,
            mouseControls: true,
            touchControls: true,
            color: 0x1a1a4e,
            shininess: 50,
            waveHeight: 15,
            waveSpeed: 0.75,
            zoom: 0.9,
          })
        );
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

return (
  <div ref={vantaRef} style={{ width: "100vw", height: "100vh" }}>
    <div className="relative z-10 w-full h-full">{children}</div>
  </div>
);
}

