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
      message: "Cover image is required and must be a valid file",
    }),
  price: z
    .number({ invalid_type_error: "Price must be a valid number" })
    .positive("Price must be a positive number")
    .optional(),
  stock: z
    .number({ invalid_type_error: "Stock must be a valid number" })
    .int("Stock must be an integer")
    .min(0, "Stock cannot be negative")
    .optional(),
  isInStock: z.boolean(),
  category: z.string().min(1, "Category is required"),
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
    formData.append("name", data.name);
    formData.append("description", data.description);
    if (data.price !== undefined) formData.append("price", String(data.price));
    if (data.stock !== undefined) formData.append("stock", String(data.stock));
    formData.append("isInStock", String(data.isInStock));
    formData.append("category", data.category);
    formData.append("coverImage", data.coverImage[0]);

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
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Create Item</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name input */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium">Name</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Description input */}
        <div>
          <label htmlFor="description" className="block text-lg font-medium">Description</label>
          <textarea
            id="description"
            {...register("description")}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-invalid={errors.description ? "true" : "false"}
          />
          {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description.message}</p>}
        </div>

        {/* Cover image upload */}
        <div>
          <label htmlFor="coverImage" className="block text-lg font-medium">Cover Image</label>
          <input
            type="file"
            id="coverImage"
            {...register("coverImage")}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-invalid={errors.coverImage ? "true" : "false"}
          />
          {errors.coverImage && <p className="text-red-600 text-sm mt-1">{errors.coverImage?.message as string}</p>}
        </div>

        {/* Price input */}
        <div>
          <label htmlFor="price" className="block text-lg font-medium">Price</label>
          <input
            type="number"
            step="0.01"
            id="price"
            {...register("price", { valueAsNumber: true })}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-invalid={errors.price ? "true" : "false"}
          />
          {errors.price && <p className="text-red-600 text-sm mt-1">{errors.price.message}</p>}
        </div>

        {/* Stock input */}
        <div>
          <label htmlFor="stock" className="block text-lg font-medium">Stock</label>
          <input
            type="number"
            id="stock"
            {...register("stock", { valueAsNumber: true })}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-invalid={errors.stock ? "true" : "false"}
          />
          {errors.stock && <p className="text-red-600 text-sm mt-1">{errors.stock.message}</p>}
        </div>

        {/* Is In Stock checkbox */}
        <div>
          <label htmlFor="isInStock" className="text-lg font-medium flex items-center space-x-2">
            <input
              type="checkbox"
              id="isInStock"
              {...register("isInStock")}
              className="h-5 w-5"
              aria-invalid={errors.isInStock ? "true" : "false"}
            />
            <span>In Stock</span>
          </label>
          {errors.isInStock && <p className="text-red-600 text-sm mt-1">{errors.isInStock.message}</p>}
        </div>

        {/* Category input */}
        <div>
          <label htmlFor="category" className="block text-lg font-medium">Category ID</label>
          <input
            type="text"
            id="category"
            {...register("category")}
            className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-invalid={errors.category ? "true" : "false"}
          />
          {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category.message}</p>}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting..." : "Create Item"}
        </button>
      </form>
    </div>
  );
}
