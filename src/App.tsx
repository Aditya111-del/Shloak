import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "RAW ENERGY",
    subtitle: "Music Label",
    description: "We are a dynamic and forward-thinking music label dedicated to showcasing and nurturing extraordinary talent across a diverse range of genres.",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "ARTISTS",
    subtitle: "Our Talent",
    description: "Discover our roster of exceptional artists pushing the boundaries of music.",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "RELEASES",
    subtitle: "Latest Music",
    description: "Explore our latest releases and upcoming tracks.",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "EVENTS",
    subtitle: "Live Shows",
    description: "Join us at our upcoming events and live performances.",
    image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "STUDIO",
    subtitle: "Production",
    description: "State-of-the-art recording facilities for our artists.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "COMMUNITY",
    subtitle: "Join Us",
    description: "Be part of our growing music community.",
    image: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "FUTURE",
    subtitle: "Vision",
    description: "Shaping the future of independent music.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
  }
];

const artists = [
  {
    name: 'DAZZLE',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=1200',
  },
  {
    name: 'DRIZZLY',
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=1200',
  },
  {
    name: 'HONG',
    image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&q=80&w=1200',
  },
  {
    name: 'BLEACH',
    image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&q=80&w=1200',
  }
];

const releases = [
  {
    title: "BETTER TO SEE YOU",
    artist: "The Howlers",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "WHO'S SUFFER?",
    artist: "Dark Matter",
    cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "REVENGE IS MINE",
    artist: "Blood Red",
    cover: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=1200"
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Slides */}
      <header className="relative h-screen overflow-hidden noise-texture">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide-content ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-2xl mb-4">{slide.subtitle}</h2>
              <h1 className="text-8xl font-black mb-8 tracking-tighter">
                {slide.title}
                {index === 0 && <span className="text-[#FF2D20] inline-block transform -rotate-3">*</span>}
              </h1>
              <p className="text-xl max-w-2xl mx-auto mb-8">{slide.description}</p>
              {index === 0 && (
                <button className="button-cutout bg-[#FF2D20] text-white px-8 py-3 text-lg font-bold">
                  Explore More
                </button>
              )}
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4">
          <button onClick={prevSlide} className="p-2 hover:text-[#FF2D20]">
            <ChevronLeft size={24} />
          </button>
          <div className="nav-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="p-2 hover:text-[#FF2D20]">
            <ChevronRight size={24} />
          </button>
        </div>
      </header>

      {/* Artists Section */}
      <section className="py-24 px-4 noise-texture">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-black mb-16">
            Exploring the<br />
            <span className="text-[#FF2D20]">Mosaic of Talent!</span>
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {artists.map((artist) => (
              <div key={artist.name} className="relative">
                <div className="image-frame">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full aspect-square object-cover grayscale contrast-125"
                  />
                </div>
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="artist-label">{artist.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Releases Section */}
      <section className="py-24 px-4 red-box noise-texture">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-black mb-12">NEW RELEASE</h2>
          
          <div className="space-y-6">
            {releases.map((release) => (
              <div key={release.title} className="release-card p-6 flex gap-6">
                <div className="w-32 shrink-0">
                  <img 
                    src={release.cover} 
                    alt={release.title}
                    className="w-full aspect-square object-cover grayscale"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{release.title}</h3>
                  <p className="text-lg mb-4">{release.artist}</p>
                  <button className="bg-black text-white px-6 py-2 text-sm font-bold hover:bg-white hover:text-black transition-colors">
                    Listen Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="nav-dots justify-center">
            <span className="nav-dot active"></span>
            <span className="nav-dot"></span>
            <span className="nav-dot"></span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-black noise-texture">
        <div className="max-w-6xl mx-auto">
          <div className="red-box p-12">
            <h2 className="text-6xl font-black mb-8">
              KICK THE<br />
              DOUBLE STANDARD <ArrowRight className="inline-block transform rotate-12" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="col-span-2">
                <h3 className="text-2xl font-bold mb-4">Keep up to date about ERC</h3>
                <div className="flex gap-4">
                  <input 
                    type="email" 
                    placeholder="Email address"
                    className="bg-black/80 px-4 py-2 flex-grow"
                  />
                  <button className="bg-black text-white px-8 py-2 font-bold hover:bg-white hover:text-black transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li className="hover:text-black transition-colors cursor-pointer">About</li>
                  <li className="hover:text-black transition-colors cursor-pointer">Contact</li>
                  <li className="hover:text-black transition-colors cursor-pointer">Terms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-sm text-white/60">
          © 2024 Raw Energy Records. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;