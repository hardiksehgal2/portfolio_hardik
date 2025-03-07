"use client";
import { skills } from "@/data";
import AnimatedText from "./helper/AnimatedText";
import TiltedCard from "./helper/TiltedCardProps";

export const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading flex flex-wrap justify-center">
        <AnimatedText tag="span" delay={0.1} duration={0.6}>
          My
        </AnimatedText>{" "}
        <AnimatedText
          tag="span"
          className="text-purple"
          delay={0.4}
          duration={0.6}
        >
          Tech Stack
        </AnimatedText>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="mt-20 w-full">
         

          <div className=" mx-auto grid max-w-6xl grid-cols-1 gap-4 space-y-9 justify-center items-end sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {skills.map((skill) => (
              <div key={skill.id} className="flex justify-center items-center">
                <TiltedCard
                  imageSrc={skill.icon}
                  altText={`${skill.name} icon`}
                  captionText={skill.name}
                  containerHeight="140px"
                  containerWidth="140px"
                  imageHeight="140px"
                  imageWidth="140px"
                  rotateAmplitude={18}
                  scaleOnHover={1.15}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p
                      className={`bg-gradient-to-r from-slate-800 via-transparent rounded-lg to-slate-800 p-2 text-center text-sm font-medium  `}
                    >
                      {skill.name}
                    </p>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
