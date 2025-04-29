"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  description: z.string().optional(),
  coverImage: z
    .any()
    .refine((files) => files?.length === 1 && files[0] instanceof File, {
      message: "Cover image is required",
    }),
});

type FormData = z.infer<typeof schema>;

export default function CategoryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    if (data.description) formData.append("description", data.description);
    formData.append("file", data.coverImage[0]); // ✅ important

    try {
      const response = await fetch("/api/admin/add-category", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create category");
      }

      alert("Category created successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while creating the category.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-center mb-6">
        Create New Category
      </h2>

      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-lg font-medium text-gray-700"
        >
          Name:
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-lg font-medium text-gray-700"
        >
          Description:
        </label>
        <textarea
          id="description"
          {...register("description")}
          className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="coverImage"
          className="block text-lg font-medium text-gray-700"
        >
          Cover Image:
        </label>
        <input
          id="coverImage"
          type="file"
          {...register("coverImage")}
          className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.coverImage?.message && (
          <p className="text-red-500 text-sm mt-1">
            {errors.coverImage?.message as string}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
      >
        {isSubmitting ? "Submitting..." : "Create Category"}
      </button>
    </form>
  );
}
