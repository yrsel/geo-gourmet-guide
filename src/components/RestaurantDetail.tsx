
import React, { useState } from 'react';
import { Restaurant, FilterType, Review } from '@/types';
import ReviewForm from '@/components/ReviewForm';

interface RestaurantDetailProps {
  restaurant: Restaurant;
  filter: FilterType;
  onBack: () => void;
}

const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ restaurant, filter, onBack }) => {
  const [activeTab, setActiveTab] = useState<'info' | 'reviews'>('info');
  const [reviewFilter, setReviewFilter] = useState<'all' | 'local' | 'tourist'>('all');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(restaurant.reviews);
  const [showNavigation, setShowNavigation] = useState(false);

  const filteredReviews = reviews.filter(review => {
    if (reviewFilter === 'all') return true;
    return review.userType === reviewFilter;
  }).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const handleReviewSubmit = (reviewData: { rating: number; content: string; userType: 'local' | 'tourist' }) => {
    const newReview: Review = {
      id: `r${Date.now()}`,
      userId: `u${Date.now()}`,
      userName: '익명 사용자',
      userType: reviewData.userType,
      rating: reviewData.rating,
      content: reviewData.content,
      createdAt: new Date().toISOString(),
    };

    setReviews([newReview, ...reviews]);
    setShowReviewForm(false);
  };

  const handleNavigation = () => {
    setShowNavigation(true);
    // 실제 구현에서는 여기서 네이버 지도나 카카오맵 API를 호출하거나
    // 외부 네비게이션 앱으로 연결하는 로직을 구현
    setTimeout(() => {
      setShowNavigation(false);
      alert(`${restaurant.name}까지의 길찾기를 시작합니다!\n주소: ${restaurant.address}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative">
        <img 
          src={restaurant.images[0]} 
          alt={restaurant.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        <button
          onClick={onBack}
          className="absolute top-4 left-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
        >
          ←
        </button>
        
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h1 className="text-2xl font-bold mb-2">{restaurant.name}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400">⭐</span>
              <span className="font-medium">{restaurant.overallRating.toFixed(1)}</span>
              <span className="text-white/80">({restaurant.totalReviewCount})</span>
            </div>
            <span className="text-white/80">{restaurant.category}</span>
            <span className="text-white/80">{restaurant.priceRange}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('info')}
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === 'info'
              ? 'text-orange-600 border-b-2 border-orange-600'
              : 'text-gray-500'
          }`}
        >
          정보
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === 'reviews'
              ? 'text-orange-600 border-b-2 border-orange-600'
              : 'text-gray-500'
          }`}
        >
          리뷰
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'info' ? (
          <div className="space-y-6">
            {/* Basic Info */}
            <div>
              <h3 className="text-lg font-semibold mb-3">기본 정보</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <span className="text-gray-500 min-w-16">주소</span>
                  <span>{restaurant.address}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gray-500 min-w-16">전화</span>
                  <span>{restaurant.phone}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gray-500 min-w-16">운영시간</span>
                  <span>{restaurant.operatingHours}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gray-500 min-w-16">가격대</span>
                  <span>{restaurant.priceRange}</span>
                </div>
              </div>
            </div>

            {/* Rating Breakdown */}
            <div>
              <h3 className="text-lg font-semibold mb-3">평점 분석</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">🏠</span>
                    <span className="font-medium">로컬 평점</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-green-600">{restaurant.localRating.toFixed(1)}</span>
                    <span className="text-sm text-gray-500">({restaurant.localReviewCount}개)</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">✈️</span>
                    <span className="font-medium">관광객 평점</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-blue-600">{restaurant.touristRating.toFixed(1)}</span>
                    <span className="text-sm text-gray-500">({restaurant.touristReviewCount}개)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div>
              <h3 className="text-lg font-semibold mb-3">대표 메뉴</h3>
              <div className="flex flex-wrap gap-2">
                {restaurant.specialties.map((specialty, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-3">소개</h3>
              <p className="text-gray-700 leading-relaxed">{restaurant.description}</p>
            </div>

            {/* Navigation Button */}
            <button 
              onClick={handleNavigation}
              disabled={showNavigation}
              className={`w-full py-3 rounded-lg font-medium transition-colors ${
                showNavigation 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
              }`}
            >
              {showNavigation ? '길찾기 준비 중...' : '길찾기'}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Review Form Toggle */}
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                {[
                  { key: 'all', label: '전체', count: reviews.length },
                  { key: 'local', label: '로컬', count: reviews.filter(r => r.userType === 'local').length },
                  { key: 'tourist', label: '관광객', count: reviews.filter(r => r.userType === 'tourist').length },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setReviewFilter(item.key as any)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      reviewFilter === item.key
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {item.label} ({item.count})
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
              >
                {showReviewForm ? '취소' : '리뷰 작성'}
              </button>
            </div>

            {/* Review Form */}
            {showReviewForm && (
              <ReviewForm
                onSubmit={handleReviewSubmit}
                onCancel={() => setShowReviewForm(false)}
              />
            )}

            {/* Reviews */}
            <div className="space-y-4">
              {filteredReviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{review.userName}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        review.userType === 'local' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {review.userType === 'local' ? '로컬' : '관광객'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm font-medium">{review.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-2">{review.content}</p>
                  
                  {review.images && review.images.length > 0 && (
                    <div className="flex space-x-2 mb-2">
                      {review.images.map((image, index) => (
                        <img 
                          key={index}
                          src={image} 
                          alt={`리뷰 이미지 ${index + 1}`}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                    <button className="text-orange-600 hover:text-orange-700">
                      도움이 돼요 👍
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;
