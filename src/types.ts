export interface Service {
  id: string;
  name: string;
  category: 'corte' | 'barba' | 'combo' | 'ritual';
  duration: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  isPromo?: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: 'fijacion' | 'barba' | 'afeitado' | 'accesorios';
  price: number;
  originalPrice?: number;
  size: string;
  description: string;
  benefits: string[];
  inStock: boolean;
  rating: number;
  imageIcon: string;
  imageUrl?: string;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  avatar: string;
  rating: number;
}

export interface BookingAppointment {
  serviceId: string;
  serviceName: string;
  barberId: string;
  barberName: string;
  date: string;
  time: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  notes?: string;
  totalPrice: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
