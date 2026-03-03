type EmployeeStatus = "active" | "inactive" | "on_leave";

export type Employees = {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
  phone: number;
  avatarUrl: string;
  status: EmployeeStatus;
};
