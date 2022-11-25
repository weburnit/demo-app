import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  Icon,
  LinearGradient,
  Link,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUpScreen_xWq5H1BT = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradienta98db7de}
        endY={100}
        endX={100}
        color2={theme.colors.primary}
        startX={0}
        color1={theme.colors.darkerPink}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={styles.KeyboardAwareScrollView4751f32bContent}
          showsVerticalScrollIndicator={true}
        >
          <View>
            <Image
              style={styles.Imageebf563a5}
              resizeMode={'contain'}
              source={Images.LogoWhite}
            />
          </View>
          <Spacer top={24} right={8} bottom={24} left={8} />
          <View>
            {/* Name */}
            <View>
              {/* Label */}
              <Text
                style={[styles.Text06c6044e, { color: theme.colors.surface }]}
              >
                {'Name'}
              </Text>
              {/* Field */}
              <View
                style={[
                  styles.Vieweb5b2fd8,
                  { borderColor: theme.colors.lightInverse },
                ]}
              >
                <Icon
                  style={styles.Iconed0d1bd6}
                  name={'Feather/user'}
                  size={20}
                  color={theme.colors.surface}
                />
                <View style={styles.View70166b3f}>
                  <TextInput
                    onChangeText={newTextInputValue => {
                      const textInputValue = newTextInputValue;
                      try {
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TextInput797620a9,
                      { color: theme.colors.surface },
                    ]}
                    placeholder={'Jane Doh'}
                    value={textInputValue}
                    keyboardType={'default'}
                    placeholderTextColor={theme.colors.lightInverse}
                    autoCapitalize={'words'}
                  />
                </View>
              </View>
            </View>
            <Spacer top={12} right={8} bottom={12} left={8} />
            {/* Email */}
            <View>
              {/* Label */}
              <Text
                style={[styles.Text06c6044e, { color: theme.colors.surface }]}
              >
                {'Email'}
              </Text>
              {/* Field */}
              <View
                style={[
                  styles.Vieweb5b2fd8,
                  { borderColor: theme.colors.lightInverse },
                ]}
              >
                <Icon
                  style={styles.Iconed0d1bd6}
                  name={'MaterialIcons/alternate-email'}
                  size={20}
                  color={theme.colors.surface}
                />
                <View style={styles.View70166b3f}>
                  <TextInput
                    onChangeText={newTextInputValue => {
                      const textInputValue = newTextInputValue;
                      try {
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TextInput265cc86a,
                      { color: theme.colors.surface },
                    ]}
                    value={textInputValue}
                    keyboardType={'email-address'}
                    placeholderTextColor={theme.colors.lightInverse}
                    placeholder={'JaneDoh@email.com'}
                    autoCapitalize={'none'}
                  />
                </View>
              </View>
            </View>
            <Spacer top={12} right={8} bottom={12} left={8} />
            {/* Password */}
            <View>
              {/* Label */}
              <Text
                style={[styles.Text06c6044e, { color: theme.colors.surface }]}
              >
                {'Password'}
              </Text>
              {/* Field */}
              <View
                style={[
                  styles.Vieweb5b2fd8,
                  { borderColor: theme.colors.lightInverse },
                ]}
              >
                <Icon
                  style={styles.Iconed0d1bd6}
                  name={'MaterialIcons/lock-outline'}
                  size={20}
                  color={theme.colors.surface}
                />
                <View style={styles.View70166b3f}>
                  <TextInput
                    onChangeText={newTextInputValue => {
                      const textInputValue = newTextInputValue;
                      try {
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TextInputbaf7ad36,
                      { color: theme.colors.surface },
                    ]}
                    placeholder={'MySecretPassword'}
                    value={textInputValue}
                    keyboardType={'default'}
                    placeholderTextColor={theme.colors.lightInverse}
                    secureTextEntry={true}
                  />
                </View>
              </View>
            </View>
          </View>
          <Spacer top={32} right={8} bottom={32} left={8} />
          <View>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('MainTabs', { screen: 'HomeScreen' });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolid98139fb7,
                {
                  backgroundColor: theme.colors.transparent,
                  borderColor: theme.colors.mediumInverse,
                  color: theme.colors.surface,
                },
              ]}
              title={'Get Started'}
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
                style={[styles.Linkebe487aa, { color: theme.colors.surface }]}
                title={'Already have an account? Sign in'}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid98139fb7: {
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRadius: 12,
    borderRightWidth: 3,
    borderTopWidth: 3,
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
    paddingBottom: 16,
    paddingTop: 16,
    textAlign: 'center',
  },
  Iconed0d1bd6: { height: 20, width: 20 },
  Imageebf563a5: { height: 32, width: 125 },
  KeyboardAwareScrollView4751f32bContent: {
    justifyContent: 'center',
    paddingBottom: 48,
    paddingLeft: 48,
    paddingRight: 48,
    paddingTop: 48,
  },
  LinearGradienta98db7de: { height: '100%', width: '100%' },
  Linkebe487aa: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    textAlign: 'center',
  },
  Text06c6044e: { fontFamily: 'Poppins_500Medium', fontSize: 14 },
  Text36a52528: { fontFamily: 'Poppins_400Regular', fontSize: 16 },
  Text9c66e4f6: { fontFamily: 'Poppins_600SemiBold', fontSize: 20 },
  TextInput265cc86a: { fontFamily: 'Poppins_400Regular', fontSize: 18 },
  TextInput797620a9: { fontFamily: 'Poppins_400Regular', fontSize: 18 },
  TextInputbaf7ad36: { fontFamily: 'System', fontSize: 18, fontWeight: '400' },
  View70166b3f: { flex: 1, marginLeft: 4 },
  Viewcebd1bce: { alignSelf: 'center' },
  Vieweb5b2fd8: {
    alignItems: 'center',
    borderBottomWidth: 2,
    flexDirection: 'row',
    marginTop: 8,
    paddingBottom: 12,
  },
});

export default withTheme(SignUpScreen_xWq5H1BT);
