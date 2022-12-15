export enum WantedType {
  'bandit',
  'civilian',
}

export interface IWantedObj {
  name: string;
  price: number;
  type: WantedType;
  bloodZoneHeight: number;
  bloodZoneWidht: number;
  bloodZoneTop: number;
  bloodZoneLeft: number;
}

export const targets: IWantedObj[] = [
  {
    name: 'cowboy',
    price: 75,
    type: WantedType.bandit,
    bloodZoneTop: 0.8,
    bloodZoneLeft: 2,
    bloodZoneWidht: 2.2,
    bloodZoneHeight: 4,
  },
  {
    name: 'gunpig',
    price: 100,
    type: WantedType.bandit,
    bloodZoneTop: 1.2,
    bloodZoneLeft: 1.1,
    bloodZoneWidht: 2.2,
    bloodZoneHeight: 3,
  },
  {
    name: 'indian',
    price: 50,
    type: WantedType.bandit,
    bloodZoneTop: 1,
    bloodZoneLeft: 1.5,
    bloodZoneWidht: 2.5,
    bloodZoneHeight: 3.5,
  },
  {
    name: 'pig',
    price: -75,
    type: WantedType.civilian,
    bloodZoneTop: 1.2,
    bloodZoneLeft: 1.6,
    bloodZoneWidht: 2,
    bloodZoneHeight: 3,
  },
  {
    name: 'stich',
    price: -50,
    type: WantedType.civilian,
    bloodZoneTop: 0.7,
    bloodZoneLeft: 1.5,
    bloodZoneWidht: 2.5,
    bloodZoneHeight: 4,
  },
];
