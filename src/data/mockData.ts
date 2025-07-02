import { Restaurant, FilterType } from '@/types';

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
    touristRating: 3.8,
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
      },
      {
        id: 'r3',
        userId: 'u3',
        userName: '박영희',
        userType: 'local',
        rating: 4.8,
        content: '30년 넘게 다니고 있는 단골집이에요. 할머니께서 정말 음식을 정성스럽게 해주세요.',
        createdAt: '2024-12-13T12:20:00Z'
      },
      {
        id: 'r4',
        userId: 'u4',
        userName: '서울나그네',
        userType: 'tourist',
        rating: 4.0,
        content: '관광지 근처치고는 가격도 괜찮고 맛도 좋아요. 된장찌개가 특히 맛있었습니다.',
        createdAt: '2024-12-12T14:30:00Z'
      },
      {
        id: 'r5',
        userId: 'u5',
        userName: '동네주민',
        userType: 'local',
        rating: 4.5,
        content: '집 근처라 자주 가는데 항상 맛있어요. 밑반찬도 정갈하고 좋습니다.',
        createdAt: '2024-12-11T18:15:00Z'
      },
      {
        id: 'r6',
        userId: 'u6',
        userName: '맛집탐방러',
        userType: 'tourist',
        rating: 3.8,
        content: 'SNS에서 보고 갔는데 생각보다 평범했어요. 그래도 현지 분위기는 좋았습니다.',
        createdAt: '2024-12-10T16:45:00Z'
      },
      {
        id: 'r7',
        userId: 'u7',
        userName: '김철수',
        userType: 'local',
        rating: 5.0,
        content: '어릴 때부터 할머니 손에 키워진 맛이에요. 진짜 집밥 같은 느낌!',
        createdAt: '2024-12-09T11:30:00Z'
      },
      {
        id: 'r8',
        userId: 'u8',
        userName: '여행자A',
        userType: 'tourist',
        rating: 4.2,
        content: '한국 전통 음식을 제대로 맛볼 수 있어서 좋았어요. 양도 푸짐하고.',
        createdAt: '2024-12-08T13:20:00Z'
      },
      {
        id: 'r9',
        userId: 'u9',
        userName: '인사동토박이',
        userType: 'local',
        rating: 4.9,
        content: '인사동에서 이런 가격에 이런 맛은 정말 드물어요. 계속 유지해주세요!',
        createdAt: '2024-12-07T19:10:00Z'
      },
      {
        id: 'r10',
        userId: 'u10',
        userName: '맛집러버',
        userType: 'tourist',
        rating: 3.5,
        content: '괜찮은 편이지만 특별히 인상깊지는 않았어요. 그래도 깔끔했습니다.',
        createdAt: '2024-12-06T15:50:00Z'
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
        id: 'r11',
        userId: 'u11',
        userName: '박지혜',
        userType: 'local',
        rating: 5.0,
        content: '부산 살면서 여기만큼 신선한 회 먹을 수 있는 곳 못 봤어요. 사장님이 직접 잡아오셔서 더 믿음이 가요.',
        createdAt: '2024-12-13T19:20:00Z'
      },
      {
        id: 'r12',
        userId: 'u12',
        userName: '최유진',
        userType: 'tourist',
        rating: 4.5,
        content: '해운대 여행 중에 들렸는데 회가 정말 신선하고 맛있었어요. 바다 뷰도 좋고!',
        createdAt: '2024-12-12T20:15:00Z'
      },
      {
        id: 'r13',
        userId: 'u13',
        userName: '부산토박이',
        userType: 'local',
        rating: 4.8,
        content: '20년 넘게 다니는 단골집이에요. 사장님이 직접 잡아오는 생선이라 항상 신선해요.',
        createdAt: '2024-12-11T18:30:00Z'
      },
      {
        id: 'r14',
        userId: 'u14',
        userName: '서울관광객',
        userType: 'tourist',
        rating: 4.3,
        content: '부산 와서 먹은 회 중에 가장 맛있었어요. 매운탕도 시원하고 좋았습니다.',
        createdAt: '2024-12-10T21:45:00Z'
      },
      {
        id: 'r15',
        userId: 'u15',
        userName: '해운대주민',
        userType: 'local',
        rating: 4.7,
        content: '집 앞바다에서 잡은 생선이라 그런지 정말 다르네요. 매운탕 국물이 끝내줘요.',
        createdAt: '2024-12-09T17:20:00Z'
      },
      {
        id: 'r16',
        userId: 'u16',
        userName: '회덕후',
        userType: 'tourist',
        rating: 4.6,
        content: '전국 회집 많이 다녀봤는데 여기가 탑3 안에 들어요. 완전 추천!',
        createdAt: '2024-12-08T19:30:00Z'
      },
      {
        id: 'r17',
        userId: 'u17',
        userName: '바다사랑',
        userType: 'local',
        rating: 4.9,
        content: '새벽에 잡아온 생선이라 정말 싱싱해요. 가격도 관광지치고 합리적이고.',
        createdAt: '2024-12-07T20:10:00Z'
      },
      {
        id: 'r18',
        userId: 'u18',
        userName: '여행중',
        userType: 'tourist',
        rating: 4.0,
        content: '부산 여행 필수코스! 회도 맛있고 바다 보면서 먹으니까 더 맛있네요.',
        createdAt: '2024-12-06T18:45:00Z'
      },
      {
        id: 'r19',
        userId: 'u19',
        userName: '낚시꾼',
        userType: 'local',
        rating: 4.8,
        content: '사장님이 직접 낚시하셔서 가져오는 거라 믿고 먹을 수 있어요. 진짜 신선해요.',
        createdAt: '2024-12-05T16:20:00Z'
      },
      {
        id: 'r20',
        userId: 'u20',
        userName: '맛집순례자',
        userType: 'tourist',
        rating: 4.4,
        content: '예약하고 가는 게 좋을 것 같아요. 사람이 많아서 기다렸지만 그만한 값어치 있었습니다.',
        createdAt: '2024-12-04T19:55:00Z'
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
    touristRating: 3.9,
    overallRating: 4.6,
    localReviewCount: 67,
    touristReviewCount: 23,
    totalReviewCount: 90,
    priceRange: '2-3만원',
    specialties: ['마르게리타', '페퍼로니', '트러플 피자'],
    reviews: [
      {
        id: 'r21',
        userId: 'u21',
        userName: '최준호',
        userType: 'local',
        rating: 5.0,
        content: '진짜 맛있어요! 도우가 쫄깃하고 치즈도 진짜 좋은 걸 쓰시나 봐요. 분당에서는 여기가 최고!',
        createdAt: '2024-12-12T20:15:00Z'
      },
      {
        id: 'r22',
        userId: 'u22',
        userName: '분당주민',
        userType: 'local',
        rating: 4.7,
        content: '집 근처 숨은 맛집이에요. 사장님이 이탈리아에서 배우신 분이라 정말 맛있어요.',
        createdAt: '2024-12-11T19:30:00Z'
      },
      {
        id: 'r23',
        userId: 'u23',
        userName: '피자러버',
        userType: 'tourist',
        rating: 4.2,
        content: '분당 놀러 왔다가 우연히 발견한 곳인데 생각보다 맛있었어요. 도우가 정말 쫄깃해요.',
        createdAt: '2024-12-10T18:45:00Z'
      },
      {
        id: 'r24',
        userId: 'u24',
        userName: '정자동거주',
        userType: 'local',
        rating: 4.9,
        content: '이탈리아 현지에서 먹은 피자랑 똑같은 맛이에요. 진짜 정통 이탈리안 피자입니다.',
        createdAt: '2024-12-09T17:20:00Z'
      },
      {
        id: 'r25',
        userId: 'u25',
        userName: '맛집탐험가',
        userType: 'tourist',
        rating: 3.8,
        content: '골목 안에 숨어있어서 찾기 어려웠지만 맛은 좋았어요. 가격이 조금 비싼 편이네요.',
        createdAt: '2024-12-08T16:10:00Z'
      },
      {
        id: 'r26',
        userId: 'u26',
        userName: '동네사람',
        userType: 'local',
        rating: 4.6,
        content: '우리 동네 자랑거리예요. 친구들 데려와도 항상 만족해요.',
        createdAt: '2024-12-07T15:30:00Z'
      },
      {
        id: 'r27',
        userId: 'u27',
        userName: '서울에서온',
        userType: 'tourist',
        rating: 4.0,
        content: '분당까지 와서 먹을 만한 가치가 있네요. 트러플 피자 강추합니다.',
        createdAt: '2024-12-06T14:20:00Z'
      },
      {
        id: 'r28',
        userId: 'u28',
        userName: '피자덕후',
        userType: 'local',
        rating: 4.8,
        content: '정말 맛있어요. 재료도 신선하고 사장님도 친절하세요. 단골 될 것 같아요.',
        createdAt: '2024-12-05T13:40:00Z'
      },
      {
        id: 'r29',
        userId: 'u29',
        userName: '방문객',
        userType: 'tourist',
        rating: 3.5,
        content: '나쁘지 않았지만 특별하지도 않았어요. 그냥 평범한 피자집 수준.',
        createdAt: '2024-12-04T12:50:00Z'
      },
      {
        id: 'r30',
        userId: 'u30',
        userName: '골목탐험가',
        userType: 'local',
        rating: 4.7,
        content: '이런 골목 안에 이런 맛집이 있다니! 정말 놀랐어요. 완전 추천합니다.',
        createdAt: '2024-12-03T20:15:00Z'
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
        id: 'r31',
        userId: 'u31',
        userName: '정수민',
        userType: 'tourist',
        rating: 5.0,
        content: '전주 여행 와서 먹은 최고의 음식! 진짜 집밥 느낌이고 가격도 저렴해요.',
        createdAt: '2024-12-11T08:30:00Z'
      },
      {
        id: 'r32',
        userId: 'u32',
        userName: '전주토박이',
        userType: 'local',
        rating: 4.3,
        content: '어릴 때부터 다닌 집이에요. 변하지 않는 맛이 좋아요.',
        createdAt: '2024-12-10T07:15:00Z'
      },
      {
        id: 'r33',
        userId: 'u33',
        userName: '서울관광객',
        userType: 'tourist',
        rating: 4.8,
        content: '한옥마을 구경하고 해장하러 왔는데 정말 맛있었어요. 진짜 전주 맛!',
        createdAt: '2024-12-09T09:20:00Z'
      },
      {
        id: 'r34',
        userId: 'u34',
        userName: '해장왕',
        userType: 'local',
        rating: 4.6,
        content: '술 마신 다음날 여기 콩나물국밥만 먹으면 바로 살아나요. 진짜 해장 끝판왕!',
        createdAt: '2024-12-08T06:45:00Z'
      },
      {
        id: 'r35',
        userId: 'u35',
        userName: '여행자B',
        userType: 'tourist',
        rating: 4.7,
        content: '전주 필수 코스! 국밥이 이렇게 맛있을 줄 몰랐어요. 완전 추천합니다.',
        createdAt: '2024-12-07T08:10:00Z'
      },
      {
        id: 'r36',
        userId: 'u36',
        userName: '국밥러버',
        userType: 'local',
        rating: 4.4,
        content: '30년 전통이 느껴지는 맛이에요. 깊고 진한 국물이 정말 좋아요.',
        createdAt: '2024-12-06T07:30:00Z'
      },
      {
        id: 'r37',
        userId: 'u37',
        userName: '부산에서온',
        userType: 'tourist',
        rating: 4.9,
        content: '부산 국밥과는 또 다른 맛이네요. 전주만의 특별한 맛이 있어요.',
        createdAt: '2024-12-05T09:45:00Z'
      },
      {
        id: 'r38',
        userId: 'u38',
        userName: '한옥마을주민',
        userType: 'local',
        rating: 4.2,
        content: '관광객들이 많이 와서 좀 기다려야 하지만 그래도 맛있어요.',
        createdAt: '2024-12-04T08:20:00Z'
      },
      {
        id: 'r39',
        userId: 'u39',
        userName: '맛집순례',
        userType: 'tourist',
        rating: 4.6,
        content: '전주 와서 꼭 먹어야 할 음식 중 하나네요. 정말 맛있었습니다.',
        createdAt: '2024-12-03T10:15:00Z'
      },
      {
        id: 'r40',
        userId: 'u40',
        userName: '전주사람',
        userType: 'local',
        rating: 4.5,
        content: '우리 동네 맛집이에요. 할머니 할아버지들이 많이 오시는 진짜 맛집.',
        createdAt: '2024-12-02T07:50:00Z'
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
        id: 'r41',
        userId: 'u41',
        userName: '강민아',
        userType: 'local',
        rating: 5.0,
        content: '제주도에서 태어나 자란 저도 여기만큼 맛있는 흑돼지는 처음이에요. 정말 추천!',
        createdAt: '2024-12-10T21:00:00Z'
      },
      {
        id: 'r42',
        userId: 'u42',
        userName: '제주토박이',
        userType: 'local',
        rating: 4.8,
        content: '직접 기른 흑돼지라서 그런지 정말 다르네요. 냄새도 안 나고 맛도 최고예요.',
        createdAt: '2024-12-09T20:30:00Z'
      },
      {
        id: 'r43',
        userId: 'u43',
        userName: '서울여행객',
        userType: 'tourist',
        rating: 4.5,
        content: '제주도 여행 와서 먹은 흑돼지 중에 가장 맛있었어요. 좀 비싸지만 그만한 값어치!',
        createdAt: '2024-12-08T19:45:00Z'
      },
      {
        id: 'r44',
        userId: 'u44',
        userName: '흑돼지마니아',
        userType: 'local',
        rating: 4.9,
        content: '제주도 흑돼지 맛집 다 가봤는데 여기가 진짜 최고예요. 사장님이 직접 키우신 거라 더 맛있어요.',
        createdAt: '2024-12-07T18:20:00Z'
      },
      {
        id: 'r45',
        userId: 'u45',
        userName: '부산관광객',
        userType: 'tourist',
        rating: 4.2,
        content: '가격은 좀 비싸지만 맛은 정말 좋았어요. 제주도 오면 꼭 먹어야 할 음식이네요.',
        createdAt: '2024-12-06T20:10:00Z'
      },
      {
        id: 'r46',
        userId: 'u46',
        userName: '제주도민',
        userType: 'local',
        rating: 4.7,
        content: '관광객들한테 추천해주는 우리 동네 맛집이에요. 진짜 제주 흑돼지 맛을 알 수 있어요.',
        createdAt: '2024-12-05T19:30:00Z'
      },
      {
        id: 'r47',
        userId: 'u47',
        userName: '고기러버',
        userType: 'tourist',
        rating: 4.6,
        content: '전국 흑돼지집 다 가봤는데 여기가 탑3 안에 들어요. 정말 맛있었습니다.',
        createdAt: '2024-12-04T21:15:00Z'
      },
      {
        id: 'r48',
        userId: 'u48',
        userName: '현지인',
        userType: 'local',
        rating: 4.8,
        content: '사장님이 정말 고기에 대한 자부심이 대단하세요. 그만큼 맛도 최고예요.',
        createdAt: '2024-12-03T18:45:00Z'
      },
      {
        id: 'r49',
        userId: 'u49',
        userName: '맛집탐방',
        userType: 'tourist',
        rating: 4.0,
        content: '제주도 특산품답게 정말 맛있었어요. 다음에도 꼭 다시 올 거예요.',
        createdAt: '2024-12-02T20:30:00Z'
      },
      {
        id: 'r50',
        userId: 'u50',
        userName: '삼겹살킹',
        userType: 'local',
        rating: 4.9,
        content: '제주 흑돼지의 진짜 맛을 알 수 있는 곳이에요. 완전 강추합니다!',
        createdAt: '2024-12-01T19:20:00Z'
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
        id: 'r51',
        userId: 'u51',
        userName: '윤서현',
        userType: 'tourist',
        rating: 4.5,
        content: '대구 여행 중에 우연히 발견했는데 진짜 맛있어요! 할아버지도 너무 친절하시고.',
        createdAt: '2024-12-09T18:45:00Z'
      },
      {
        id: 'r52',
        userId: 'u52',
        userName: '대구시민',
        userType: 'local',
        rating: 4.2,
        content: '어릴 때부터 먹던 추억의 맛이에요. 할아버지가 정말 정성스럽게 만들어주세요.',
        createdAt: '2024-12-08T17:30:00Z'
      },
      {
        id: 'r53',
        userId: 'u53',
        userName: '서울에서온',
        userType: 'tourist',
        rating: 4.7,
        content: '동성로 쇼핑하다가 먹었는데 정말 맛있었어요. 팥이 정말 꽉 들어있어요.',
        createdAt: '2024-12-07T16:20:00Z'
      },
      {
        id: 'r54',
        userId: 'u54',
        userName: '붕어빵러버',
        userType: 'local',
        rating: 4.6,
        content: '40년 전통이 느껴지는 맛이에요. 겨울에만 파시는 게 아쉬워요.',
        createdAt: '2024-12-06T15:45:00Z'
      },
      {
        id: 'r55',
        userId: 'u55',
        userName: '관광객C',
        userType: 'tourist',
        rating: 4.8,
        content: '할아버지가 직접 만들어주시는 정성이 느껴져요. 정말 따뜻한 맛!',
        createdAt: '2024-12-05T18:10:00Z'
      },
      {
        id: 'r56',
        userId: 'u56',
        userName: '동성로단골',
        userType: 'local',
        rating: 4.3,
        content: '겨울만 되면 꼭 찾는 곳이에요. 할아버지 건강하게 오래오래 해주세요.',
        createdAt: '2024-12-04T16:30:00Z'
      },
      {
        id: 'r57',
        userId: 'u57',
        userName: '간식덕후',
        userType: 'tourist',
        rating: 4.4,
        content: '전국 붕어빵 다 먹어봤는데 여기가 진짜 맛있어요. 슈크림도 최고!',
        createdAt: '2024-12-03T17:50:00Z'
      },
      {
        id: 'r58',
        userId: 'u58',
        userName: '대구토박이',
        userType: 'local',
        rating: 4.5,
        content: '우리 동네 자랑거리예요. 친구들 데려와도 항상 만족해요.',
        createdAt: '2024-12-02T15:20:00Z'
      },
      {
        id: 'r59',
        userId: 'u59',
        userName: '여행중인',
        userType: 'tourist',
        rating: 4.6,
        content: '대구 여행의 또 다른 재미네요. 따뜻한 붕어빵 하나로 마음이 따뜻해져요.',
        createdAt: '2024-12-01T16:40:00Z'
      },
      {
        id: 'r60',
        userId: 'u60',
        userName: '추억여행자',
        userType: 'local',
        rating: 4.1,
        content: '어릴 때 할아버지와 함께 먹던 그 맛 그대로예요. 정말 감사해요.',
        createdAt: '2024-11-30T18:15:00Z'
      }
    ]
  },
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
    touristRating: 3.2,
    overallRating: 4.2,
    localReviewCount: 203,
    touristReviewCount: 15,
    totalReviewCount: 218,
    priceRange: '만원 이하',
    specialties: ['매운 떡볶이', '순대', '튀김'],
    reviews: [
      {
        id: 'r61',
        userId: 'u61',
        userName: '홍대생김철수',
        userType: 'local',
        rating: 5.0,
        content: '4년 동안 다닌 우리 학교 최고 맛집! 아지매가 진짜 친절하시고 떡볶이도 예술이에요.',
        createdAt: '2024-12-15T18:30:00Z'
      },
      {
        id: 'r62',
        userId: 'u62',
        userName: '홍대학생A',
        userType: 'local',
        rating: 4.9,
        content: '시험 기간마다 여기서 야식 먹으면서 공부했는데 정말 맛있어요. 가격도 저렴하고!',
        createdAt: '2024-12-14T19:20:00Z'
      },
      {
        id: 'r63',
        userId: 'u63',
        userName: '관광객D',
        userType: 'tourist',
        rating: 3.0,
        content: '홍대 구경하다가 들렸는데 그냥 평범한 떡볶이였어요. 특별하지 않네요.',
        createdAt: '2024-12-13T20:15:00Z'
      },
      {
        id: 'r64',
        userId: 'u64',
        userName: '대학생B',
        userType: 'local',
        rating: 4.7,
        content: '아지매가 정말 학생들을 아껴주세요. 양도 많이 주시고 맛도 최고!',
        createdAt: '2024-12-12T17:45:00Z'
      },
      {
        id: 'r65',
        userId: 'u65',
        userName: '떡볶이마니아',
        userType: 'local',
        rating: 4.8,
        content: '30년 경력이 느껴지는 진짜 맛있는 떡볶이예요. 홍대 숨은 맛집!',
        createdAt: '2024-12-11T16:30:00Z'
      },
      {
        id: 'r66',
        userId: 'u66',
        userName: '방문객E',
        userType: 'tourist',
        rating: 3.5,
        content: '학생들이 많이 와서 시끄러웠지만 떡볶이는 나름 맛있었어요.',
        createdAt: '2024-12-10T18:20:00Z'
      },
      {
        id: 'r67',
        userId: 'u67',
        userName: '홍대인근주민',
        userType: 'local',
        rating: 4.6,
        content: '우리 동네 학생들 사랑하는 곳이에요. 진짜 맛있고 저렴해요.',
        createdAt: '2024-12-09T15:40:00Z'
      },
      {
        id: 'r68',
        userId: 'u68',
        userName: '대학생C',
        userType: 'local',
        rating: 4.9,
        content: '졸업하고도 가끔 생각나서 먹으러 와요. 정말 추억의 맛이에요.',
        createdAt: '2024-12-08T19:10:00Z'
      },
      {
        id: 'r69',
        userId: 'u69',
        userName: '서울구경',
        userType: 'tourist',
        rating: 2.8,
        content: '홍대에서 이 정도 맛이면 그냥 그런 것 같아요. 큰 기대는 안 하는 게 좋을 듯.',
        createdAt: '2024-12-07T20:30:00Z'
      },
      {
        id: 'r70',
        userId: 'u70',
        userName: '홍대터줏대감',
        userType: 'local',
        rating: 4.8,
        content: '홍대 학생들의 소울푸드! 아지매 건강하게 오래오래 해주세요.',
        createdAt: '2024-12-06T14:20:00Z'
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
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&auto=format'
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
        id: 'r71',
        userId: 'u71',
        userName: '야근러박대리',
        userType: 'local',
        rating: 4.5,
        content: '새벽 2시에도 따뜻한 김밥 먹을 수 있어서 정말 고마운 곳이에요. 사장님도 친절하시고!',
        createdAt: '2024-12-14T02:15:00Z'
      },
      {
        id: 'r72',
        userId: 'u72',
        userName: '강남직장인',
        userType: 'local',
        rating: 4.3,
        content: '야근 끝나고 집에 가는 길에 항상 들르는 곳이에요. 24시간이라서 정말 좋아요.',
        createdAt: '2024-12-13T23:45:00Z'
      },
      {
        id: 'r73',
        userId: 'u73',
        userName: '관광객F',
        userType: 'tourist',
        rating: 3.2,
        content: '강남 돌아다니다가 배고파서 들렸는데 그냥 평범한 김밥집이었어요.',
        createdAt: '2024-12-12T21:30:00Z'
      },
      {
        id: 'r74',
        userId: 'u74',
        userName: '새벽배달기사',
        userType: 'local',
        rating: 4.7,
        content: '새벽 배달하면서 항상 들르는 곳이에요. 사장님이 정말 친절하세요.',
        createdAt: '2024-12-11T04:20:00Z'
      },
      {
        id: 'r75',
        userId: 'u75',
        userName: '밤샘족',
        userType: 'local',
        rating: 4.6,
        content: '밤새 일하는 사람들의 오아시스! 김밥도 맛있고 따뜻해요.',
        createdAt: '2024-12-10T03:30:00Z'
      },
      {
        id: 'r76',
        userId: 'u76',
        userName: '여행객G',
        userType: 'tourist',
        rating: 3.8,
        content: '밤늦게 배고파서 찾아간 곳인데 24시간이라서 좋았어요. 김밥도 괜찮고.',
        createdAt: '2024-12-09T01:15:00Z'
      },
      {
        id: 'r77',
        userId: 'u77',
        userName: 'IT개발자',
        userType: 'local',
        rating: 4.4,
        content: '개발하다가 배고플 때 항상 시켜먹어요. 배달도 빨리 와서 좋아요.',
        createdAt: '2024-12-08T22:50:00Z'
      },
      {
        id: 'r78',
        userId: 'u78',
        userName: '간호사',
        userType: 'local',
        rating: 4.8,
        content: '야근 끝나고 든든한 한 끼 먹을 수 있어서 정말 감사해요. 완전 추천!',
        createdAt: '2024-12-07T05:40:00Z'
      },
      {
        id: 'r79',
        userId: 'u79',
        userName: '늦은여행자',
        userType: 'tourist',
        rating: 3.6,
        content: '늦은 시간에 열려있어서 다행이었어요. 맛은 평범하지만 편리해요.',
        createdAt: '2024-12-06T00:30:00Z'
      },
      {
        id: 'r80',
        userId: 'u80',
        userName: '택시기사',
        userType: 'local',
        rating: 4.5,
        content: '새벽 운전하면서 든든한 한 끼 먹을 수 있어서 좋아요. 사장님 화이팅!',
        createdAt: '2024-12-05T02:20:00Z'
      }
    ]
  },
  {
    id: '11',
    name: '숨은골목 순댓국',
    category: '한식',
    address: '서울시 은평구 불광동 435-2',
    phone: '02-3456-7890',
    operatingHours: '07:00 - 21:00',
    latitude: 37.6102,
    longitude: 126.9280,
    images: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop'
    ],
    description: '동네 주민들만 아는 숨은 맛집. 50년 전통의 진짜 순댓국을 맛볼 수 있습니다.',
    localRating: 4.9,
    touristRating: 3.1,
    overallRating: 4.2,
    localReviewCount: 124,
    touristReviewCount: 8,
    totalReviewCount: 132,
    priceRange: '만원 이하',
    specialties: ['순댓국', '머릿고기', '선지국'],
    reviews: [
      {
        id: 'r111',
        userId: 'u111',
        userName: '은평구토박이',
        userType: 'local',
        rating: 5.0,
        content: '어릴 때부터 다닌 곳이에요. 할머니 솜씨 그대로 유지되고 있어서 감동입니다.',
        createdAt: '2024-12-15T08:30:00Z'
      },
    ]
  },
  {
    id: '12',
    name: '대학로 치킨집',
    category: '치킨',
    address: '서울시 종로구 대학로 123',
    phone: '02-4567-8901',
    operatingHours: '17:00 - 02:00',
    latitude: 37.5829,
    longitude: 127.0021,
    images: [
      'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop'
    ],
    description: '대학생들의 단골집. 저렴한 가격에 푸짐한 양의 치킨을 즐길 수 있습니다.',
    localRating: 4.6,
    touristRating: 3.4,
    overallRating: 4.1,
    localReviewCount: 89,
    touristReviewCount: 12,
    totalReviewCount: 101,
    priceRange: '2-3만원',
    specialties: ['양념치킨', '후라이드', '치킨무'],
    reviews: [
      {
        id: 'r121',
        userId: 'u121',
        userName: '대학생김민수',
        userType: 'local',
        rating: 4.8,
        content: '가성비 최고! 양도 많고 맛도 좋아요. 친구들과 자주 와요.',
        createdAt: '2024-12-14T20:30:00Z'
      },
    ]
  },
  {
    id: '13',
    name: '명동 한정식',
    category: '한식',
    address: '서울시 중구 명동2가 54-2',
    phone: '02-5678-9012',
    operatingHours: '11:30 - 21:30',
    latitude: 37.5636,  
    longitude: 126.9834,
    images: [
      'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&h=300&fit=crop'
    ],
    description: '명동 중심가에 위치한 고급 한정식당. 외국인 관광객들에게 인기가 높습니다.',
    localRating: 3.2,
    touristRating: 4.8,
    overallRating: 4.0,
    localReviewCount: 23,
    touristReviewCount: 156,
    totalReviewCount: 179,
    priceRange: '5만원 이상',
    specialties: ['궁중한정식', '비빔밥', '불고기'],
    reviews: [
      {
        id: 'r131',
        userId: 'u131',
        userName: 'JohnFromUSA',
        userType: 'tourist',
        rating: 5.0,
        content: 'Amazing Korean traditional food! Perfect for tourists who want to experience authentic Korean cuisine.',
        createdAt: '2024-12-13T14:20:00Z'
      },
    ]
  },
  {
    id: '14',
    name: '강남 BBQ',
    category: '고기구이',
    address: '서울시 강남구 역삼동 789-10',
    phone: '02-6789-0123',
    operatingHours: '17:00 - 24:00',
    latitude: 37.4979,
    longitude: 127.0276,
    images: [
      'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop'
    ],
    description: '강남 스타일의 고급 BBQ 레스토랑. 관광객들이 한국의 고급 문화를 체험할 수 있는 곳입니다.',
    localRating: 3.5,
    touristRating: 4.7,
    overallRating: 4.1,
    localReviewCount: 34,
    touristReviewCount: 98,
    totalReviewCount: 132,
    priceRange: '5만원 이상',
    specialties: ['프리미엄 한우', '갈비', '삼겹살'],
    reviews: [
      {
        id: 'r141',
        userId: 'u141',
        userName: 'TokyoTraveler',
        userType: 'tourist',
        rating: 4.9,
        content: 'Expensive but worth it! Great atmosphere and premium Korean beef. Perfect for special occasions.',
        createdAt: '2024-12-12T19:45:00Z'
      },
    ]
  }
];

// 필터별 위치 매핑
export const getRestaurantPositions = (filter: FilterType) => {
  const basePositions = [
    { top: '25%', left: '30%' },
    { top: '20%', left: '65%' },
    { top: '40%', left: '75%' },
    { top: '55%', left: '65%' },
    { top: '50%', left: '35%' },
    { top: '30%', left: '50%' },
    { top: '45%', left: '20%' },
    { top: '35%', left: '80%' },
    { top: '60%', left: '45%' },
    { top: '25%', left: '85%' }
  ];

  // 필터별로 다른 위치 세트 반환
  if (filter === 'local') {
    return [
      { top: '15%', left: '25%' },  // 로컬 맛집들은 주거지역 근처
      { top: '35%', left: '40%' },
      { top: '50%', left: '25%' },
      { top: '25%', left: '60%' },
      { top: '45%', left: '75%' },
      { top: '60%', left: '50%' },
      { top: '20%', left: '45%' },
      { top: '55%', left: '30%' },
      { top: '40%', left: '15%' },  // 숨은골목 순댓국
      { top: '30%', left: '35%' },  // 대학로 치킨집
    ];
  } else if (filter === 'tourist') {
    return [
      { top: '35%', left: '55%' },  // 관광지 중심가
      { top: '25%', left: '70%' },
      { top: '45%', left: '60%' },
      { top: '30%', left: '45%' },
      { top: '50%', left: '65%' },
      { top: '40%', left: '75%' },
      { top: '20%', left: '50%' },
      { top: '55%', left: '55%' },
      { top: '25%', left: '40%' },  // 명동 한정식
      { top: '45%', left: '70%' },  // 강남 BBQ
    ];
  } else if (filter === 'highRating') {
    return [
      { top: '20%', left: '35%' },  // 별점 높은 맛집들
      { top: '30%', left: '55%' },
      { top: '40%', left: '25%' },
      { top: '50%', left: '70%' },
      { top: '25%', left: '80%' },
      { top: '45%', left: '40%' },
      { top: '35%', left: '60%' },
      { top: '55%', left: '35%' },
      { top: '30%', left: '20%' },
      { top: '60%', left: '65%' },
    ];
  } else if (filter === 'manyReviews') {
    return [
      { top: '25%', left: '45%' },  // 리뷰 많은 맛집들
      { top: '35%', left: '25%' },
      { top: '45%', left: '65%' },
      { top: '20%', left: '75%' },
      { top: '55%', left: '40%' },
      { top: '40%', left: '80%' },
      { top: '30%', left: '30%' },
      { top: '50%', left: '55%' },
      { top: '35%', left: '15%' },
      { top: '60%', left: '70%' },
    ];
  } else {
    return basePositions;
  }
};
