"use client";
import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const SkillCard = ({ title, skills, color }: { title: string, skills: string[], color: string }) => (
  <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#232323] transition-all duration-300">
    <h3 className={`text-xl font-semibold mb-2 text-${color}-500`}>{title}</h3>
    <ul className="list-none space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-300">{skill}</li>
      ))}
    </ul>
  </div>
);

const HobbyCard = ({ icon, text, color }: { icon: React.ReactNode, text: string, color: string }) => (
  <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#232323] transition-colors">
    <div className="flex items-center space-x-2">
      <div className={`text-${color}-500`}>{icon}</div>
      <span>{text}</span>
    </div>
  </div>
);

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SkillCard 
          title="JavaScript" 
          skills={["JavaScript"]}
          color="cyan"
        />
        <SkillCard 
          title="Java" 
          skills={["Java"]}
          color="purple"
        />
        <SkillCard 
          title="HTML" 
          skills={["HTML"]}
          color="green"
        />
        <SkillCard 
          title="Godot" 
          skills={["Godot"]}
          color="yellow"
        />
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="flex flex-col space-y-4">
        <div className="bg-[#181818] p-6 rounded-lg border border-gray-800">
          <div className="flex flex-col space-y-4">            
            {/* Bachelors Degree */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-bold text-white">
                Diploma
              </h3>
              <p className="text-gray-300">Sharyland Pioneer High School</p>
              <div className="flex items-center space-x-2"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <HobbyCard 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H2a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>}
          text="Playing French Horn"
          color="orange"
        />
        <HobbyCard 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>}
          text="Reading Manga/Manhwa"
          color="blue"
        />
        <HobbyCard 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>}
          text="Watching Animated Shows"
          color="red"
        />
        <HobbyCard 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>}
          text="Running"
          color="yellow"
        />
        <HobbyCard 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>}
          text="Playing Video Games"
          color="purple"
        />
        <HobbyCard 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>}
          text="Music"
          color="green"
        />
      </div>
    ),
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    '/images/spongebob.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]); // FIXED: Added images.length to dependency array

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-3xl"></div>
      
      {/* Image container */}
      <div className="relative h-full">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`About image ${index + 1}`}
            fill
            className={`object-cover transition-all duration-500 ${
              index === currentIndex 
                ? "opacity-100" 
                : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white w-4" 
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            About Me
          </h2>
          
          <div className="space-y-8">
            <p className="text-base lg:text-lg leading-relaxed">
              <span className="block text-gray-300 hover:text-white transition-colors duration-300">
                I am a computer science student at 
                <span className="text-cyan-400 font-medium hover:text-cyan-300"> UTRGV </span>
                who loves to play the French horn. I&apos;m passionate about both technology and music, 
                and I enjoy combining my creative and technical interests in unique ways.
              </span>
            </p>
            
            <p className="text-base lg:text-lg leading-relaxed">
              <span className="block text-gray-300 hover:text-white transition-colors duration-300">
                My studies focus on various aspects of computer science, including software development, 
                algorithms, and modern web technologies. I&apos;m always eager to learn new programming 
                languages and frameworks to expand my skill set.
              </span>
            </p>

            <p className="text-base lg:text-lg leading-relaxed">
              <span className="block text-gray-300 hover:text-white transition-colors duration-300">
                When I&apos;m not coding, you can find me practicing my French horn or exploring 
                new hobbies. I believe in maintaining a balance between my academic pursuits and 
                personal interests, as both contribute to my growth as a well-rounded individual.
              </span>
            </p>
            
          </div>

          <div className="relative">
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-3xl"></div>
            
            {/* Tab container */}
            <div className="relative flex flex-row justify-start mt-12 mb-8 p-2 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 gap-2">
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                  </svg>
                  Education
                </div>
              </TabButton>
              
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Skills
                </div>
              </TabButton>
              
              <TabButton
                selectTab={() => handleTabChange("hobbies")}
                active={tab === "hobbies"}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hobbies
                </div>
              </TabButton>
            </div>
          </div>

          <div className="mt-8 p-4">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
        <ImageCarousel />
      </div>
    </section>
  );
};

export default AboutSection;