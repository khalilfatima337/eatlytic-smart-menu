import Navigation from '@/components/Navigation';
import RestaurantCard from '@/components/RestaurantCard';
import { restaurants } from '@/data/restaurants';

const Restaurants = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">All Restaurants</h1>
          <p className="text-muted-foreground text-lg">
            Browse our partner restaurants and discover their nutritious offerings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="animate-scale-in">
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
