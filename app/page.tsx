'use client'
import { Link, Snippet, Code, Chip, Card, Button } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { motion } from "framer-motion";


import { ProfilePic } from "@/components/profilepic";
import { TextAnim } from "@/components/animatedtext";
import { LoopedTextAnim } from "@/components/loopedanimatedtext";
import { CursorBlinker } from "@/components/cursorblinker";
import { LinksCard } from "@/components/socialslinks";


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-6">
      <div className="flex flex-row max-w-7xl text-center justify-center">
        <div className="min-w-7xl max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <TextAnim text="I am a"/>
          <LoopedTextAnim/>
          <CursorBlinker />
        </div>
      </div>
      

      <div className="flex flex-row max-w-7xl text-center justify-center">
        <div className="min-w-7xl max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <ProfilePic />
        </div>
      </div>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
        <div className="flex justify-center mt-4">
          <Button
            as="a"
            href="/projects"
            className="bg-gradient-to-r from-[#00b7fa] to-[#01cfea] text-white hover:from-[#01cfea] hover:to-[#00b7fa] py-2 px-6 rounded-lg shadow-lg"
            size="lg"
          >
            View My Projects
          </Button>
        </div>
      </motion.div>

      <div className="flex gap-3">
        <LinksCard />
      </div>
      
    </section>
  );
}
