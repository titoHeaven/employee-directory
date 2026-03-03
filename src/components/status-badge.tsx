import { Badge } from "@/components/ui/badge";

type EmployeeStatus = "active" | "on_leave" | "inactive";

export function StatusBadge({ status }: { status: EmployeeStatus }) {
  const statusMap = {
    active: {
      label: "Active",
      className: "bg-green-500 hover:bg-green-500 text-white",
    },
    on_leave: {
      label: "On Leave",
      className: "bg-yellow-500 hover:bg-yellow-500 text-white",
    },
    inactive: {
      label: "Inactive",
      className: "bg-gray-500 hover:bg-gray-500 text-white",
    },
  };

  const current = statusMap[status];

  return <Badge className={current.className}>{current.label}</Badge>;
}
