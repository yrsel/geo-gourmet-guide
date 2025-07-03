
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

  const fixedBottomSheetHeight = 320;

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
          {/* 구글 지도와 유사한 현실적인 지도 배경 */}
          <div className="w-full h-full relative bg-gray-100">
            {/* 지도 기본 배경 이미지 패턴 */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px),
                  repeating-linear-gradient(90deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px)
                `,
              }}
            />
            
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 1000 800">
              {/* 지도 기본 배경 (밝은 베이지/그레이) */}
              <rect width="1000" height="800" fill="#f8f9fa" />
              
              {/* 강/하천 (한강 스타일) */}
              <path d="M0 400 Q150 380 300 390 Q450 400 600 385 Q750 370 900 380 Q1000 385 1000 385 L1000 430 Q900 425 750 440 Q600 455 450 445 Q300 435 150 445 Q0 455 0 455 Z" 
                    fill="#a8dadc" stroke="#457b9d" strokeWidth="2" />
              <path d="M200 200 Q350 190 500 200 Q650 210 800 195 L800 220 Q650 235 500 225 Q350 215 200 225 Z" 
                    fill="#a8dadc" stroke="#457b9d" strokeWidth="1.5" />
              
              {/* 주요 도로망 (고속도로) */}
              <path d="M0 150 L1000 150" stroke="#6c757d" strokeWidth="8" strokeDasharray="20,10" />
              <path d="M0 300 L1000 300" stroke="#6c757d" strokeWidth="10" strokeDasharray="25,10" />
              <path d="M0 550 L1000 550" stroke="#6c757d" strokeWidth="8" strokeDasharray="20,10" />
              <path d="M200 0 L200 800" stroke="#6c757d" strokeWidth="10" strokeDasharray="25,10" />
              <path d="M500 0 L500 800" stroke="#6c757d" strokeWidth="12" strokeDasharray="30,12" />
              <path d="M800 0 L800 800" stroke="#6c757d" strokeWidth="8" strokeDasharray="20,10" />
              
              {/* 보조 도로들 (일반 도로) */}
              <path d="M0 100 L1000 100" stroke="#adb5bd" strokeWidth="4" />
              <path d="M0 250 L1000 250" stroke="#adb5bd" strokeWidth="5" />
              <path d="M0 350 L1000 350" stroke="#adb5bd" strokeWidth="4" />
              <path d="M0 480 L1000 480" stroke="#adb5bd" strokeWidth="5" />
              <path d="M0 650 L1000 650" stroke="#adb5bd" strokeWidth="4" />
              <path d="M100 0 L100 800" stroke="#adb5bd" strokeWidth="4" />
              <path d="M350 0 L350 800" stroke="#adb5bd" strokeWidth="5" />
              <path d="M650 0 L650 800" stroke="#adb5bd" strokeWidth="4" />
              <path d="M900 0 L900 800" stroke="#adb5bd" strokeWidth="5" />
              
              {/* 건물 블록들 (더 현실적인 크기와 배치) */}
              <rect x="50" y="50" width="120" height="80" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              <rect x="220" y="60" width="100" height="70" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              <rect x="380" y="40" width="140" height="90" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              <rect x="580" y="50" width="120" height="80" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              <rect x="750" y="45" width="110" height="85" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              
              <rect x="70" y="170" width="90" height="60" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              <rect x="230" y="180" width="110" height="80" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              <rect x="420" y="170" width="95" height="70" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              <rect x="580" y="175" width="130" height="75" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              <rect x="770" y="180" width="100" height="65" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              
              <rect x="60" y="470" width="110" height="100" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              <rect x="240" y="480" width="120" height="85" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              <rect x="430" y="470" width="105" height="95" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              <rect x="600" y="485" width="115" height="80" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              <rect x="780" y="475" width="95" height="90" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              
              <rect x="80" y="670" width="85" height="70" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              <rect x="250" y="660" width="120" height="80" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              <rect x="450" y="670" width="100" height="75" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              <rect x="620" y="665" width="110" height="85" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              <rect x="800" y="675" width="90" height="65" fill="#e9ecef" stroke="#ced4da" strokeWidth="1" rx="3" />
              
              {/* 공원들 (더 자연스러운 녹색) */}
              <rect x="120" y="270" width="90" height="90" fill="#d4f5d4" stroke="#52b788" strokeWidth="1.5" rx="20" />
              <text x="165" y="300" textAnchor="middle" fontSize="12" fill="#2d6a4f" fontWeight="bold">공원</text>
              <circle cx="140" cy="325" r="4" fill="#52b788" />
              <circle cx="165" cy="330" r="3" fill="#52b788" />
              <circle cx="190" cy="320" r="3.5" fill="#52b788" />
              
              <rect x="520" y="290" width="80" height="80" fill="#d4f5d4" stroke="#52b788" strokeWidth="1.5" rx="18" />
              <text x="560" y="315" textAnchor="middle" fontSize="11" fill="#2d6a4f" fontWeight="bold">녹지</text>
              <circle cx="535" cy="340" r="3" fill="#52b788" />
              <circle cx="560" cy="345" r="2.5" fill="#52b788" />
              <circle cx="585" cy="335" r="3.5" fill="#52b788" />
              
              <ellipse cx="750" cy="320" rx="50" ry="35" fill="#d4f5d4" stroke="#52b788" strokeWidth="1.5" />
              <text x="750" y="325" textAnchor="middle" fontSize="10" fill="#2d6a4f" fontWeight="bold">광장</text>
              
              {/* 지하철역 표시 (더 현실적인 디자인) */}
              <circle cx="200" cy="150" r="12" fill="#dc3545" stroke="#fff" strokeWidth="3" />
              <text x="200" y="157" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">M</text>
              <text x="200" y="130" textAnchor="middle" fontSize="10" fill="#495057" fontWeight="bold">지하철역</text>
              
              <circle cx="500" cy="300" r="12" fill="#dc3545" stroke="#fff" strokeWidth="3" />
              <text x="500" y="307" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">M</text>
              <text x="500" y="280" textAnchor="middle" fontSize="10" fill="#495057" fontWeight="bold">지하철역</text>
              
              <circle cx="800" cy="550" r="12" fill="#dc3545" stroke="#fff" strokeWidth="3" />
              <text x="800" y="557" textAnchor="middle" fontSize="14" fill="#fff" fontWeight="bold">M</text>
              <text x="800" y="530" textAnchor="middle" fontSize="10" fill="#495057" fontWeight="bold">지하철역</text>
              
              {/* 버스 정류장 */}
              <rect x="290" y="140" width="20" height="20" fill="#ffc107" stroke="#fff" strokeWidth="2" rx="4" />
              <text x="300" y="153" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">B</text>
              
              <rect x="590" y="540" width="20" height="20" fill="#ffc107" stroke="#fff" strokeWidth="2" rx="4" />
              <text x="600" y="553" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">B</text>
              
              {/* 주요 랜드마크 건물들 */}
              <rect x="480" y="380" width="40" height="60" fill="#6f42c1" stroke="#fff" strokeWidth="2" rx="5" />
              <text x="500" y="415" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">MALL</text>
              
              <rect x="730" y="160" width="35" height="50" fill="#fd7e14" stroke="#fff" strokeWidth="2" rx="5" />
              <text x="747" y="190" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="bold">HOTEL</text>
            </svg>
          </div>
          
          {/* 현재 위치 (지도 중심에 고정) */}
          <div 
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{
              top: '40%',
              left: '50%'
            }}
          >
            <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
            <div className="absolute -inset-4 bg-blue-300 rounded-full animate-ping opacity-25"></div>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
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
                  <div className={`w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-xl ${
                    getBaseFilter() === 'local' ? 'bg-green-500' : 'bg-indigo-500'
                  }`}>
                    🍴
                  </div>
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="bg-white rounded-lg shadow-xl px-4 py-3 text-sm whitespace-nowrap border">
                      <div className="font-medium">{restaurant.name}</div>
                      <div className="flex items-center space-x-1 text-yellow-500 mt-1">
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

      {/* 확장된 좌우 스크롤 바텀시트 */}
      <div 
        className="absolute left-0 right-0 bg-white rounded-t-3xl shadow-2xl"
        style={{ 
          bottom: 0,
          height: `${fixedBottomSheetHeight}px`
        }}
      >
        <div className="p-5 h-full flex flex-col">
          {/* 핸들 */}
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
          </div>
          
          <h3 className="text-xl font-bold mb-4 flex-shrink-0">
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
            <div className="flex space-x-5 h-full overflow-x-auto scrollbar-hide pb-3">
              {filteredRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="flex-shrink-0 w-72">
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
