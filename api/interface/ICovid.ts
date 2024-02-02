export interface ICovidProps {
  state: string;
  count: number;
  coordinate: [number, number];
}

export interface ICoordinatesProps {
  SP?: [number, number];
  MG?: [number, number];
  RS?: [number, number];
  PR?: [number, number];
  RJ?: [number, number];
  SC?: [number, number];
  GO?: [number, number];
  BA?: [number, number];
  CE?: [number, number];
  ES?: [number, number];
  PE?: [number, number];
  DF?: [number, number];
  MT?: [number, number];
  PA?: [number, number];
  PB?: [number, number];
  AM?: [number, number];
  MS?: [number, number];
  RN?: [number, number];
  MA?: [number, number];
  RO?: [number, number];
  PI?: [number, number];
  TO?: [number, number];
  SE?: [number, number];
  AL?: [number, number];
  AP?: [number, number];
  RR?: [number, number];
  AC?: [number, number];
  [key: string]: [number, number] | undefined;
}