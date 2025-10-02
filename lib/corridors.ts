export interface Corridor {
  id: number;
  flag: string;
  country: string;
  countryEs: string;
  destination: string;
  route: string;
  routeEs: string;
  comingSoon: string;
  comingSoonEs: string;
  gradientClass: string;
}

export const upcomingCorridors: Corridor[] = [
  {
    id: 1,
    flag: "🇲🇽",
    country: "Mexico",
    countryEs: "México",
    destination: "USA",
    route: "Mexico ↔ USA",
    routeEs: "México ↔ EE.UU.",
    comingSoon: "Coming Q1 2025",
    comingSoonEs: "Próximamente Q1 2025",
    gradientClass: "bg-gradient-to-br from-red-500/20 via-white/10 to-green-500/20",
  },
  {
    id: 2,
    flag: "🇨🇴",
    country: "Colombia",
    countryEs: "Colombia",
    destination: "USA",
    route: "Colombia ↔ USA",
    routeEs: "Colombia ↔ EE.UU.",
    comingSoon: "Coming Q2 2025",
    comingSoonEs: "Próximamente Q2 2025",
    gradientClass: "bg-gradient-to-br from-yellow-500/20 via-blue-500/20 to-red-500/20",
  },
  {
    id: 3,
    flag: "🇪🇨",
    country: "Ecuador",
    countryEs: "Ecuador",
    destination: "USA",
    route: "Ecuador ↔ USA",
    routeEs: "Ecuador ↔ EE.UU.",
    comingSoon: "Coming Q2 2025",
    comingSoonEs: "Próximamente Q2 2025",
    gradientClass: "bg-gradient-to-br from-yellow-500/20 via-blue-500/20 to-red-500/20",
  },
  {
    id: 4,
    flag: "🇦🇷",
    country: "Argentina",
    countryEs: "Argentina",
    destination: "USA",
    route: "Argentina ↔ USA",
    routeEs: "Argentina ↔ EE.UU.",
    comingSoon: "Coming 2025",
    comingSoonEs: "Próximamente 2025",
    gradientClass: "bg-gradient-to-br from-blue-500/20 via-white/10 to-blue-600/20",
  },
];
