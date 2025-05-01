"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Phone number is required"),
  address: z.string().min(5, "Address is required"),
  country: z.string().min(2, "Country is required"),
  website: z.string().url("Invalid URL").or(z.literal("")).optional(),
  productsOrServices: z.string().min(5, "Please describe your offerings"),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      address: "",
      country: "",
      website: "",
      productsOrServices: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch("/api/user/send-contact-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
  
      // Optionally reset form or show a toast
      // reset();
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };
  

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="shadow-xl rounded-2xl border border-muted">
        <CardContent className="space-y-6 p-6">
          <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {[
              ["name", "Name"],
              ["companyName", "Company Name"],
              ["email", "Email"],
              ["phone", "Phone Number"],
              ["address", "Address"],
              ["country", "Country"],
              ["website", "Website (optional)"],
            ].map(([field, label]) => (
              <div key={field}>
                <Label htmlFor={field}>{label}</Label>
                <Input
                  id={field}
                  type="text"
                  {...register(field as keyof ContactFormValues)}
                />
                {errors[field as keyof ContactFormValues] && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors[field as keyof ContactFormValues]?.message}
                  </p>
                )}
              </div>
            ))}

            <div>
              <Label htmlFor="productsOrServices">Products or Services</Label>
              <Textarea
                id="productsOrServices"
                {...register("productsOrServices")}
                rows={3}
              />
              {errors.productsOrServices && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.productsOrServices.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Additional Message (optional)</Label>
              <Textarea id="message" {...register("message")} rows={3} />
            </div>

            <Button
              type="submit"
              className="w-full mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
