
export type FilterType = 'local' | 'tourist' | 'all' | 'highRating' | 'manyReviews';

export interface Restaurant {
  id: string;
  name: string;
  category: string;
  address: string;
  phone: string;
  operatingHours: string;
  priceRange: string;
  description: string;
  images: string[];
  specialties: string[];
  overallRating: number;
  localRating: number;
  touristRating: number;
  totalReviewCount: number;
  localReviewCount: number;
  touristReviewCount: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userType: 'local' | 'tourist';
  rating: number;
  content: string;
  images?: string[];
  createdAt: string;
  helpfulCount?: number;
  isHelpfulByUser?: boolean;
}
