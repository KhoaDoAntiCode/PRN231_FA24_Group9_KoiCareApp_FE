// "use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { AxiosError } from "axios"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"

import {
  RegisterResponseType,
  RegisterSchema,
  RegisterType,
} from "@/schema/auth.schema"

import axiosClient from '@/config/axios';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import dog from '../../../assets/images/dog.jpg'

export default function RegisterPage() {
    const navigate = useNavigate()
    const form = useForm<RegisterType>({
      resolver: zodResolver(RegisterSchema),
      defaultValues: {
        emailAddress: "",
        passwordHash: "",
        fullName: "",
        phoneNumber: ""
      },
    })
  
    async function onSubmit(values: RegisterType) {
      try {
        const { data } = await  axiosClient.post<RegisterResponseType>(
          "/api/Authentication/RegisterAnAccount",
          values
        )
        
        toast.success("Success Registered", {
          description: data.message,
        })
        form.reset()
        return navigate("/login")
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMessage =
            error.response?.data?.message ?? "An error occurred while signing in."
          toast.error(errorMessage)
        } else {
          toast.error("An unexpected error occurred while signing in.")
        }
      }
    }
    return (
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-28 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
                alt=""
                src={dog} 
                className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
  
            <div className="hidden lg:relative lg:block lg:p-12">
              <h2 className="ml-4 mt-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to PAWSITIVE
              </h2>
  
              <p className="ml-4 mt-4 leading-relaxed text-white/90">
                Best pet adoption app in the world.
              </p>
            </div>
          </section>
  
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to PAWSITIVE
                </h1>
  
                <p className="mt-4 leading-relaxed text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>
  
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="mt-8 grid grid-cols-6 gap-6"
                >
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                    Register
                  </h1>
                  <div className="col-span-6 space-y-2">
                    <FormField
                      control={form.control}
                      name="emailAddress"
                      render={({ field }) => (
                        <FormItem>
                          <Label>EmailAddress</Label>
                          <FormControl>
                            <Input placeholder="khoadoan@gmail.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <div className="col-span-6 space-y-2">
                    <FormField
                      control={form.control}
                      name="passwordHash"
                      render={({ field }) => (
                        <FormItem>
                          <Label>Password</Label>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  </div>
                  <div className="col-span-6 space-y-2">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <Label>fullName</Label>
                          <FormControl>
                            <Input placeholder="Do Khoa" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-6 space-y-2">
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <Label>phoneNumber</Label>
                          <FormControl>
                            <Input placeholder="03863728368" type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <Button type="submit" className="w-full">
                      Register
                    </Button>
                  </div>
                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4 mx-auto">
                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Already have an account?
                      <Button className="ml-2">
                        <Link
                            to="/login"
                            className="text-white underline hover:text-red-700 hover:font-normal"
                          >
                              Login
                          </Link>
                      </Button>
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </main>
        </div>
      </section>
    )
  }