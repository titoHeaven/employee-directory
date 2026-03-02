import { SignInForm } from "#/components/auth/SignInForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignInForm />;
}
