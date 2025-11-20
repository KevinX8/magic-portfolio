import {About, Blog, Gallery, Home, Newsletter, Person, Social, Work} from "@/types";
import {Line, Row, Text} from "@once-ui-system/core";

const person: Person = {
    firstName: "Paulis",
    lastName: "Gributs",
    name: `Paulis Gributs`,
    role: "Développeur Fullstack Senior",
    avatar: "/images/avatar.jpg",
    email: "paulis@gributs.com",
    location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g. 'Europe/Vienna'
    languages: ["Anglais", "Français"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
    display: false,
    title: <>Abonnez-vous à la Newsletter de {person.firstName}</>,
    description: <>Ma newsletter hebdomadaire sur la créativité et l'ingénierie</>,
};

const social: Social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/kevinx8",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/paulis-gributs/",
    },
    {
        name: "Email",
        icon: "email",
        link: `mailto:${person.email}`,
    },
    {
        name: "Rover",
        icon: "rover",
        link: `https://www.rover.com/sit/paulig88666`,
    },
    {
        name: "Adguard",
        icon: "adguard",
        link: "https://adguard.com/?aid=31141&source=PersonalSite",
    }
];

const home: Home = {
    path: "/",
    image: "/images/og/home.png",
    label: "Accueil",
    title: `Portfolio de ${person.name}`,
    description: `Site web portfolio présentant mon travail en tant que ${person.role}`,
    headline: <>Construire votre vision à partir de zéro</>,
    featured: {
        display: true,
        title: (
            <Row gap="12" vertical="center">
                <strong className="ml-4">VSB</strong>{" "}
                <Line background="brand-alpha-strong" vert height="20"/>
                <Text marginRight="4" onBackground="brand-medium">
                    Projet en vedette
                </Text>
            </Row>
        ),
        href: "/work/vsb",
    },
    subline: (
        <>
            Je suis Paulis, Développeur Fullstack Senior freelance
            <br/>Transformer les Problèmes Complexes en Expériences Intuitives et Axées sur les Données
        </>
    ),
};

const about: About = {
    path: "/about",
    label: "À propos",
    title: `À propos – ${person.name}`,
    description: `Rencontrez ${person.name}, ${person.role} de ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false,
    },
    avatar: {
        display: true,
    },
    calendar: {
        display: true,
        link: "https://cal.com/paulis-gributs",
    },
    intro: {
        display: true,
        title: "Introduction",
        description: (
            <>
                Je suis un ingénieur logiciel passionné par la création d'applications
                intelligentes et full-stack qui comblent le fossé entre la recherche de
                pointe et l'impact dans le monde réel. Mon expertise s'étend du développement
                et du déploiement de systèmes d'IA à la gestion de projets complexes pour un
                public mondial, comme la direction d'une équipe pour une application Android
                comptant plus de 120 millions d'utilisateurs.
            </>
        ),
    },
    work: {
        display: true, // set to false to hide this section
        title: "Expérience professionnelle",
        experiences: [
            {
                company: "LERO/Open University",
                timeframe: "2023 - 2024",
                role: "Ingénieur Logiciel de Recherche Senior",
                achievements: [
                    <>
                        Publication d'un article de recherche avec l'équipe universitaire maintenant un taux d'excellence de 82%.
                    </>,
                    <>
                        Développement d'une application full-stack à partir de zéro en utilisant Flutter, Python et MongoDB
                        pour suivre les valeurs des utilisateurs via leurs habitudes d'achat.
                    </>,
                    <>
                        Intégration d'un système de recommandation IA LLM augmentant la satisfaction des utilisateurs de 35%.
                    </>
                ],
                images: [
                    // optional: leave the array empty if you don't want to display images
                    {
                        src: "/images/projects/project-01/vsb.jpg",
                        alt: "Once UI Project",
                        width: 9,
                        height: 18,
                    },
                    {
                        src: "/images/projects/project-01/vsb2.jpg",
                        alt: "Once UI Project",
                        width: 9,
                        height: 18,
                    },
                    {
                        src: "/images/projects/project-01/vsb3.jpg",
                        alt: "Once UI Project",
                        width: 9,
                        height: 18,
                    },
                ],
            },
            {
                company: <a href="https://wikipedia.org/wiki/YouTube_Vanced" target="_blank">Youtube Vanced (Google CA)</a>,
                timeframe: "2018 - 2022",
                role: "Développeur Principal",
                achievements: [
                    <>
                        Gestion d'une équipe de développeurs pour des applications Android desservant plus de 120 millions d'utilisateurs.
                    </>,
                    <>
                        Collaboration avec des sponsors (Brave, Adguard) et des équipes liées à YouTube.
                    </>,
                    <>
                        Décompilation de code Java Smali et développement de backends en utilisant des projets C#.
                    </>,
                ],
                images: [],
            },
            {
                company: "Intel®",
                timeframe: "2021 - 2022",
                role: "Stagiaire Ingénieur Logiciel",
                achievements: [
                    <>
                        Contribution au framework DPDK et amélioration de la suite de tests en équipe SCRUM.
                    </>,
                    <>
                        Résolution de bugs de production et gestion des tests de régression.
                    </>,
                    <>
                        Contribution à plus de 20 Pull Requests via Git ; direction de l'équipe à la 2ème place du Intel STEM Challenge.
                    </>
                ],
            },
        ],
    },
    studies: {
        display: true, // set to false to hide this section
        title: "Études",
        institutions: [
            {
                name: "University of Limerick BSc en Systèmes Informatiques, GPA: 3.9/4.0 (2019 - 2023)",
                description: <ul>
                    <li>Récompensé par le Prix du Bénévole du Président pour ses contributions à la Société Environnementale</li>
                    <li>Tutorat de camarades étudiants dans le programme d'informatique</li>
                    <li>Thèse : Développement d'une application d'analyse de sentiment pour suivre l'humeur des utilisateurs via les messages texte</li>
                </ul>,
            },
            {
                name: "Université Paul Valéry (2025)",
                description: <>Amélioration de mon niveau de français à B1 grâce à l'IEFE.</>,
            },
        ],
    },
    technical: {
        display: true, // set to false to hide this section
        title: "Compétences techniques",
        skills: [
            {
                title: "Applications mobiles",
                description: (
                    [<>Création de plusieurs applications mobiles incluant leurs backends;</>,
                        <br/>,
                        <a href="https://play.google.com/store/apps/details?id=com.kevinx8.negate" target="_blank">Negate</a>,
                        <br/>,
                        <a href="https://value-shopping-basket.codemagic.app/" target="_blank">Value Shopping Basket</a>,
                        <br/>,
                        <a href="https://wikipedia.org/wiki/YouTube_Vanced" target="_blank">YouTube Vanced</a>
                    ]
                ),
                tags: [
                    {
                        name: "Flutter",
                        icon: "flutter",
                    },
                    {
                        name: "Dart",
                        icon: "dart"
                    },
                    {
                        name: "Java",
                        icon: "java"
                    },
                    {
                        name: "Kotlin",
                        icon: "kotlin"
                    }
                ],
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: "/images/projects/project-01/negate.jpg",
                        alt: "Negate Info",
                        width: 9,
                        height: 20,
                    },
                    {
                        src: "/images/projects/project-01/vsb.jpg",
                        alt: "VSB Info",
                        width: 9,
                        height: 20,
                    },
                    {
                        src: "/images/projects/project-01/vanced.webp",
                        alt: "Vanced Settings",
                        width: 9,
                        height: 20,
                    },
                ],
            },
            {
                title: "Programmes autonomes",
                description: (
                    [<>Capable de créer des backends et des bots Discord avec 99,99% de disponibilité.</>,
                        <br/>,
                        <a href="https://codefling.com/discord-bots/update-checker-bot" target="_blank">Lien vers un exemple de bot que j'ai créé.</a>]
                ),
                tags: [
                    {
                        name: "Node.js",
                        icon: "nodejs",
                    },
                    {
                        name: "TypeScript",
                        icon: "typescript"
                    },
                    {
                        name: "MongoDB",
                        icon: "mongodb"
                    },
                    {
                        name: "SQL",
                        icon: "sql"
                    }
                ],
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: "/images/projects/project-01/cover-02.jpg",
                        alt: "Bot output Example",
                        width: 16,
                        height: 9,
                    }
                ],
            },
            {
                title: "Plugins et Backends",
                description: ([
                        <>Écriture de plugins et d'applications backend en C# depuis 2018.</>,
                        <br/>,
                        <a href="https://magicservices.co/" target="_blank">Développeur sous contrat chez Magic Services.</a>
                    ]
                ),
                tags: [
                    {
                        name: "",
                        icon: "csharp",
                    },
                    {
                        name: "Java",
                        icon: "java"
                    },
                    {
                        name: "C/++",
                        icon: "cplusplus"
                    }
                ]
            },
            {
                title: "Frontends",
                description: ([
                        <>Création de sites web robustes en utilisant Vite, Next.js et React.js.</>,
                        <br/>,
                        <a href="https://attraperevesint.fr/" target="_blank">Lien vers le site d'un client.</a>
                    ]
                ),
                tags: [
                    {
                        name: "JavaScript",
                        icon: "javascript",
                    },
                    {
                        name: "React.js",
                        icon: "reactjs",
                    },
                    {
                        name: "Next.js",
                        icon: "nextjs"
                    }
                ],
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: "/images/projects/project-01/cover-03.jpg",
                        alt: "Site Front Page",
                        width: 16,
                        height: 9,
                    },
                ],
            },
        ],
    },
};

const blog: Blog = {
    path: "/blog",
    label: "Blog",
    title: "Écrire sur le design et la technologie...",
    description: `Découvrez ce que ${person.name} a fait récemment`,
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
};

const work: Work = {
    path: "/work",
    label: "Travail",
    title: `Projets – ${person.name}`,
    description: `Projets de design et développement par ${person.name}`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
    path: "/gallery",
    label: "Galerie",
    title: `Galerie photo – ${person.name}`,
    description: `Une collection de photos par ${person.name}`,
    // Images by https://lorant.one
    // These are placeholder images, replace with your own
    images: [
        {
            src: "/images/gallery/horizontal-1.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/vertical-4.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/horizontal-3.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/vertical-1.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vertical-2.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/horizontal-2.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/horizontal-4.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/vertical-3.jpg",
            alt: "image",
            orientation: "vertical",
        },
    ],
};

export {person, social, newsletter, home, about, blog, work, gallery};