const promiseExample = () => {

    /**
     * 다음 주어진, 코드를 이용하요 numbers 배열의 모든 합을 계산하시오.
     * 모 회사 코딩 테스트2 / 면접 가니, 손코딩 문제를 줬다. promise 가 공부가 안된 상태에서 할려니..쩝;
     */

    console.log('promise 예제 start--------------------------------------------------');
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sumResult = 0;

    function addNumber(a, b) {
        return new Promise((resolve => {
            resolve(a + b);
        }));
    }

    // function addNumber(a, b) {
    //     return new Promise(function (resolve, reject) {
    //         resolve(a + b)
    //     });
    // }



    numbers.forEach((value, index) => {

        addNumber(value, sumResult)
            .then(function (resolve) {
                //sumResult = resolve;

            });

    });
    console.log(sumResult);
    console.log('promise 예제 end--------------------------------------------------');

}

export default promiseExample;