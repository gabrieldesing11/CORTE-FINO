import { Service, Product, Barber } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'promo-apertura',
    name: 'Combo Apertura: Corte + Barba',
    category: 'combo',
    duration: '45 min',
    price: 24000,
    description: 'Nuestra oferta estrella de inauguración. Corte personalizado a máquina/tijera más perfilado y afeitado tradicional con toalla caliente.',
    features: [
      'Corte de cabello a tijera o máquina',
      'Perfilado y delineado de barba con navaja libre',
      'Ritual de toalla caliente al eucalipto',
      'Aplicación de aceite hidratante y peinado final',
      'Bebida de cortesía (Espresso / Bebida fría)'
    ],
    isPopular: true,
    isPromo: true
  },
  {
    id: 'corte-clasico-fade',
    name: 'Corte Clásico & Fade de Precisión',
    category: 'corte',
    duration: '35 min',
    price: 18000,
    description: 'Degradados de alta precisión (Low, Mid, High Fade, Taper) o estilos clásicos a tijera con asesoría morfológica facial.',
    features: [
      'Diagnóstico de estilo y forma craneal',
      'Degradado o corte clásico a medida',
      'Lavado capilar revitalizante',
      'Peinado y acabado con pomada mate'
    ],
    isPopular: false
  },
  {
    id: 'perfilado-barba-spa',
    name: 'Perfilado de Barba & Ritual Spa',
    category: 'barba',
    duration: '30 min',
    price: 15000,
    description: 'Tratamiento completo para barba. Delineado nítido con navaja desinfectada, vapor ozono y nutrición intensiva.',
    features: [
      'Rebajado y simetría milimétrica',
      'Doble toalla caliente con esencias',
      'Afeitado suave con navaja desechable',
      'Masaje facial relajante con bálsamo mentolado'
    ],
    isPopular: false
  },
  {
    id: 'ritual-capilar-antifatiga',
    name: 'Ritual Capilar & Masaje Craneal',
    category: 'ritual',
    duration: '35 min',
    price: 22000,
    description: 'Experiencia relajante diseñada para desconectar del estrés urbano. Exfoliación capilar y activación circulatoria.',
    features: [
      'Exfoliación suave de cuero cabelludo',
      'Mascarilla nutritiva profunda',
      'Masaje descontracturante craneo-cervical',
      'Tónico refrescante revitalizante'
    ]
  },
  {
    id: 'perfilado-cejas-detalle',
    name: 'Perfilado de Cejas & Bigote',
    category: 'barba',
    duration: '20 min',
    price: 12000,
    description: 'Limpieza sutil y definición de contornos faciales respetando la naturalidad de la mirada masculina.',
    features: [
      'Definición con navaja libre o tijera de precisión',
      'Recorte de vellos sobrantes',
      'Gel hidratante calmante'
    ]
  },
  {
    id: 'experiencia-vip-maestro',
    name: 'Paquete Maestro Corte Fino VIP',
    category: 'combo',
    duration: '65 min',
    price: 38000,
    description: 'El ritual definitivo para caballeros exigentes. Incluye servicio completo de corte, barba premium y mascarilla negra.',
    features: [
      'Corte de autor con técnica tijera sobre peine',
      'Ritual de barba completo con toalla caliente y vapor',
      'Mascarilla negra purificante peel-off',
      'Lavado de lujo y peinado con cera artesanal',
      '2 bebidas de cortesía y atención preferencial'
    ],
    isPopular: true
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'pomada-mate-corte-fino',
    name: 'Pomada Mate Fijación Fuerte',
    category: 'fijacion',
    price: 32000,
    originalPrice: 38000,
    size: '100 ml',
    description: 'Fijación de alto rendimiento durante todo el día con acabado completamente mate y natural. No deja residuos y se retira fácilmente con agua.',
    benefits: ['Base agua libre de alcohol', 'Acabado seco y natural', 'Fragancia amaderada discreta'],
    inStock: true,
    rating: 4.9,
    imageIcon: 'jar',
    imageUrl: '/src/assets/images/pomada_mate_barberia_1793322092556.jpg'
  },
  {
    id: 'aceite-barba-roble-cedro',
    name: 'Aceite Nutritivo para Barba',
    category: 'barba',
    price: 28000,
    originalPrice: 34000,
    size: '30 ml',
    description: 'Fórmula exclusiva con aceite de argán virgen, jojoba y notas de roble tostado. Suaviza el vello áspero y elimina la resequedad de la piel.',
    benefits: ['Elimina picazón y caspa de barba', 'Absorción rápida sin sensación grasosa', 'Aroma masculino a madera noble'],
    inStock: true,
    rating: 5.0,
    imageIcon: 'dropper',
    imageUrl: '/src/assets/images/aceite_barba_gotero_1793322093728.jpg'
  },
  {
    id: 'balsamo-aftershave-menta',
    name: 'Bálsamo Calmante Post-Afeitado',
    category: 'afeitado',
    price: 25000,
    originalPrice: 30000,
    size: '120 ml',
    description: 'Loción hidratante enriquecida con aloe vera, caléndula y menta piperita. Cierra los poros inmediatamente y previene la irritación.',
    benefits: ['Cero ardor en piel recién afeitada', 'Efecto refrescante prolongado', 'Acelera la recuperación celular'],
    inStock: true,
    rating: 4.8,
    imageIcon: 'lotion',
    imageUrl: '/src/assets/images/balsamo_aftershave_1793322094200.jpg'
  },
  {
    id: 'cera-brillo-vintage',
    name: 'Cera Fijadora Brillo Clásico',
    category: 'fijacion',
    price: 29000,
    size: '90 g',
    description: 'Ideal para estilos peinados hacia atrás (Slick Back), raya al lado o Pompadour con un brillo pulido impecable de barbería tradicional.',
    benefits: ['Fijación elástica y moldeable', 'Brillo elegante controlado', 'Enriquecida con cera de abejas'],
    inStock: true,
    rating: 4.7,
    imageIcon: 'jar',
    imageUrl: '/src/assets/images/cera_brillo_clasica_1793322094615.jpg'
  },
  {
    id: 'peine-madera-sandalo',
    name: 'Peine Artesanal de Sándalo & Cuero',
    category: 'accesorios',
    price: 22000,
    size: 'Unidad',
    description: 'Tallado a mano en madera noble de sándalo verde. Dientes redondeados de doble espaciado para barba y cabello sin tirones ni estática.',
    benefits: ['Cero electricidad estática', 'Funda protectora en cuero vegano', 'Aroma natural relajante'],
    inStock: true,
    rating: 4.9,
    imageIcon: 'comb',
    imageUrl: '/src/assets/images/peine_madera_sandalo_1793322095364.jpg'
  },
  {
    id: 'kit-lanzamiento-completo',
    name: 'Caja Regalo Lanzamiento Corte Fino',
    category: 'accesorios',
    price: 89000,
    originalPrice: 110000,
    size: 'Kit 4 piezas',
    description: 'El conjunto definitivo para el cuidado del hombre: Pomada Mate, Aceite para Barba, Bálsamo Post-Afeitado y Peine de Sándalo.',
    benefits: ['Ahorras más del 20%', 'Presentación en caja negra de lujo', 'Edición limitada de apertura'],
    inStock: true,
    rating: 5.0,
    imageIcon: 'box',
    imageUrl: '/src/assets/images/kit_lanzamiento_lujo_1793322096332.jpg'
  }
];

export const BARBERS: Barber[] = [
  {
    id: 'mateo-rivas',
    name: 'Mateo Rivas',
    role: 'Master Barber & Cofundador',
    experience: '9 años de oficio',
    specialty: 'Cortes clásicos a tijera y afeitado tradicional con navaja libre',
    avatar: 'MR',
    rating: 5.0
  },
  {
    id: 'carlos-vega',
    name: 'Carlos Vega',
    role: 'Fade & Precision Specialist',
    experience: '6 años de oficio',
    specialty: 'Skin fade milimétrico, degradados modernos y diseños geométricos',
    avatar: 'CV',
    rating: 4.9
  },
  {
    id: 'andres-montoya',
    name: 'Andrés Montoya',
    role: 'Beard Grooming Specialist',
    experience: '7 años de oficio',
    specialty: 'Esculpido de barbas largas, visagismo y rituales relajantes',
    avatar: 'AM',
    rating: 4.9
  }
];

export const FAQS = [
  {
    question: '¿Qué incluye la promoción de apertura de $24.000?',
    answer: 'Incluye nuestro servicio completo de Corte de Cabello (a tijera o máquina con fade a elección) + Perfilado y Afeitado de Barba con toalla caliente aromatizada, aceites esenciales, peinado final y un café espresso o bebida fría de cortesía.'
  },
  {
    question: '¿Es obligatorio reservar cita con anticipación?',
    answer: 'Aceptamos clientes por orden de llegada si hay disponibilidad, pero recomendamos encarecidamente agendar tu cita desde esta página o por WhatsApp para evitar esperas y asegurar tu turno con el barbero de tu preferencia.'
  },
  {
    question: '¿Dónde están ubicados y cuál es el horario de atención?',
    answer: 'Estamos en la Carrera 10 #20-30 en Bogotá. Atendemos de Lunes a Sábado de 9:00 am a 8:00 pm de forma continua.'
  },
  {
    question: '¿Hacen envíos de los productos para el cuidado de barba y cabello?',
    answer: 'Sí, realizamos envíos contraentrega o con pago anticipado en toda el área metropolitana de Bogotá, o puedes recoger tus productos directamente en nuestra barbería sin costo adicional.'
  },
  {
    question: '¿Qué métodos de pago reciben en la barbería?',
    answer: 'Aceptamos efectivo, transferencias directas por Nequi, Daviplata, Llave/Bancolombia, y todas las tarjetas de crédito o débito Visa y Mastercard.'
  }
];
