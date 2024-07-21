"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="">
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <Label htmlFor="phone">Phone</Label>
          <Input
            type="tel"
            id="phone"
            placeholder="Enter your phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            id="subject"
            placeholder="Enter your subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="mt-8 flex justify-end">
          <Button
            variant={"outline"}
            className="border-primary text-black hover:bg-primary hover:text-white bg-white"
          >
            Send
          </Button>
        </div>
      </form>
    </section>
  );
}
