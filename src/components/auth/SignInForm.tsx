import { Card, CardContent, CardTitle } from "../ui/card";
import { useForm } from "@tanstack/react-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  userFormSchema,
  emailSchema,
  passwordSchema,
  type UserFormSchema,
} from "../fn/userValidation";
import type { ZodType } from "node_modules/zod/v4/classic/external.d.cts";

function zodValidator(schema: ZodType) {
  return ({ value }: { value: unknown }) => {
    const result = schema.safeParse(value);
    return result.success ? undefined : result.error.issues[0].message;
  };
}

export function SignInForm() {
  const navigate = useNavigate();

  const form = useForm<UserFormSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: userFormSchema,
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted with values:", value);
      navigate({ to: "/dashboard" });
    },
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-98">
        <CardTitle className="text-center font-bold">
          Employee Directory
        </CardTitle>
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
              validators={{
                onChange: zodValidator(emailSchema),
                onBlur: zodValidator(emailSchema),
              }}
              children={(field) => (
                <>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors.map((error, i) => (
                    <p key={i} className="text-red-500 text-sm">
                      {error}
                    </p>
                  ))}
                </>
              )}
            />
            <form.Field
              name="password"
              validators={{
                onChange: zodValidator(passwordSchema),
                onBlur: zodValidator(passwordSchema),
              }}
              children={(field) => (
                <>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors.map((error, i) => (
                    <p key={i} className="text-red-500 text-sm">
                      {error}
                    </p>
                  ))}
                </>
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
