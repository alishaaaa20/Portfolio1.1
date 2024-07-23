import { z } from "zod";

export const ContactSchema = z
  .object({
    fullName: z
      .string()
      .min(3, { message: "Full Name is required." })
      .max(50, { message: "Full Name cannot exceed 50 characters." }),
    email: z
      .string()
      .min(1, { message: "Email is required." })
      .email({ message: "Must be a valid email." }),
    contact: z
      .string()
      .min(7, { message: "Phone No. is required." })
      .max(14, { message: "Phone No. cannot be more than 14 characters." })
      .regex(/^[0-9]+$/, { message: "Phone No. must contain only digits." }),
    subject: z
      .string()
      .min(1, { message: "Subject is required." })
      .max(100, { message: "Subject cannot exceed 100 characters." }),
    description: z
      .string()
      .min(1, { message: "Description is required." })
      .max(500, { message: "Description cannot exceed 500 characters." }),
  })
  .refine((data) => data.fullName.trim().split(" ").length >= 2, {
    message: "Full Name must contain at least two words.",
    path: ["fullName"],
  });

export type Contact = z.infer<typeof ContactSchema>;
