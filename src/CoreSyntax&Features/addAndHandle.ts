/**
 * 함수 타입과 콜백
 * cb 파라미터는 반환 값이 void인 함수를 요구하는 것이 아닌
 * 반환될 수 있는 값이 사용되지 않도록 요구하는 것입니다.
 */
const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
  // 아래와 같이 작성하면 출력되는 값은 undefined이다.
  //   const result2 = cb(result);
  //   console.log(result2);
};

export default addAndHandle;
