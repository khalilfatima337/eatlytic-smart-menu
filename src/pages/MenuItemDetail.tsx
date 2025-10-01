import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Star, DollarSign } from 'lucide-react';
import Navigation from '@/components/Navigation';
import NutritionTable from '@/components/NutritionTable';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { restaurants } from '@/data/restaurants';

const MenuItemDetail = () => {
  const { restaurantId, itemId } = useParams();
  const restaurant = restaurants.find((r) => r.id === restaurantId);
  const item = restaurant?.menu.find((i) => i.id === itemId);

  if (!restaurant || !item) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Item Not Found</h1>
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

      <div className="container mx-auto px-4 py-8">
        <Link to={`/restaurant/${restaurantId}`}>
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {restaurant.name}
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Image and Basic Info */}
          <div className="space-y-6">
            <div className="relative h-96 rounded-lg overflow-hidden bg-muted">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2 font-bold shadow-lg">
                  {item.nutrition.calories} cal
                </Badge>
              </div>
            </div>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{item.name}</h1>
                    <p className="text-muted-foreground text-lg">{item.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.dietTags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-border">
                  <div className="text-center">
                    <DollarSign className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-2xl font-bold text-foreground">${item.price}</div>
                    <div className="text-xs text-muted-foreground">Price</div>
                  </div>
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-2xl font-bold text-foreground">{item.prepTime}</div>
                    <div className="text-xs text-muted-foreground">Prep Time</div>
                  </div>
                  {item.rating && (
                    <div className="text-center">
                      <Star className="w-5 h-5 text-primary mx-auto mb-1 fill-primary" />
                      <div className="text-2xl font-bold text-foreground">{item.rating}</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  )}
                </div>

                {item.ingredients && item.ingredients.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-bold text-foreground mb-3">Ingredients</h3>
                    <ul className="space-y-2">
                      {item.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Nutrition Facts */}
          <div>
            <NutritionTable nutrition={item.nutrition} />

            <Card className="mt-6 border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-3 flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                  Macro Breakdown
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Protein</span>
                      <span className="font-semibold text-foreground">{item.nutrition.protein}g</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{
                          width: `${(item.nutrition.protein * 4 / item.nutrition.calories) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Carbs</span>
                      <span className="font-semibold text-foreground">{item.nutrition.carbs}g</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-secondary"
                        style={{
                          width: `${(item.nutrition.carbs * 4 / item.nutrition.calories) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Fat</span>
                      <span className="font-semibold text-foreground">{item.nutrition.fat}g</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent"
                        style={{
                          width: `${(item.nutrition.fat * 9 / item.nutrition.calories) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetail;
