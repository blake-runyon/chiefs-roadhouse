// export enum Formatter {
//   STRING = 1,
//   NUMBER = 2,
//   BOOLEAN = 3,
//   MONEY = 4
// }

import { Formatter } from "../types/common";

export function formatData(data: any, formatter: Formatter) {
  if(formatter === Formatter.BOOLEAN) {
    return formatterBoolean(data);
  } else if(formatter === Formatter.NUMBER) {
    return parseInt(data);
  }

  return data;
}

export function formatterBoolean(data: boolean) {
  if(data == true) {
    return "Yes"
  } else if(data == false) {
    return "No"
  }

  return "Error in Formatter Boolean function."
}