import React from 'react';
import * as CustomCode from '../CustomCode.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ButtonSolid,
  Link,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const myFunctionName = (text, onPress) => {
    return (
      <Button onPress={onPress}>
        <Text>{text}</Text>
      </Button>
    );
  };

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <ImageBackground
        style={styles.ImageBackgrounda98db7de}
        source={Images.WelcomeBg}
        resizeMode={'cover'}
      >
        <View style={styles.Viewa16b39f2}>
          <View style={styles.Viewd917f75f}>
            <Image
              style={styles.Imageeaa5cb19}
              resizeMode={'contain'}
              source={Images.LogoWhite}
            />
            <Spacer right={8} bottom={12} left={8} top={12} />
            <Text
              style={[
                styles.Text49a215bf,
                { color: theme.colors.mediumInverse },
              ]}
              textBreakStrategy={'highQuality'}
              ellipsizeMode={'tail'}
              allowFontScaling={true}
            >
              {'Discover your next stay.'}
            </Text>

            <Text
              style={[
                styles.Text1f76be60,
                {
                  color: theme.colors.mediumInverse,
                  typography: theme.typography.body1,
                },
              ]}
              textBreakStrategy={'highQuality'}
              ellipsizeMode={'tail'}
              allowFontScaling={true}
            >
              {'The best rental properties, curated for you. '}
            </Text>
          </View>

          <View style={styles.View010acbb4}>
            {/* Create Account */}
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('SignUpScreen_xWq5H1BT');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolid53926d01,
                {
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.surface,
                },
              ]}
              title={'Create An Account'}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
            <View style={styles.Viewcebd1bce}>
              <Link
                onPress={() => {
                  try {
                    navigation.navigate('SignInScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[styles.Link3e0ee043, { color: theme.colors.surface }]}
                title={'Sign in to your account'}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid53926d01: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    paddingBottom: 20,
    paddingTop: 20,
    textAlign: 'center',
  },
  ImageBackgrounda98db7de: { height: '100%', width: '100%' },
  Imageeaa5cb19: { height: 50, width: 125 },
  Link3e0ee043: { fontFamily: 'Poppins_500Medium' },
  Text1f76be60: { fontFamily: 'Poppins_400Regular' },
  Text49a215bf: { fontFamily: 'Poppins_700Bold', fontSize: 26 },
  View010acbb4: { paddingBottom: 64, paddingLeft: 24, paddingRight: 24 },
  Viewa16b39f2: { flex: 1, justifyContent: 'space-between' },
  Viewcebd1bce: { alignSelf: 'center' },
  Viewd917f75f: { marginLeft: 16, marginRight: 16, marginTop: 64 },
});

export default withTheme(WelcomeScreen);
