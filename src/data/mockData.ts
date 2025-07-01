
import { Restaurant } from '@/types';

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: '할머니 손맛집',
    category: '한식',
    address: '서울시 종로구 인사동길 12',
    phone: '02-1234-5678',
    operatingHours: '11:00 - 21:00 (일요일 휴무)',
    latitude: 37.5735,
    longitude: 126.9862,
    images: [
      'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop'
    ],
    description: '3대째 이어져 내려오는 전통 한식당으로, 지역 주민들이 사랑하는 숨은 맛집입니다. 정성스런 손맛과 푸근한 분위기가 일품입니다.',
    localRating: 4.7,
    touristRating: 3.8, // 로컬이 더 높음
    overallRating: 4.5,
    localReviewCount: 89,
    touristReviewCount: 34,
    totalReviewCount: 123,
    priceRange: '만원 이하',
    specialties: ['김치찌개', '된장찌개', '불고기'],
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: '김민수',
        userType: 'local',
        rating: 5.0,
        content: '우리 동네 숨은 보석 같은 곳이에요. 김치찌개 정말 맛있고 사장님도 친절하세요.',
        images: ['https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=200&h=150&fit=crop'],
        createdAt: '2024-12-15T10:30:00Z'
      },
      {
        id: 'r2',
        userId: 'u2',
        userName: '이지은',
        userType: 'tourist',
        rating: 3.5,
        content: '인사동 구경하다가 발견한 곳인데 현지인들이 많이 와서 더 맛있게 느껴졌어요. 하지만 조금 짜요.',
        createdAt: '2024-12-14T15:45:00Z'
      }
    ]
  },
  {
    id: '2',
    name: '부산 바다횟집',
    category: '회/해산물',
    address: '부산시 해운대구 해운대해변로 264',
    phone: '051-2345-6789',
    operatingHours: '17:00 - 24:00',
    latitude: 35.1588,
    longitude: 129.1603,
    images: [
      'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1559847844-d722426d4cea?w=400&h=300&fit=crop'
    ],
    description: '해운대 바닷가에 위치한 신선한 회를 맛볼 수 있는 곳입니다. 매일 새벽에 직접 잡은 생선으로 만든 회가 자랑입니다.',
    localRating: 4.6,
    touristRating: 4.4,
    overallRating: 4.5,
    localReviewCount: 156,
    touristReviewCount: 98,
    totalReviewCount: 254,
    priceRange: '3-5만원',
    specialties: ['광어회', '우럭회', '매운탕'],
    reviews: [
      {
        id: 'r4',
        userId: 'u4',
        userName: '박지혜',
        userType: 'local',
        rating: 5.0,
        content: '부산 살면서 여기만큼 신선한 회 먹을 수 있는 곳 못 봤어요. 사장님이 직접 잡아오셔서 더 믿음이 가요.',
        createdAt: '2024-12-13T19:20:00Z'
      },
      {
        id: 'r5',
        userId: 'u5',
        userName: '최유진',
        userType: 'tourist',
        rating: 4.5,
        content: '해운대 여행 중에 들렸는데 회가 정말 신선하고 맛있었어요. 바다 뷰도 좋고!',
        createdAt: '2024-12-12T20:15:00Z'
      }
    ]
  },
  {
    id: '3',
    name: '골목 피자집',
    category: '양식',
    address: '경기도 성남시 분당구 정자동 178-1',
    phone: '031-3456-7890',
    operatingHours: '12:00 - 22:00',
    latitude: 37.3595,
    longitude: 127.1052,
    images: [
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop'
    ],
    description: '분당 골목 안 숨어있는 작은 피자집. 수제 도우와 신선한 재료로 만든 정통 이탈리안 피자를 맛볼 수 있습니다.',
    localRating: 4.8,
    touristRating: 3.9, // 로컬이 더 높음
    overallRating: 4.6,
    localReviewCount: 67,
    touristReviewCount: 23,
    totalReviewCount: 90,
    priceRange: '2-3만원',
    specialties: ['마르게리타', '페퍼로니', '트러플 피자'],
    reviews: [
      {
        id: 'r6',
        userId: 'u6',
        userName: '최준호',
        userType: 'local',
        rating: 5.0,
        content: '진짜 맛있어요! 도우가 쫄깃하고 치즈도 진짜 좋은 걸 쓰시나 봐요. 분당에서는 여기가 최고!',
        createdAt: '2024-12-12T20:15:00Z'
      }
    ]
  },
  {
    id: '4',
    name: '전주 콩나물국밥',
    category: '한식',
    address: '전북 전주시 완산구 태조로 15',
    phone: '063-4567-8901',
    operatingHours: '06:00 - 15:00',
    latitude: 35.8242,
    longitude: 127.1480,
    images: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop'
    ],
    description: '전주 한옥마을 근처의 오래된 콩나물국밥집. 30년 전통의 깊은 맛을 자랑하며 해장하기에 딱 좋습니다.',
    localRating: 4.5,
    touristRating: 4.7, // 관광객이 더 높음
    overallRating: 4.6,
    localReviewCount: 234,
    touristReviewCount: 189,
    totalReviewCount: 423,
    priceRange: '만원 이하',
    specialties: ['콩나물국밥', '순대국밥', '선지국밥'],
    reviews: [
      {
        id: 'r8',
        userId: 'u8',
        userName: '정수민',
        userType: 'tourist',
        rating: 5.0,
        content: '전주 여행 와서 먹은 최고의 음식! 진짜 집밥 느낌이고 가격도 저렴해요.',
        createdAt: '2024-12-11T08:30:00Z'
      }
    ]
  },
  {
    id: '5',
    name: '제주 흑돼지집',
    category: '고기구이',
    address: '제주시 일도일동 1255-6',
    phone: '064-5678-9012',
    operatingHours: '17:00 - 23:00',
    latitude: 33.5098,
    longitude: 126.5219,
    images: [
      'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop'
    ],
    description: '제주도 현지인들이 인정하는 진짜 흑돼지집. 직접 기른 흑돼지로 만든 고기의 풍미가 뛰어납니다.',
    localRating: 4.9,
    touristRating: 4.3,
    overallRating: 4.7,
    localReviewCount: 112,
    touristReviewCount: 87,
    totalReviewCount: 199,
    priceRange: '5만원 이상',
    specialties: ['흑돼지 삼겹살', '갈비', '목살'],
    reviews: [
      {
        id: 'r10',
        userId: 'u10',
        userName: '강민아',
        userType: 'local',
        rating: 5.0,
        content: '제주도에서 태어나 자란 저도 여기만큼 맛있는 흑돼지는 처음이에요. 정말 추천!',
        createdAt: '2024-12-10T21:00:00Z'
      }
    ]
  },
  {
    id: '6',
    name: '할아버지 붕어빵',
    category: '분식/간식',
    address: '대구시 중구 동성로2가 74-1',
    phone: '053-6789-0123',
    operatingHours: '15:00 - 22:00 (겨울 한정)',
    latitude: 35.8714,
    longitude: 128.5956,
    images: [
      'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=400&h=300&fit=crop'
    ],
    description: '동성로에서 40년째 장사하고 계신 할아버지의 붕어빵집. 겨울철에만 운영하며 팥이 꽉 찬 붕어빵이 유명합니다.',
    localRating: 4.4,
    touristRating: 4.6,
    overallRating: 4.5,
    localReviewCount: 78,
    touristReviewCount: 92,
    totalReviewCount: 170,
    priceRange: '만원 이하',
    specialties: ['팥 붕어빵', '슈크림 붕어빵', '치즈 붕어빵'],
    reviews: [
      {
        id: 'r12',
        userId: 'u12',
        userName: '윤서현',
        userType: 'tourist',
        rating: 4.5,
        content: '대구 여행 중에 우연히 발견했는데 진짜 맛있어요! 할아버지도 너무 친절하시고.',
        createdAt: '2024-12-09T18:45:00Z'
      }
    ]
  },
  // 로컬 추천에만 나오는 맛집들 추가
  {
    id: '7',
    name: '동네 아지매 떡볶이',
    category: '분식',
    address: '서울시 마포구 홍대입구역 2번 출구',
    phone: '02-7890-1234',
    operatingHours: '14:00 - 23:00',
    latitude: 37.5563,
    longitude: 126.9234,
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
    ],
    description: '홍대 현지 대학생들만 아는 진짜 맛집. 30년 경력의 사장님이 직접 만드는 떡볶이가 일품입니다.',
    localRating: 4.8,
    touristRating: 3.2, // 관광객에게는 낮은 평점
    overallRating: 4.2,
    localReviewCount: 203,
    touristReviewCount: 15,
    totalReviewCount: 218,
    priceRange: '만원 이하',
    specialties: ['매운 떡볶이', '순대', '튀김'],
    reviews: [
      {
        id: 'r13',
        userId: 'u13',
        userName: '홍대생김철수',
        userType: 'local',
        rating: 5.0,
        content: '4년 동안 다닌 우리 학교 최고 맛집! 아지매가 진짜 친절하시고 떡볶이도 예술이에요.',
        createdAt: '2024-12-15T18:30:00Z'
      }
    ]
  },
  {
    id: '8',
    name: '24시 김밥천국',
    category: '분식',
    address: '서울시 강남구 역삼동 678-9',
    phone: '02-8901-2345',
    operatingHours: '24시간',
    latitude: 37.5011,
    longitude: 127.0396,
    images: [
      'https://images.unsplash.com/photo-1572441713132-51c75654db73?w=400&h=300&fit=crop'
    ],
    description: '야근하는 직장인들의 성지. 24시간 운영하며 새벽에도 따뜻한 김밥을 먹을 수 있는 곳입니다.',
    localRating: 4.5,
    touristRating: 3.5,
    overallRating: 4.1,
    localReviewCount: 456,
    touristReviewCount: 67,
    totalReviewCount: 523,
    priceRange: '만원 이하',
    specialties: ['참치김밥', '불고기김밥', '라면'],
    reviews: [
      {
        id: 'r14',
        userId: 'u14',
        userName: '야근러박대리',
        userType: 'local',
        rating: 4.5,
        content: '새벽 2시에도 따뜻한 김밥 먹을 수 있어서 정말 고마운 곳이에요. 사장님도 친절하시고!',
        createdAt: '2024-12-14T02:15:00Z'
      }
    ]
  },
  // 관광객 추천에만 나오는 맛집들 추가
  {
    id: '9',
    name: '인스타 감성 카페',
    category: '카페/디저트',
    address: '서울시 강남구 청담동 123-45',
    phone: '02-9012-3456',
    operatingHours: '10:00 - 22:00',
    latitude: 37.5172,
    longitude: 127.0473,
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop'
    ],
    description: '청담동의 핫한 인스타 감성 카페. 예쁜 인테리어와 포토존이 많아 관광객들에게 인기가 높습니다.',
    localRating: 3.2, // 로컬에게는 낮은 평점
    touristRating: 4.6,
    overallRating: 3.9,
    localReviewCount: 45,
    touristReviewCount: 189,
    totalReviewCount: 234,
    priceRange: '2-3만원',
    specialties: ['레인보우 케이크', '유니콘 라떼', '마카롱'],
    reviews: [
      {
        id: 'r15',
        userId: 'u15',
        userName: '서울여행중',
        userType: 'tourist',
        rating: 5.0,
        content: '사진 찍기 너무 예쁘고 케이크도 맛있어요! 인스타에 올리기 완벽한 곳이에요.',
        createdAt: '2024-12-13T16:45:00Z'
      }
    ]
  },
  {
    id: '10',
    name: '한복 체험 카페',
    category: '카페/디저트',
    address: '서울시 종로구 인사동 567-8',
    phone: '02-0123-4567',
    operatingHours: '09:00 - 21:00',
    latitude: 37.5714,
    longitude: 126.9858,
    images: [
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop'
    ],
    description: '한복을 입고 전통차를 마실 수 있는 특별한 카페. 외국인 관광객들에게 특히 인기가 높습니다.',
    localRating: 3.5,
    touristRating: 4.8,
    overallRating: 4.1,
    localReviewCount: 67,
    touristReviewCount: 234,
    totalReviewCount: 301,
    priceRange: '2-3만원',
    specialties: ['전통차', '한과', '떡'],
    reviews: [
      {
        id: 'r16',
        userId: 'u16',
        userName: 'TokyoTraveler',
        userType: 'tourist',
        rating: 5.0,
        content: 'Amazing experience! Wearing hanbok and drinking traditional tea was so special. Perfect for photos!',
        createdAt: '2024-12-12T14:20:00Z'
      }
    ]
  }
];
