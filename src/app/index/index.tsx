import { View, Text, Alert } from 'react-native';
import { styles } from './styles';
import { IngredientList } from '@/components/IngredientList';
import { useState } from 'react';
import { Selected } from '@/components/Selected';
import { router } from 'expo-router';

export default function Index() {
  const [selected, setSelected] = useState<string[]>([]);

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      setSelected(state => selected.filter(item => item !== value));
    } else {
      setSelected(state => [...selected, value]);
    }
    //console.log(selected);
  }
  function handleClearSelected() {
    Alert.alert(
      'Limpar',
      'Deseja realmente limpar todos os itens selecionados?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => setSelected([]) }
      ]
    );
  }
  function handleSearch() {
    router.navigate('/recipes');
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
      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </View>
  );
}
