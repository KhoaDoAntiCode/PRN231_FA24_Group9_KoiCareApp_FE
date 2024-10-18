"use client"
import CardWrapper from './card_wrapper';
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axiosClient from '@/lib/axios/axios';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  LoginResponseType,
  LoginSchema,
  LoginType,
} from "@/schema/auth.schema";

import { useAuthContext } from "@/context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useAuthContext();
  const form = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      emailAddress: "",
      passwordHash: "",
    },
  });

  async function onSubmit(values: LoginType) {
    try {
      const { data } = await axiosClient.post<LoginResponseType>(
        "/api/Authentication/LoginWithEmailAndPasswordJWT",
        values
      );
      toast.success("Success", {
        description: data.message,
      });
      form.reset();
      login(data.response);
      return navigate("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message ?? "An error occurred while signing in.";
        toast.error(errorMessage);
      } else {
        toast.error("An unexpected error occurred while signing in.");
      }
    }
  }

  return (
    <CardWrapper
      label="Login to your account"
      title="Login"
      backButtonHref="/register"
      backButtonLabel="Don't have an account? Register here"
    >
      {/* Conditionally render the login form or logout button based on authentication state */}
      {!isAuthenticated ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="johndoe@gmail.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passwordHash"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      ) : (
        <div className="space-y-4">
          <p>You are already logged in.</p>
          <Button
            className="w-full"
            onClick={() => {
              logout();
              toast.success("Logged out successfully");
              navigate("/");
            }}
          >
            Logout
          </Button>
        </div>
      )}
    </CardWrapper>
  );
};

export default LoginForm;
