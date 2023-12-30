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
    locatie: string;
    startCompetitie: string;
    sfarsitCompetitie: string;
    startInscrieri: string;
    sfarsitInscrieri: string;
    categorii: Categorie[];
    banner?:string
  };