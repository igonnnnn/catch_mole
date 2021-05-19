# mole_game_project

## -- 작성자: 이한울

## -- Fetures
###### Directory
.storybook
dist
node_modules    
public  
src  
	assets  
		audio  
		images  
	components  
		Board.vue  
		Bomb.vue  
		Mole.vue  
		Ranking.vue  
	mixin  
		ItemMixin.ts
	router
		index.ts
	store
		index.ts
	stories
		Board.stories.js
		Bomb.stories.js
		Introduction.stories.mdx
		Mole.stories.js
		StoryPane.vue
	views
		Home.vue
		Main.vue
		Result.vue
	App.vue
	main.ts
	shims-tsx.d.ts
	shims-vue.d.ts
babel.config.js
package.json
vue.config.js


##  -- Development History
### 2021.05.15 (토)
project 셋팅 및 view 구조 작성
ES Lint, Webpack, Typescript 설정

### 2021.05.17 (월)
vuex store 구성
두더지 이미지 애니메이션 효과 추가
준비화면/메인화면 구현

### 2021.05.17 (월) 21:50분
animation효과 개선
	- 감점요소(폭탄) 애니메이션을 위해 data 배열에 넣는 값 구분 (0: none, 1: mole, 2: bomb)
	- 입력한 행 및 열, 두더지 수에 대한 데이터를 store에서 관리하려 나타낼 두더지 및 폭탄의 수 계산하여 setInterval() 설정
	- interval duration: 2초
	- 한 번의 interval 기간의 임시 총 개수: Math.random() * 행 * 열
	- 폭탄의 개수: 임시 총 개수 * 폭탄의 비율(bombRate)
	- 두더지 개수: 입력받은 두더지 개수와 (임시 총 개수 - 폭탄의 개수)를 비교하여 최대 표시될 두더지 개수가 입력받은 두더지 
	개수를 넘지 않게 설정
	- 두더지 또는 폭탄을 클릭 시에는, hideAnimation으로 애니메이션 효과 변경(duration은 0.5초, 이미지 높이는 기존의 1/2)

난이도 설정
	- 최초 애니메이션 듀레이션은 2초 -> 20초 남을 시, 1초로 변경
	- 나타날 폭탄의 비율 0.2 -> 20초 남을 시ㅣ, 0.5로 변경

중앙관리 데이터(store 이용)
	- 행, 열, 점수, 두더지 갯수, 시작flag, 정지flag 등 다수 화면에서 사용될 데이터에 대해서 store이용
	- 해당 데이터에 대한 업데이트는 dispatch를 이용하여 변경

### 2021.05.19 (수) 06:00
랭킹 화면 추가
	- 10위 까지 랭킹 보여줌
	- 점수별로 랭킹 10위 까지만 store에 저장
	- 동일 점수에 대해서는 먼저 달성한 시간이 상위 랭크에 위치하도록 구현
화면별 CSS 수정
	- 준비화면, 시작화면, 결과하면의 CSS 수정
	- 각 화면별 섹션 구분을 위해 header, main, footer 태그 사용
	- 반응형 작업을 위해 vw, vh 단위 사용
	- font에 대한 반응형 작업은 더 찾아봐야 됨


## 2021.05.19 (수) 19:00
Mixin 컴포넌트 추가
	- 두더지, 폭탄 컴포넌트는 CSS만 다르고 동일한 기능
	- mixin 컴포넌트로 공통 로직만 따로 빼서 mixin 컴포넌트로 생성

Bgm 추가
	- App.vue에서 배경음악 재생
	- 두더지 또는 폭탄 클릭 시, 효과음 추가

Storybook 추가
@@ 추가는 했으나 적용하기에 어려움이 많음(처음 사용)
@@ 과제 제출은 하기로 결정
