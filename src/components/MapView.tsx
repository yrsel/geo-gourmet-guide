
import React from 'react';
import { Restaurant, FilterType } from '@/types';
import { mockRestaurants } from '@/data/mockData';
import RestaurantCard from '@/components/RestaurantCard';

interface MapViewProps {
  filter: FilterType;
  onRestaurantSelect: (restaurant: Restaurant) => void;
}

const MapView: React.FC<MapViewProps> = ({ filter, onRestaurantSelect }) => {
  const filteredRestaurants = mockRestaurants.filter(restaurant => {
    if (filter === 'local') return restaurant.localRating >= 4.0;
    if (filter === 'tourist') return restaurant.touristRating >= 4.0;
    return restaurant.overallRating >= 4.0;
  });

  return (
    <div className="relative h-[calc(100vh-140px)]">
      {/* Mock Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-yellow-50">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 300">
            <path d="M50 150 Q100 100 150 150 T250 150 T350 150" stroke="#10b981" strokeWidth="3" fill="none" />
            <path d="M0 200 Q50 180 100 200 T200 200 T300 200 T400 200" stroke="#3b82f6" strokeWidth="2" fill="none" />
            <circle cx="200" cy="150" r="80" fill="#f59e0b" fillOpacity="0.1" />
          </svg>
        </div>
        
        {/* Current Location Indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
          <div className="absolute -inset-2 bg-blue-300 rounded-full animate-ping opacity-20"></div>
        </div>

        {/* Restaurant Markers */}
        {filteredRestaurants.map((restaurant, index) => {
          const positions = [
            { top: '30%', left: '25%' },
            { top: '20%', left: '60%' },
            { top: '45%', left: '80%' },
            { top: '70%', left: '70%' },
            { top: '75%', left: '30%' },
            { top: '35%', left: '45%' },
          ];
          
          const position = positions[index % positions.length];
          
          return (
            <div
              key={restaurant.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ top: position.top, left: position.left }}
              onClick={() => onRestaurantSelect(restaurant)}
            >
              <div className="relative">
                <div className={`w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-sm ${
                  filter === 'local' ? 'bg-green-500' :
                  filter === 'tourist' ? 'bg-blue-500' : 'bg-orange-500'
                }`}>
                  🍴
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white rounded-lg shadow-lg px-3 py-2 text-xs whitespace-nowrap">
                    <div className="font-medium">{restaurant.name}</div>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <span>⭐</span>
                      <span>
                        {filter === 'local' ? restaurant.localRating :
                         filter === 'tourist' ? restaurant.touristRating : restaurant.overallRating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Sheet with Restaurant Cards */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl max-h-48 overflow-hidden">
        <div className="p-4">
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
          <h3 className="text-lg font-semibold mb-3">
            {filter === 'local' ? '로컬 추천 맛집' : 
             filter === 'tourist' ? '관광객 추천 맛집' : '인기 맛집'} 
            <span className="text-sm text-gray-500 ml-2">({filteredRestaurants.length}곳)</span>
          </h3>
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {filteredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="flex-shrink-0 w-72">
                <RestaurantCard
                  restaurant={restaurant}
                  filter={filter}
                  onClick={() => onRestaurantSelect(restaurant)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
