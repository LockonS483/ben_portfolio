'use client'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import {title, subtitle} from "@/components/primitives";

export const TextAnim = ({text} : {text: string}) => {
    const baseText = text ? text : "I am a";
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
      baseText.slice(0, latest)
    );
    
    useEffect(() => {
        const controls = animate(count, baseText.length, {
          type: "tween", // Not really needed because adding a duration will force "tween"
          duration: 1.2,
          ease: "easeInOut",
        });
        return controls.stop;
    }, []);
    
      
    return (
      <span className="">
        <h1 className={title()}>
            Hi, I am&nbsp;
        </h1>
        <h1 className={title({color: "pink"})}>
            Ben Hou
        </h1>
        <br/>
        <h1 className={title()}>
            <motion.span>{displayText}</motion.span>
        </h1>
      </span>
    );
  }
  