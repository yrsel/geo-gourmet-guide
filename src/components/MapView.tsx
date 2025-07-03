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

  const getBaseFilter = () => {
    if (filter === 'highRating' || filter === 'manyReviews' || filter === 'tourist') {
      return 'all';
    }
    return filter;
  };

  const filteredRestaurants = mockRestaurants.filter(restaurant => {
    const baseFilter = getBaseFilter();
    let baseFiltered = false;
    
    if (baseFilter === 'local') {
      baseFiltered = restaurant.localRating >= 4.0;
    } else if (baseFilter === 'all') {
      baseFiltered = restaurant.overallRating >= 4.0;
    }
    
    if (!baseFiltered) return false;
    
    // Apply additional sorting filters
    if (filter === 'tourist') return restaurant.touristRating >= 4.0;
    if (filter === 'highRating') return restaurant.overallRating >= 4.5;
    if (filter === 'manyReviews') return restaurant.totalReviewCount >= 50;
    
    return true;
  }).sort((a, b) => {
    if (filter === 'local') return b.localRating - a.localRating;
    if (filter === 'tourist') return b.touristRating - a.touristRating;
    if (filter === 'highRating') return b.overallRating - a.overallRating;
    if (filter === 'manyReviews') return b.totalReviewCount - a.totalReviewCount;
    return b.overallRating - a.overallRating;
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

  const fixedBottomSheetHeight = 280;

  return (
    <div className="relative h-[calc(100vh-140px)] overflow-hidden">
      {/* 현실적인 지도 배경 */}
      <div 
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
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
          {/* 현실적인 지도 배경 */}
          <svg className="w-full h-full absolute inset-0" viewBox="0 0 800 600">
            {/* 지도 기본 배경 (연한 베이지) */}
            <rect width="800" height="600" fill="#f7f3e9" />
            
            {/* 강 (한강을 모티브로) */}
            <path d="M0 300 Q200 280 400 300 Q600 320 800 300 L800 350 Q600 330 400 350 Q200 370 0 350 Z" fill="#7dd3fc" stroke="#0ea5e9" strokeWidth="2" />
            
            {/* 주요 도로망 */}
            <path d="M0 150 L800 150" stroke="#9ca3af" strokeWidth="12" />
            <path d="M0 450 L800 450" stroke="#9ca3af" strokeWidth="12" />
            <path d="M200 0 L200 600" stroke="#9ca3af" strokeWidth="10" />
            <path d="M400 0 L400 600" stroke="#9ca3af" strokeWidth="12" />
            <path d="M600 0 L600 600" stroke="#9ca3af" strokeWidth="10" />
            
            {/* 보조 도로들 */}
            <path d="M0 100 L800 100" stroke="#d1d5db" strokeWidth="6" />
            <path d="M0 250 L800 250" stroke="#d1d5db" strokeWidth="6" />
            <path d="M0 500 L800 500" stroke="#d1d5db" strokeWidth="6" />
            <path d="M100 0 L100 600" stroke="#d1d5db" strokeWidth="6" />
            <path d="M300 0 L300 600" stroke="#d1d5db" strokeWidth="6" />
            <path d="M500 0 L500 600" stroke="#d1d5db" strokeWidth="6" />
            <path d="M700 0 L700 600" stroke="#d1d5db" strokeWidth="6" />
            
            {/* 건물 블록들 */}
            <rect x="50" y="50" width="120" height="80" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" rx="5" />
            <rect x="220" y="60" width="100" height="70" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" rx="5" />
            <rect x="420" y="40" width="140" height="90" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" rx="5" />
            <rect x="620" y="50" width="120" height="80" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" rx="5" />
            
            <rect x="80" y="170" width="90" height="60" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" rx="5" />
            <rect x="250" y="180" width="120" height="90" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" rx="5" />
            <rect x="450" y="170" width="100" height="70" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" rx="5" />
            <rect x="650" y="180" width="110" height="80" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" rx="5" />
            
            <rect x="60" y="370" width="110" height="100" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" rx="5" />
            <rect x="240" y="380" width="130" height="80" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" rx="5" />
            <rect x="440" y="370" width="120" height="90" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" rx="5" />
            <rect x="640" y="380" width="100" height="85" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" rx="5" />
            
            <rect x="90" y="520" width="80" height="60" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" rx="5" />
            <rect x="270" y="510" width="110" height="70" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" rx="5" />
            <rect x="470" y="520" width="90" height="65" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" rx="5" />
            <rect x="660" y="515" width="100" height="70" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" rx="5" />
            
            {/* 공원들 */}
            <rect x="120" y="260" width="80" height="80" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" rx="15" />
            <text x="160" y="290" textAnchor="middle" fontSize="10" fill="#16a34a" fontWeight="bold">공원</text>
            <circle cx="140" cy="310" r="3" fill="#22c55e" />
            <circle cx="160" cy="315" r="2" fill="#22c55e" />
            <circle cx="180" cy="305" r="2.5" fill="#22c55e" />
            
            <rect x="520" y="280" width="70" height="70" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" rx="15" />
            <text x="555" y="305" textAnchor="middle" fontSize="9" fill="#16a34a" fontWeight="bold">녹지</text>
            <circle cx="535" cy="325" r="2.5" fill="#22c55e" />
            <circle cx="555" cy="330" r="2" fill="#22c55e" />
            <circle cx="575" cy="320" r="3" fill="#22c55e" />
            
            {/* 지하철역 표시 */}
            <circle cx="200" cy="150" r="8" fill="#ef4444" stroke="#white" strokeWidth="2" />
            <text x="200" y="135" textAnchor="middle" fontSize="8" fill="#374151" fontWeight="bold">지하철</text>
            
            <circle cx="400" cy="450" r="8" fill="#ef4444" stroke="#white" strokeWidth="2" />
            <text x="400" y="435" textAnchor="middle" fontSize="8" fill="#374151" fontWeight="bold">지하철</text>
          </svg>
          
          {/* 현재 위치 (지도 중심에 고정) */}
          <div 
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{
              top: '50%',
              left: '50%'
            }}
          >
            <div className="w-5 h-5 bg-blue-500 rounded-full border-3 border-white shadow-lg animate-pulse"></div>
            <div className="absolute -inset-3 bg-blue-300 rounded-full animate-ping opacity-30"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                내 위치
              </div>
            </div>
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
                  <div className={`w-10 h-10 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-lg ${
                    getBaseFilter() === 'local' ? 'bg-green-500' : 'bg-indigo-500'
                  }`}>
                    🍴
                  </div>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
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

      {/* 좌우 스크롤 바텀시트 */}
      <div 
        className="absolute left-0 right-0 bg-white rounded-t-3xl shadow-2xl"
        style={{ 
          bottom: 0,
          height: `${fixedBottomSheetHeight}px`
        }}
      >
        <div className="p-4 h-full flex flex-col">
          {/* 핸들 */}
          <div className="flex justify-center mb-3">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
          </div>
          
          <h3 className="text-lg font-bold mb-3 flex-shrink-0">
            {getBaseFilter() === 'local' ? '로컬 추천 맛집' : '통합 추천 맛집'} 
            {filter !== getBaseFilter() && (
              <span className="text-sm font-normal text-gray-500 ml-2">
                ({filter === 'highRating' ? '별점순' : 
                  filter === 'manyReviews' ? '리뷰순' : 
                  filter === 'tourist' ? '관광객추천' : ''})
              </span>
            )}
            <span className="text-sm text-gray-500 ml-2 font-normal">({filteredRestaurants.length}곳)</span>
          </h3>
          
          {/* 좌우 스크롤 카드 리스트 */}
          <div className="flex-1 overflow-hidden">
            <div className="flex space-x-4 h-full overflow-x-auto scrollbar-hide pb-2">
              {filteredRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="flex-shrink-0 w-64">
                  <RestaurantCard
                    restaurant={restaurant}
                    filter={getBaseFilter()}
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
