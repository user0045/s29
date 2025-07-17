import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-black/90 via-[#0A7D4B]/20 to-black/90 backdrop-blur-sm border-t border-border/50 mt-auto">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Brand Section - 1/3 width */}
          <div className="flex flex-col items-center justify-start text-center">
            <h3 className="text-lg font-bold text-primary mb-3">StreamFlix</h3>
            <p className="text-sm text-muted-foreground px-4">
              Your ultimate destination for movies, web series, and TV shows.
            </p>
          </div>

          {/* Quick Links - 1/3 width */}
          <div className="flex flex-col items-center justify-start">
            <h4 className="text-base font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors text-center">
                Home
              </a>
              <a href="/movies" className="text-sm text-muted-foreground hover:text-primary transition-colors text-center">
                Movies
              </a>
              <a href="/web-series" className="text-sm text-muted-foreground hover:text-primary transition-colors text-center">
                Web Series
              </a>
              <a href="/tv-shows" className="text-sm text-muted-foreground hover:text-primary transition-colors text-center">
                Shows
              </a>
              <a href="/upcoming" className="text-sm text-muted-foreground hover:text-primary transition-colors text-center">
                Upcoming
              </a>
            </div>
          </div>

          {/* Categories - 1/3 width with 3 columns */}
          <div className="flex flex-col items-center justify-start">
            <h4 className="text-base font-semibold text-foreground mb-3">Categories</h4>
            <div className="grid grid-cols-3 gap-x-3 gap-y-2">
              <span className="text-sm text-muted-foreground text-center">Action</span>
              <span className="text-sm text-muted-foreground text-center">Comedy</span>
              <span className="text-sm text-muted-foreground text-center">Drama</span>
              <span className="text-sm text-muted-foreground text-center">Horror</span>
              <span className="text-sm text-muted-foreground text-center">Sci-Fi</span>
              <span className="text-sm text-muted-foreground text-center">Thriller</span>
              <span className="text-sm text-muted-foreground text-center">Crime</span>
              <span className="text-sm text-muted-foreground text-center">Family</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 StreamFlix. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <span className="text-sm text-muted-foreground">Privacy Policy</span>
              <span className="text-sm text-muted-foreground">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;