import { ScrollView } from 'react-native';
import { styles } from './styles';
import { Ingredient } from '@/components/Ingredient';
import { services } from '@/services';

export type IngredientListProps = {
  onPressHandle: (value: string) => void;
  selected: string[];
  ingredients: IngredientResponse[];
};

export function IngredientList({
  onPressHandle,
  selected,
  ingredients
}: IngredientListProps) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {ingredients.map((item, index) => (
        <Ingredient
          key={item.id}
          name={item.name}
          image={`${services.storage.imagePath}/${item.image}`}
          selected={selected.includes(item.id)}
          onPress={() => onPressHandle(item.id)}
        />
      ))}
    </ScrollView>
  );
}
