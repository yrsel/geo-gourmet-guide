
import React from 'react';
import { Restaurant, FilterType } from '@/types';
import { mockRestaurants } from '@/data/mockData';
import RestaurantCard from '@/components/RestaurantCard';

interface RestaurantListProps {
  filter: FilterType;
  onRestaurantSelect: (restaurant: Restaurant) => void;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ filter, onRestaurantSelect }) => {
  const filteredRestaurants = mockRestaurants
    .filter(restaurant => {
      if (filter === 'local') return restaurant.localRating >= 4.0;
      if (filter === 'tourist') return restaurant.touristRating >= 4.0;
      if (filter === 'highRating') return restaurant.overallRating >= 4.5;
      if (filter === 'manyReviews') return restaurant.totalReviewCount >= 50;
      return restaurant.overallRating >= 4.0;
    })
    .sort((a, b) => {
      if (filter === 'local') return b.localRating - a.localRating;
      if (filter === 'tourist') return b.touristRating - a.touristRating;
      if (filter === 'highRating') return b.overallRating - a.overallRating;
      if (filter === 'manyReviews') return b.totalReviewCount - a.totalReviewCount;
      return b.overallRating - a.overallRating;
    });

  return (
    <div className="p-4 space-y-4 min-h-[calc(100vh-140px)]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">
          {filter === 'local' ? '로컬 추천 맛집' : 
           filter === 'tourist' ? '관광객 추천 맛집' : 
           filter === 'highRating' ? '별점 높은 맛집' :
           filter === 'manyReviews' ? '리뷰 많은 맛집' : '인기 맛집'}
        </h2>
        <span className="text-sm text-gray-500">{filteredRestaurants.length}곳</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            filter={filter}
            onClick={() => onRestaurantSelect(restaurant)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
