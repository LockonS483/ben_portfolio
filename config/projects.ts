// Define the type for each individual project
export interface Project {
    name: string;
    image: string;
    description: string;
    link: string;
    clickLink: string
}

// Define the type for the projectList
export interface ProjectList {
    projects: Project[];
}

// Now define the actual projectList object
export const projectList: ProjectList = {
    projects: [
        {
            name: "FFXIV Strat Collection",
            image: "/images/hendinstance.webp",
            description: "A doc-site for collecting common party finder strats to help raiders in FFXIV.",
            link: "https://github.com/LockonS483/pf-strats-collection",
            clickLink: "https://www.ffxivstrats.com/"
        },
        {
            name: "Auto Jail Marker",
            image: "/images/TitIco.png",
            description: "A Raiding Plugin for FFXIV for injecting auto marking commands for Titan Jails in UWU.",
            link: "https://github.com/LockonS483/AutoJailMarker",
            clickLink: "https://github.com/LockonS483/AutoJailMarker"
        },
        {
            name: "Smart Cities Sensors",
            image: "/images/scs.png",
            description: "Research project to reverse engineer, and deploy air quality sensors.",
            link: "https://github.com/nyu/air-quality",
            clickLink: "https://airquality.engineering.nyu.edu/"

        },
        {
            name: "Indra ABM Front-end",
            image: "/images/Indrasnet.jpg",
            description: "React-native based front-end for Indra Agent Based modeling system",
            link: "https://github.com/gcallah/IndraFrontend",
            clickLink: "https://gcallah.github.io/indras_net/index.html"
        },
    ],
};