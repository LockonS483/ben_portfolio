// Define the type for each individual project
export interface Technology {
    name: string;
    image: string;
}

// Define the type for the projectList
export interface TechnologyList {
    technologies: Technology[];
}

// Now define the actual projectList object
export const techList: TechnologyList = {
    technologies: [
        {
            name: "Typescript",
            image: "/images/icons/typescript.svg",
        },
        {
            name: "React",
            image: "/images/icons/react.svg",
        },
        {
            name: "Next.js",
            image: "/images/icons/nextjs.svg",
        },
        {
            name: "Tailwind",
            image: "/images/icons/tailwind-css.svg",
        },
        {
            name: "Python",
            image: "/images/icons/python.svg",
        },
        {
            name: "AWS",
            image: "/images/icons/aws.svg",
        },
        {
            name: "C#",
            image: "/images/icons/c-sharp.svg",
        },
        {
            name: "Unity",
            image: "/images/icons/unity.svg",
        },
    ],
};