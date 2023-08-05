import { createComponent } from "./transformations/createComponents"

const code = `
const add = (a: number, b: number): number => a + b;
const result = add(3, 5);
`

console.log(createComponent(code))