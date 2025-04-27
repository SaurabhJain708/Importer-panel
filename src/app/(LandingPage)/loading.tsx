// app/loading.tsx (or wherever you want it)
"use client";

import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
    </div>
  );
}
