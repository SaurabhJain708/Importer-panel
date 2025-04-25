"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import { JobListing } from "@/lib/careers/types";

interface JobCardProps {
  job: JobListing;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full flex flex-col">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start mb-2">
            <Badge variant={job.type === "Full-time" ? "default" : "secondary"}>
              {job.type}
            </Badge>
            {job.isUrgent && (
              <Badge variant="destructive">Urgent</Badge>
            )}
          </div>
          <h3 className="text-xl font-bold tracking-tight">{job.title}</h3>
          <div className="text-muted-foreground flex items-center gap-1 text-sm">
            <MapPin size={14} />
            <span>{job.location}</span>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex items-center gap-6 mb-4 text-sm">
            <div className="flex items-center gap-1">
              <Calendar size={16} className="text-muted-foreground" />
              <span>{job.postedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} className="text-muted-foreground" />
              <span>{job.type}</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {job.shortDescription}
          </p>
        </CardContent>
        <CardFooter className="pt-4 border-t">
          <div className="w-full flex justify-between items-center">
            <span className="font-medium text-sm">{job.department}</span>
            <Link href={`/careers/${job.id}`}>
              <Button variant="outline">View Details</Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default JobCard;