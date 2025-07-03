
import React, { useState, useRef } from 'react';
import { Restaurant, FilterType } from '@/types';
import { mockRestaurants, getRestaurantPositions } from '@/data/mockData';
import RestaurantCard from '@/components/RestaurantCard';

interface MapViewProps {
  filter: FilterType;
  onRestaurantSelect: (restaurant: Restaurant) => void;
}

const MapView: React.FC<MapViewProps> = ({ filter, onRestaurantSelect }) => {
  const [mapTransform, setMapTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [isDraggingMap, setIsDraggingMap] = useState(false);
  const mapStartPos = useRef({ x: 0, y: 0 });
  const mapStartTransform = useRef({ x: 0, y: 0 });

  const filteredRestaurants = mockRestaurants.filter(restaurant => {
    if (filter === 'local') return restaurant.localRating >= 4.0;
    if (filter === 'tourist') return restaurant.touristRating >= 4.0;
    if (filter === 'highRating') return restaurant.overallRating >= 4.5;
    if (filter === 'manyReviews') return restaurant.totalReviewCount >= 50;
    return restaurant.overallRating >= 4.0;
  });

  const positions = getRestaurantPositions(filter);

  const handleMapMouseDown = (e: React.MouseEvent) => {
    setIsDraggingMap(true);
    mapStartPos.current = { x: e.clientX, y: e.clientY };
    mapStartTransform.current = { x: mapTransform.x, y: mapTransform.y };
  };

  const handleMapMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingMap) return;
    
    const deltaX = e.clientX - mapStartPos.current.x;
    const deltaY = e.clientY - mapStartPos.current.y;
    
    setMapTransform({
      ...mapTransform,
      x: mapStartTransform.current.x + deltaX,
      y: mapStartTransform.current.y + deltaY,
    });
  };

  const handleMapMouseUp = () => {
    setIsDraggingMap(false);
  };

  const handleMapWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const scaleFactor = e.deltaY > 0 ? 0.9 : 1.1;
    const newScale = Math.max(0.5, Math.min(3, mapTransform.scale * scaleFactor));
    
    setMapTransform({
      ...mapTransform,
      scale: newScale,
    });
  };

  const fixedBottomSheetHeight = 160;

  return (
    <div className="relative h-[calc(100vh-140px)] overflow-hidden">
      {/* 인터랙티브 지도 */}
      <div 
        className="absolute inset-0 bg-gray-100 cursor-grab active:cursor-grabbing"
        style={{ bottom: `${fixedBottomSheetHeight}px` }}
        onMouseDown={handleMapMouseDown}
        onMouseMove={handleMapMouseMove}
        onMouseUp={handleMapMouseUp}
        onMouseLeave={handleMapMouseUp}
        onWheel={handleMapWheel}
      >
        <div
          style={{
            transform: `translate(${mapTransform.x}px, ${mapTransform.y}px) scale(${mapTransform.scale})`,
            transition: isDraggingMap ? 'none' : 'transform 0.2s ease-out',
            transformOrigin: 'center center',
          }}
        >
          {/* 실제 지도와 유사한 배경 */}
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 300">
            {/* 메인 도로들 */}
            <path d="M0 100 L400 120" stroke="#d1d5db" strokeWidth="12" />
            <path d="M0 180 L400 160" stroke="#d1d5db" strokeWidth="10" />
            <path d="M100 0 L120 300" stroke="#d1d5db" strokeWidth="12" />
            <path d="M250 0 L270 300" stroke="#d1d5db" strokeWidth="10" />
            <path d="M350 0 L330 300" stroke="#d1d5db" strokeWidth="8" />
            
            {/* 보조 도로들 */}
            <path d="M0 50 L200 60" stroke="#e5e7eb" strokeWidth="6" />
            <path d="M150 40 L400 45" stroke="#e5e7eb" strokeWidth="6" />
            <path d="M0 220 L300 240" stroke="#e5e7eb" strokeWidth="6" />
            <path d="M200 0 L210 200" stroke="#e5e7eb" strokeWidth="6" />
            
            {/* 건물 블록들 */}
            <rect x="10" y="10" width="80" height="80" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
            <rect x="130" y="20" width="60" height="70" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
            <rect x="280" y="30" width="90" height="60" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
            <rect x="20" y="200" width="70" height="80" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
            <rect x="180" y="180" width="80" height="100" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
            <rect x="300" y="200" width="80" height="70" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
            
            {/* 한강공원 */}
            <rect x="290" y="110" width="60" height="60" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" rx="10" />
            <text x="320" y="130" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="bold">한강공원</text>
            <text x="320" y="140" textAnchor="middle" fontSize="6" fill="#16a34a">Han River Park</text>
            
            {/* 공원 내 시설들 */}
            <circle cx="305" cy="150" r="2" fill="#22c55e" />
            <circle cx="320" cy="155" r="1.5" fill="#22c55e" />
            <circle cx="335" cy="148" r="2" fill="#22c55e" />
          </svg>
          
          {/* 현재 위치 (지도 중심에 고정) */}
          <div 
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{
              top: '50%',
              left: '50%'
            }}
          >
            <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
            <div className="absolute -inset-2 bg-blue-300 rounded-full animate-ping opacity-20"></div>
          </div>

          {/* 맛집 마커들 */}
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
                onClick={(e) => {
                  e.stopPropagation();
                  onRestaurantSelect(restaurant);
                }}
              >
                <div className="relative">
                  <div className={`w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-sm ${
                    filter === 'local' ? 'bg-green-500' :
                    filter === 'tourist' ? 'bg-blue-500' : 
                    filter === 'highRating' ? 'bg-yellow-500' :
                    filter === 'manyReviews' ? 'bg-purple-500' : 'bg-indigo-500'
                  }`}>
                    🍴
                  </div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="bg-white rounded-lg shadow-lg px-3 py-2 text-xs whitespace-nowrap">
                      <div className="font-medium">{restaurant.name}</div>
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <span>⭐</span>
                        <span>{restaurant.overallRating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 고정 높이 바텀시트 */}
      <div 
        className="absolute left-0 right-0 bg-white rounded-t-2xl shadow-2xl"
        style={{ 
          bottom: 0,
          height: `${fixedBottomSheetHeight}px`
        }}
      >
        <div className="p-4 h-full flex flex-col">
          {/* 간단한 핸들 */}
          <div className="flex justify-center mb-2">
            <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
          </div>
          
          <h3 className="text-sm font-semibold mb-2 flex-shrink-0">
            {filter === 'local' ? '로컬 추천 맛집' : 
             filter === 'tourist' ? '관광객 추천 맛집' : 
             filter === 'highRating' ? '별점 높은 맛집' :
             filter === 'manyReviews' ? '리뷰 많은 맛집' : '인기 맛집'} 
            <span className="text-xs text-gray-500 ml-2">({filteredRestaurants.length}곳)</span>
          </h3>
          
          {/* 좌우 스크롤 가능한 카드 리스트 */}
          <div className="flex-1 overflow-hidden">
            <div className="flex space-x-3 overflow-x-auto pb-2 h-full scrollbar-hide">
              {filteredRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="flex-shrink-0 w-64">
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
