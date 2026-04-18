export const navLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/games",
    name: "Games",
  },
  {
    path: "/clients",
    name: "Clients",
  },
];

export const platformFeatures = [
  {
    title: "Self-Hostable",
    body: [
      { text: "Culturae is designed to be " },
      { text: "self-hosted", bold: true },
      { text: ", meaning you own your data. Deploy it on your own server using Docker or bare-metal, and connect multiple clients." },
    ],
  },
  {
    title: "Cross-Platform",
    body: [
      { text: "Play anywhere! We provide open-source clients for " },
      { text: "Web, Mobile (iOS/Android), and Desktop", bold: true },
      { text: " allowing seamless gameplay no matter your device." },
    ],
  },
  {
    title: "Flexible Game Modes",
    body: [
      { text: "Play " },
      { text: "Solo", bold: true },
      { text: " to improve your ranking, jump into a " },
      { text: "1vs1", bold: true },
      { text: " duel, or host a " },
      { text: "Multiplayer", bold: true },
      { text: " party with friends." },
    ],
  },
  {
    title: "100% Free & Open-Source",
    body: [
      { text: "Released under the " },
      { text: "MIT License", bold: true },
      { text: ". Feel free to fork, contribute, and build your own quiz modes over our open API." },
    ],
    link: "https://github.com/Culturae-org",
    linkLabel: "Culturae on GitHub",
  },
];

export const games = [
  {
    title: "Geography Quizzes",
    category: "Map & Coordinates",
    description: "Point on the map and find the exact location of cities, monuments, and places. Test your knowledge of the world map.",
    techstacks: ["Maps", "Coordinates", "Points"],
    status: "active",
    link: "/games",
    preview: "/opengraph.png",
    previewDark: "/opengraph.png",
  },
  {
    title: "Flag Games",
    category: "Visual Recognition",
    description: "Identify the flags of every country in the world. Compete for the fastest time in 1vs1 duels.",
    techstacks: ["Visuals", "Speed", "Countries"],
    status: "active",
    link: "/games",
    preview: "/opengraph.png",
    previewDark: "/opengraph.png",
  },
  {
    title: "General Culture QCM",
    category: "Multiple Choice Questions",
    description: "Answer trivia across categories like History, Science, Art, and Pop Culture. Create your own custom question sets.",
    techstacks: ["Trivia", "Custom Modes", "Categories"],
    status: "active",
    link: "/games",
    preview: "/opengraph.png",
    previewDark: "/opengraph.png",
  },
];

export const clients = [
  {
    title: "Culturae Web",
    year: "Available Now",
    company: "Browser",
    type: "React / NextJS",
    location: "Online",
    logo: "/icons/web.png",
    responsibility: [
      [
        { text: "The primary client accessible via any " },
        { text: "modern web browser", bold: true },
        { text: ". Built for speed and responsiveness." },
      ],
      [
        { text: "Supports full " },
        { text: "admin dashboard", bold: true },
        { text: " controls if you are hosting the server." },
      ],
    ],
    techstacks: ["React", "NextJS", "TailwindCSS"],
  },
  {
    title: "Culturae Mobile",
    year: "In Development",
    company: "iOS & Android",
    type: "React Native",
    location: "App Store / Play Store",
    logo: "/icons/mobile.png",
    responsibility: [
      [
        { text: "A native experience for " },
        { text: "iOS and Android", bold: true },
        { text: " allowing you to play games on the go." },
      ],
      [
        { text: "Supports " },
        { text: "push notifications", bold: true },
        { text: " for game invites and friend requests." },
      ],
    ],
    techstacks: ["React Native", "Expo", "Zustand"],
  },
  {
    title: "Culturae Desktop",
    year: "Planned",
    company: "Windows, Mac, Linux",
    type: "Electron / Tauri",
    location: "Downloads",
    logo: "/icons/desktop.png",
    responsibility: [
      [
        { text: "A standalone desktop app optimized for " },
        { text: "lower latency", bold: true },
        { text: " and deeper system integration." },
      ],
    ],
    techstacks: ["Tauri", "Rust", "React"],
  },
];
