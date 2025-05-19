import { UUID } from "@interfaces/customer";

export interface Honorarios {
    id?: UUID;
    debe?: number;
    valor_a_cobrar?: number;
    fecha_creacion?: string;
    created_at?: string;
    updated_at?: string | null;
  }