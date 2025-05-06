import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  telephone: z.string().min(5, { message: "Please enter a valid telephone number." }),
  fax: z.string().optional(),
});

type ContactFormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      telephone: "",
      fax: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    // Here you would typically send the form data to your backend
    alert("Form submitted successfully!");
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[32px]">Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} className="text-[24px] p-3 h-auto" />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[32px]">Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} className="text-[24px] p-3 h-auto" />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="telephone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[32px]">Telephone</FormLabel>
              <FormControl>
                <Input placeholder="Your telephone" {...field} className="text-[24px] p-3 h-auto" />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="fax"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[32px]">Fax</FormLabel>
              <FormControl>
                <Input placeholder="Your fax (optional)" {...field} className="text-[24px] p-3 h-auto" />
              </FormControl>
            </FormItem>
          )}
        />
        
        <Button type="submit" className="mt-6 text-[24px] py-6 px-8 bg-black text-white hover:bg-gray-800">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;