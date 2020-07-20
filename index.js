import {Navigation} from 'react-native-navigation';
import {PendoSDK, NavigationLibraryType} from 'rn-applause';

// Note:
// in order to test Redux and MobX separately,
// please comment unnecessary import, this is important
// because RNN registers screens for both of them if two imports are presented

// import { startApp as startReduxApp } from './srcRedux/App';
import {startApp as startMobXApp} from './srcMobX/App';

Navigation.events().registerAppLaunchedListener(() => {
  //Init params are optional
  const initParams = {
    visitorId: 'Duc Vu',
    accountId: 'Acme Inc',
    visitorData: {
      age: '25',
      country: 'USA',
    },
    accountData: {
      Tier: '1',
      Size: 'Enterprise',
    },
  };
  const navigationOptions = {
    library: NavigationLibraryType.ReactNativeNavigation,
    navigation: Navigation,
  };
  const pendoKey =
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJkYXRhY2VudGVyIjoidXMiLCJrZXkiOiI4NDI0MTkwMjM2YTkxNzQ1ZDI4NWZkNmRhMzEzNzkzNTU0NWQzZTNiMWY5YjUzMWRhNDczZWZmZDhhM2YyODY2MGYwMGE3OThkOGYwM2Y3YjI1Yzc2Y2IwMmM3NDJkMDhkNzk4M2E1NDY4YmExYmE3OTliMzRiZDVhZTVjMDVjZGMwMjg0ODQ3NWU1ZDAzYmY5ZTIzYWU5ZWI4NWNhMmM1Mjk0MzNlZTQ2YjZkZmVmYTk4M2Y2MDg4MmNiYzM0NDJjMDU3NTY5NDE4YjU1ZjdmOWNjZGNiMTM0OGQ0MTNjYS5iNGU1YzY2YzYzNDM2NGVkMzg1M2RiNzY1ZWQ3ODIwZC5jYzdiMTBkMzg0Njg2MjA2M2JkZTA0Y2MwMmZjNDQwNGI0Y2E2Y2I4ZTAwZWI2ZWMwZmE1YzI2NGU3ODg1ZDVmIn0.lUClBvwm4ovjIh4rYzvgzFQZhU7aaoBra-RcelORCPb2OS9IIHl-m2J189tfa2sBZ6Nhme-T8AFVaAS5NYREKsu9NsiH7ChFJiGpih00-SqQIZWzjQ7AXYEPXonQACJZhdEy0nfe0DTgDzeANg6mw5fQAjIxtHAzbO_D6lGriC8';
  PendoSDK.initSdk(pendoKey, initParams, navigationOptions);
  startMobXApp();
});
