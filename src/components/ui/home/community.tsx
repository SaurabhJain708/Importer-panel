import { MessageCircle, Send } from "lucide-react";
import { Button } from "../button";
import Image from "next/image";

export default function Community() {
  return (
    <section className="relative py-24 px-4 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/community.jpg"
          alt="Community Background"
          className="object-cover object-center"
          fill
        />
        <div className="absolute inset-0 bg-blue-900/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-[0.1]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-blue-100 mb-10">
            Connect with fellow importers, get exclusive deals, and stay
            updated with the latest tech trends.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://www.linkedin.com/company/anantya-overseas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#0077B5] hover:bg-[#005B8F] text-white flex items-center justify-center gap-3 px-8 py-6 text-lg">
                <MessageCircle className="h-6 w-6" />
                LinkedIn Community
              </Button>
            </a>

            <a
              href="https://www.instagram.com/anantya_overseas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:brightness-110 text-white flex items-center justify-center gap-3 px-8 py-6 text-lg">
                <Send className="h-6 w-6" />
                Instagram
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
