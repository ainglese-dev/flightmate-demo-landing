/**
 * ============================================================================
 * DEV TEMPLATE: TESTIMONIALS / CUSTOMER REVIEWS
 * ============================================================================
 *
 * PURPOSE:
 * Centralized customer testimonials and reviews. Easily add new testimonials
 * by copy-pasting the template below and filling in the details.
 *
 * USAGE:
 * import { testimonials } from '@/lib/dev-template-testimonials'
 * - Used in: Homepage testimonials section, dedicated Reviews page
 * - Automatically displays with ratings, verification badges, etc.
 *
 * HOW TO ADD A NEW TESTIMONIAL:
 * 1. Copy the template at the bottom of this file
 * 2. Increment the ID (last testimonial ID + 1)
 * 3. Fill in all fields (name, text, textEs, etc.)
 * 4. Add to the testimonials array
 * 5. Save - it will automatically appear on your site!
 *
 * SCALABILITY:
 * - Non-developers can add testimonials by following the pattern
 * - Type-safe: TypeScript ensures all fields are filled correctly
 * - Bilingual: Include both English and Spanish versions
 * - Filtering: Filter by role (traveler/sender), rating, verified status
 *
 * ============================================================================
 */

/**
 * TESTIMONIAL INTERFACE
 * Defines the structure of each testimonial object
 */
export interface Testimonial {
  id: number; // Unique identifier (increment from last)
  name: string; // Customer's name (can use initials for privacy)
  role: "Traveler" | "Sender"; // Are they a traveler or sender?
  roleEs: "Viajero" | "Viajera" | "Remitente"; // Spanish role
  location: string; // City, Country
  rating: 1 | 2 | 3 | 4 | 5; // Star rating (1-5)
  text: string; // Testimonial text in English
  textEs: string; // Testimonial text in Spanish
  date: string; // Month Year (e.g., "Nov 2024")
  verified: boolean; // Is this a verified customer?
  avatar?: string; // Optional: URL to avatar image or initials
  tripRoute?: string; // Optional: Route taken (e.g., "Miami → Lima")
  deliveries?: number; // Optional: Number of successful deliveries
}

/**
 * ============================================================================
 * TESTIMONIALS ARRAY
 * Add new testimonials here by copy-pasting the template below
 * ============================================================================
 */
export const testimonials: Testimonial[] = [
  /**
   * TESTIMONIAL #1 - Traveler Success Story
   */
  {
    id: 1,
    name: "Maria Rodriguez",
    role: "Traveler",
    roleEs: "Viajera",
    location: "Lima, Peru",
    rating: 5,
    text: "I earned $250 on my Miami trip just by using my extra luggage space. The process was super easy and the sender was really nice. FlightMate made my trip even better!",
    textEs: "Gané $250 en mi viaje a Miami solo usando mi espacio extra de equipaje. El proceso fue súper fácil y el remitente fue muy amable. ¡FlightMate hizo mi viaje aún mejor!",
    date: "Nov 2024",
    verified: true,
    avatar: "MR",
    tripRoute: "Miami → Lima",
    deliveries: 3,
  },

  /**
   * TESTIMONIAL #2 - Sender Cost Savings
   */
  {
    id: 2,
    name: "Carlos Mendez",
    role: "Sender",
    roleEs: "Remitente",
    location: "Miami, FL",
    rating: 5,
    text: "Sent my iPhone 15 to my family in Lima for just $20! Traditional couriers wanted $150. The traveler was verified and delivered it safely within 3 days. Highly recommend!",
    textEs: "¡Envié mi iPhone 15 a mi familia en Lima por solo $20! Los courier tradicionales querían $150. El viajero estaba verificado y lo entregó a salvo en 3 días. ¡Muy recomendado!",
    date: "Oct 2024",
    verified: true,
    avatar: "CM",
    tripRoute: "Miami → Lima",
  },

  /**
   * TESTIMONIAL #3 - Frequent Traveler
   */
  {
    id: 3,
    name: "Sofia Lopez",
    role: "Traveler",
    roleEs: "Viajera",
    location: "Cusco, Peru",
    rating: 5,
    text: "As a flight attendant, I travel Miami-Lima monthly. FlightMate lets me earn $200-300 extra per trip. The insurance coverage gives me peace of mind. Great passive income!",
    textEs: "Como azafata, viajo Miami-Lima mensualmente. FlightMate me permite ganar $200-300 extra por viaje. La cobertura de seguro me da tranquilidad. ¡Excelente ingreso pasivo!",
    date: "Nov 2024",
    verified: true,
    avatar: "SL",
    tripRoute: "Miami → Lima",
    deliveries: 12,
  },

  /**
   * TESTIMONIAL #4 - First-Time Sender
   */
  {
    id: 4,
    name: "Diego Ramirez",
    role: "Sender",
    roleEs: "Remitente",
    location: "Arequipa, Peru",
    rating: 4,
    text: "First time using FlightMate and it was great! A bit nervous at first, but the traveler was professional and kept me updated. Received my Nike sneakers in perfect condition.",
    textEs: "¡Primera vez usando FlightMate y fue genial! Un poco nervioso al principio, pero el viajero fue profesional y me mantuvo actualizado. Recibí mis zapatillas Nike en perfectas condiciones.",
    date: "Oct 2024",
    verified: true,
    avatar: "DR",
  },

  /**
   * TESTIMONIAL #5 - Business Sender
   */
  {
    id: 5,
    name: "Ana Gutierrez",
    role: "Sender",
    roleEs: "Remitente",
    location: "Lima, Peru",
    rating: 5,
    text: "I run an online store and use FlightMate to source products from the US. Save thousands on shipping costs every month. The travelers are reliable and the tracking is excellent.",
    textEs: "Tengo una tienda online y uso FlightMate para obtener productos de EE.UU. Ahorro miles en costos de envío cada mes. Los viajeros son confiables y el seguimiento es excelente.",
    date: "Nov 2024",
    verified: true,
    avatar: "AG",
    deliveries: 8,
  },

  /**
   * TESTIMONIAL #6 - Student Traveler
   */
  {
    id: 6,
    name: "Miguel Torres",
    role: "Traveler",
    roleEs: "Viajero",
    location: "Orlando, FL",
    rating: 5,
    text: "College student here. FlightMate helps me afford my flights home! I've done 5 deliveries so far. Easy money and I get to help people. Win-win!",
    textEs: "Estudiante universitario aquí. ¡FlightMate me ayuda a costear mis vuelos a casa! He hecho 5 entregas hasta ahora. Dinero fácil y ayudo a la gente. ¡Todos ganan!",
    date: "Oct 2024",
    verified: true,
    avatar: "MT",
    tripRoute: "Orlando → Lima",
    deliveries: 5,
  },

  /**
   * TESTIMONIAL #7 - Gift Sender
   */
  {
    id: 7,
    name: "Patricia Flores",
    role: "Sender",
    roleEs: "Remitente",
    location: "Fort Lauderdale, FL",
    rating: 5,
    text: "Sent birthday gifts to my mom in Lima - AirPods and a smartwatch. The traveler delivered them personally and even gift-wrapped them! She was so happy. Thank you FlightMate!",
    textEs: "Envié regalos de cumpleaños a mi mamá en Lima - AirPods y un smartwatch. ¡El viajero los entregó personalmente y hasta los envolvió para regalo! Ella estaba tan feliz. ¡Gracias FlightMate!",
    date: "Nov 2024",
    verified: true,
    avatar: "PF",
  },

  /**
   * TESTIMONIAL #8 - Medical Supplies
   */
  {
    id: 8,
    name: "Roberto Silva",
    role: "Sender",
    roleEs: "Remitente",
    location: "Lima, Peru",
    rating: 5,
    text: "Needed specific vitamins from the US for my father's health. FlightMate made it possible at a fraction of courier costs. Delivered in 5 days. Grateful for this service!",
    textEs: "Necesitaba vitaminas específicas de EE.UU. para la salud de mi padre. FlightMate lo hizo posible a una fracción del costo de courier. Entregado en 5 días. ¡Agradecido por este servicio!",
    date: "Oct 2024",
    verified: true,
    avatar: "RS",
  },
];

/**
 * ============================================================================
 * HELPER FUNCTIONS
 * Filter and sort testimonials for different use cases
 * ============================================================================
 */

/**
 * Get testimonials by role (Traveler or Sender)
 */
export function getTestimonialsByRole(role: "Traveler" | "Sender"): Testimonial[] {
  return testimonials.filter((t) => t.role === role);
}

/**
 * Get only verified testimonials
 */
export function getVerifiedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.verified);
}

/**
 * Get testimonials with minimum rating
 */
export function getTestimonialsByRating(minRating: number): Testimonial[] {
  return testimonials.filter((t) => t.rating >= minRating);
}

/**
 * Get featured testimonials (5-star, verified, with deliveries)
 */
export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter(
    (t) => t.rating === 5 && t.verified && (t.deliveries ?? 0) > 0
  );
}

/**
 * Get random testimonials for display
 */
export function getRandomTestimonials(count: number = 3): Testimonial[] {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * ============================================================================
 * COPY-PASTE TEMPLATE FOR NEW TESTIMONIALS
 * ============================================================================
 *
 * Copy the block below, increment the ID, and add to the testimonials array:
 *
  {
    id: 9, // INCREMENT THIS NUMBER
    name: "Full Name",
    role: "Traveler", // or "Sender"
    roleEs: "Viajero", // or "Viajera" or "Remitente"
    location: "City, Country",
    rating: 5, // 1-5 stars
    text: "English testimonial text here...",
    textEs: "Texto del testimonio en español aquí...",
    date: "Nov 2024", // Month Year
    verified: true, // true or false
    avatar: "XX", // Initials or image URL
    tripRoute: "Miami → Lima", // Optional
    deliveries: 1, // Optional: number of deliveries
  },
 *
 * ============================================================================
 */
