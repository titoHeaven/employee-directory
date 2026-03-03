import { StatusBadge } from "#/components/status-badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#/components/ui/card";
import { useEmployees } from "#/hooks/employees";
import { Badge } from "lucide-react";

export function EmployeeCard() {
  const { data, error, isLoading } = useEmployees();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading employees: {error.message}</div>;

  return (
    <>
      <div className="container mx-auto w-full p-7">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {data.map((employee) => (
            <Card
              key={employee.id}
              className="h-full hover:border-white/50 duration-300 cursor-pointer"
            >
              <CardHeader>
                <div className="flex justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-2xl truncate">
                      {employee.name}
                    </CardTitle>
                    <CardDescription className="text-base truncate">
                      {employee.position}
                    </CardDescription>
                    <StatusBadge status={employee.status} />
                  </div>
                  <img
                    src="/images/default_image.jpg"
                    alt={employee.name}
                    className="sm:w-14 sm:h-14 md:w-30 md:h-30 rounded-full object-cover ring-2 ring-border shrink-0"
                  />
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground">
                    Email Address
                  </h3>
                  <p>{employee.email}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground">
                    Phone Number
                  </h3>
                  <p>{employee.phone}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-muted-foreground">
                    Department
                  </h3>
                  <p>{employee.department}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
