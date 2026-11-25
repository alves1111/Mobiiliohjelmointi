import {useState} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

//luodaan tyyppi Props, joka määrittelee komponentin TaskInput propsit. onAdd on funktio, joka ottaa parametrina merkkijonon (taskin nimen) ja palauttaa tyhjän arvon (void).
type Props = {
    onAdd: (name: string) => void;
};
//luodaan TaskInput-komponentti, joka ottaa propsina onAdd-funktion. Komponentti käyttää useState-hookia hallitsemaan syötettyä tekstiä (taskin nimeä). handleSave-funktio tarkistaa, että syötetty teksti ei ole tyhjä, kutsuu onAdd-funktiota ja tyhjentää tekstikentän.
export default function TaskInput({ onAdd }: Props) {
    const [text, setText] = useState('');
//luodaan handleSave-funktio, joka tarkistaa, että syötetty teksti ei ole tyhjä. Jos teksti ei ole tyhjä, kutsutaan onAdd-funktiota ja tyhjennetään tekstikenttä.
    const handleSave = () => {
        if (text.trim() === '') return;
        onAdd(text.trim());
        setText('');
    };

    return (
    <View style={styles.row}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={text}
        onChangeText={setText}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  input: { flex: 1, fontSize: 16, paddingVertical: 8 },
});