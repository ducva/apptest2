import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useObserver} from 'mobx-react';
import {PendoSDK, NavigationLibraryType} from 'rn-applause';
import {useStore} from '../store';

const Empty: EmptyComponentProps_MobX = (): JSX.Element => {
  const {redditStore} = useStore();
  const [text, setText] = useState('Sample Text');
  const handleSubmit = () => {
    PendoSDK.track('Submit Form', {
      formName: 'Sample1',
      formValue: text,
    });
    Alert.alert('Form Submit', `Submit ${text} Successfully`, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };
  const handleChangeText = val => {
    setText(val);
  };
  PendoSDK.track('OpenSecondPage');
  return useObserver(() => (
    <SafeAreaView style={styles.container}>
      <TextInput value={text} onChangeText={handleChangeText} />
      <Button title="Submit" onPress={handleSubmit} />
      <Icon name={'react'} size={100} />
    </SafeAreaView>
  ));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    margin: 16,
    textAlign: 'center',
  },
});

export default Empty;
