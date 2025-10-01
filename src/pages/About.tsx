import Navigation from '@/components/Navigation';
import { Heart, Target, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-center">About Eatlytic</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Empowering health-conscious diners to make informed choices
          </p>

          <Card className="mb-12 border-border">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                At Eatlytic, we believe that everyone deserves access to detailed nutrition information when dining out. 
                Our platform bridges the gap between restaurants and health-conscious diners by providing transparent, 
                comprehensive nutritional data for every dish.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through our innovative QR code system, we make it effortless for diners to access menu nutrition facts 
                instantly while at the restaurant, helping them make choices that align with their dietary goals and preferences.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Health First</h3>
                <p className="text-muted-foreground">
                  We prioritize your wellness by providing accurate, detailed nutrition information for informed decision-making.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  Complete transparency in nutrition facts, ingredients, and dietary information for every menu item.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Partnership</h3>
                <p className="text-muted-foreground">
                  We collaborate with restaurants to ensure accurate data and help them serve health-conscious customers.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Scan the QR Code</h3>
                    <p className="text-muted-foreground">
                      Find the Eatlytic QR code on your table at any partner restaurant and scan it with your phone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Browse the Menu</h3>
                    <p className="text-muted-foreground">
                      Instantly access the restaurant's complete menu with nutrition information for every dish.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Make Informed Choices</h3>
                    <p className="text-muted-foreground">
                      Filter by diet type, view detailed nutrition facts, and choose meals that fit your health goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Enjoy Your Meal</h3>
                    <p className="text-muted-foreground">
                      Order confidently knowing exactly what you're eating and how it aligns with your dietary needs.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
