  import { Accused } from "./Acussed";
import { ContractType } from "./ContractType";
import { Customer, UUID } from "./Customer";
import { TypePaiment } from "./TypePaiment";

  export interface InfoContract {
      id?: UUID;
      id_customer?: UUID;
      id_accused?: UUID;
      id_type_pay?: UUID;
      id_type_contract?: UUID;
      num_radicado?: string;
      total_payment: number;
      porcentage_honorario?: number;
      created_at?: string;
      updated_at?: string | null;
    }
  export interface InfoContractJson {
    id?: UUID;
    id_customer?: [Customer];
    id_accused?: [Accused];
    id_type_pay?: TypePaiment;
    id_type_contract?: ContractType;
    num_radicado?: string;
    total_payment: number;
    porcentage_honorario?: number;
    iva?: number;
    created_at?: string;
    updated_at?: string | null;
  }