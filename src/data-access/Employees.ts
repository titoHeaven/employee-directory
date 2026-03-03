import type { Employees } from "#/types/Employees";

const API_URL = "https://69a62a06feb94223b31c4d89.mockapi.io/";

export async function fetchEmployees(): Promise<Employees[]> {
  const url = `${API_URL}employees`;
  console.log("Fetching employees from:", url);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch employees: ${response.status} ${response.statusText}`,
    );
  }

  const data = await response.json();
  return data;
}
