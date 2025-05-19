import { UUID } from "@interfaces/customer";
import { Contract } from "./contract";

export interface Process {
    id?: UUID;
    id_contract: Contract;
    state?: string;
    acceptance_date?: string;
    ente?: string;
    date_radicato?: string;
    proccess_state?: string;
    date_fuga?: string;
    obsevation?: string;
    created_at?: string;
    updated_at?: string | null;
  }