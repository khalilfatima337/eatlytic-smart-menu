import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Restaurant } from '@/types/restaurant';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
        <div className="relative h-48 overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
              {restaurant.cuisine}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {restaurant.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {restaurant.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-sm font-semibold text-foreground">{restaurant.rating}</span>
              <span className="text-xs text-muted-foreground">({restaurant.reviewCount})</span>
            </div>
            <span className="text-sm text-primary font-medium">
              {restaurant.menu.length} items
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
