import { UUID } from "@interfaces/customer";

export interface AccusedDTO {
    name: string;
    document: string;
    type_of_doc: string;
  }
  export interface Accused {
    id?: UUID;
    name: string;
    document: string;
    type_of_doc: string;
    created_at?: string;
    updated_at?: string | null;
  }
  