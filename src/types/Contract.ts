import { UUID } from "./customer";
import { Employee } from "./employee";
import { InfoContract } from "./infoContract";

export interface Contract {
    id?: UUID;
    id_info_contract: UUID;
    id_employee?: UUID;
    num_contract: string;
    observation?: string;
    signed?:boolean;
    path?: string;
    created_at?: string;
    updated_at?: string | null;
  }
  export interface ContractJson {
    id?: UUID;
    id_info_contract: InfoContract;
    id_employee?: Employee;
    num_contract: string;
    observation?: string;
    signed?:boolean;
    path?: string;
    created_at?: string;
    updated_at?: string | null;
  }