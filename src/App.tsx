import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Layout, Users, Info, MapPin, Instagram, Twitter, Mail, ExternalLink, ChevronRight } from 'lucide-react';

const PHOTOS = [
  { id: 1, url: 'https://picsum.photos/seed/campus1/800/600', title: 'Morning Light', category: 'Architecture' },
  { id: 2, url: 'https://picsum.photos/seed/campus2/800/600', title: 'Library Silence', category: 'Library' },
  { id: 3, url: 'https://picsum.photos/seed/campus3/800/600', title: 'Game Day', category: 'Sports' },
  { id: 4, url: 'https://picsum.photos/seed/campus4/800/600', title: 'Student Hub', category: 'Student Life' },
  { id: 5, url: 'https://picsum.photos/seed/campus5/800/600', title: 'The Quad', category: 'Architecture' },
  { id: 6, url: 'https://picsum.photos/seed/campus6/800/600', title: 'Study Session', category: 'Student Life' },
  { id: 7, url: 'https://picsum.photos/seed/campus7/800/600', title: 'Track Field', category: 'Sports' },
  { id: 8, url: 'https://picsum.photos/seed/campus8/800/600', title: 'Archway', category: 'Architecture' },
  { id: 9, url: 'https://picsum.photos/seed/campus9/800/600', title: 'Main Hall', category: 'Architecture' },
];

const HIGHLIGHTS = [
  { title: 'The Library', description: 'A sanctuary of knowledge with modern architecture and quiet study spaces.', icon: <Info className="w-6 h-6" />, img: 'https://picsum.photos/seed/lib/600/400' },
  { title: 'Sports Ground', description: 'Where champions are made. Our state-of-the-art stadium and track fields.', icon: <MapPin className="w-6 h-6" />, img: 'https://picsum.photos/seed/sports/600/400' },
  { title: 'Architecture', description: 'A blend of historic heritage and futuristic design across the campus.', icon: <Layout className="w-6 h-6" />, img: 'https://picsum.photos/seed/arch/600/400' },
  { title: 'Student Life', description: 'The vibrant pulse of our community, from cafes to collaborative hubs.', icon: <Users className="w-6 h-6" />, img: 'https://picsum.photos/seed/life/600/400' },
];

const TEAM = [
  { name: 'Alex Rivers', role: 'Lead Photographer', bio: 'Capturing moments that tell a story beyond words.', img: 'https://picsum.photos/seed/p1/300/300' },
  { name: 'Sarah Chen', role: 'UI/Frontend Designer', bio: 'Crafting digital experiences that bridge art and technology.', img: 'https://picsum.photos/seed/p2/300/300' },
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-400">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Camera className="text-zinc-950 w-6 h-6" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">CAMPUS LIFE</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#gallery" className="hover:text-emerald-400 transition-colors">Gallery</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#highlights" className="hover:text-emerald-400 transition-colors">Highlights</a>
            <a href="#team" className="hover:text-emerald-400 transition-colors">Team</a>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95">
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/campus-hero/1920/1080" 
            alt="Campus Hero" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/60 to-zinc-950" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase">
              Event Project 2026
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9]">
              Campus Life <br />
              <span className="text-emerald-500 italic">Portfolio</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Capturing the beauty, energy, and soul of our campus through the lens of dedicated student photographers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#gallery" className="w-full sm:w-auto bg-zinc-100 text-zinc-950 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group">
                Explore Gallery
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="w-full sm:w-auto border border-white/10 hover:bg-white/5 px-8 py-4 rounded-2xl font-bold transition-all">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-6 h-10 border-2 border-zinc-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-zinc-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">The Collection</h2>
            <p className="text-zinc-500 max-w-md">A curated selection of the finest moments captured during the campus event day.</p>
          </div>
          <div className="flex gap-2">
            {['All', 'Architecture', 'Library', 'Sports'].map((cat) => (
              <button key={cat} className="px-4 py-2 rounded-full text-sm font-medium border border-white/5 hover:border-emerald-500/50 hover:text-emerald-400 transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHOTOS.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-900 cursor-pointer"
              onClick={() => setSelectedImage(photo.url)}
            >
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">{photo.category}</span>
                <h3 className="text-xl font-bold">{photo.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img 
                src="https://picsum.photos/seed/about-campus/800/800" 
                alt="About Project" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500 rounded-3xl p-8 flex flex-col justify-end hidden lg:flex">
              <span className="text-zinc-950 text-4xl font-bold">2026</span>
              <span className="text-zinc-950/70 text-sm font-bold uppercase tracking-tighter">Event Year</span>
            </div>
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">About the Project</h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                This portfolio was born from a desire to document the unique atmosphere of our college campus during the annual event day. We believe that every corner of our institution holds a story, and through photography, we can preserve these fleeting moments.
              </p>
              <p>
                Our team spent the entire day exploring the hidden gems and bustling hubs of the campus, capturing everything from the serene silence of the library to the explosive energy of the sports fields.
              </p>
              <p>
                The result is more than just a collection of images; it's a digital tribute to our student life and the architectural beauty that surrounds us every day.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-4">
                {TEAM.map((member) => (
                  <img key={member.name} src={member.img} className="w-12 h-12 rounded-full border-4 border-zinc-950 object-cover" alt={member.name} referrerPolicy="no-referrer" />
                ))}
              </div>
              <span className="text-sm font-medium text-zinc-500">Created by the Creative Media Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Campus Highlights</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">Exploring the diverse environments that make our campus a world-class institution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HIGHLIGHTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden bg-zinc-900"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10">
                <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center text-emerald-400 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-zinc-400 max-w-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">The Creative Team</h2>
              <p className="text-zinc-500 max-w-md">The minds and eyes behind the Campus Life Portfolio project.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TEAM.map((member) => (
              <div key={member.name} className="flex flex-col sm:flex-row gap-8 items-center sm:items-start p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-emerald-500/30 transition-all group">
                <div className="w-40 h-40 shrink-0 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">{member.role}</span>
                  <h3 className="text-2xl font-bold mb-4">{member.name}</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">{member.bio}</p>
                  <div className="flex gap-4">
                    <button className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500 hover:text-zinc-950 transition-all">
                      <Instagram className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500 hover:text-zinc-950 transition-all">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500 hover:text-zinc-950 transition-all">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Camera className="text-zinc-950 w-5 h-5" />
                </div>
                <span className="font-display font-bold text-lg tracking-tight">CAMPUS LIFE</span>
              </div>
              <p className="text-zinc-500 max-w-sm mb-8">
                A student-led initiative to document and celebrate the vibrant life of our college campus through professional photography and modern web design.
              </p>
              <div className="flex gap-4">
                <Instagram className="w-5 h-5 text-zinc-500 hover:text-emerald-400 cursor-pointer" />
                <Twitter className="w-5 h-5 text-zinc-500 hover:text-emerald-400 cursor-pointer" />
                <Mail className="w-5 h-5 text-zinc-500 hover:text-emerald-400 cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-8">Quick Links</h4>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li><a href="#gallery" className="hover:text-emerald-400 transition-colors">Gallery</a></li>
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Project</a></li>
                <li><a href="#highlights" className="hover:text-emerald-400 transition-colors">Campus Highlights</a></li>
                <li><a href="#team" className="hover:text-emerald-400 transition-colors">Creative Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-8">Event Info</h4>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li>Annual Campus Expo 2026</li>
                <li>Creative Media Competition</li>
                <li>Team: Visionary Lens</li>
                <li className="flex items-center gap-2 text-emerald-400">
                  <ExternalLink className="w-4 h-4" />
                  Official Website
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-xs font-medium uppercase tracking-widest">
            <span>© 2026 Campus Life Portfolio</span>
            <span>Designed with Passion by Team Visionary Lens</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Selected" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button 
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md transition-all"
                onClick={() => setSelectedImage(null)}
              >
                <span className="text-2xl">×</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
