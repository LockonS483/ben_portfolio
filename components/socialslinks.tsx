'use client';
import "./styles.css";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Button, Link, Snippet, Code, Chip } from "@heroui/react";
import { siteConfig } from "@/config/site";
import { button as buttonStyles } from "@heroui/theme";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { title, subtitle, smalltitle } from "./primitives";

export const LinksCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
      <div className="flex flex-row justify-center items-center space-x-4">
        <Card
          isFooterBlurred
          radius="lg"
          className="justify-center items-center bg-inherit">
          <CardBody className="space-y-2 text-center">
        <h2 className={smalltitle()}>GitHub</h2>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}>
          <GithubIcon size={20} />
          GitHub
        </Link>
          </CardBody>
        </Card>
        <Card
          isFooterBlurred
          radius="lg"
          className="justify-center items-center bg-inherit">
          <CardBody className="space-y-2 text-center">
        <h2 className={smalltitle()}>LinkedIn</h2>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.linkedin}>
          <LinkedinIcon size={20} />
          LinkedIn
        </Link>
          </CardBody>
        </Card>
      </div>
    </motion.div>
  );
}