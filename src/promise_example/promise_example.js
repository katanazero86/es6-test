const promiseExample = () => {

    /**
     * 다음 주어진, 코드를 이용하요 numbers 배열의 모든 합을 계산하시오.
     */

    console.log('promise 예제 start--------------------------------------------------');
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sumResult2 = 0;

    function addNumber(a, b) {
        return new Promise((resolve => {
            resolve(a + b);
        }));
    }

    // Promise를 사용안하고 reduce() 를 이용하는 방법도 있다.
    const sumResult3 = numbers.reduce((a, b) => a + b, 0);
    console.log('sumResult3 : ' + sumResult3);


    //해결2
    function sumChain(prevSum) {
        let nextNum = numbers.shift();
        sumResult2 = prevSum;

        if (nextNum) {
            return addNumber(sumResult2, nextNum)
                .then(sumChain);
        } else {
            return sumResult2;
        }
    }

    sumChain(sumResult2).then((resolve) => {
        console.log('sumResult2 : ' + resolve); //55
    });

    console.log('promise 예제 end--------------------------------------------------');

}

export default promiseExample;