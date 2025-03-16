import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import Globe from "three-globe";

function BasicGlobe() {
    const parentRef = useRef(new THREE.Group()); 
    const globeRef = useRef(null);

    useEffect(() => {
        const globe = new Globe()
            .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
            .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png")
            .showAtmosphere(true);

        if (!globeRef.current) {
            globeRef.current = new THREE.Group();
            globeRef.current.add(globe);
        }

        if (parentRef.current) {
            parentRef.current.position.set(100, 0, 0);
            parentRef.current.add(globeRef.current);
        }
    }, []);

    useFrame(() => {
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.001; 
        }
    });

    return <group ref={parentRef} />;
}

export default function GlobeComponent() {
    return (
        <Canvas camera={{ position: [0, 0, 200] }}>
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 10]} intensity={2} />
            <BasicGlobe />
            <Stars />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} target={[0, 0, 0]} />
        </Canvas>
    );
}
