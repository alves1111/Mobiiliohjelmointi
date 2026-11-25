import { Pressable, Text, StyleSheet } from 'react-native';
import { Task } from '../types';

//kertoo komponentin propsit. task on Task-tyyppinen objekti, joka sisältää tehtävän tiedot (id, name, done). onToggle on funktio, joka ottaa parametrina merkkijonon (tehtävän id) ja palauttaa tyhjän arvon (void).
type Props = {
  task: Task;
  onToggle: (id: string) => void;
};
//lähettää app-komponentille tiedon siitä, että tehtävä on merkitty tehdyksi tai tekemättömäksi. Kun käyttäjä painaa tehtävää, kutsutaan onToggle-funktiota, joka vaihtaa tehtävän tilan (done) päinvastaiseksi.
export default function TaskRow({ task, onToggle }: Props) {
    return ( 
        <Pressable onPress={() => onToggle(task.id)}>
            <Text style={[styles.text, task.done && styles.done]}>
                {task.name}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        paddingVertical: 8,
    },
    done: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
});