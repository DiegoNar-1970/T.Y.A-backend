import { UUID } from "./Customer";
import { Employee } from "./Employee";
import { Process } from "./Process";

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