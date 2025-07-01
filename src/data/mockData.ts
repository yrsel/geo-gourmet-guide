
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
    touristRating: 4.2,
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
        rating: 4.0,
        content: '인사동 구경하다가 발견한 곳인데 현지인들이 많이 와서 더 맛있게 느껴졌어요.',
        createdAt: '2024-12-14T15:45:00Z'
      },
      {
        id: 'r3',
        userId: 'u3',
        userName: '박현우',
        userType: 'local',
        rating: 4.5,
        content: '어릴 때부터 다니던 곳인데 맛이 변하지 않아서 좋아요. 특히 된장찌개가 일품!',
        createdAt: '2024-12-13T12:20:00Z'
      }
    ]
  },
  {
    id: '2',
    name: '오션뷰 횟집',
    category: '회/해산물',
    address: '부산시 해운대구 해운대해변로 264',
    phone: '051-2345-6789',
    operatingHours: '17:00 - 24:00',
    latitude: 35.1588,
    longitude: 129.1603,
    images: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop'
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
        rating: 4.0,
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
    touristRating: 4.1,
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
      },
      {
        id: 'r7',
        userId: 'u7',
        userName: '김서연',
        userType: 'tourist',
        rating: 4.0,
        content: '분당 놀러 왔다가 우연히 발견한 곳인데 피자가 정말 맛있어요. 숨은 맛집!',
        createdAt: '2024-12-11T18:30:00Z'
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
    touristRating: 4.7,
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
      },
      {
        id: 'r9',
        userId: 'u9',
        userName: '이민호',
        userType: 'local',
        rating: 4.5,
        content: '어릴 때부터 할머니와 함께 다니던 곳이에요. 30년이 지나도 변하지 않는 맛!',
        createdAt: '2024-12-10T07:45:00Z'
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
      },
      {
        id: 'r11',
        userId: 'u11',
        userName: '송지훈',
        userType: 'tourist',
        rating: 4.0,
        content: '제주도 여행 중에 먹은 최고의 고기! 가격은 좀 비싸지만 그만한 가치가 있어요.',
        createdAt: '2024-12-09T19:30:00Z'
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
        rating: 4.0,
        content: '대구 여행 중에 우연히 발견했는데 진짜 맛있어요! 할아버지도 너무 친절하시고.',
        createdAt: '2024-12-09T18:45:00Z'
      },
      {
        id: 'r13',
        userId: 'u13',
        userName: '정태호',
        userType: 'local',
        rating: 5.0,
        content: '어릴 때부터 먹던 추억의 붕어빵! 할아버지가 직접 만드시는 정성이 느껴져요.',
        createdAt: '2024-12-08T16:20:00Z'
      }
    ]
  }
];
