// "use client";

// import CardWrapper from "./card_wrapper";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { RegisterSchema } from "@/schema/RegisterSchema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { Input } from "../../../components/ui/input";
// import { Button } from "../../../components/ui/button";
// import { z } from "zod";
// import { useState } from "react";
// import { useAuth } from '@/hooks/useAuth';

// type SignUpForm = z.infer<typeof RegisterSchema>

// const RegisterForm = () => {
//   const [loading, setLoading] = useState(false);
//   const { signUpMutation } = useAuth();
  
//   const form = useForm({
//     resolver: zodResolver(RegisterSchema),
//     defaultValues: {
//       emailAddress: "",
//       passwordHash: "",
//       fullName: "",
//       phoneNumber: ""
//     },
//   });

//   // const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
//   //   setLoading(true);
//   //   console.log(data);
//   // };

//   const onSubmit = (data: SignUpForm) => {
//     }
//     signUpMutation.mutate(inputData);
//   }
  
//   return (
//     <CardWrapper
//       label="Create an account"
//       title="Register"
//       backButtonHref="/login"
//       backButtonLabel="Already have an account? Login here."
//     >
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           <div className="space-y-4">
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       type="email"
//                       placeholder="johndoe@gmail.com"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Name</FormLabel>
//                   <FormControl>
//                     <Input {...field} placeholder="John Doe" />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input {...field} type="password" placeholder="******" />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="confirmPassword"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Confirm Password</FormLabel>
//                   <FormControl>
//                     <Input {...field} type="password" placeholder="******" />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <Button type="submit" className="w-full" >
//             {loading ? "Loading..." : "Register"}
//           </Button>
//         </form>
//       </Form>
//     </CardWrapper>
//   );
// };

// export default RegisterForm;