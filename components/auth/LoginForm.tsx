"use client";

import React, { useState, useTransition } from "react";
import CardWrapper from "./card-wrapper";
import { FaUnlockAlt } from "react-icons/fa";
import ErrorForm from "../utils/ErrorForm";
import SuccessForm from "../utils/SuccessForm";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/app/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { login } from "@/action/login";

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    console.log(values);

    setError("");
    setSuccess("");

    startTransition(() => {
      login(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <CardWrapper
      headerLabel="Welcome"
      backButtonLabel="Dont have an Account ?"
      backButtonHref="/auth/register"
      ShowSocial
      headerTitle="Auth"
      icon={FaUnlockAlt}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid space-y-4">
          <div className="">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        type="email"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your password"
                        type="password"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <ErrorForm message={error} />
            <SuccessForm message={success} />

            <Button type="submit" className=" w-full mt-2" disabled={isPending}>
              Login
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
