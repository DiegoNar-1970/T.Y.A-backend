import { UUID } from "./Customer";
import { Paiment } from "./Paiment";

export interface InfoBill {
    id?: UUID;
    paiment?: [Paiment] ;
    id_honorarios?: UUID;
    debe?: number;
    observations?: string;
    created_at?: string;
    updated_at?: string | null;
  }