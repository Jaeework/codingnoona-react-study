# { ; } 코알누 리액트 스터디 3기
[코딩 알려주는 누나 리액트 스터디](https://codingnoona.thinkific.com/pages/3c7ff4) (2025.03.30 - 2025.05.04)

<br/>

## Week 1
### 1.1 리액트 기초
#### - 환경설정
#### - component, props, state
### 1.2 가위바위보 게임
#### 👤 User Story
1. 유저는 박스 두 개를 볼 수 있다. (타이틀, 사진, 결과)
2. 유저는 박스 하단에 가위바위보 버튼을 볼 수 있다.
3. 버튼 클릭하면 클릭한 아이템이 유저의 박스에 보인다.
4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
5. 3, 4의 아이템을 가지고 승패를 나눈다.
6. 승패 결과에 따라 테두리 색이 변한다. (이기면-초록, 지면-빨강, 비기면-검정)
- [x] Box Component 생성
- [x] 가위/바위/보 클릭 시 유저 박스에 표시
- [x] 컴퓨터가 랜덤하게 아이템을 선택하고 박스에 표시하기
### 1.3 가위바위보 게임 이어서...
- [x] 유저와 컴퓨터의 선택을 비교하여 결과에 따라 UI 변경
- [X] css 개선 및 반응형 UI 구현

#### 🖼️최종 결과물

<a href="https://rock-paper-scissors-wine-xi.vercel.app/">
    <img src="https://github.com/user-attachments/assets/d4003798-c26f-4be2-84a6-9ed68f42e045" alt="가위바위보 게임" width="500px" />
</a>

#### [✌🏻컴퓨터와 가위바위보 게임 하러 가기](https://rock-paper-scissors-wine-xi.vercel.app/)

### 1.4 리액트 라이프 사이클
#### - 함수형 컴포넌트의 라이프 사이클
- `useEffect`
### 1.5 날씨 앱 만들기 (OpenWeatherMap API 사용)
#### 👤 User Story
1. 유저는 현재 위치의 날씨를 볼 수 있다. (지역, 온도, 날씨 상태)
2. 유저는 다른 도시의 버튼들을 볼 수 있다.
3. 유저는 다른 도시 버튼을 클릭하면 해당 도시의 날씨 정보를 볼 수 있다.
4. 유저는 데이터가 로딩될 때, 로딩 스피너를 볼 수 있다.

<br/>

- [x] 현재 위치 가져오기
- [x] `OpenWeatherMap`API 및 현재 위치를 이용해 날씨 정보 가져오기
- [x] 기본 UI 레이아웃 구성
### 1.6 날씨 앱 만들기 이어서...
- [x] 현재 위치 및 주요 도시 버튼 만들기
- [x] 도시별 날씨 정보 가져오기
- [x] `React Spinners` 라이브러리 이용한 로딩 스피너 구현
- [x] `try-catch` 구문 이용하여 API 호출 에러 핸들링 구현
- [x] 추가적인 CSS 및 반응형 UI

#### 🖼️최종 결과물

<a href="https://jayso-weather.vercel.app/">
    <img src="https://github.com/user-attachments/assets/15697df0-bc14-4708-9ea2-e876a9d100c6" alt="날씨 정보 앱" width="500px" />
</a>

#### [🌤️우리 동네 날씨 확인하러 가기](https://jayso-weather.vercel.app/)

<br/>

## Week 2
### 2.1 라우터
#### - `Link`, `useNavigate`를 이용한 페이지 이동
#### - Restful Route
#### - `useParams`, `useSearchParams`
#### - `Navigate` 컴포넌트를 이용한 Redirect
### 2.2 쇼핑몰 페이지 만들기
#### 👤 User Story
1. 전체 상품 페이지, 로그인, 상품상세페이지
- 1-1. 내비게이션 바 만들기
2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
4. 상품디테일을 눌렀으나, 로그인이 안되어 있을 경우에는 로그인페이지가 나온다.
5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
7. 로그인을 하면 로그아웃을 하면 로그인이 보인다.
8. 상품을 검색할 수 있다.

- [x] 라우터 세팅
- [x] 상단 내비게이션 바 만들기
- [x] `json-server`를 활용하여 데이터 저장 및 데이터 호출 확인
### 2.3 쇼핑몰 페이지 만들기 이어서...
- [x] `react-bootstrap` 적용하기
- [x] 로그인 페이지 작성
- [x] `Navigate` 컴포넌트를 이용하여 로그인 유저만 상세 페이지 볼 수 있도록 Private Route 작성
- [x] 상품 상세 페이지 기본 레이아웃 작성 
### 2.4 쇼핑몰 페이지 만들기 이어서...
- [x] `useParams`를 이용한 상품 상세 정보 API 호출 확인
- [x] 상품 상세 정보 페이지 UI 완성
- [x] `useSearchParams`를 이용하여 상품 검색 기능 구현
- [x] 로그아웃 기능 구현
- [x] 반응형 UI 구현
- [x] 로딩 스피너 및 `try-catch` 구문 활용한 에러 핸들링 추가

#### 🖼️최종 결과물

<a href="https://jayso-hnm.vercel.app/">
    <img src="https://github.com/user-attachments/assets/d7b6a09c-903c-42a5-b2c9-14a8739600e0" alt="쇼핑몰 페이지" width="500px" />
</a>

#### [🧥봄옷 장만하러 가기](https://jayso-hnm.vercel.app/)

<br/>


