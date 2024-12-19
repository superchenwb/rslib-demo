import { useTest2 } from "./hook";
import { useTest } from "../hook";

export const test2 = () => {
  useTest();
  useTest2();
};
