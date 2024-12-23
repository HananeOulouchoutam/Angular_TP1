import { Student } from "./Student";

export interface Establishment {
    id: number;
    name: string;
    address: string;
    students?: Student[];  
}
  