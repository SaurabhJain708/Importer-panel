import { MessageCircle, Send } from "lucide-react";
import { Button } from "../button";
import Image from "next/image";

export default function Community(){
    return(
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
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl text-blue-100 mb-10">
              Connect with fellow importers, get exclusive deals, and stay
              updated with the latest tech trends.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-green-600 cursor-pointer hover:bg-green-700 text-white flex items-center justify-center gap-3 px-8 py-6 text-lg">
                <MessageCircle className="h-6 w-6" />
                WhatsApp Community
              </Button>

              <Button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white flex items-center justify-center gap-3 px-8 py-6 text-lg">
                <Send className="h-6 w-6" />
                Telegram Channel
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}