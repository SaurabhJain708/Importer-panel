"use client"
import {motion} from "framer-motion"
import { BarChart3, Globe, Users } from "lucide-react"
import { useEffect, useState } from "react";


export default function Metrics(){
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      };
      const [stats, setStats] = useState({ products: 0, partners: 0, clients: 0 });
      
          useEffect(()=>{
            const interval = setInterval(()=>{
              setStats(prev=>({
               products: prev.products < 5000 ? prev.products+50 : 5000,
               partners: prev.partners < 200 ? prev.partners+10 : 200,
               clients: prev.clients < 1000 ? prev.clients+30 :1000
              }))
            },30)
      
            return ()=>{
              clearInterval(interval)
            }
          },[])
    return(
        <motion.section 
        className="py-16 bg-blue-900 text-white"
        initial={false}
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-4xl font-bold">{stats.products.toLocaleString()}+</h3>
              <p className="text-blue-200 mt-2">Products Available</p>
            </div>
            
            <div className="p-6">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-4xl font-bold">{stats.clients.toLocaleString()}+</h3>
              <p className="text-blue-200 mt-2">Satisfied Clients</p>
            </div>
            
            <div className="p-6">
              <Globe className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-4xl font-bold">{stats.partners.toLocaleString()}+</h3>
              <p className="text-blue-200 mt-2">Global Partners</p>
            </div>
          </div>
        </div>
      </motion.section>
    )
}