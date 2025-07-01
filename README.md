
# 맛.zip 🍽️

> GenZ를 위한 스마트 맛집 발견 플랫폼

**"로컬의 진짜 맛집 vs 관광객 핫플레이스, 당신의 선택은?"**

## 🌟 프로젝트 소개

맛.zip은 기존의 획일적인 맛집 추천을 벗어나, **로컬 주민들의 진짜 추천**과 **관광객들의 인기 스팟**을 구분하여 제공하는 혁신적인 맛집 발견 서비스입니다.

### 📱 배포 URL
🔗 **[맛.zip 바로가기](https://your-deployment-url.vercel.app)**

---

## 🎯 핵심 기능

### 1. 3중 필터링 시스템
- **🏠 로컬 추천**: 현지인들만 아는 진짜 숨은 맛집
- **✈️ 관광객 추천**: SNS 핫플, 관광지 주변 인기 매장
- **⭐ 통합 추천**: 로컬과 관광객 모두에게 사랑받는 베스트 매장

### 2. 인터랙티브 지도 + 리스트 뷰
- 드래그 가능한 바텀시트로 직관적인 탐색
- 현재 위치 기반 맛집 표시
- 필터별 다른 위치의 매장 분포

### 3. 실시간 리뷰 시스템
- 로컬 vs 관광객 리뷰 구분
- 평점 분석 및 시각화
- 실시간 리뷰 작성 및 필터링

### 4. 스마트 내비게이션
- 원클릭 길찾기 기능
- 매장별 상세 정보 (운영시간, 전화번호, 특세메뉴)

---

## 👥 페르소나

### 🎯 Primary Persona: "탐험러 지민" (23세, 대학생)
- **특징**: 새로운 맛집 발견을 좋아하는 GenZ, SNS에 맛집 사진 업로드 즐김
- **니즈**: 
  - 인스타 감성의 예쁜 맛집도 좋지만, 진짜 맛있는 로컬 맛집도 알고 싶음
  - 친구들과 차별화된 맛집 경험을 하고 싶음
  - 시간과 돈을 아끼면서도 만족도 높은 식사를 원함

### 🎯 Secondary Persona: "여행러버 민수" (28세, 직장인)
- **특징**: 국내 여행을 자주 다니며, 각 지역의 특색있는 맛집을 찾아다님
- **니즈**:
  - 관광지에서 바가지 안 쓰고 진짜 맛있는 곳을 찾고 싶음
  - 현지인들이 실제로 가는 곳과 관광객용 맛집을 구분하고 싶음
  - 효율적인 여행 계획으로 시간 절약하고 싶음

---

## 📖 사용자 스토리

### 🏠 로컬 사용자 시나리오
```
"새로 이사온 동네에서 현지인들이 진짜 가는 맛집을 찾고 싶어"

1. 앱 실행 → 현재 위치 확인
2. '로컬 추천' 필터 선택
3. 지도에서 현지인 평점 4.0 이상 매장들만 표시
4. 바텀시트에서 매장별 로컬 리뷰 확인
5. 선택한 매장으로 길찾기 → 방문
```

### ✈️ 관광객 사용자 시나리오
```
"부산 여행 중, 해운대에서 인스타 감성 맛집을 찾고 있어"

1. 해운대 지역에서 앱 실행
2. '관광객 추천' 필터 선택  
3. 관광객 평점 높은 포토존 맛집들 확인
4. 리뷰에서 사진과 관광객들의 후기 확인
5. 예약 전화 후 방문 → SNS 업로드
```

### ⭐ 통합 사용자 시나리오
```
"친구들과 만날 곳을 찾는데, 로컬도 관광객도 모두 만족할 만한 곳을 원해"

1. 만남 장소 중심으로 앱 실행
2. '통합 추천' 필터 선택
3. 로컬/관광객 모두에게 사랑받는 균형잡힌 매장들 확인
4. 평점 분석에서 두 그룹의 평가 비교
5. 모두가 만족할 수 있는 매장 선택 → 예약 후 방문
```

---

## 🛠️ 기술 스택

### Frontend
- **React 18** - 컴포넌트 기반 UI 개발
- **TypeScript** - 타입 안전성 보장
- **Tailwind CSS** - 유틸리티 기반 스타일링
- **Vite** - 빠른 개발 환경

### UI/UX
- **Shadcn/ui** - 모던한 컴포넌트 라이브러리
- **Lucide React** - 일관된 아이콘 시스템
- **Responsive Design** - 모바일 퍼스트 디자인

### State Management
- **React Hooks** - 로컬 상태 관리
- **Context API** - 글로벌 상태 공유

---

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: Gradient (Indigo → Purple) - 브랜드 아이덴티티
- **Local**: Green - 로컬 추천 (🏠 친근함, 안정감)
- **Tourist**: Blue - 관광객 추천 (✈️ 신뢰, 모험)
- **Accent**: Orange/Red - CTA 버튼, 중요 정보

### 타이포그래피
- **제목**: Bold, 한글 최적화 폰트
- **본문**: Medium weight, 가독성 우선
- **UI**: Regular, 깔끔한 인터페이스

---

## 🚀 설치 및 실행

```bash
# 프로젝트 클론
git clone https://github.com/your-username/matzip-app.git

# 디렉토리 이동
cd matzip-app

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

---

## 📂 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── MapView.tsx     # 지도 뷰 컴포넌트
│   ├── RestaurantCard.tsx   # 맛집 카드
│   ├── RestaurantDetail.tsx # 맛집 상세 정보
│   ├── FilterTabs.tsx      # 필터 탭
│   └── ReviewForm.tsx      # 리뷰 작성 폼
├── data/               # 목 데이터 및 API
│   └── mockData.ts     # 맛집 더미 데이터
├── types/              # TypeScript 타입 정의
│   └── index.ts        # 공통 타입 정의
├── pages/              # 페이지 컴포넌트
│   └── Index.tsx       # 메인 페이지
└── utils/              # 유틸리티 함수
```

---

## 🔮 향후 개발 계획

### Phase 1: 기본 기능 완성 ✅
- [x] 3중 필터링 시스템
- [x] 지도 + 리스트 뷰
- [x] 리뷰 시스템
- [x] 반응형 디자인

### Phase 2: 고도화 (예정)
- [ ] 실제 지도 API 연동 (Kakao Map/Google Maps)
- [ ] 사용자 인증 시스템
- [ ] 실시간 데이터베이스 (Firebase/Supabase)
- [ ] 푸시 알림 (새로운 맛집, 리뷰 등)

### Phase 3: 확장 기능 (예정)
- [ ] AI 기반 맛집 추천
- [ ] 소셜 기능 (친구 추가, 맛집 공유)
- [ ] 포인트/리워드 시스템
- [ ] 매장 사장님 전용 대시보드

---

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 라이선스

MIT License - 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

---

## 📞 연락처

- **개발자**: [Your Name]
- **이메일**: your.email@example.com
- **GitHub**: [@your-username](https://github.com/your-username)

---

<div align="center">
  <p><strong>맛.zip과 함께 진짜 맛집을 발견해보세요! 🍽️✨</strong></p>
  
  ⭐ 도움이 되셨다면 스타를 눌러주세요!
</div>
