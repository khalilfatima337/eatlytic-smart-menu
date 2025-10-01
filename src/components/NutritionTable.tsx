import { NutritionInfo } from '@/types/restaurant';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface NutritionTableProps {
  nutrition: NutritionInfo;
}

const NutritionTable = ({ nutrition }: NutritionTableProps) => {
  const nutritionRows = [
    { label: 'Calories', value: nutrition.calories, unit: '' },
    { label: 'Protein', value: nutrition.protein, unit: 'g' },
    { label: 'Carbohydrates', value: nutrition.carbs, unit: 'g' },
    { label: 'Total Fat', value: nutrition.fat, unit: 'g' },
    { label: 'Sugar', value: nutrition.sugar, unit: 'g' },
    { label: 'Dietary Fiber', value: nutrition.fiber, unit: 'g' },
    { label: 'Sodium', value: nutrition.sodium, unit: 'mg' },
  ];

  return (
    <Card className="border-border">
      <CardHeader className="bg-muted/50">
        <CardTitle className="text-xl text-foreground">Nutrition Facts</CardTitle>
        <p className="text-sm text-muted-foreground">Serving Size: {nutrition.servingSize}</p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-border">
          {nutritionRows.map((row, index) => (
            <div
              key={row.label}
              className={`flex justify-between items-center p-4 hover:bg-muted/30 transition-colors ${
                index === 0 ? 'bg-primary/5' : ''
              }`}
            >
              <span className={`font-medium ${index === 0 ? 'text-lg text-foreground' : 'text-foreground'}`}>
                {row.label}
              </span>
              <span className={`font-bold ${index === 0 ? 'text-xl text-primary' : 'text-foreground'}`}>
                {row.value}
                {row.unit}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionTable;
