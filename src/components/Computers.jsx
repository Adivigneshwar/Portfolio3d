import React from "react";
import { useGLTF } from "@react-three/drei";

const Computers = (props) => {
  // Point to the folder where scene.gltf, scene.bin, and textures/ are located
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  return (
    
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={props.scale || 0.75}
        position={props.position || [1.9, -2.25, -1.5]}
        rotation={props.rotation || [0.3, -1.5, 0.1]}
      />
    </mesh>
  );
};

// Preload to prevent lagging when the section is reached
useGLTF.preload("/desktop_pc/scene.gltf");

export default Computers;