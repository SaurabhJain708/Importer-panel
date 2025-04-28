"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the validation schema using Zod
const schema = z.object({
  name: z.string().min(2, "Name is required"),
  description: z.string().min(5, "Description is required"),
  coverImage: z
    .any()
    .refine((files) => files?.length === 1 && files[0] instanceof File, {
      message: "Cover image is required",
    }),
  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .positive("Price must be positive")
    .optional(),
  stock: z
    .number({ invalid_type_error: "Stock must be a number" })
    .int("Stock must be an integer")
    .min(0, "Stock cannot be negative")
    .optional(),
  isInStock: z.boolean(), // Checkbox (true/false)
  category: z.string().min(1, "Category is required"), // Category ID as string
});

// Infer TypeScript type from Zod schema
type FormData = z.infer<typeof schema>;

export default function ItemForm() {
  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    const formData = new FormData();

    // Append form fields
    formData.append("name", data.name);
    formData.append("description", data.description);
    if (data.price !== undefined) formData.append("price", String(data.price));
    if (data.stock !== undefined) formData.append("stock", String(data.stock));
    formData.append("isInStock", String(data.isInStock));
    formData.append("category", data.category);
    formData.append("coverImage", data.coverImage[0]); // Attach uploaded file

    try {
      const response = await fetch("/api/items", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create item");
      }

      alert("Item created successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while creating the item.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name input */}
      <div>
        <label>Name:</label>
        <input type="text" {...register("name")} />
        {errors.name?.message && <p>{errors.name.message}</p>}
      </div>

      {/* Description input */}
      <div>
        <label>Description:</label>
        <textarea {...register("description")} />
        {errors.description?.message && <p>{errors.description.message}</p>}
      </div>

      {/* Cover image upload */}
      <div>
        <label>Cover Image:</label>
        <input type="file" {...register("coverImage")} />
        {errors.coverImage?.message && <p>{errors.coverImage?.message as string}</p>}
      </div>

      {/* Price input */}
      <div>
        <label>Price:</label>
        <input type="number" step="0.01" {...register("price", { valueAsNumber: true })} />
        {errors.price?.message && <p>{errors.price.message}</p>}
      </div>

      {/* Stock input */}
      <div>
        <label>Stock:</label>
        <input type="number" {...register("stock", { valueAsNumber: true })} />
        {errors.stock?.message && <p>{errors.stock.message}</p>}
      </div>

      {/* Is In Stock checkbox */}
      <div>
        <label>
          <input type="checkbox" {...register("isInStock")} />
          In Stock
        </label>
        {errors.isInStock?.message && <p>{errors.isInStock.message}</p>}
      </div>

      {/* Category input */}
      <div>
        <label>Category ID:</label>
        <input type="text" {...register("category")} />
        {errors.category?.message && <p>{errors.category.message}</p>}
      </div>

      {/* Submit button */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Create Item"}
      </button>
    </form>
  );
}
