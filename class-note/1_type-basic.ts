// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
const str: string = 'hello';

// TS 숫자
const num: number = 10;

// TS 배열
const arr: Array<number> = [1, 2, 3];
const heroes: Array<string> = ['Capt', 'Thor', 'Hulk'];
const items: number[] = [1, 2, 3];

// TS 튜플 (타입이 들어갈 순서까지 지정하는 것)
const address: [string, number] = ['gangnam', 100];

// TS 객체
const obj: object = {};
// const person: object = {
//     name: 'capt',
//     age: 100
// };
const person: { name: string; age: number } = {
  name: 'thor',
  age: 1000,
};

// TS 진위값
const show: boolean = true;
