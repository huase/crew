type AbsoluteOrder = 1 | 2 | 3 | 4 | 5 | 10;
type RelativeOrder = 1 | 2 | 3 | 4;
type RoundOrder = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface TaskToken {
  absoluteOrder?: AbsoluteOrder;
  relativeOrder?: RelativeOrder;
  roundOrder?: RoundOrder;
}
