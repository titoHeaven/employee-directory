import { Card, CardContent, CardTitle } from "../ui/card";
import { useForm } from "@tanstack/react-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function SignInForm() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      alert(`Email: ${value.email}, Password: ${value.password}`);
    },
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardTitle className="text-center font-bold">Sign In!</CardTitle>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
            className="space-y-2"
          >
            <form.Field
              name="email"
              children={(field) => (
                <Input
                  type="email"
                  placeholder="Email"
                  value={field.value}
                  onChange={(e) => field.setValue(e.target.value)}
                />
              )}
            />
            <form.Field
              name="password"
              children={(field) => (
                <Input
                  type="password"
                  placeholder="Password"
                  value={field.value}
                  onChange={(e) => field.setValue(e.target.value)}
                />
              )}
            />
            <form.Subscribe
              children={(state) => (
                <Button
                  className="w-full cursor-pointer hover:bg-white hover:text-black border mt-3"
                  type="submit"
                  disabled={state.isSubmitting}
                >
                  {state.isSubmitting ? "Submitting..." : "Sign In"}
                </Button>
              )}
            />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
