import { Text, View } from 'react-native';

import { theme } from '@theme';

export const App = (): JSX.Element => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: theme.fonts.Roboto_Regular }}>HELLO NIMESHIKA</Text>
      <Text style={{ fontFamily: theme.fonts.Roboto_Medium }}>HELLO SHASHIKA</Text>
      <Text style={{ fontFamily: theme.fonts.RobotoBold }}>HELLO SHADOW</Text>
    </View>
  );
};
