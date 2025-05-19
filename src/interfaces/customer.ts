export type UUID = string;

export interface Customer {
  id?: UUID;
  name: string;
  document: string;
  type_of_doc: string;
  phone?: string;
  email?: string;
  created_at?: string;
  updated_at?: string | null;
  [key: string]: string | UUID | undefined | null; 
}
export interface CustomerDTO {
  id?: UUID;
  name: string;
  document: string;
  type_of_doc?: string;
  phone?: string;
  email?: string;
  created_at?: string;
  updated_at?: string | null;
  [key: string]: string | UUID | undefined | null; 
}
