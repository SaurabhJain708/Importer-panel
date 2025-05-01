"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import JobCard from "@/components/careers/JobCard";
import { jobListings } from "@/lib/careers/data";

const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Get unique departments for tabs
  const departments = ["all", ...new Set(jobListings.map(job => job.department.toLowerCase()))];

  // Filter jobs based on search term and category
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || 
                            job.department.toLowerCase() === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="job-listings" className="w-full mb-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h3 className="text-2xl font-semibold">Open Positions</h3>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search positions..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveCategory} className="w-full">
        <TabsList className="mb-8 w-full md:w-auto flex flex-wrap overflow-x-auto">
          {departments.map((dept) => (
            <TabsTrigger key={dept} value={dept} className="capitalize">
              {dept === "all" ? "All Departments" : dept}
            </TabsTrigger>
          ))}
        </TabsList>

        {departments.map((dept) => (
          <TabsContent key={dept} value={dept} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <h4 className="text-xl font-medium mb-2">No positions found</h4>
                  <p className="text-muted-foreground">
                    Try adjusting your search or check back later for new opportunities.
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default JobListings;