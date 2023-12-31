export type Proba = {
    nume: string;
    serii: boolean;
    finala: boolean;
    atletiPerSerie: number, 
    atletiFinala : number
  };
  
  export type Categorie = {
    nume: string;
    probe: Proba[];
  };
  
  export type Rules = {
    nume: string;
    locatie:string,
    lat: number,
    lng:number,
    startCompetitie: string;
    sfarsitCompetitie: string;
    startInscrieri: string;
    sfarsitInscrieri: string;
    categorii: Categorie[];
    banner?:string;
    _id : string,
    activaFlag : boolean,
    slug : string,
    inscrieriFlag: boolean
  };

  export type ResponseCompetitions = {
    status: "sucess" | "fail";
    data: {
      competitions: Rules[];
    };
    length: number;
  };

  export type ResponseCompetition = {
    status : "sucess" | "fail",
    data: {
      competition : Rules
    }
  }