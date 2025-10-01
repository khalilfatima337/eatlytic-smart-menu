export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  sugar: number;
  fiber: number;
  sodium: number;
  servingSize: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  prepTime: string;
  nutrition: NutritionInfo;
  dietTags: string[];
  ingredients?: string[];
  rating?: number;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  image: string;
  rating: number;
  reviewCount: number;
  menu: MenuItem[];
}
