import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MenuItem } from '@/types/restaurant';

interface MenuItemCardProps {
  item: MenuItem;
  restaurantId: string;
}

const MenuItemCard = ({ item, restaurantId }: MenuItemCardProps) => {
  return (
    <Link to={`/restaurant/${restaurantId}/item/${item.id}`}>
      <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 h-full">
        <div className="relative h-40 overflow-hidden bg-muted">
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
          <div className="absolute top-2 right-2">
            <Badge className="bg-primary text-primary-foreground font-semibold">
              {item.nutrition.calories} cal
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {item.name}
            </h4>
            <span className="text-lg font-semibold text-primary ml-2">${item.price}</span>
          </div>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {item.dietTags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{item.prepTime}</span>
            </div>
            {item.rating && (
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="font-semibold text-foreground">{item.rating}</span>
              </div>
            )}
          </div>
          <div className="mt-3 pt-3 border-t border-border">
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <div className="text-muted-foreground">Protein</div>
                <div className="font-semibold text-foreground">{item.nutrition.protein}g</div>
              </div>
              <div>
                <div className="text-muted-foreground">Carbs</div>
                <div className="font-semibold text-foreground">{item.nutrition.carbs}g</div>
              </div>
              <div>
                <div className="text-muted-foreground">Fat</div>
                <div className="font-semibold text-foreground">{item.nutrition.fat}g</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MenuItemCard;
