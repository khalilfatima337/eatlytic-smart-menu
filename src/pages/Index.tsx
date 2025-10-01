import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, TrendingUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import RestaurantCard from '@/components/RestaurantCard';
import { restaurants } from '@/data/restaurants';
import heroImage from '@/assets/hero-food.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Healthy food choices for conscious diners"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-accent/75 to-secondary/85" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in py-20">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
            <p className="text-white/95 text-sm font-medium">🥗 Smart Nutrition at Your Fingertips</p>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Eat Mindfully,
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Live Healthfully</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Scan QR codes at partner restaurants to instantly access complete nutrition information for every dish
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/restaurants">
              <Button size="lg" className="bg-white text-primary hover:bg-white/95 text-lg px-10 py-7 shadow-2xl rounded-full font-semibold transition-all hover:scale-105">
                Explore Restaurants
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-7 shadow-2xl rounded-full font-semibold transition-all hover:scale-105">
                How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
              Why Choose Eatlytic?
            </h2>
            <p className="text-center text-muted-foreground text-xl max-w-2xl mx-auto font-light">
              Empowering health-conscious diners with transparency and choice
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-2xl transition-all animate-slide-up group hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Utensils className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Detailed Nutrition</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every dish comes with comprehensive nutrition facts including calories, macros, and more
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-2xl transition-all animate-slide-up group hover:-translate-y-2" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Smart Filtering</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Filter by diet type, calorie range, and nutritional goals to find your perfect meal
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-2xl transition-all animate-slide-up group hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">QR Code Access</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Simply scan the QR code at your table to instantly view the restaurant's full menu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">Partner Restaurants</h2>
              <p className="text-muted-foreground text-lg">
                Explore menus from our trusted restaurant partners
              </p>
            </div>
            <Link to="/restaurants" className="hidden md:block">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="animate-scale-in">
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/restaurants">
              <Button variant="outline" className="border-primary text-primary">
                View All Restaurants
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-accent to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Ready to Eat Smarter?</h2>
          <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto font-light leading-relaxed">
            Join thousands of health-conscious diners making informed choices every day
          </p>
          <Link to="/restaurants">
            <Button size="lg" className="bg-white hover:bg-white/95 text-primary text-xl px-12 py-8 shadow-2xl rounded-full font-semibold transition-all hover:scale-105">
              Get Started Now
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Eatlytic</h3>
              <p className="text-muted-foreground text-sm">
                Helping health-conscious diners make better choices, one meal at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/restaurants" className="text-muted-foreground hover:text-primary transition-colors">Restaurants</Link></li>
                <li><Link to="/categories" className="text-muted-foreground hover:text-primary transition-colors">Categories</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">For Restaurants</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Partner With Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">QR Code Setup</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 Eatlytic. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
