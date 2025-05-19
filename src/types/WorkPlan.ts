import { UUID } from "./customer";
import { Employee } from "./employee";
import { Process } from "./process";

export interface WorkPlan {
    id?: UUID;
    id_process: Process;
    employe?: Employee;
    process: string;
    date_compromiso?: string;
    obsevation?: string;
    created_at?: string;
    updated_at?: string | null;
  }