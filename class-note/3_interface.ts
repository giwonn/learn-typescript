interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
    age: 28,
    name: '기원'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
const capt = {
    name: '캡틴',
    age: 100,
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

const sum: SumFunction = (a: number, b: number) => a + b;

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// obj['cssFile'] = 'a';

// value가 key의 집합이므로 string으로 타입추론을 해줌
Object.keys(obj).forEach((value) => {});

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

// 자바보다 편한듯?
interface Developer extends Person {
    language: string;
}

let captain: Developer = {
    language: 'ts',
    age: 100,
    name: '캡틴',
}