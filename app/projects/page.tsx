'use client'
import { title } from "@/components/primitives";
import { Card, CardFooter, CardBody, Button, Chip } from "@nextui-org/react";
import NImage from "next/image";
import { Project, projectList } from "@/config/projects";
import { subtitle, smalltitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import pfp from "@/components/Data/alex.png";

export default function BlogPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 space-y-2">
      <div className="flex flex-row max-w-7xl text-center justify-center">
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>

      <div className="w-full max-w-8xl px-4">
        {/* Adjust grid to have fewer columns on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {projectList.projects.map((item: Project) => (
            <div key={item.name} className="flex flex-col w-full">
              {/* Flexbox for horizontal layout */}
              <Card isHoverable isPressable className="h-40 w-full flex flex-row p-4 items-center gap-6" onClick={() => {window.open(item.clickLink, "_blank", "noopener noreferrer")}}>
                {/* Image occupies one-third of the card width */}
                {item.image ? (<div className="w-1/4">
                  <NImage
                    alt={item.name}
                    className="object-cover rounded-lg"
                    height={300}
                    width={300}
                    src={item.image || pfp}  // Use project image or fallback
                  />
                </div>) : null}

                {/* Text content occupies the remaining two-thirds */}
                <div className="w-3/4 flex flex-col justify-between">
                  <CardBody className="p-0">
                    <h1 className={smalltitle()}>{item.name}</h1>
                    <p>{item.description}</p>
                  </CardBody>
                  {item.link!="" ? ( // Conditionally render the footer button
                    <CardFooter className="p-0 mt-4">
                      <Button as="a" href={item.link} target="_blank" rel="noopener noreferrer">
                        <GithubIcon/>
                        Visit Repo
                      </Button>
                    </CardFooter>
                  ) : null}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
