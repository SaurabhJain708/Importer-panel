import { JobListing, Testimonial, Benefit, FAQ } from "./types";
import { 
  Briefcase, Heart, Coffee, Globe, Building, Award, 
  GraduationCap, Clock, CalendarDays, Gift
} from "lucide-react";

export const jobListings: JobListing[] = [
  {
    id: "warehouse-manager",
    title: "Warehouse Manager",
    department: "Operations",
    location: "Shanghai, China",
    type: "Full-time",
    postedDate: "May 15, 2025",
    isUrgent: true,
    shortDescription: "Oversee daily operations of our primary warehouse in Shanghai, managing inventory and coordinating shipments.",
    description: [
      "We are looking for an experienced Warehouse Manager to oversee our primary distribution center in Shanghai.",
      "In this role, you will be responsible for managing inventory, coordinating shipments, and ensuring efficient operations.",
      "The ideal candidate has experience in logistics, strong leadership skills, and can optimize warehouse processes."
    ],
    requirements: [
      "5+ years of warehouse management experience, preferably in tech or electronics",
      "Bachelor's degree in logistics, supply chain management, or related field",
      "Fluent in English and Mandarin Chinese",
      "Experience with inventory management software and ERP systems",
      "Strong leadership and team management skills",
      "Knowledge of international shipping regulations and customs procedures"
    ],
    responsibilities: [
      "Manage daily warehouse operations and workflow",
      "Supervise warehouse staff and coordinate work schedules",
      "Implement and maintain inventory control systems",
      "Ensure compliance with safety regulations and quality standards",
      "Coordinate with procurement, sales, and logistics teams",
      "Optimize warehouse layout and storage solutions",
      "Prepare reports on inventory levels, warehouse performance, and operational metrics"
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Comprehensive health insurance",
      "Housing allowance for expatriates",
      "Annual airfare for home visits",
      "Professional development opportunities"
    ],
    salary: "$70,000 - $90,000 annually"
  },
  {
    id: "procurement-specialist",
    title: "Procurement Specialist",
    department: "Purchasing",
    location: "Shenzhen, China",
    type: "Full-time",
    postedDate: "May 12, 2025",
    isUrgent: false,
    shortDescription: "Source and negotiate with suppliers for tech products, ensuring quality and competitive pricing.",
    description: [
      "Join our purchasing team as a Procurement Specialist based in Shenzhen, the tech manufacturing hub of China.",
      "You'll be responsible for identifying reliable suppliers, negotiating contracts, and ensuring we source high-quality products at competitive prices.",
      "This role requires excellent negotiation skills, market knowledge, and attention to detail."
    ],
    requirements: [
      "3+ years of procurement experience in electronics or tech industry",
      "Bachelor's degree in business, supply chain management, or related field",
      "Fluent in English and Mandarin Chinese",
      "Strong negotiation and communication skills",
      "Experience with supplier relationship management",
      "Knowledge of Chinese manufacturing landscape"
    ],
    responsibilities: [
      "Source and evaluate potential suppliers for tech products",
      "Negotiate pricing, terms, and contracts with suppliers",
      "Conduct quality assessments and factory audits",
      "Monitor market trends and competitor pricing",
      "Maintain supplier relationship database",
      "Collaborate with warehouse and sales teams",
      "Ensure compliance with international trade regulations"
    ],
    benefits: [
      "Competitive salary with commission structure",
      "Comprehensive health insurance",
      "Housing allowance",
      "Annual performance bonus",
      "Professional development opportunities"
    ],
    salary: "$55,000 - $75,000 annually"
  },
  {
    id: "quality-control-inspector",
    title: "Quality Control Inspector",
    department: "Quality Assurance",
    location: "Guangzhou, China",
    type: "Full-time",
    postedDate: "May 10, 2025",
    isUrgent: false,
    shortDescription: "Ensure all tech products meet our quality standards before shipment to international markets.",
    description: [
      "As a Quality Control Inspector, you will be responsible for ensuring all products meet our strict quality standards before being shipped to our international customers.",
      "This role involves conducting thorough inspections, running tests, and documenting quality issues.",
      "The ideal candidate has a keen eye for detail and understands electronic products."
    ],
    requirements: [
      "2+ years of quality control experience in electronics manufacturing",
      "Technical education or training in electronics",
      "Familiarity with quality control processes and standards (ISO 9001)",
      "Experience with testing equipment and procedures",
      "Basic understanding of English, fluent in Mandarin Chinese",
      "Strong attention to detail"
    ],
    responsibilities: [
      "Conduct visual inspections of tech products",
      "Perform functional testing of electronic devices",
      "Document quality issues and prepare reports",
      "Communicate with suppliers regarding quality concerns",
      "Follow standardized quality control procedures",
      "Recommend improvements to quality control processes",
      "Ensure products meet international safety standards"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Transportation allowance",
      "Meal subsidies",
      "Training opportunities"
    ],
    salary: "$40,000 - $55,000 annually"
  },
  {
    id: "logistics-coordinator",
    title: "Logistics Coordinator",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    postedDate: "May 8, 2025",
    isUrgent: false,
    shortDescription: "Coordinate international shipments from China to global markets, ensuring timely delivery and compliance.",
    description: [
      "We're seeking a Logistics Coordinator to manage the movement of products from our warehouses in China to international destinations.",
      "This remote position involves coordinating with freight forwarders, tracking shipments, and ensuring compliance with international shipping regulations.",
      "The ideal candidate has experience in international logistics and is detail-oriented."
    ],
    requirements: [
      "3+ years of experience in international logistics or freight forwarding",
      "Knowledge of international shipping documentation and procedures",
      "Experience with customs clearance processes",
      "Proficiency in logistics management software",
      "Strong communication and organizational skills",
      "Ability to work independently in a remote setting"
    ],
    responsibilities: [
      "Coordinate international shipments from China to global markets",
      "Prepare and review shipping documentation",
      "Track shipments and provide updates to sales and customers",
      "Resolve shipping issues and delays",
      "Negotiate with freight forwarders and shipping companies",
      "Ensure compliance with international trade regulations",
      "Analyze shipping costs and recommend optimizations"
    ],
    benefits: [
      "Competitive salary",
      "Flexible remote work arrangement",
      "Health insurance",
      "Professional development opportunities",
      "Performance bonuses"
    ],
    salary: "$50,000 - $65,000 annually"
  },
  {
    id: "sales-representative",
    title: "B2B Sales Representative",
    department: "Sales",
    location: "Hong Kong",
    type: "Full-time",
    postedDate: "May 5, 2025",
    isUrgent: true,
    shortDescription: "Develop relationships with business clients and drive bulk sales of our imported tech products.",
    description: [
      "We are looking for an experienced B2B Sales Representative to join our team in Hong Kong.",
      "In this role, you will develop and maintain relationships with business clients, drive bulk sales, and expand our client base across various industries.",
      "The ideal candidate has experience in B2B tech sales and is results-driven."
    ],
    requirements: [
      "5+ years of B2B sales experience, preferably in tech or electronics",
      "Proven track record of meeting or exceeding sales targets",
      "Experience with CRM systems and sales methodologies",
      "Excellent negotiation and relationship-building skills",
      "Fluent in English and Cantonese, Mandarin is a plus",
      "Bachelor's degree in business, marketing, or related field"
    ],
    responsibilities: [
      "Identify and develop new business opportunities",
      "Present and demonstrate products to potential clients",
      "Negotiate contracts and close sales",
      "Maintain relationships with existing clients",
      "Meet or exceed monthly and quarterly sales targets",
      "Provide feedback on market trends and client needs",
      "Collaborate with marketing and product teams"
    ],
    benefits: [
      "Competitive base salary plus commission",
      "Comprehensive health insurance",
      "Retirement plan",
      "Expense account",
      "Professional development opportunities"
    ],
    salary: "$60,000 - $100,000 annually plus commission"
  },
  {
    id: "marketing-specialist",
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    postedDate: "May 3, 2025",
    isUrgent: false,
    shortDescription: "Drive online visibility and lead generation for our tech import business through digital marketing channels.",
    description: [
      "Join our marketing team as a Digital Marketing Specialist to help drive online visibility and lead generation for our tech import business.",
      "In this remote role, you'll manage our digital marketing channels, create content, and analyze campaign performance.",
      "The ideal candidate has experience in B2B digital marketing and is data-driven."
    ],
    requirements: [
      "3+ years of experience in digital marketing, preferably in B2B",
      "Proficiency in SEO, SEM, email marketing, and social media",
      "Experience with marketing automation tools",
      "Knowledge of analytics tools and data analysis",
      "Strong content creation and copywriting skills",
      "Bachelor's degree in marketing, communications, or related field"
    ],
    responsibilities: [
      "Develop and implement digital marketing strategies",
      "Manage SEO, SEM, and social media campaigns",
      "Create content for website, blog, and social media",
      "Set up and manage email marketing campaigns",
      "Analyze campaign performance and optimize strategies",
      "Generate leads for the sales team",
      "Collaborate with product and sales teams"
    ],
    benefits: [
      "Competitive salary",
      "Flexible remote work arrangement",
      "Health insurance",
      "Professional development budget",
      "Performance bonuses"
    ],
    salary: "$50,000 - $70,000 annually"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Procurement Specialist",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Working here has given me incredible insights into the global tech supply chain. I've grown professionally and built an amazing network of contacts in Shenzhen's tech ecosystem."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Logistics Coordinator",
    image: "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "The remote work flexibility allows me to maintain a perfect work-life balance while being part of an exciting international business. Leadership truly values our input and wellbeing."
  },
  {
    id: 3,
    name: "David Wong",
    role: "Quality Control Manager",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "I've been with the company for three years and have seen tremendous growth. The emphasis on quality and customer satisfaction makes me proud of the work we do every day."
  }
];

export const benefits: Benefit[] = [
  {
    id: 1,
    title: "Competitive Compensation",
    description: "We offer industry-leading salaries, performance bonuses, and comprehensive benefits packages.",
    icon: "Briefcase"
  },
  {
    id: 2,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, wellness programs, and mental health support for you and your family.",
    icon: "Heart"
  },
  {
    id: 3,
    title: "Work-Life Balance",
    description: "Flexible scheduling, generous paid time off, and remote work options for eligible positions.",
    icon: "Coffee"
  },
  {
    id: 4,
    title: "International Exposure",
    description: "Opportunities to travel, work with global teams, and gain international business experience.",
    icon: "Globe"
  },
  {
    id: 5,
    title: "Professional Growth",
    description: "Continuous learning opportunities, career development programs, and clear advancement paths.",
    icon: "GraduationCap"
  },
  {
    id: 6,
    title: "Recognition",
    description: "Regular recognition programs to celebrate achievements and contributions to our success.",
    icon: "Award"
  }
];

export const faqs: FAQ[] = [
  {
    question: "What is the typical hiring process?",
    answer: "Our hiring process typically includes an initial application review, a phone screening, 1-2 interviews (virtual or in-person), and a final decision. The entire process usually takes 2-3 weeks."
  },
  {
    question: "Do you offer relocation assistance?",
    answer: "Yes, for certain positions we offer relocation packages that may include moving expenses, temporary housing, and assistance with visa applications if relocating internationally."
  },
  {
    question: "Are there opportunities for career advancement?",
    answer: "Absolutely! We believe in promoting from within and providing clear career paths. We offer regular performance reviews, mentorship programs, and professional development opportunities to help you grow."
  },
  {
    question: "What is the company culture like?",
    answer: "We have a dynamic, collaborative culture that values innovation, quality, and customer satisfaction. We encourage open communication, celebrate diversity, and promote work-life balance."
  },
  {
    question: "Do you offer internships or entry-level positions?",
    answer: "Yes, we regularly offer internships and entry-level positions across various departments. These are great opportunities to gain experience in the tech import industry and potentially grow into full-time roles."
  },
  {
    question: "How do you support professional development?",
    answer: "We support professional development through training programs, conference attendance, certification reimbursements, and educational assistance programs. We're committed to helping our employees grow their skills and expertise."
  }
];