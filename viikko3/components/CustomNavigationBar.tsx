import { Appbar } from 'react-native-paper'; //tuo Appbar komponentin react-native-paper kirjastosta
import { StackHeaderProps } from '@react-navigation/stack'; //tyyppimääritys navigointipalkille
import { getHeaderTitle } from '@react-navigation/elements'; //hae sivun otsikko

export default function CustomNavigationBar({ navigation, route, options, back }: StackHeaderProps) { //luo navigointipalkin
  const title = getHeaderTitle(options, route.name); //hae sivun otsikko

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {!back ? (
        <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Second')} />
      ) : null}
    </Appbar.Header>
  );
}