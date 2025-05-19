import { UUID } from "@interfaces/customer";
import { InfoBill } from "@interfaces/infoBill";
import { Process } from "@interfaces/process";

export interface Bill {
    id?: UUID;
    id_process: Process;
    id_info_bill: InfoBill;
    limit_to_paiment?: string;
    total_paiment?: number;
    observations?: string;
    created_at?: string;
    updated_at?: string | null;
  }
  