"use client";

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  description: z.string().optional(),
  coverImage: z
    .any()
    .refine((files) => files?.length === 1 && files[0] instanceof File, {
      message: 'Cover image is required',
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
    formData.append('name', data.name);
    if (data.description) formData.append('description', data.description);
    formData.append('coverImage', data.coverImage[0]); // ✅ important

    try {
      const response = await fetch('/api/categories', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to create category');
      }

      alert('Category created successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred while creating the category.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input type="text" {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Description:</label>
        <textarea {...register('description')} />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <div>
        <label>Cover Image:</label>
        <input type="file" {...register('coverImage')} />
        {errors.coverImage?.message && <p>{errors.coverImage?.message as string}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Create Category'}
      </button>
    </form>
  );
}
