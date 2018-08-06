# es6-cal-project

## 모 회사 코딩 테스트(프론트 개발자 주니어 직군)

### 요구사항 1

```
더하기 빼기를 할 수 있는 계산기를 만들어주세요.
(곱셈, 나눗셈은 안하셔도 됩니다.)
1. 사용자에게 입력을 받아야 하며, 입력은 문자열로 받아야 합니다. (숫자 및 +, - 기호 포함) 
2. es6 문법을 사용하여 작성 (npm 사용해서 프로젝트 구성)
3. 본인이 할 수 있는 가장 우아하고 고급스러운 코딩을 부탁드립니다. 
(각종 디자인 패턴/ 유지보수를 고려한 코딩/ 각종 라이브러리 사용 가능합니다.)
예) 
입력 : 1 - 2 + 3 
출력 : 2 
```

### 요구사항 2

```
이전에 작성한 계산기 소스를 rollup.js 를 이용하여
컴파일하는 프로젝트를 생성하여 제출해주세요. 
(반드시 npm 으로 프로젝트를 구성하시기 바랍니다.)
rollup.js 는 https://rollupjs.org 에서 참고하셔서 진행
```



### Project Code Review

```
- npm을 이용하여 구성하라고 했기에, node.js readline 모듈을 이용

readline 모듈은 Node.js에서 콘솔로 입력을 받게 해주는 모듈입니다.(마치, C언어 같은)
사용법은 

readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

createInteface 를 통해, 모듈을 초기화 해준다. 리터럴 객체로 input / output 을 각각 넣어서 사용


주요 함수
setPrompt는 cmd의 " > " 같은 앞에 뜨는 문구를 설정하고,
prompt는 입력을 받고,
on은 특정 이벤트에 대한 처리를 합니다.(line이라는 이벤트가 입력받은 값과 같이 콜백함수를 작동시킵니다. )


- 화살표 함수 문법과 Modul 패턴을 이용하여 코드를 작성
코드를 모듈화 하여, 느슨한 결합 및 의존성 감소
화살표 함수는 ES6 문법을 요구해서 작성(화살표 함수는 항상 익명이며, this 바인딩이 되지 않는다)
JS에서 함수를 정의하는 방식은 함수 선언식 / 익명함수 표현식 / 기명함수 표현식 이 존재

- 1+3+2 / 2+2 와 같이 문자열 형태로 입력 받기 때문에, eval() 를 이용
eval(): 자바스크립트 표현식으로 문자열을 자바스크립트 코드로 해석한 후 이를 평가 / 문자열을 JS 코드로 해석하여 실행

- npm 프로젝트 구성을 위해, npm init 명령어로 프로젝트 구성
npm init

- rollup.js 로 번들링을 하고 싶어하니, dependencies 에 추가해주자
npm i rollup

"dependencies": {
    "rollup": "^0.63.5"
  }

- rollup.cofig.js 파일을 작성한다.
CommonJS 스펙을 준수한 모듈로 번들링하는 경우 -> format: 'cjs'
ES Module 스펙 -> format: 'es'
브라우저 전용으로 모듈 스펙 -> format: 'iife'
// rollup.config.js
export default {
    input: 'src/main.js',
    output: {
        file: 'build/js/main.min.js',
        format: 'cjs'
    }
};

플러그인도 지원한다.
rollup-plugin-json
rollup-plugin-typescript2
rollup-plugin-tslint
rollup-plugin-babel
등

플러그인을 통해서, 번들링을 할 때 코드 컴파일, JSON 파일 작업 등 다양한 작업을 할 수 있다.

import typescript from 'rollup-plugin-typescript2';
import tslint from 'rollup-plugin-tslint';
export default {
  input: 'src/index.ts',
  output: {
    file: 'build/js/main.min.js',
    format: 'cjs'
  },
  plugins: [
    typescript(),
    tslint()
  ]
}

플러그인을 사용하고 싶다면, npm i 명령어를 통해, 해당 모듈을 의존성에 추가하고 설정파일에서 config에 import 하여 사용.

- package.json scripts 에 rollup -c 를 이용하여, 번들링하자.

npm run build
npm run start
```