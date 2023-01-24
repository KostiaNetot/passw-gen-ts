import { CHARACTERS } from "../constants";

export const generateCheckboxGroupData = (): Record<string, boolean> => {
  const data: Record<string, boolean> = {}; 

  Object.keys(CHARACTERS).forEach((char, i) => {
    data[char] = i === 0;
  });
  return data;
}