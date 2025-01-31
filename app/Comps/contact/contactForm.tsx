"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/x/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/x/components/ui/form"
import { Input } from "@/x/components/ui/input"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/x/components/ui/select"
import { Textarea } from "@/x/components/ui/textarea"



const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    countryCode: z.string(),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

export default function ContactForm() {
    {/*Секция с формой*/}
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            
            firstName: "",
            lastName: "",
            email: "",
            countryCode: "US",
            phone: "",
            message: "",
        },
    })
    {/*Функция для отправки формы*/}
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        // Handle form submission
    }
    {/*Секция с формой*/}
    return (
        <main className="container mx-auto px-4 py-16 max-w-7xl">
            {/*Секция с формой*/}
            <Form {...form}>
                {/*Секция с формой*/}
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <FormField

                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="First Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Last Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid grid-cols-[100px_1fr] gap-4">
                        <FormField
                            control={form.control}
                            name="countryCode"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Code</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Country" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="US">US</SelectItem>
                                            <SelectItem value="UK">UK</SelectItem>
                                            <SelectItem value="CA">CA</SelectItem>
                                            <SelectItem value="AU">AU</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Phone Number" type="tel" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Your Message" className="min-h-[120px]" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full sm:w-auto bg-[#2B3B85] hover:bg-[#1e2a5f]">
                        Send Message
                    </Button>
                </form>
            </Form>
        </main>
    )
}

