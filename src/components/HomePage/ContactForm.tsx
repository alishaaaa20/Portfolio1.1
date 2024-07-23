"use client";
import React, { useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Contact, ContactSchema } from "@/schemas/contact-schema";
import { Loader2 } from "lucide-react";
import { Label } from "../ui/label";

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Contact>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: Contact) => {
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      reset();
      toast({
        title: "Thank You for contacting us. 🎉",
        description:
          "We've got your inquiry and are on it! Expect a response soon. Your thoughts matter to us! 🤝",
        variant: "success",
      });
    } else {
      toast({
        title: "Sorry something went wrong. 🚫",
        description:
          "Looks like there's a small glitch in the system. Please verify your information and resend your message. We're working to fix this issue! 🛠️",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="px-8">
      <form
        ref={formRef}
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="rounded-xl bg-white md:w-full"
      >
        <div className="rounded-xl border p-4">
          <div className="flex flex-col gap-4 p-0">
            <div className="flex-1">
              <div className="flex flex-col gap-3">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  className="focus:ring-none bg-gray-50 font-normal text-neutral-800 focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <p className="text-xs text-red-500">
                {errors.fullName?.message || ""}
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <div className="flex-1 flex-col gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    {...register("email")}
                    className="focus:ring-none bg-gray-50 font-normal text-neutral-800 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
                <p className="text-xs text-red-500">
                  {errors.email?.message || ""}
                </p>
              </div>
              <div className="flex-1">
                <div className="flex-1 flex-col gap-3">
                  <Label htmlFor="contact">Phone No.</Label>
                  <Input
                    id="contact"
                    {...register("contact")}
                    className="focus:ring-none bg-gray-50 font-normal text-neutral-800 focus:outline-none"
                    placeholder="Eg: 98xxxxxxxx"
                  />
                </div>
                <p className="text-xs text-red-500">
                  {errors.contact?.message || ""}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    {...register("subject")}
                    className="focus:ring-none bg-gray-50 font-normal text-neutral-800 focus:outline-none"
                    placeholder="Enter your subject"
                  />
                </div>
                <p className="text-xs text-red-500">
                  {errors.subject?.message || ""}
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={5}
                  {...register("description")}
                  className="focus:ring-none bg-gray-50 font-normal text-neutral-800 focus:outline-none"
                  placeholder="Describe your enquiry here"
                />
              </div>
              <p className="text-xs text-red-500">
                {errors.description?.message || ""}
              </p>
            </div>
          </div>
          <div className="w-full py-3">
            <Button disabled={isSubmitting} className="w-full text-white">
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 size={20} className="animate-spin" />
                  Submitting
                </span>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
