export interface Id {
  id: number;
}

export interface Rect extends Id {
  type: "rect";
  width: number;
  height: number;
  filled: boolean;
}

export interface Circle extends Id {
  type: "circle";
  radius: number;
  filled: boolean;
}
