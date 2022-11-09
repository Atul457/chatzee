// Imports
import { IProfileImage } from "./types";
import colorsArray from "./colorsArr.json";

// Functions

const randomColor = (index?: number) => {
  const colors = colorsArray;
  const randomNum: number = index ?? Math.floor(Math.random() * 140);
  return colors[randomNum];
};

function getImage(name: string, index?: number): IProfileImage {
  let tempName: string = name
    .split(" ")
    .slice(0, 2)
    .reduce((acc, curr) => {
      return acc + curr.charAt(0).toUpperCase() ?? "";
    }, "");

  const color: string = randomColor((index ?? 0) + 15 ?? 15);
  const bgColor: string = `${color}4D`;

  return {
    name: tempName,
    color,
    bgColor,
  };
}

export { randomColor, getImage };
