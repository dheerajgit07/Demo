import React from "react";
import LabImage from "../assets/images/lab-exterior.jpg";

function LocationSection() {
  return (
    <section id="location" className="relative bg-slate-950 text-white py-24 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest">
            Our Location
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Visit Our <span className="text-blue-400">Laboratory</span>
          </h2>
        </div>

        {/* EQUAL SIZE GRID (1:1 Ratio) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch ">
          
          {/* LEFT → IMAGE CARD */}
          <div className="w-full h-[400px] lg:h-[550px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
            <img 
              src={LabImage} 
              alt="Laboratory Interior" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </div>

          {/* RIGHT → MAP CARD */}
          <div className="w-full h-[400px] lg:h-[550px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            <iframe
              title="Lab Location"
              /* Yahan apna asli Google Map Embed link paste karein */
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.234!2d76.99!3d29.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjkuNjg0MCBONDcgNTknMjQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
