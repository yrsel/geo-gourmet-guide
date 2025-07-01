
import React, { useState, useRef } from 'react';
import { Restaurant, FilterType } from '@/types';
import { mockRestaurants, getRestaurantPositions } from '@/data/mockData';
import RestaurantCard from '@/components/RestaurantCard';

interface MapViewProps {
  filter: FilterType;
  onRestaurantSelect: (restaurant: Restaurant) => void;
}

const MapView: React.FC<MapViewProps> = ({ filter, onRestaurantSelect }) => {
  const [bottomSheetHeight, setBottomSheetHeight] = useState(52);
  const [isDragging, setIsDragging] = useState(false);
  const startY = useRef(0);
  const startHeight = useRef(0);

  const filteredRestaurants = mockRestaurants.filter(restaurant => {
    if (filter === 'local') return restaurant.localRating >= 4.0;
    if (filter === 'tourist') return restaurant.touristRating >= 4.0;
    return restaurant.overallRating >= 4.0;
  });

  const positions = getRestaurantPositions(filter);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startY.current = e.clientY;
    startHeight.current = bottomSheetHeight;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaY = startY.current - e.clientY;
    const viewportHeight = window.innerHeight;
    const deltaPercentage = (deltaY / viewportHeight) * 100;
    
    let newHeight = startHeight.current + deltaPercentage;
    newHeight = Math.max(20, Math.min(80, newHeight));
    
    setBottomSheetHeight(newHeight);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 현재 위치를 지도 중심에 고정 (바텀시트 높이와 무관하게)
  const currentLocationTop = '45%'; // 지도 중심에 고정

  return (
    <div 
      className="relative h-[calc(100vh-140px)] overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Realistic Map Background */}
      <div className="absolute inset-0 bg-gray-100">
        {/* Streets */}
        <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 300">
          {/* Main roads */}
          <path d="M0 100 L400 120" stroke="#e5e7eb" strokeWidth="8" />
          <path d="M0 180 L400 160" stroke="#e5e7eb" strokeWidth="6" />
          <path d="M100 0 L120 300" stroke="#e5e7eb" strokeWidth="8" />
          <path d="M250 0 L270 300" stroke="#e5e7eb" strokeWidth="6" />
          <path d="M350 0 L330 300" stroke="#e5e7eb" strokeWidth="4" />
          
          {/* Small streets */}
          <path d="M0 50 L200 60" stroke="#f3f4f6" strokeWidth="3" />
          <path d="M150 40 L400 45" stroke="#f3f4f6" strokeWidth="3" />
          <path d="M0 220 L300 240" stroke="#f3f4f6" strokeWidth="3" />
          <path d="M200 0 L210 200" stroke="#f3f4f6" strokeWidth="3" />
          
          {/* Building blocks */}
          <rect x="10" y="10" width="80" height="80" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
          <rect x="130" y="20" width="60" height="70" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
          <rect x="280" y="30" width="90" height="60" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
          <rect x="20" y="200" width="70" height="80" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
          <rect x="180" y="180" width="80" height="100" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
          <rect x="300" y="200" width="80" height="70" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
          
          {/* Park area */}
          <circle cx="320" cy="140" r="30" fill="#dcfce7" stroke="#22c55e" strokeWidth="1" opacity="0.7" />
          <text x="320" y="145" textAnchor="middle" fontSize="8" fill="#16a34a">공원</text>
        </svg>
        
        {/* Current Location Indicator - 항상 지도 중심에 고정 */}
        <div 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
          style={{
            top: currentLocationTop,
            left: '50%'
          }}
        >
          <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
          <div className="absolute -inset-2 bg-blue-300 rounded-full animate-ping opacity-20"></div>
        </div>

        {/* Restaurant Markers */}
        {filteredRestaurants.map((restaurant, index) => {
          const position = positions[index % positions.length];
          
          return (
            <div
              key={restaurant.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
              style={{ 
                top: position.top, 
                left: position.left 
              }}
              onClick={() => onRestaurantSelect(restaurant)}
            >
              <div className="relative">
                <div className={`w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-sm ${
                  filter === 'local' ? 'bg-green-500' :
                  filter === 'tourist' ? 'bg-blue-500' : 'bg-indigo-500'
                }`}>
                  🍴
                </div>
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
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

      {/* Draggable Bottom Sheet */}
      <div 
        className="absolute left-0 right-0 bg-white rounded-t-2xl shadow-2xl transition-all duration-300"
        style={{ 
          bottom: 0,
          height: `${bottomSheetHeight}%`,
          maxHeight: '80%',
          minHeight: '20%'
        }}
      >
        <div className="p-4 h-full flex flex-col">
          {/* Drag Handle */}
          <div 
            className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4 cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
          ></div>
          
          <h3 className="text-lg font-semibold mb-3 flex-shrink-0">
            {filter === 'local' ? '로컬 추천 맛집' : 
             filter === 'tourist' ? '관광객 추천 맛집' : '인기 맛집'} 
            <span className="text-sm text-gray-500 ml-2">({filteredRestaurants.length}곳)</span>
          </h3>
          
          <div className="flex-1 overflow-hidden">
            <div className="flex space-x-3 overflow-x-auto pb-2 h-full">
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
    </div>
  );
};

export default MapView;
