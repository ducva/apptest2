import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  Alert,
  TextInput,
  Button,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {useNavigationButtonPress} from 'react-native-navigation-hooks';
import {useObserver} from 'mobx-react';

import {useStore} from '../store';
import {PendoSDK} from 'rn-applause';

const Home: HomeComponentType_MobX = ({componentId}): JSX.Element => {
  const listRef = React.useRef<FlatList<any>>(null);
  const {redditStore} = useStore();

  useNavigationButtonPress(
    _ => {
      Alert.alert('This is just a simple button');
    },
    componentId,
    'hi_button_id',
  );

  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChangeUserName = val => {
    setUsername(val);
  };

  const handleLogIn = () => {
    PendoSDK.switchVisitor({
      visitorId: 'NEW_VISITOR_ID',
      accountId: 'NEW_ACCOUNT_ID',
    });
    // PendoSDK.switchVisitor({
    //   visitorId:
    //     '_PENDO_T_M_F62CD462EE9DB6F35DCD3EE3AC451BEEC39D5669604A8A9076C280128071376B',
    //   accountId: 'try to break api',
    // });

    PendoSDK.setAccountData({age: 'Property 1', country: 'Property 2'});
    PendoSDK.setVisitorData({name: 'Visitor Prop 1'});
    setLoggedIn(true);
  };

  const handleLogout = () => {
    PendoSDK.clearVisitor();
    setUsername('');
    setLoggedIn(false);
  };
  const handleTrackEvent = () => {
    PendoSDK.track('trackEventWithData', {prop1: 'Prop'});
  };
  return useObserver(() => (
    <SafeAreaView style={{flex: 1}}>
      {!loggedIn && (
        <>
          <TextInput value={username} onChangeText={handleChangeUserName} />
          <Button title="Log In" onPress={handleLogIn} />
        </>
      )}

      {loggedIn && (
        <>
          <Button title="Track Event" onPress={handleTrackEvent} />
          <Button title="Log Out" onPress={handleLogout} />
        </>
      )}
    </SafeAreaView>
  ));
};

Home.options = () => ({
  topBar: {
    visible: true,
    title: {
      text: 'Subreddits',
    },
    rightButtons: [
      {
        id: 'hi_button_id',
        text: 'Hi',
      },
    ],
  },
});

export default Home;
