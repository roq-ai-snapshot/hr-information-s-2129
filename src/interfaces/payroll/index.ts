import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface PayrollInterface {
  id?: string;
  amount: number;
  payment_date: any;
  payment_method: string;
  status: string;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface PayrollGetQueryInterface extends GetQueryInterface {
  id?: string;
  payment_method?: string;
  status?: string;
  employee_id?: string;
}
