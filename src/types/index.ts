
export interface Review {
  id: string;
  userId: string;
  userName: string;
  userType: 'local' | 'tourist';
  rating: number;
  content: string;
  images?: string[];
  createdAt: string;
  isHelpful?: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  category: string;
  address: string;
  phone: string;
  operatingHours: string;
  latitude: number;
  longitude: number;
  images: string[];
  description: string;
  localRating: number;
  touristRating: number;
  overallRating: number;
  localReviewCount: number;
  touristReviewCount: number;
  totalReviewCount: number;
  reviews: Review[];
  priceRange: string;
  specialties: string[];
}

export type FilterType = 'local' | 'tourist' | 'all';
