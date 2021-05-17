# mole_game_project
## 작성자: 이한울
## Vue config info

## Fetures


##  Development History
### 2021.05.15 (토)
project 셋팅 및 view 구조 작성
ES Lint, Webpack, Typescript 설정

### 20201.05.17 (월)
vuex store 구성
두더지 이미지 애니메이션 효과 추가
준비화면/메인화면 구현

### 20201.05.17 (월) 21:50분
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