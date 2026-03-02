import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import Contact from "../components/Contact";

const About = () => {
  const globeRef = useRef();
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('adi.vignesh.k@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.5;
  }, []);

  const techLogos = [
    { src: '/assets/React.png', alt: 'React' },
    { src: '/assets/tailwind.png', alt: 'Tailwind' },
    { src: '/assets/threejs.png', alt: 'ThreeJS' },
    { src: '/assets/typescript.png', alt: 'TypeScript' },
    { src: '/assets/framer.png', alt: 'Framer' },
  ];

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

        {/* Profile Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="Profile"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I am Adivigneshwaran</p>
              <p className="grid-subtext">
                6 months in startups crafting fast and AI-powered flows, with a
                growing focus on interactive 3D experiences — currently in
                pre-final year B.Tech AIML at SRM Ramapuram.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I am proficient in a diverse tech stack that spans frontend,
                backend, and AI/ML. My frontend expertise includes JavaScript,
                React, and Tailwind CSS, while on the backend I work with
                Django. I have experience managing databases like PostgreSQL. In
                AI/ML, I am skilled in Python and TensorFlow. I also use Git &
                GitHub for version control.
              </p>
            </div>
          </div>
        </div>

        {/* Globe + Contact Section */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={1.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 13.0827,
                    lng: 80.2707,
                    text: "I'm here!",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">I am from Chennai</p>
              <p className="grid-subtext">Rooted in Chennai, Tamil Nadu, India. Innovating for a Connected World</p>
              <div className="w-[70%] flex mx-12 gap-15 justify-between py-10">
                <img 
                  src="/assets/github.png" 
                  alt="github" 
                  className="h-7 sm:h-7 md:h-8 lg:h-8 xl:h-10 transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:drop-shadow-lg cursor-pointer" 
                />
                <img 
                  src="/assets/linkedin.png" 
                  alt="linkedin" 
                  className="h-7 sm:h-7 md:h-8 lg:h-8 xl:h-10 transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:drop-shadow-lg cursor-pointer" 
                />
                <img 
                  src="/assets/instagram.png" 
                  alt="instagram" 
                  className="h-7 sm:h-7 md:h-8 lg:h-8 xl:h-10 transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:drop-shadow-lg cursor-pointer" 
                />
                <img 
                  src="/assets/email.png" 
                  alt="email" 
                  className="h-7 sm:h-7 md:h-8 lg:h-8 xl:h-10 transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:drop-shadow-lg cursor-pointer" 
                />
                <img 
                  src="/assets/youtube.png" 
                  alt="youtube" 
                  className="h-7 sm:h-7 md:h-8 lg:h-8 xl:h-10 transition-all duration-300 hover:scale-125 hover:-translate-y-2 hover:drop-shadow-lg cursor-pointer" 
                />
              </div>
              <Contact
                name="Contact Me"
                isBeam
                containerClass="w-full sm:w-auto sm:min-w-[300px] mt-3"
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="" className="w-full sm:h-[266px] h-fit object-contain"/>
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">For me, coding is like art with logic. I love solving problems, experimenting with ideas, and shaping something meaningful out of lines of code.</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/grid4.png" alt="" className="w-full xl:h-[200px] md:h-[126px] sm:h-[276px] object-cover sm:object-top"/>
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="" />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">adi.vignesh.k@gmail.com</p>
              </div> 
            </div>
          </div>  
        </div>
      </div>

      {/* Logo Marquee Section */}
<div className="mt-20">
  <p className="text-center text-gray-400 text-sm mb-8 tracking-wide">
    Powering my projects with modern technologies
  </p>

  <div className="relative w-full overflow-hidden">
    {/* Fade Gradients */}
    <div className="absolute left-0 top-0 bottom-0 w-48 md:w-64 lg:w-80 bg-gradient-to-r from-[#010103] via-[#010103]/80 to-transparent z-10 pointer-events-none"></div>
    <div className="absolute right-0 top-0 bottom-0 w-48 md:w-64 lg:w-80 bg-gradient-to-l from-[#010103] via-[#010103]/80 to-transparent z-10 pointer-events-none"></div>
    
    <div className="py-8">
      <div className="flex animate-infinite-scroll w-max">
        
        {/* SET 1: Your Logos */}
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/React.png" alt="React" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/django.png" alt="Django" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/js.png" alt="JS" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/Tailwind.png" alt="Tailwind" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/post.png" alt="Postgres" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/download.png" alt="Figma" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/spring.png" alt="Spring" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/github.png" alt="Github" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/git.jpg" alt="Git" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/python.png" alt="Python" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/sql.png" alt="SQL" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>

        {/* SET 2: MUST BE AN EXACT COPY OF SET 1 */}
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/React.png" alt="React" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/django.png" alt="Django" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/js.png" alt="JS" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/Tailwind.png" alt="Tailwind" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/post.png" alt="Postgres" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/download.png" alt="Figma" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/spring.png" alt="Spring" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/github.png" alt="Github" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/git.jpg" alt="Git" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/python.png" alt="Python" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="flex-shrink-0 mx-12 md:mx-16 lg:mx-20 group">
          <img src="/assets/sql.png" alt="SQL" className="h-10 md:h-12 lg:h-14 w-auto object-contain logo-marquee-item group-hover:opacity-100 transition-all duration-300" />
        </div>

      </div>
    </div>
  </div>
</div>

      
    </section>
  );
};

export default About;