import { UUID } from "@interfaces/customer";

export interface Employee {
    id?: UUID;
    name: string;
    document: string;
    phone?: string;
    created_at?: string;
    updated_at?: string | null;
  }