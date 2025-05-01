"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Briefcase, 
  ChevronLeft, 
  Share2, 
  BookmarkPlus,
  ArrowRightCircle
} from "lucide-react";
import ApplicationForm from "@/components/careers/ApplicationForm";
import { jobListings } from "@/lib/careers/data";

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();
  const jobId = params.jobId as string;
  const [formOpen, setFormOpen] = useState(false);

  // Find the job by ID
  const job = jobListings.find((job) => job.id === jobId);

  // Handle job not found
  if (!job) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
        <p className="mb-6 text-muted-foreground">
          The job you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/careers">Back to Careers</Link>
        </Button>
      </div>
    );
  }

  const shareJob = () => {
    if (navigator.share) {
      navigator.share({
        title: `${job.title} at TechImporters`,
        text: job.shortDescription,
        url: window.location.href,
      }).catch((error) => console.log("Error sharing", error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const saveJob = () => {
    // Save job logic without toast
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-muted py-12 border-b">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6" 
            onClick={() => router.push("/careers")}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to all openings
          </Button>
          
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div>
              <div className="flex gap-2 mb-3">
                <Badge variant={job.type === "Full-time" ? "default" : "secondary"}>
                  {job.type}
                </Badge>
                {job.isUrgent && (
                  <Badge variant="destructive">Urgent</Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                {job.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Briefcase size={16} />
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>Posted: {job.postedDate}</span>
                </div>
              </div>
              
              {job.salary && (
                <p className="text-lg font-medium">
                  Salary: {job.salary}
                </p>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:self-end">
              <Button onClick={shareJob} variant="outline" className="flex gap-2">
                <Share2 size={16} />
                Share
              </Button>
              <Button onClick={saveJob} variant="outline" className="flex gap-2">
                <BookmarkPlus size={16} />
                Save
              </Button>
              <Dialog open={formOpen} onOpenChange={setFormOpen}>
                <DialogTrigger asChild>
                  <Button>Apply Now</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Apply for {job.title}</DialogTitle>
                    <DialogDescription>
                      Complete the form below to apply for this position
                    </DialogDescription>
                  </DialogHeader>
                  <ApplicationForm job={job} onSubmit={() => setFormOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Job description */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">About the Role</h2>
                <div className="space-y-4">
                  {job.description.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Responsibilities */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Key Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* Requirements */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* Benefits */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Benefits</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              {/* Apply now card */}
              <div className="bg-card rounded-lg border p-6 sticky top-8">
                <h3 className="text-xl font-bold mb-4">Apply for this position</h3>
                <p className="text-muted-foreground mb-6">
                  Take the next step in your career and join our team of professionals.
                </p>
                
                <Dialog open={formOpen} onOpenChange={setFormOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full mb-4">Apply Now</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Apply for {job.title}</DialogTitle>
                      <DialogDescription>
                        Complete the form below to apply for this position
                      </DialogDescription>
                    </DialogHeader>
                    <ApplicationForm job={job} onSubmit={() => setFormOpen(false)} />
                  </DialogContent>
                </Dialog>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h4 className="font-medium">Job Overview</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Department</div>
                    <div className="font-medium">{job.department}</div>
                    
                    <div className="text-muted-foreground">Location</div>
                    <div className="font-medium">{job.location}</div>
                    
                    <div className="text-muted-foreground">Employment Type</div>
                    <div className="font-medium">{job.type}</div>
                    
                    <div className="text-muted-foreground">Posted Date</div>
                    <div className="font-medium">{job.postedDate}</div>
                    
                    {job.salary && (
                      <>
                        <div className="text-muted-foreground">Salary Range</div>
                        <div className="font-medium">{job.salary}</div>
                      </>
                    )}
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h4 className="font-medium mb-2">Share this job</h4>
                  <div className="flex gap-2">
                    <Button onClick={shareJob} variant="outline" size="sm" className="w-full">
                      <Share2 size={14} className="mr-1" /> Share
                    </Button>
                    <Button onClick={saveJob} variant="outline" size="sm" className="w-full">
                      <BookmarkPlus size={14} className="mr-1" /> Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Similar jobs */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Similar Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobListings
              .filter(item => item.id !== job.id && item.department === job.department)
              .slice(0, 3)
              .map((similarJob) => (
                <div key={similarJob.id} className="bg-card rounded-lg border p-6">
                  <h3 className="font-bold text-lg mb-2">{similarJob.title}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground mb-4">
                    <MapPin size={14} />
                    <span>{similarJob.location}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                    {similarJob.shortDescription}
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/careers/${similarJob.id}`} className="flex items-center justify-center gap-2">
                      View Details
                      <ArrowRightCircle size={14} />
                    </Link>
                  </Button>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}