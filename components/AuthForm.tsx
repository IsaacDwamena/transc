"use client";
import { AuthFormProps } from "@/types";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { AuthFormSchema } from "@/lib/utils";
import CustomInput from "./CustomInput";

const AuthForm = ({ type }: AuthFormProps) => {
  const form = useForm<z.infer<typeof AuthFormSchema>>({
    resolver: zodResolver(AuthFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  return (
    <div>
      {type === "sign-in" ? (
        <h2 className="font-bold text-2xl">Sign into your account</h2>
      ) : (
        <h2 className="font-bold text-lg">Create your account</h2>
      )}

      <Form {...form}>
        <form className="space-y-8">
          {type === "sign-up" && (
            <>
              <CustomInput
                control={form.control}
                name="name"
                label="Name"
                placeholder="Enter your name"
              />
            </>
          )}
          <CustomInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <CustomInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
          />

          <Button type="submit" className="bg-primary text-white">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AuthForm;
