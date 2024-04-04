import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Recipe } from '@/components/Recipe';
//MvLDjZscIiivGAD4
export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={32} onPress={router.back} />
        <Text style={styles.title}>Ingredientes</Text>
      </View>
      <FlatList
        data={['1']}
        keyExtractor={item => item}
        renderItem={() => (
          <Recipe
            recipe={{
              name: 'Omelete',
              image:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHaTzVhX9tNxeDyPtb8qG5H5vOBQFZKR_KrZPzL-vdKg&s',
              minutes: 10
            }}
          />
        )}
      ></FlatList>
    </View>
  );
}
