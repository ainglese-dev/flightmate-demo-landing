export interface Traveler {
  id: number;
  name: string;
  location: string;
  locationEs: string;
  travelFrequency: string;
  travelFrequencyEs: string;
  verified: boolean;
  rating: number;
  totalTrips: number;
  route: string;
  routeEs: string;
  avatarUrl?: string;
}

export const travelers: Traveler[] = [
  {
    id: 1,
    name: "Maria Rodriguez",
    location: "Miami, FL",
    locationEs: "Miami, FL",
    travelFrequency: "Every 3 weeks",
    travelFrequencyEs: "Cada 3 semanas",
    verified: true,
    rating: 4.9,
    totalTrips: 47,
    route: "Miami → Lima",
    routeEs: "Miami → Lima",
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    location: "Fort Lauderdale, FL",
    locationEs: "Fort Lauderdale, FL",
    travelFrequency: "Every 3 weeks",
    travelFrequencyEs: "Cada 3 semanas",
    verified: true,
    rating: 4.8,
    totalTrips: 52,
    route: "Miami → Lima",
    routeEs: "Miami → Lima",
  },
];
