export type School = {
  id: number;
  rate20: string;
  rate19: string;
  rate18: string;
  rate17: string;
  score: string;
  school: string;
  adress: string;
  area: string;
  district: string;
  url: string;
  branches?: [
    {
      id: number;
      school: string;
      adress: string;
      area: string;
      district: string;
    }
  ];
};

export type Data = {
  schools: School[];
  columns: object[];
}

export type TableType = "mos" | "spb" | "ru";
