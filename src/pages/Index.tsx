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
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Healthy food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/80 to-primary/90" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Make Healthier Choices,
            <br />
            One Meal at a Time
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Scan, browse, and discover detailed nutrition facts for every dish at your favorite restaurants
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/restaurants">
              <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-xl">
                Browse Restaurants
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="secondary" className="bg-white hover:bg-white/90 text-foreground text-lg px-8 py-6 shadow-xl">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            Why Choose Eatlytic?
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Empowering health-conscious diners with transparency and choice
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all animate-slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Detailed Nutrition</h3>
              <p className="text-muted-foreground">
                Every dish comes with comprehensive nutrition facts including calories, macros, and more
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Smart Filtering</h3>
              <p className="text-muted-foreground">
                Filter by diet type, calorie range, and nutritional goals to find your perfect meal
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">QR Code Access</h3>
              <p className="text-muted-foreground">
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Eat Smarter?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of health-conscious diners making informed choices every day
          </p>
          <Link to="/restaurants">
            <Button size="lg" variant="secondary" className="bg-white hover:bg-white/90 text-primary text-lg px-8 py-6 shadow-xl">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
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
