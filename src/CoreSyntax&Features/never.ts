/**
 * never 타입은 ts에서 특수한 타입으로, 절대로 발생하지 않는 값을 나타냅니다.
 * 함수가 예외를 발생시키거나, 무한 루프에 빠지는 등 실행이 완료되지 않는 경우에
 * never 타입을 반환합니다.
 */

/**
 * 함수가 예외를 발생시키는 경우
 */
const throwError = (message: string): never => {
  throw new Error(message);
};
/**
 * 함수가 무한 루프에 빠지는 경우
 */
const infiniteLoop = (): never => {
  while (true) {}
};

throwError("Error");
infiniteLoop();
