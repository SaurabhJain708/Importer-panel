import { z } from "zod";

export const applicationFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  position: z.string().min(1, "Position is required"),
  resume: z
    .instanceof(File)
    .refine((file) => file !== null, "Resume is required")
    .refine(
      (file) => {
        if (!file) return false;
        const acceptedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        return acceptedTypes.includes(file.type);
      },
      "Only PDF, DOC, or DOCX files are accepted"
    )
    .nullable()
    .optional(),
  portfolio: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  coverLetter: z.string().optional(),
  source: z.string().min(1, "Please select how you heard about us"),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "You must agree to the privacy policy"),
});

export type ApplicationFormValues = z.infer<typeof applicationFormSchema>;