"use client"
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { MagicButton } from "@/components/ui/magic-button";
// import { links } from "@/config";
import { socialMedia } from "@/data";
import AnimatedText from "./helper/AnimatedText";

export const Footer = () => {
  return (
    <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-auto">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading flex flex-wrap justify-center">
          <AnimatedText tag="span" delay={0.1} duration={0.6}>
            Ready to take
          </AnimatedText>{" "}
          <AnimatedText
            tag="span"
            className="text-purple"
            delay={0.4}
            duration={0.6}
          >
            Tech Stack
          </AnimatedText>
          <AnimatedText tag="span" delay={0.1} duration={0.6}>
            digital presence to the next level?
          </AnimatedText>{" "}
          <div className="mt-10 text-[16px] font-normal">
            <AnimatedText tag="span" delay={0.1} duration={0.8}>
              Reach out to me today and let&apos;s discuss how I can help your
              achieve your goals.
            </AnimatedText>{" "}
          </div>
        </h1>
        {/* <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1> */}

        <Link
          href={`https://www.linkedin.com/in/hardik-sehgal-8086731b5/`}
          target="_blank"
          rel="noreferrer noopener"
          className="md:mt-10"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            asChild
          />
        </Link>
      </div>

      <div className="relative z-[999] mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link href="#" rel="noreferrer noopener" className="text-purple">
            Hardik
          </Link>{" "}
          {/* |{" "} */}
          {/* <Link href={links.sourceCode} className="underline">
            Source Code
          </Link> */}
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <Link
              key={profile.name}
              href={profile.link}
              target={profile.name === "Mail" ? "_self" : "_blank"} // Open mail in same tab, others in new tab
              rel={profile.name === "Mail" ? "" : "noreferrer noopener"} // Remove ref for mail
              className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              title={profile.name}
            >
              <Image
                src={profile.img}
                alt={`profile-${profile.name}`}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
