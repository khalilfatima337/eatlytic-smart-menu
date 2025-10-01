import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, ArrowLeft, QrCode } from 'lucide-react';
import Navigation from '@/components/Navigation';
import MenuItemCard from '@/components/MenuItemCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { restaurants } from '@/data/restaurants';

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Restaurant Not Found</h1>
          <Link to="/restaurants">
            <Button variant="outline">Back to Restaurants</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Restaurant Header */}
      <div className="relative h-80 bg-muted">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="relative -mt-20 mb-8">
          <Link to="/restaurants">
            <Button variant="outline" className="mb-4 bg-background">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Restaurants
            </Button>
          </Link>

          <div className="bg-card rounded-lg border border-border p-6 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1 mb-4 md:mb-0">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-4xl font-bold text-foreground">{restaurant.name}</h1>
                  <Badge variant="secondary">{restaurant.cuisine}</Badge>
                </div>
                <p className="text-muted-foreground text-lg mb-3">{restaurant.description}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <span className="font-semibold text-foreground">{restaurant.rating}</span>
                    <span className="text-muted-foreground">({restaurant.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>
              <div>
                <Link to={`/restaurant/${restaurant.id}/qr`}>
                  <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                    <QrCode className="w-5 h-5 mr-2" />
                    Get QR Code
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Menu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurant.menu.map((item) => (
              <div key={item.id} className="animate-scale-in">
                <MenuItemCard item={item} restaurantId={restaurant.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
