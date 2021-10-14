import { A } from "./types";

// 需要 types vite/client支持
import pngUrl from "./assets/logo.png";

// types vite/client支持
console.log(import.meta.hot);

// 不能加declare
const enum Num {
  First = 0,
  second = 1,
}

export const a: A = {
  name: "Jocky",
  age: Num.First,
};
