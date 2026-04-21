import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

import CanvasLoader from '../components/CanvasLoader';
import Computers from '../components/Computers';
import { calculateSizes } from '../constants/index.js';
import Target from '../components/target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';

/** Fires onReady once this component mounts (i.e. Suspense resolved). */
const SceneReadyTrigger = ({ onReady }) => {
  useEffect(() => {
    if (onReady) onReady();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
};

const Hero = ({ onSceneReady }) => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      {/* Header Text */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-2xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Adivigneshwaran <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          From Imagination → Innovation
        </p>
      </div>

      {/* 3D Content */}
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full" shadows>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={40} />
            
            <HeroCamera isMobile={isMobile}>
              {/* This is your Canvas 2 model */}
              <Computers scale={sizes.deskScale} position={sizes.deskPosition} />
            </HeroCamera>

            {/* Floating Decorations */}
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />

            {/* Fires onSceneReady when Suspense resolves */}
            <SceneReadyTrigger onReady={onSceneReady} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name='Know More About Me' isBeam containerClass="w-full sm:w-auto sm:min-w-[300px]" />
        </a>
      </div>
    </section>
  );
};

export default Hero;