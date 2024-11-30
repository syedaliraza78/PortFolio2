import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf"); // Ensure the path is correct

  return (
    <mesh>
      {/* Hemisphere Light for ambient lighting */}
      <hemisphereLight intensity={4} groundColor="black" />

      {/* Point Light for general illumination */}
      <pointLight intensity={4} />

      {/* Spot Light for focused illumination */}
      <spotLight
        position={[-20, 50, 10]} // Spotlight position
        angle={0.75} // Angle of the light cone
        penumbra={1} // Soft edges of the spotlight
        intensity={1} // Brightness of the light
        castShadow // Enable shadows
      />

      {/* GLTF Scene */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    const mediaQueery = window.matchMedia("(max-width:500px)");
    setMobile(mediaQueery.matches);
    const HandleMediaQueeryMatch = (event) => {
      setMobile(event.matches);
    };
    mediaQueery.addEventListener("change", HandleMediaQueeryMatch);
    return () => {
      mediaQueery.removeEventListener("change", HandleMediaQueeryMatch);
    };
  });
  return (
    <Canvas
      frameloop="demand"
      shadows // Enable shadows for lights
      camera={{ position: [20, 3, 5], fov: 25 }} // Camera configuration
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls for user interaction */}
        <OrbitControls
          enableZoom={false} // Disable zoom
          maxPolarAngle={Math.PI / 2} // Prevent rotating below ground
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} /> {/* Render the Computers component */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
