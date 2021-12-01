// interface Person {
//     name: string;
//     age: number;
// }

// 타입은 확장이 안된다!
type Person = {
    name: string;
    age: number;
}

var giwon: Person = {
    name: '기원',
    age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {

}