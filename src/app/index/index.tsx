import { View, Text } from 'react-native';
import { styles } from './styles';
import { IngredientList } from '@/components/IngredientList';
import { useState } from 'react';
export default function Index() {
  const [selected, setSelected] = useState<string[]>([]);

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      setSelected(state => selected.filter(item => item !== value));
    } else {
      setSelected(state => [...selected, value]);
    }
    console.log(selected);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {'\n'}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos {'\n'}
        produtos que vc escolheu.
      </Text>
      <IngredientList
        onPressHandle={handleToggleSelected}
        selected={selected}
      />
    </View>
  );
}
