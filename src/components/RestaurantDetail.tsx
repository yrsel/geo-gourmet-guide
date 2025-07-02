import React, { useState } from 'react';
import { Restaurant, FilterType, Review } from '@/types';
import ReviewForm from '@/components/ReviewForm';
import ShareDialog from '@/components/ShareDialog';
import { ArrowLeft, Map, List, Share } from 'lucide-react';

interface RestaurantDetailProps {
  restaurant: Restaurant;
  filter: FilterType;
  onBack: () => void;
  onViewModeChange?: (mode: 'map' | 'list') => void;
}

const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ 
  restaurant, 
  filter, 
  onBack,
  onViewModeChange 
}) => {
  const [activeTab, setActiveTab] = useState<'info' | 'reviews'>('info');
  const [reviewFilter, setReviewFilter] = useState<'all' | 'local' | 'tourist'>('all');
  const [reviewSort, setReviewSort] = useState<'latest' | 'rating' | 'helpful'>('latest');
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(restaurant.reviews.map(review => ({
    ...review,
    helpfulCount: review.helpfulCount || 0,
    isHelpfulByUser: review.isHelpfulByUser || false
  })));
  const [showNavigation, setShowNavigation] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);

  const filteredAndSortedReviews = reviews
    .filter(review => {
      if (reviewFilter === 'all') return true;
      return review.userType === reviewFilter;
    })
    .sort((a, b) => {
      switch (reviewSort) {
        case 'rating':
          return b.rating - a.rating;
        case 'helpful':
          return (b.helpfulCount || 0) - (a.helpfulCount || 0);
        case 'latest':
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });

  const handleReviewSubmit = (reviewData: { rating: number; content: string; userType: 'local' | 'tourist'; images?: string[] }) => {
    const newReview: Review = {
      id: `r${Date.now()}`,
      userId: `u${Date.now()}`,
      userName: '익명 사용자',
      userType: reviewData.userType,
      rating: reviewData.rating,
      content: reviewData.content,
      images: reviewData.images,
      createdAt: new Date().toISOString(),
      helpfulCount: 0,
      isHelpfulByUser: false,
    };

    setReviews([newReview, ...reviews]);
    setShowReviewForm(false);
  };

  const handleHelpfulClick = (reviewId: string) => {
    setReviews(reviews.map(review => {
      if (review.id === reviewId) {
        return {
          ...review,
          helpfulCount: review.isHelpfulByUser 
            ? (review.helpfulCount || 0) - 1 
            : (review.helpfulCount || 0) + 1,
          isHelpfulByUser: !review.isHelpfulByUser
        };
      }
      return review;
    }));
  };

  const handleNavigation = () => {
    setShowNavigation(true);
    setTimeout(() => {
      setShowNavigation(false);
      alert(`${restaurant.name}까지의 길찾기를 시작합니다!\n주소: ${restaurant.address}`);
    }, 1500);
  };

  const handleShare = () => {
    setShowShareDialog(true);
  };

  const handleBackToList = () => {
    if (onViewModeChange) {
      onViewModeChange('list');
    }
  };

  const handleBackToMap = () => {
    if (onViewModeChange) {
      onViewModeChange('map');
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.src = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&auto=format';
    target.alt = '이미지 준비중입니다';
  };

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative">
        <img 
          src={restaurant.images[0]} 
          alt={restaurant.name}
          className="w-full h-64 object-cover"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Improved Navigation Bar */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors shadow-md"
          >
            <ArrowLeft size={20} />
          </button>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-colors shadow-md"
            >
              <Share size={16} />
            </button>
            <button
              onClick={handleBackToMap}
              className="flex items-center space-x-1 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 hover:bg-white transition-colors shadow-md"
            >
              <Map size={16} />
              <span>지도</span>
            </button>
            <button
              onClick={handleBackToList}
              className="flex items-center space-x-1 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 hover:bg-white transition-colors shadow-md"
            >
              <List size={16} />
              <span>목록</span>
            </button>
          </div>
        </div>
        
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
          리뷰 ({reviews.length})
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
            {/* 리뷰 총합 정보 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">전체 리뷰</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-orange-600">{averageRating.toFixed(1)}</span>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>
                        {star <= Math.round(averageRating) ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">총 {reviews.length}개의 리뷰</p>
            </div>

            {/* Review Filters and Sorting */}
            <div className="flex flex-col space-y-3">
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
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
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

              {/* 정렬 옵션 */}
              <div className="flex space-x-2">
                <span className="text-sm text-gray-500 flex items-center">정렬:</span>
                {[
                  { key: 'latest', label: '최신순' },
                  { key: 'rating', label: '별점순' },
                  { key: 'helpful', label: '도움순' },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setReviewSort(item.key as any)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      reviewSort === item.key
                        ? 'bg-orange-100 text-orange-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
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
              {filteredAndSortedReviews.map((review) => (
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
                          onError={handleImageError}
                        />
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                    <button 
                      onClick={() => handleHelpfulClick(review.id)}
                      className={`flex items-center space-x-1 px-2 py-1 rounded-full transition-colors ${
                        review.isHelpfulByUser 
                          ? 'bg-orange-100 text-orange-600' 
                          : 'hover:bg-gray-100 text-gray-600'
                      }`}
                    >
                      <span>👍</span>
                      <span>도움돼요</span>
                      {(review.helpfulCount || 0) > 0 && (
                        <span className="bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded-full text-xs">
                          {review.helpfulCount}
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Share Dialog */}
      <ShareDialog
        isOpen={showShareDialog}
        onClose={() => setShowShareDialog(false)}
        restaurant={restaurant}
      />
    </div>
  );
};

export default RestaurantDetail;
