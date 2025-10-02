export interface FAQItem {
  id: number;
  question: string;
  questionEs: string;
  answer: string;
  answerEs: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  titleEs: string;
  icon: string;
  questions: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "general",
    title: "General",
    titleEs: "General",
    icon: "ℹ️",
    questions: [
      {
        id: 1,
        question: "What is FlightMate?",
        questionEs: "¿Qué es FlightMate?",
        answer: "FlightMate is a peer-to-peer marketplace that connects travelers with available luggage space to people who need to send packages. Travelers earn money by delivering items, and senders save up to 70% compared to traditional courier services.",
        answerEs: "FlightMate es un mercado peer-to-peer que conecta viajeros con espacio disponible en su equipaje con personas que necesitan enviar paquetes. Los viajeros ganan dinero entregando artículos, y los remitentes ahorran hasta 70% comparado con servicios de mensajería tradicionales.",
      },
      {
        id: 2,
        question: "How does FlightMate work?",
        questionEs: "¿Cómo funciona FlightMate?",
        answer: "Travelers post their flight details and available luggage space on our platform. Senders browse available trips and request delivery for their packages. Once both parties agree, they coordinate pickup and delivery details, meet at agreed locations, and complete the transaction.",
        answerEs: "Los viajeros publican los detalles de su vuelo y el espacio disponible en su equipaje en nuestra plataforma. Los remitentes buscan viajes disponibles y solicitan entrega para sus paquetes. Una vez que ambas partes están de acuerdo, coordinan los detalles de recogida y entrega, se encuentran en ubicaciones acordadas y completan la transacción.",
      },
      {
        id: 3,
        question: "What routes does FlightMate serve?",
        questionEs: "¿Qué rutas sirve FlightMate?",
        answer: "Currently, we operate between Peru (Lima, Cusco, Arequipa) and the USA (Miami, Fort Lauderdale, Orlando). We're expanding to Mexico, Colombia, Ecuador, and Argentina in 2025.",
        answerEs: "Actualmente, operamos entre Perú (Lima, Cusco, Arequipa) y EE.UU. (Miami, Fort Lauderdale, Orlando). Nos estamos expandiendo a México, Colombia, Ecuador y Argentina en 2025.",
      },
      {
        id: 4,
        question: "Is FlightMate legal?",
        questionEs: "¿Es legal FlightMate?",
        answer: "Yes, FlightMate operates within legal guidelines. However, both travelers and senders are responsible for complying with customs regulations, airline policies, and local laws regarding items being transported.",
        answerEs: "Sí, FlightMate opera dentro de las pautas legales. Sin embargo, tanto los viajeros como los remitentes son responsables de cumplir con las regulaciones aduaneras, políticas de aerolíneas y leyes locales sobre los artículos que se transportan.",
      },
    ],
  },
  {
    id: "travelers",
    title: "For Travelers",
    titleEs: "Para Viajeros",
    icon: "✈️",
    questions: [
      {
        id: 5,
        question: "How much can I earn as a traveler?",
        questionEs: "¿Cuánto puedo ganar como viajero?",
        answer: "Travelers typically earn $100-300 per trip depending on the weight and size of items delivered. Rates average $15-20 per kilogram. You set your own pricing based on your available space and preferences.",
        answerEs: "Los viajeros típicamente ganan $100-300 por viaje dependiendo del peso y tamaño de los artículos entregados. Las tarifas promedian $15-20 por kilogramo. Tú estableces tu propio precio según tu espacio disponible y preferencias.",
      },
      {
        id: 6,
        question: "What are the requirements to become a traveler?",
        questionEs: "¿Cuáles son los requisitos para ser viajero?",
        answer: "You must be 18+ years old, have a valid ID, and provide verified contact information. We recommend verified travelers complete at least one successful delivery to earn trust badges.",
        answerEs: "Debes tener 18+ años, tener una identificación válida y proporcionar información de contacto verificada. Recomendamos que los viajeros verificados completen al menos una entrega exitosa para ganar insignias de confianza.",
      },
      {
        id: 7,
        question: "What if my flight is delayed or cancelled?",
        questionEs: "¿Qué pasa si mi vuelo se retrasa o cancela?",
        answer: "Contact the sender immediately through WhatsApp or our messaging system. Work together to find a solution - either rescheduling or refunding. Our insurance can cover certain delays.",
        answerEs: "Contacta al remitente inmediatamente a través de WhatsApp o nuestro sistema de mensajería. Trabaja en conjunto para encontrar una solución - ya sea reprogramar o reembolsar. Nuestro seguro puede cubrir ciertos retrasos.",
      },
      {
        id: 8,
        question: "Can I decline a delivery request?",
        questionEs: "¿Puedo rechazar una solicitud de entrega?",
        answer: "Yes, you have full control. You can review package details, communicate with senders, and decline any request that doesn't meet your comfort level or capacity constraints.",
        answerEs: "Sí, tienes control total. Puedes revisar los detalles del paquete, comunicarte con los remitentes y rechazar cualquier solicitud que no cumpla con tu nivel de comodidad o restricciones de capacidad.",
      },
      {
        id: 9,
        question: "What capacity types are available?",
        questionEs: "¿Qué tipos de capacidad están disponibles?",
        answer: "We support 4 capacity types: Hand-carry only (up to 5kg), Backpack/Carry-on (up to 10kg), Checked luggage (up to 20kg), and Multiple bags (20kg+). Choose what fits your travel plans.",
        answerEs: "Soportamos 4 tipos de capacidad: Solo mano (hasta 5kg), Mochila/Equipaje de mano (hasta 10kg), Maleta facturada (hasta 20kg) y Múltiples maletas (20kg+). Elige lo que se ajuste a tus planes de viaje.",
      },
    ],
  },
  {
    id: "senders",
    title: "For Senders",
    titleEs: "Para Remitentes",
    icon: "📦",
    questions: [
      {
        id: 10,
        question: "How much does it cost to send a package?",
        questionEs: "¿Cuánto cuesta enviar un paquete?",
        answer: "Costs vary by weight, route, and traveler pricing, but you'll typically save 50-70% compared to traditional courier services. Average rates are $15-20 per kilogram. Browse available travelers to compare prices.",
        answerEs: "Los costos varían según el peso, la ruta y el precio del viajero, pero típicamente ahorrarás 50-70% comparado con servicios de mensajería tradicionales. Las tarifas promedio son $15-20 por kilogramo. Busca viajeros disponibles para comparar precios.",
      },
      {
        id: 11,
        question: "What items can I send?",
        questionEs: "¿Qué artículos puedo enviar?",
        answer: "You can send electronics (phones, laptops, AirPods), clothing, gifts, vitamins, supplements, cosmetics, and other legal items. See our prohibited items list for restrictions.",
        answerEs: "Puedes enviar electrónicos (teléfonos, laptops, AirPods), ropa, regalos, vitaminas, suplementos, cosméticos y otros artículos legales. Consulta nuestra lista de artículos prohibidos para restricciones.",
      },
      {
        id: 12,
        question: "What items are prohibited?",
        questionEs: "¿Qué artículos están prohibidos?",
        answer: "Prohibited items include: illegal substances, weapons and ammunition, hazardous materials, live animals, perishable goods (unless agreed), and currency over legal limits. Check customs regulations for your specific route.",
        answerEs: "Los artículos prohibidos incluyen: sustancias ilegales, armas y municiones, materiales peligrosos, animales vivos, productos perecederos (a menos que se acuerde) y moneda sobre límites legales. Consulta las regulaciones aduaneras para tu ruta específica.",
      },
      {
        id: 13,
        question: "How do I track my package?",
        questionEs: "¿Cómo rastro mi paquete?",
        answer: "You can communicate directly with your traveler via WhatsApp or our messaging system. Travelers typically provide updates at key points: pickup, airport, landing, and delivery. We're working on real-time GPS tracking for 2025.",
        answerEs: "Puedes comunicarte directamente con tu viajero a través de WhatsApp o nuestro sistema de mensajería. Los viajeros típicamente proporcionan actualizaciones en puntos clave: recogida, aeropuerto, aterrizaje y entrega. Estamos trabajando en rastreo GPS en tiempo real para 2025.",
      },
      {
        id: 14,
        question: "What if my package gets damaged or lost?",
        questionEs: "¿Qué pasa si mi paquete se daña o pierde?",
        answer: "All deliveries are covered by our insurance policy. Basic coverage is included free, with premium tiers available for high-value items. File a claim within 48 hours of delivery for fastest resolution.",
        answerEs: "Todas las entregas están cubiertas por nuestra póliza de seguro. La cobertura básica está incluida gratis, con niveles premium disponibles para artículos de alto valor. Presenta un reclamo dentro de 48 horas de la entrega para la resolución más rápida.",
      },
    ],
  },
  {
    id: "safety",
    title: "Safety & Security",
    titleEs: "Seguridad",
    icon: "🛡️",
    questions: [
      {
        id: 15,
        question: "How are travelers verified?",
        questionEs: "¿Cómo se verifican los viajeros?",
        answer: "Verified travelers have completed ID verification, phone verification, and at least one successful delivery. We display verification badges, ratings, and review counts to help you choose reliable travelers.",
        answerEs: "Los viajeros verificados han completado verificación de identificación, verificación de teléfono y al menos una entrega exitosa. Mostramos insignias de verificación, calificaciones y conteos de reseñas para ayudarte a elegir viajeros confiables.",
      },
      {
        id: 16,
        question: "Is my personal information safe?",
        questionEs: "¿Está segura mi información personal?",
        answer: "Yes, we use industry-standard encryption to protect your data. We never share your full contact details until you agree to a transaction. Payment information is processed through secure, PCI-compliant systems.",
        answerEs: "Sí, usamos cifrado estándar de la industria para proteger tus datos. Nunca compartimos tus detalles de contacto completos hasta que aceptes una transacción. La información de pago se procesa a través de sistemas seguros y compatibles con PCI.",
      },
      {
        id: 17,
        question: "What insurance coverage do you offer?",
        questionEs: "¿Qué cobertura de seguro ofrecen?",
        answer: "We offer three tiers: Basic (free, up to $500), Standard ($5, up to $1500), and Premium ($15, up to $5000). Coverage includes loss, damage, and delays. See our How It Works page for full details.",
        answerEs: "Ofrecemos tres niveles: Básico (gratis, hasta $500), Estándar ($5, hasta $1500) y Premium ($15, hasta $5000). La cobertura incluye pérdida, daño y retrasos. Consulta nuestra página Cómo Funciona para detalles completos.",
      },
      {
        id: 18,
        question: "What should I do if I feel unsafe?",
        questionEs: "¿Qué debo hacer si me siento inseguro?",
        answer: "Always meet in public places like airports or coffee shops. Trust your instincts - if something feels wrong, cancel the transaction. Report any suspicious behavior to our support team immediately at support@flightmate.com.",
        answerEs: "Siempre reúnete en lugares públicos como aeropuertos o cafeterías. Confía en tus instintos - si algo se siente mal, cancela la transacción. Reporta cualquier comportamiento sospechoso a nuestro equipo de soporte inmediatamente en support@flightmate.com.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    titleEs: "Pagos",
    icon: "💳",
    questions: [
      {
        id: 19,
        question: "How do payments work?",
        questionEs: "¿Cómo funcionan los pagos?",
        answer: "Senders pay upfront when booking. We hold the funds securely until successful delivery is confirmed by both parties. Travelers receive payment within 24-48 hours after delivery confirmation.",
        answerEs: "Los remitentes pagan por adelantado al reservar. Mantenemos los fondos de forma segura hasta que ambas partes confirmen la entrega exitosa. Los viajeros reciben el pago dentro de 24-48 horas después de la confirmación de entrega.",
      },
      {
        id: 20,
        question: "What payment methods do you accept?",
        questionEs: "¿Qué métodos de pago aceptan?",
        answer: "We accept credit/debit cards, PayPal, Venmo, Zelle, and bank transfers. For Peru, we also accept local options like Yape and Plin. International wire transfers available for high-value shipments.",
        answerEs: "Aceptamos tarjetas de crédito/débito, PayPal, Venmo, Zelle y transferencias bancarias. Para Perú, también aceptamos opciones locales como Yape y Plin. Transferencias internacionales disponibles para envíos de alto valor.",
      },
      {
        id: 21,
        question: "Are there any additional fees?",
        questionEs: "¿Hay tarifas adicionales?",
        answer: "FlightMate charges a 10% service fee (minimum $5) on all transactions to cover platform costs, insurance, and support. This fee is included in the total price shown. No hidden charges.",
        answerEs: "FlightMate cobra una tarifa de servicio del 10% (mínimo $5) en todas las transacciones para cubrir costos de plataforma, seguro y soporte. Esta tarifa está incluida en el precio total mostrado. Sin cargos ocultos.",
      },
    ],
  },
];
