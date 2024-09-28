"use client"
import CardWrapper from './card_wrapper'
import { Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage } from '@/components/ui/form'
import { LoginSchema } from '@/schema/LoginSchema';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Input } from '@/components/ui/input'; 
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '@/api/authApi';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signInMutation } = useAuth()
    const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit =(data: z.infer<typeof LoginSchema>) => {
    console.log(data);
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    signInMutation.mutate({ username: email, password })
  }


  return (
    <CardWrapper
      label="Login to your account"
      title="Login"
      backButtonHref="/register"
      backButtonLabel="Don't have an account? Register here" 
    >
      <Form {...form}>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
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
              name="password"
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
          <Button type="submit" className="w-full" >
              Login
          </Button>
        </form>
      </Form>
    </CardWrapper>  
  )
}

export default LoginForm
