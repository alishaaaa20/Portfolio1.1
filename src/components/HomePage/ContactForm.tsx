import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function ContactForm() {
  return (
    <section className="">
      <form>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="mt-4">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="mt-4">
          <Label htmlFor="phone">Phone</Label>
          <Input type="tel" id="phone" placeholder="Enter your phone" />
        </div>
        <div className="mt-4">
          <Label htmlFor="subject">Subject</Label>
          <Input type="text" id="subject" placeholder="Enter your subject" />
        </div>
        <div className="mt-4">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Enter your message" />
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
