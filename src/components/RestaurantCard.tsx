
import React from 'react';
import { Restaurant, FilterType } from '@/types';

interface RestaurantCardProps {
  restaurant: Restaurant;
  filter: FilterType;
  onClick: () => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, filter, onClick }) => {
  const getRating = () => {
    switch (filter) {
      case 'local': return restaurant.localRating;
      case 'tourist': return restaurant.touristRating;
      default: return restaurant.overallRating;
    }
  };

  const getReviewCount = () => {
    switch (filter) {
      case 'local': return restaurant.localReviewCount;
      case 'tourist': return restaurant.touristReviewCount;
      default: return restaurant.totalReviewCount;
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer border border-gray-100"
    >
      <div className="relative">
        <img 
          src={restaurant.images[0]} 
          alt={restaurant.name}
          className="w-full h-32 object-cover rounded-t-xl"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${
            filter === 'local' ? 'bg-green-500' :
            filter === 'tourist' ? 'bg-blue-500' : 'bg-orange-500'
          }`}>
            {filter === 'local' ? '로컬' : filter === 'tourist' ? '관광객' : '통합'}
          </span>
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="font-semibold text-gray-900 mb-1">{restaurant.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{restaurant.category}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">⭐</span>
            <span className="font-medium">{getRating().toFixed(1)}</span>
            <span className="text-sm text-gray-500">({getReviewCount()})</span>
          </div>
          <span className="text-sm text-gray-500">{restaurant.priceRange}</span>
        </div>
        
        <div className="mt-2 flex flex-wrap gap-1">
          {restaurant.specialties.slice(0, 2).map((specialty, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
