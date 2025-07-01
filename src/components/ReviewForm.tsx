
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';

interface ReviewFormProps {
  onSubmit: (review: { rating: number; content: string; userType: 'local' | 'tourist' }) => void;
  onCancel: () => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit, onCancel }) => {
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const [userType, setUserType] = useState<'local' | 'tourist'>('local');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit({ rating, content, userType });
      setContent('');
      setRating(5);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
      <h4 className="font-semibold mb-3">리뷰 작성하기</h4>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* User Type Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">리뷰어 유형</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="local"
                checked={userType === 'local'}
                onChange={(e) => setUserType(e.target.value as 'local' | 'tourist')}
                className="mr-2"
              />
              <span className="text-sm">로컬</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="tourist"
                checked={userType === 'tourist'}
                onChange={(e) => setUserType(e.target.value as 'local' | 'tourist')}
                className="mr-2"
              />
              <span className="text-sm">관광객</span>
            </label>
          </div>
        </div>

        {/* Rating Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">별점</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-2xl ${
                  star <= rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ⭐
              </button>
            ))}
          </div>
        </div>

        {/* Review Content */}
        <div>
          <label htmlFor="review-content" className="block text-sm font-medium mb-2">
            리뷰 내용
          </label>
          <Textarea
            id="review-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="이 맛집에 대한 솔직한 리뷰를 작성해주세요..."
            className="min-h-[100px]"
            required
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            type="submit"
            className="flex-1 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
          >
            리뷰 등록
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
