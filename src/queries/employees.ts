import { fetchEmployees } from "#/data-access/Employees";
import { useQuery } from "@tanstack/react-query";

export function useEmployees() {
  return useQuery({
    queryKey: ["employees"],
    queryFn: () => fetchEmployees(),
  });
}
