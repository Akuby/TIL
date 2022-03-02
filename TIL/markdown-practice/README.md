# 제목(Header)

# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6

# 문장(Paragraph)

ES6부터 템플릿 리터럴이라고 하는 새로운 문자열 표기법이 도입되었다.일반 문자열과 비슷해 보이지만,
작은 따옴표 또는 큰따옴표 대신 백틱(`)을 사용해 표현한다.

# 줄바꿈(Line Breaks)

마크다운 언어에서 줄바꿈은 브레이크 태그를 사용하거나,<br />
줄바꿈을 시작할 문장 앞에서 띄어쓰기를 두번 넣어주면  
줄바꿈으로 인식한다.

# 강조(Emphasis)

_이텔릭_ 체는 _언더스코어_ 로 단어를 감싸주어 사용한다.<br /> 이때, 주변은 띄어쓰기 해준다.  

**볼드**체는 별표 두개로 단어를 감싸주면 된다. **두개**. 띄어쓰기는 안해줘도 OK.  

**_이텔릭 + 볼드_** 체는 이텔릭체를 볼드체로 감싸준다. 띄어쓰기 필수.  

~~취소선~~은 tild 두개로 단어를 감싸준다.  

<u>밑줄</u>은 마크다운에서 지원하지 않기 때문에 u태그로 감싸준다. html에서 u태그 사용은 권장하지 않는다.  

# 목록(Lists)

1. 순서가 필요한 목록
1. 순서가 필요한 목록
1. 순서가 필요한 목록
    1. 새로운 서브 목록은
    1. 탭 두번(띄어쓰기 4번)으로 넣기 가능
    1. 환경에 따라 다를수도.
1. 순서가 필요한 목록은 순서가 자동 계산.

- 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록
- 순서가 필요하지 않은 목록
    - 순서가 필요하지 않은 목록도
    - 서브 목록은 탭 두번으로
- 순서가 필요하지 않은 목록은 숫자 대신 하이픈으로.

# 링크(Links)
<a href="https://google.com">GOOGLE</a> a 태그로 나타낼 수도 있고  
[GOOGLE](https://google.com) 대괄호[이름]와 소괄호(주소)로도 가능  

<a href="https://naver.com" title="네이버로 이동!">NAVER</a> title 속성을 주고 싶다면,  
[NAVER](https://naver.com "네이버로 이동!") 주소 끝에 띄어쓰기 한번, 따옴표 안에 속성값을 입력한다.

<a href="https://naver.com" title="네이버로 이동!" target="_blank">NAVER</a> target 속성(새 탭에서 열기)은 마크다운에서 지원하지 않는다. 원시 html로 작성할 것.

# 이미지(Images)

![PUPPY](https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/labrador-puppy-royalty-free-image-1626252338.jpg?crop=0.667xw:1.00xh;0.173xw,0&resize=640:*)  
이미지 링크 앞에 느낌표를 붙여주면 이미지로 인식한다. 대괄호 내용은 참조값으로 들어간다.

이미지에 링크를 넣고 싶다면...  
대괄호와 소괄호의 구조를 기본으로 하여, 대괄호 안에 구조를 한번 더 넣어주고 소괄호 안에 원하는 주소를 입력하면 된다.

[![PUPPY](https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/6d/b0/5d/6db05dea-7d82-2617-1406-d9b50d3abeaf/source/256x256bb.jpg)](https://www.youtube.com/watch?v=wVQtJmc1Hnc) ~~멍멍!~~

# 인용문 (BlockQuote)

> 남의 말이나 글에서 직접 혹은 간접적으로 따온 문장.  
> (네이버 국어 사전)

> 인용문 안에
>> 인용문 안에
>>> 인용문 안에
>>>> 인용문!!
  
  
# 인라인(inline) 코드 강조

CSS에서 `background` 혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있습니다.  
인라인 코드 강조는 백틱으로 단어를 감싸준다.

# 블럭(block) 코드 강조

```html
<a href="https://naver.com" title="네이버로 이동!" target="_blank">NAVER</a>
```
백틱 3번, 언어 종류 적고 밑에 원하는 코드 삽입, 백틱 3번으로 코드 닫기.  
html 말고 다른 언어도 가능하다.
```css
a .hello{
  color = #fff;
}
```
```javascript
const input = require('fs').readFileSync("/dev/stdin").toString();
```
```bash
$ git commit -m "Study Markdown"
```
```plaintext
그냥 텍스트. plaintext라고 입력.
```

# 표 (Table)

position 속성  

값 | 의미 | 기본값  
--|:--:|--:|
static | 배치기준 없음 | O
relative | 요소 자신 | X
absolute | 위치 상 부모 | X
fixed | 뷰포트 | X

중간 하이픈은 표의 머리와 몸통 구분.  
정렬을 다르게 하고 싶으면 하이픈에 콜론을 붙여 설정한다.(default : 왼쪽 정렬)  
복잡한 구조의 표는 마크다운에서 지원하지 않음.

# 원시 HTML(Raw HTML)
마크다운에서 지원하지 <span style="text-decoration: underline;">않는</span> 기능<br />
을 사용할 때 유용하며 대부분 잘 동작합니다.

<a href="https://naver.com" title="네이버로 이동!" target="_blank">NAVER</a> target 속성(새 탭에서 열기)은 마크다운에서 지원하지 않는다. 원시 html로 작성할 것.

***

<img width="200" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/labrador-puppy-royalty-free-image-1626252338.jpg?crop=0.667xw:1.00xh;0.173xw,0&resize=640:*" alt="강아지" /> <= 자주 쓰인다.

# 수평선(Horizontal Rule)

---  
하이픈 세번 수평선
***  
애스터리스크 세번 수평선
___  
언더스코어 세번 수평선





