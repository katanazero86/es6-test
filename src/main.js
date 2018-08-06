const readline = require('readline');
import promiseExampleModule from './promise_example/promise_example.js';

promiseExampleModule();

const readlineInterfaceModule = (() => {
    return {
        init: () => {
            return readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
        }
    }
})();

const calculatorModule = (() => {
    return {
        executeCalculate: (line) => {

            if (!calculatorModule.validationLine(line)) {
                console.log('잘못된 입력입니다. 다시 입력해주세요.');
                return false;
            }
            console.log('결과 :', eval(line));
        },

        validationLine: (line) => {
            let result = true;
            let lastChar = line.charAt(line.length - 1);
            var regExp = /[a-zA-Z가-힣]/; //한글과 영문이 포함되어있는지에 대한 정규식
            if (lastChar != ')' && isNaN(lastChar)) {
                return false;
            }

            if (regExp.test(line)) {
                console.log('한글 또는 영어가 포함되어 있음');
                return false;
            }

            return result;
        }

    }
})();

let readlineInterface = readlineInterfaceModule.init();
readlineInterface.setPrompt('계산하실 값을 입력하세요.(예: 1+2*3  결과: 7) > ');
readlineInterface.prompt();
readlineInterface.on('line', (line) => {
    if (line === 'exit') {
        readlineInterface.close();
    }
    calculatorModule.executeCalculate(line);
    readlineInterface.prompt();
});


readlineInterface.on('close', () => {
    process.exit();
});



