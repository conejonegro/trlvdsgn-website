"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

const starrySkyOptions = {
    particles: {
        number: { value: 1000, density: { enable: true, area: 800 } },
        color: {
            value: [
                "#ff7f7f", 
                "#7faaff", 
                "#ffffff", 
                "#baffc9"  
            ],
        },
        shape: { type: "circle" },
        opacity: { value: 0.7, random: true },
        size: { value: { min: 0.5, max: 5 }, random: true },
        move: {
            enable: true,
            speed: .5,
            direction: "none",
            outModes: "out",
        },
        links: { enable: false }, // sin líneas
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
        },
        modes: {
            repulse: { distance: 120, duration: 0.4 },
            push: { quantity: 4 },
        },
    },
    detectRetina: true,
};

export function StarField({ className }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {

        initParticlesEngine(async (engine) => {
            await loadAll(engine);
        }).then(() => setReady(true));
        
    }, []);

    return ready ? (
        <Particles className={className} options={starrySkyOptions} />
    ) : null;
}
