'use client';
import "./styles.css";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import NImage from "next/image";
import pfp from "./Data/alex.png"

export const ProfilePic = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01]
      }}>
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none">
          <NImage
            alt="Profile Picture"
            className="object-cover rounded-lg"
            height={200}
            width={200}
            src={pfp}>
          </NImage>
      </Card>
    </motion.div>
  );
}