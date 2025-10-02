export interface Testimonial {
  id: number;
  name: string;
  nameEs: string;
  role: string;
  roleEs: string;
  route: string;
  rating: number;
  quote: string;
  quoteEs: string;
  gradientClass: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria R.",
    nameEs: "Maria R.",
    role: "Package Sender",
    roleEs: "Remitente",
    route: "Miami → Lima",
    rating: 5,
    quote: "Sent my AirPods to my family in Lima - arrived in 3 days! So much faster and cheaper than traditional shipping.",
    quoteEs: "Envié mis AirPods a mi familia en Lima - ¡llegaron en 3 días! Mucho más rápido y económico que el envío tradicional.",
    gradientClass: "bg-gradient-to-br from-pink-500/20 via-rose-500/20 to-red-500/20",
  },
  {
    id: 2,
    name: "Carlos M.",
    nameEs: "Carlos M.",
    role: "Traveler",
    roleEs: "Viajero",
    route: "Miami → Lima",
    rating: 5,
    quote: "Earned $250 on my vacation flight! It's amazing how easy it is to help others while making extra money.",
    quoteEs: "¡Gané $250 en mi vuelo de vacaciones! Es increíble lo fácil que es ayudar a otros mientras ganas dinero extra.",
    gradientClass: "bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20",
  },
  {
    id: 3,
    name: "Ana P.",
    nameEs: "Ana P.",
    role: "Package Sender",
    roleEs: "Remitente",
    route: "Fort Lauderdale → Lima",
    rating: 5,
    quote: "Sent vitamins to my parents in Lima - the traveler was verified and super professional. Highly recommend!",
    quoteEs: "Envié vitaminas a mis padres en Lima - el viajero estaba verificado y fue súper profesional. ¡Muy recomendado!",
    gradientClass: "bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20",
  },
  {
    id: 4,
    name: "Diego L.",
    nameEs: "Diego L.",
    role: "Traveler",
    roleEs: "Viajero",
    route: "Miami → Cusco",
    rating: 5,
    quote: "Perfect way to offset travel costs. The platform makes it safe and easy to connect with senders.",
    quoteEs: "Forma perfecta de compensar los costos de viaje. La plataforma hace que sea seguro y fácil conectarse con remitentes.",
    gradientClass: "bg-gradient-to-br from-orange-500/20 via-amber-500/20 to-yellow-500/20",
  },
  {
    id: 5,
    name: "Sofia V.",
    nameEs: "Sofia V.",
    role: "Package Sender",
    roleEs: "Remitente",
    route: "Miami → Lima",
    rating: 5,
    quote: "Sent a birthday gift to my sister - she received it the same week! FlightMate saved me time and money.",
    quoteEs: "Envié un regalo de cumpleaños a mi hermana - ¡lo recibió la misma semana! FlightMate me ahorró tiempo y dinero.",
    gradientClass: "bg-gradient-to-br from-purple-500/20 via-fuchsia-500/20 to-pink-500/20",
  },
];
