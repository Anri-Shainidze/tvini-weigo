

const numbers1: number[] = [3, 7, 2, 9, 5];
const max1: number = Math.max(...numbers1);
console.log(max1);








const str2: string = "hello world";
const result2: string = str2.split(' ').map((w: string) => w[0].toUpperCase() + w.slice(1)).join(' ');
console.log(result2);







const arr3: number[] = [1, 2, 3, 4, 5, 6];
const evens3: number[] = arr3.filter((n: number) => n % 2 === 0);
console.log(evens3);







const items4: string[] = ['apple', 'banana', 'apple'];
const freq4: Record<string, number> = {};
items4.forEach(item => freq4[item] = (freq4[item] || 0) + 1);
console.log(freq4);



const str5: string = "madam";
const isPalindrome5: boolean = str5 === str5.split('').reverse().join('');
console.log(isPalindrome5);



const arr6: number[] = [1, 2, 2, 3, 4, 4];
const unique6: number[] = [...new Set(arr6)];
console.log(unique6);



const a7: { x: number } = { x: 1 };
const b7: { y: number } = { y: 2 };
const merged7: { x: number; y: number } = { ...a7, ...b7 };
console.log(merged7);



const sentence8: string = "Hello World";
const reversed8: string = sentence8.split(' ').reverse().join(' ');
console.log(reversed8);


function factorial9(n: number): number {
  return n <= 1 ? 1 : n * factorial9(n - 1);
}
console.log(factorial9(5));



const a10: number[] = [1, 2, 3];
const b10: number[] = [2, 3, 4];
const intersection10: number[] = a10.filter(value => b10.includes(value));
console.log(intersection10);
