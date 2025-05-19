import { UUID } from "./customer";
import { Paiment } from "./paiment";

export interface InfoBill {
    id?: UUID;
    paiment?: [Paiment] ;
    id_honorarios?: UUID;
    debe?: number;
    observations?: string;
    created_at?: string;
    updated_at?: string | null;
  }