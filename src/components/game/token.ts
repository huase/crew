import { Round } from "./types";

type AbsoluteOrder = 1 | 2 | 3 | 4 | 5 | 10;
type RelativeOrder = 1 | 2 | 3 | 4;

export interface TaskToken {
  absoluteOrder?: AbsoluteOrder;
  relativeOrder?: RelativeOrder;
  roundOrder?: Round;
}
