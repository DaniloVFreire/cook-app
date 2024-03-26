import { ScrollView } from 'react-native';
import { styles } from './styles';
import { Ingredient } from '@/components/Ingredient';

export type IngredientListProps = {
  onPressHandle: (value: string) => void;
  selected: string[];
};

export function IngredientList({
  onPressHandle,
  selected
}: IngredientListProps) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {Array.from({ length: 100 }).map((item, index) => (
        <Ingredient
          key={index}
          name="Maçã"
          image=""
          selected={selected.includes(String(index))}
          onPress={() => onPressHandle(String(index))}
        />
      ))}
    </ScrollView>
  );
}
