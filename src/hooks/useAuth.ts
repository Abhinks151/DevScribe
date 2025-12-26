import { useContext } from "react";
import { AuthContext } from "../context/context";

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};

// 11
// oneone
// 123
// onetwothree

// Review code test

// const nums: Record<string, string> = {
//   "0": "zero",
//   "1": "one",
//   "2": "two",
//   "3": "three",
//   "4": "five",
//   "5": "five",
//   "6": "six",
//   "7": "seven",
//   "8": "eight",
//   "9": "nine",
// };

// const ConvetNumToLiteral = (num: number) => {
//   const s = String(num).split("");
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     result += nums[s[i]] ?? "";
//   }
//   return result;
// };

// // console.log(useConvetNumToLiteral(11));

// ConvetNumToLiteral(11);


