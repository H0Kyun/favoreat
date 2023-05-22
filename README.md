## <img src="https://github.com/H0Kyun/favoreat/assets/72697808/97fea065-9d4f-4cc3-84d6-f0b99bbc4fdc" width=16px; hegith=16px;/> FAVOREAT 소개

😋[메뉴 추천] 서비스

**“다양해진 음식 취향에 개인의 기호를 파악하여 개인별로 알맞는 메뉴 추천”**

오늘 어떤 메뉴를 먹을지 결정하는 일은 매우 일상적인데, 우리는 때때로 <span style="background-color: #FFE8B6; border-radius: 5px;">메뉴를 선택하는데 많은 시간을 소비해 고민</span>을 하곤 합니다. 이러한 고민을 덜어주기 위해 우리는 개인의 기호를 맛으로 파악하여 메뉴를 추천하는 서비스를 기획했습니다.

기존에 비슷한 서비스들은 주로 음식 재료나 식사의 목적에 초점을 맞추어 다양한 개인의 기호에 부합하는 추천만을 제공하므로 명백한 한계가 있다고 생각합니다.

따라서 우리 서비스는 <span style="background-color: #FFE8B6; border-radius: 5px;">맛을 기준으로 개인의 취향</span>을 더욱 정확하게 파악하고, 맞춤형 추천을 제공하여 메뉴 선택에서 발생할 수 있는 고민을 해소할 수 있도록 도와드릴 것입니다.

<span style="background-color: #D6BBFF; border-radius: 5px;">**FAVOREAT**</span>을 통해 많은 분들이 메뉴 선택에서의 고민을 덜고, 좀 더 즐겁게 식사를 즐길 수 있기를 바랍니다.

<br /><br />

## Contents

1. [개발기간](#개발기간) <br/>
2. [팀원 및 담당파트](#팀원-및-담당파트) <br/>
3. [주요기능](#주요기능) <br/>
4. [서비스 화면](#서비스-화면) <br/>
5. [실행방법](#실행방법) <br/>
6. [기술스택 및 협업툴](#기술스택-및-협업툴) <br/>
7. [시스템 아키텍처](#시스템-아키텍처) <br/>
8. [ERD ](#ERD) <br/>
9. [API 명세서](#API-명세서) <br/>
10. [스케줄](#스케줄) <br/>
11. 협업 툴

<br /><br />

## 개발기간

2023.02.20 ~ 2023.04.06 (45일)

<br /><br />

## 팀원 및 담당파트

**장예은(팀장/BE)**

- 백엔드 API, ERD 설계
- 레시피 데이터 크롤링 및 데이터 정제
- 협업을 위해 Swagger docs 작성
- 음식 맛 정보 및 사용자 맛 정보 계산 구현
- 레시피 즐겨찾기 삭제/조회 및 레시피 관심없음 API 개발
- 추천음식 조회 API 개발
- refresh token 저장/삭제 및 aceess token 만료 로직 개발

**김호균(팀원/BE Team Leader)**

- 백엔드 API, ERD 설계
- 데이터 크롤링
- Pandas 라이브러리를 사용해 데이터 정제
- Spring과 FastAPI 간 REST API 통신 개발
- FastAPI를 이용해 추천 요청 API 개발
- 음식 맛 평가 입력 API 개발
- 음식 정보 조회 API 개발
- 추천을 위한 알고리즘 개발

**이창민(팀원/BE)**

- 백엔드 API, ERD 설계
- Oauth2 기반 로그인 구현
- 식단 일기 관련 API 개발
- Spring Profile을 활용한 빌드 스테이지 분리
- Git, Jenkins 활용 컨테이너 CI 환경 구축
- NGINX 활용 Secure 적용, 프록시 서버 구현
- Docker 활용 컨테이너 관리 및 배포 환경 구축

**이효진(팀원/FE Team Leader)**

- 디자이너와 소통하며 일정 조절, 세부 기획 조절
- Next13, pwa, jotai 등 팀원들과 스터디
- 디자인 시안을 바탕으로 디렉토리 구조 설계 주도
- 스크롤 이벤트를 이용하여 가이드 화면 제작
- ESNext와 비동기를 적용하여 공통 통신 API 작성
- 반응형을 적용하여 햄버거 바 화면 제작
- 레시피 상세 페이지 웹용 아코디언 제작
- 영양소 데이터를 적용한 인터렉티브 프로그래스 바 제작
- 레시피 상세 페이지 모바일용 Nav바 제작

**박재희(팀원/FE)**

- 프로젝트를 원활하게 진행하기 위해 지라 관리
- PC, tablet, mobile 화면을 위한 반응형 구현
- 와이어 프레임 제작
- 취향 분석 페이지, 메인 화면의 UX 개선을 위해 디자이너와 소통
- nextjs, pwa, jotai 기술을 익히기 위해 프론트엔드 팀원들과 스터디
- pc, table,t mobile 사용자를 위한 반응형 적용
- oauth2를 이용한 카카오 로그인 구현
- 사용자의 맛을 평가할 취향 분석 페이지 구현
- 맛 평가에 사용되는 custom rating component 구현
- 사용자의 메인 추천 결과를 보여줄 메인 페이지 구현
- 메인 페이지의 추천 결과에 사용되는 이미지의 원본 비율과 디바이스 크기를 계산해 이미지 크기 동적 계산 적용
- 맛 평가 기준에 사용되는 hover info box를 jotai를 적용해 component로 구현
- 맛 평가에 필요한 modal component를 custom hook으로 제작
- 음식의 평가 정보를 보여줄 custom progress component 제작
- 서비스 홍보에 필요한 입맛 테스트 페이지와 결과 페이지 카카오톡 공유 구현

**오민준(팀원/FE)**

- 담당한 페이지의 UI/UX 향상을 위해 디자이너와 소통.
- Next, Pwa, jotai 등의 신규 기술을 익히기 위해 FE 팀원들과 스터디 진행.
- 라이브러리를 활용하여 Masonry Layout을 구현하고 내가 좋아하는 음식 화면에 적용.
- custom hook을 사용하여 pie chart를 반응형으로 구현.
- 식단일기, 마이페이지 , 정보페이지를 반응형으로 구현.
- 사용자 기본 정보 및 맛 평균을 확인 가능한 마이페이지 구현
- 감정 상태에 따른 필터가 포함된 식단일기 페이지 구현.
- 팀에서 서기 역할을 맡아 회의록 및 피드백을 노션에 작성함.

<br />
<br />

## 주요기능

#### 1. 캐릭터를 이용해 맛을 표현

매콤이(빨간색), 짭짤이(파란색), 달달이(노란색), 오일이(회색)으로 표현하였습니다.

#### 2. 맛 평가

맛을 평가하여 개인의 입맛을 파악합니다.

#### 3. 메뉴 추천

평가한 맛이 비슷하면 입맛이 비슷하다고 판단하여
입맛에 알맞은 메뉴를 추천합니다.

#### 4. 상세 정보 제공

추천한 메뉴의 난이도, 소요 시간, 맛 , 레시피 상세, 영양 성분 정보를 제공합니다.

#### 5. 레시피 즐겨찾기

관심있는 레시피에 대해서 즐겨찾기를 할 수 있고
언제든지 마이페이지에서 볼 수 있습니다.

#### 6. 식단일기

그날의 감정과 먹었던 음식을 함께 기록할 수 있습니다.

<br />
<br />

## 서비스 화면

### 가이드 페이지

<div style="display : flex; flex-direction : row; gap:10px;">
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/6b89be26-c7de-465c-9640-92528fcc314c" height=300px/>
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/34db8a39-4304-4f9e-a294-bb00c0eb34bd" height=300px/>
</div>

▲ 서비스를 소개하는 가이드 페이지

<br/>

### 초기 취향 파악 페이지

<div style="display : flex; flex-direction : row; gap:10px;">
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/acbdfa84-2086-413b-b09f-daa0c7b11d7f" height=300px />
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/6636406d-00a6-41f1-aad6-60cc1d9a114c" height=300px />
</div>

▲ 같이 맛 평가를 할 캐릭터 선택 페이지

<div style="display : flex; flex-direction : row; gap:10px;">
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/74bcbf97-c757-4bca-b01b-5e4ab4c06365" height=300px />
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/8e2949b3-db0c-43d1-bf2c-6ec826686720" height=300px />
</div>

▲ 취향 파악을 위해 맛을 평가하는 페이지

<div style="display : flex; flex-direction : row; gap:10px;">
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/87686bfd-c024-4a1c-8eaa-7af250cb5129" height=300px />
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/0ef866c6-6867-4348-baf5-df22474ad0c0"  height=300px />
</div>

▲ 맛을 평가하는 화면

<div style="display : flex; flex-direction : row; gap:10px;">
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/1a69ca30-11cd-4869-8a6f-5521fdfa42aa" height=300px />
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/013f0cb1-6b3d-4963-83ce-47eefed64d75" height=300px />
</div>

▲ 5개의 음식을 평가하면 '맛 평가 종료하기' 버튼이 생긴다.

<br/>

### 메인 페이지

<div style="display : flex; flex-direction : row; gap:10px;">
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/b357e44d-95bd-4439-a462-1ac4f96e506f" height=300px/>
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/3b62e9ce-07e0-4209-b89f-67c311ac65cc" height=300px />
</div>

▲ 추천 받은 음식을 볼 수 있는 메인 페이지

<br/>

### 음식 페이지

<div style="display : flex; flex-direction : row; gap:10px;">
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/def83a15-201c-4d19-b611-4763c2b93d39" height=300px />
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/8d8321c1-4175-4777-a8c8-761bad6432da" height=300px />
</div>

▲ 음식의 상세정보를 확인할 수 있는 음식 페이지

<br/>

### 햄버거 바

<div style="display : flex; flex-direction : row; gap:10px;">
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/391dd88b-cf3a-44c2-b6ed-a04d69b3095a" height=300px/>
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/d5127a90-b456-441d-9055-56d4bc55733b" height=300px />
</div>

▲ 메뉴 이동을 위한 햄버거 바

<br/>

### 마이페이지

<div style="display : flex; flex-direction : row; gap:10px;">
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/0a6356af-e3e5-4201-8eef-faa473e45a9e" height=300px/>
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/2a4c8f64-9672-4f80-9514-c600f69d789e" height=300px />
</div>

▲ 내가 선호하는 맛 정보와 즐겨찾기한 레시피를 볼 수 있는 마이 페이지

<div style="display : flex; flex-direction : row; gap:10px;">
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/389255cc-0bec-4717-a710-db6e6df6b5e4" style="display: inline-block" height=300px/>
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/d14b0a5d-2930-42d8-acd9-dd2d99cf75db" style="display: inline-block" height=300px />
</div>

▲ '더보기'버튼을 클릭해 즐겨찾기한 레시피 목록을 볼 수 있다.

<br/>

### 식단 일기 페이지

<div style="display : flex; flex-direction : row; gap:10px;">
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/c6361824-d269-4d64-a504-cd1d8bfd053d" style="display: inline-block" height=300px/>
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/03b03bb4-bd97-40a2-9fa7-7ee9c55be942" style="display: inline-block" height=300px />
</div>

▲ 먹은 음식과 그 날의 감정을 기록할 수 있는 식단 일기 페이지

<br/>

### 으른 입맛 테스트 페이지

<div style="display : flex; flex-direction : row; gap:10px;">
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/e1a94cf8-f853-4712-b03e-e565caf39c3c" height=300px/>
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/2df5fb91-6c35-4d73-a9d7-2bf2fa9fa090" height=300px />
</div>

▲ 입맛 연령 측정을 위한 설문 화면

<div style="display : flex; flex-direction : row; gap:10px;">
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/652ecdb6-0adb-4fb7-b737-5477e2b04d6e" height=300px/>
  <img src="https://github.com/H0Kyun/favoreat/assets/72697808/9aea957f-3937-4d9a-8bd7-a313119800e7" height=300px />
</div>

▲ 결과 화면

<img src="https://github.com/H0Kyun/favoreat/assets/72697808/21d53a72-2a7c-4284-991c-d797c8fc2fd1"  height=300px/>

▲ 결과를 공유하면 카카오톡에 올라오는 말풍선

<br />
<br />


## 실행방법

- 포팅 메뉴얼 참조

<br />
<br />

## 기술스택 및 협업툴

### 프론트엔드

<strong>Language</strong> | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=Typescript&logoColor=white" />

<strong>Framework</strong> | <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" /> <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white" />

<strong>Library</strong> | <img src="https://img.shields.io/badge/styledComponent-DB7093?style=flat-square&logo=styled-components&logoColor=black"/> <img src="https://img.shields.io/badge/router-CA4245?style=flat-square&logo=react-router&logoColor=white"/> <img src="https://img.shields.io/badge/jotai-333333?style=flat-square" />

<strong>Etc</strong> | <img src="https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=PWA&logoColor=white" />

<br />

### 백엔드

<strong>Language</strong> | <img src="https://img.shields.io/badge/Java-5382a1?style=flat-square&logo=Java&logoColor=white" /> <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white" />

<strong>Framework</strong> | <img src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=Spring&logoColor=white" /> <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=FastAPI&logoColor=white" />

<strong>Library</strong> | <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat-square&logo=SpringBoot&logoColor=white" /> <img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=Swagger&logoColor=black" />

<strong>Build Tool</strong> | <img src="https://img.shields.io/badge/Gradle-02303A?style=flat-square&logo=Gradle&logoColor=white" />

<strong>DB</strong> | <img src="https://img.shields.io/badge/MySql-4479A1?style=flat-square&logo=MySql&logoColor=white" />

<br />

### 인프라

<strong>Deploy</strong> | <img src="https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=Nginx&logoColor=white" /> <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white" /> <img src="https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=Jenkins&logoColor=white" /> <img src="https://img.shields.io/badge/Aws-232F3E?style=flat-square&logo=amazonaws&logoColor=white" />
<br />

### 협업툴

<br />

<strong>Storage</strong> | <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"/>

<strong>Design</strong> | <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/> <img src="https://img.shields.io/badge/FigJam-F24E1E?style=flat-square&logo=&logoColor="/>

<strong>Record</strong> | <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/> <img src="https://img.shields.io/badge/Mattermost-0058CC?style=flat-square&logo=Mattermost&logoColor=white"/>

<strong>Scheduler</strong> | <img src="https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=Jira&logoColor=white" />

<br />
<br />

## 시스템 아키텍처

![OMZ_System Architecture](https://github.com/H0Kyun/favoreat/assets/72697808/ad845fc9-7068-4d0b-884d-e74aed1c7fad)

<br />
<br />

## ERD

![OMZ_ERD](https://github.com/H0Kyun/favoreat/assets/72697808/d5b4c22d-33e6-4d0b-bd8e-6e6bc4f9c86e)

[Dump_file](https://drive.google.com/drive/folders/1rc3Kl0GMMbzu5p6p_6IP9SPbTO0E38jE?usp=sharing)

<br />
<br />

## API 명세서

![Diary](https://github.com/H0Kyun/favoreat/assets/72697808/fac4a3eb-a89b-4d09-af03-9018e895b6d2)

![Foods](https://github.com/H0Kyun/favoreat/assets/72697808/c970df3f-9b0a-4950-b3c5-8b3dd5f5df2d)

![Users](https://github.com/H0Kyun/favoreat/assets/72697808/101993ec-f3d0-4cdb-a115-aa4b2e030944)

<br />
<br />

## 스케줄

![OMZ_Schedule](https://github.com/H0Kyun/favoreat/assets/72697808/35527857-46d6-4ee7-95fd-6b2449715134)

## 협업 툴

[노션](https://www.notion.so/Favoreat-d30b1e39ac6946a5a6a154995487f300) <br/>
[기획](https://www.figma.com/file/iesYQbqBof0upcrLzQ7QD7/%ED%8A%B9%ED%99%94D108_OMZ?node-id=0%3A1&t=0WllcCnNe8GdiTmn-1) <br/>
[와이어프레임](https://www.figma.com/file/yIvAsYh2FA8hD3NDnW3URW/%ED%8A%B9%ED%99%94D108_OMZ?node-id=0%3A1&t=mliF2RDvzPpoDC66-1) <br/>
[디자인](https://www.figma.com/file/1PNIjJxYLe4GLdvhklaYEH/Untitled?node-id=0%3A1&t=frkT7wJ9shMk7ymz-1)
