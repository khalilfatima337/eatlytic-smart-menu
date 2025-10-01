import { useParams, Link } from 'react-router-dom';
import QRCodeSVG from 'react-qr-code';
import { Download, ArrowLeft, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { restaurants } from '@/data/restaurants';

const RestaurantQR = () => {
  const { id } = useParams();
  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold text-foreground">Restaurant not found</h1>
        </main>
      </div>
    );
  }

  const restaurantUrl = `${window.location.origin}/restaurant/${restaurant.id}`;

  const handleDownload = () => {
    const svg = document.getElementById('qr-code');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');

      const downloadLink = document.createElement('a');
      downloadLink.download = `${restaurant.name}-qr-code.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <Link to={`/restaurant/${restaurant.id}`} className="inline-flex items-center text-primary hover:text-primary-dark mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to {restaurant.name}
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {restaurant.name} QR Code
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download or print this QR code to display at your restaurant. Customers can scan it to view your menu and nutrition information.
            </p>
          </div>

          {/* QR Code Display */}
          <div className="bg-card rounded-3xl border border-border p-12 mb-8 text-center shadow-xl print:shadow-none print:border-2">
            <div className="inline-block p-8 bg-white rounded-2xl shadow-lg print:shadow-none">
              <QRCodeSVG
                id="qr-code"
                value={restaurantUrl}
                size={300}
                level="H"
              />
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">{restaurant.name}</h2>
              <p className="text-muted-foreground text-lg mb-1">Scan to view our menu</p>
              <p className="text-sm text-muted-foreground font-mono bg-muted px-4 py-2 rounded-lg inline-block">
                {restaurantUrl}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
            <Button 
              size="lg" 
              onClick={handleDownload}
              className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-6 text-lg shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download QR Code
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handlePrint}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-6 text-lg"
            >
              <Printer className="w-5 h-5 mr-2" />
              Print QR Code
            </Button>
          </div>

          {/* Instructions */}
          <div className="mt-16 bg-muted/50 rounded-2xl p-8 print:hidden">
            <h3 className="text-2xl font-bold text-foreground mb-6">How to Use Your QR Code</h3>
            <ol className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4 flex-shrink-0">1</span>
                <span className="text-lg">Download or print the QR code above</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4 flex-shrink-0">2</span>
                <span className="text-lg">Display it prominently on tables, menus, or at the entrance</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4 flex-shrink-0">3</span>
                <span className="text-lg">Customers scan with their smartphone camera to access your menu</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4 flex-shrink-0">4</span>
                <span className="text-lg">They'll see complete nutrition information for every dish</span>
              </li>
            </ol>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 mt-20 print:hidden">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Eatlytic. Helping health-conscious diners make better choices.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantQR;
