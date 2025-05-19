import { UUID } from "./customer";
import { PaimentTo } from "./paimentTo";
import { TypeBank } from "./typeBank";

export interface Paiment {
    id?: UUID;
    id_tipo_banco?: TypeBank;
    id_paiment_to?: PaimentTo;
    value_paiment?: number;
    date_paiment?: string;
    created_at?: string;
    updated_at?: string | null;
  }