'use client';
import "./styles.css";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Button, Link, Snippet, Code, Chip } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { button as buttonStyles } from "@nextui-org/theme";
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
      <Card
        isFooterBlurred
        radius="lg"
        className="justify-center items-center bg-inherit">
          <CardBody className="space-y-2 text-center">
            <h2 className={smalltitle()}>Links</h2>
            <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}>
            <GithubIcon size={20} />
              GitHub
            </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.linkedin}>
            <LinkedinIcon size={20} />
            LinkedIn
          </Link>
        </CardBody>
      </Card>
    </motion.div>
  );
}