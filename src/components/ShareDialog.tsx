
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Restaurant } from '@/types';

interface ShareDialogProps {
  isOpen: boolean;
  onClose: () => void;
  restaurant: Restaurant;
}

const ShareDialog: React.FC<ShareDialogProps> = ({ isOpen, onClose, restaurant }) => {
  const shareText = `맛.zip에서 추천하는 맛집: ${restaurant.name}\n${restaurant.description}`;
  const shareUrl = window.location.href;

  const handleKakaoShare = () => {
    // 카카오톡 공유 (실제 구현 시에는 Kakao SDK 필요)
    const kakaoUrl = `https://story.kakao.com/s/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(kakaoUrl, '_blank');
    onClose();
  };

  const handleNaverShare = () => {
    // 네이버 밴드 공유
    const naverUrl = `https://share.naver.com/web/shareView?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(restaurant.name)}`;
    window.open(naverUrl, '_blank');
    onClose();
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('링크가 클립보드에 복사되었습니다!');
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('링크가 클립보드에 복사되었습니다!');
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>맛집 공유하기</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <button
            onClick={handleKakaoShare}
            className="w-full flex items-center justify-center space-x-3 p-3 bg-yellow-400 text-gray-800 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            <span className="text-lg">💬</span>
            <span className="font-medium">카카오톡으로 공유</span>
          </button>
          
          <button
            onClick={handleNaverShare}
            className="w-full flex items-center justify-center space-x-3 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <span className="text-lg">📱</span>
            <span className="font-medium">네이버로 공유</span>
          </button>
          
          <button
            onClick={handleCopyLink}
            className="w-full flex items-center justify-center space-x-3 p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <span className="text-lg">🔗</span>
            <span className="font-medium">링크 복사</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareDialog;
