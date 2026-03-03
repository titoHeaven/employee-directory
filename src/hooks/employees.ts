import { useEmployees as useEmployeesQuery } from "#/queries/employees";

export function useEmployees() {
  return useEmployeesQuery();
}
