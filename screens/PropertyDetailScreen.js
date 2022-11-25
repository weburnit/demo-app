import React from 'react';
import * as ExamplePropertiesApi from '../apis/ExamplePropertiesApi.js';
import {
  ButtonOutline,
  ButtonSolid,
  Divider,
  Icon,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const PropertyDetailScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      scrollable={true}
      hasSafeArea={false}
      hasTopSafeArea={false}
    >
      <ExamplePropertiesApi.FetchIndividualPropertyGET
        method={'GET'}
        id={props.route?.params?.id ?? 2}
      >
        {({ loading, error, data, refetchIndividualProperty }) => {
          const fetchData = data;
          if (!fetchData || loading) {
            return <ActivityIndicator />;
          }

          if (error) {
            return (
              <Text style={{ textAlign: 'center' }}>
                There was a problem fetching this data
              </Text>
            );
          }

          return (
            <>
              <View style={styles.Viewf63d9a7b}>
                <ImageBackground
                  style={styles.ImageBackground8f6ed0a5}
                  resizeMode={'cover'}
                  source={{ uri: `${data && data['image_url']}` }}
                >
                  <View style={styles.View4791e14e}>
                    <View
                      style={[
                        styles.Viewb5c47838,
                        {
                          backgroundColor: theme.colors.primary,
                          borderRadius: 8,
                        },
                      ]}
                    >
                      <View style={styles.Viewc992f941}>
                        <Text
                          style={[
                            styles.Text83d95284,
                            { color: theme.colors.surface },
                          ]}
                        >
                          {'Only $'}
                          {fetchData?.nightly_price}
                          {' per night'}
                        </Text>
                      </View>

                      <View>
                        <ButtonOutline
                          style={[
                            styles.ButtonOutline637fde77,
                            {
                              borderColor: theme.colors.surface,
                              color: theme.colors.surface,
                            },
                          ]}
                          title={'BOOK'}
                        />
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View>
                <View style={styles.Viewe5790288}>
                  <Text
                    style={[styles.Text462d98b4, { color: theme.colors.light }]}
                  >
                    {fetchData?.city}
                  </Text>

                  <Text
                    style={[
                      styles.Text9b62aff0,
                      { color: theme.colors.strong },
                    ]}
                    textBreakStrategy={'highQuality'}
                    ellipsizeMode={'tail'}
                    allowFontScaling={true}
                    numberOfLines={2}
                  >
                    {fetchData?.name}
                  </Text>
                  <Spacer top={8} right={8} bottom={8} left={8} />
                  <View>
                    <View style={styles.Viewdebd3207}>
                      <View
                        style={[
                          styles.Viewbe76371b,
                          {
                            borderColor: theme.colors.lightest,
                            borderRadius: 8,
                          },
                        ]}
                      >
                        <Icon
                          name={'MaterialCommunityIcons/bed-king'}
                          size={24}
                          color={theme.colors.primary}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.Text462d98b4,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {fetchData?.beds}
                          {' beds'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <View
                        style={[
                          styles.Viewb97ffe2b,
                          {
                            borderColor: theme.colors.lightest,
                            borderRadius: 8,
                          },
                        ]}
                      >
                        <Icon
                          name={'MaterialIcons/bathtub'}
                          size={20}
                          color={theme.colors.primary}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.Text462d98b4,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {fetchData?.bathrooms}
                          {' baths'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <View
                        style={[
                          styles.View0bd09655,
                          {
                            borderColor: theme.colors.lightest,
                            borderRadius: 8,
                          },
                        ]}
                      >
                        <Icon
                          name={'MaterialIcons/group'}
                          size={24}
                          color={theme.colors.primary}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.Text462d98b4,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {fetchData?.maxGuests}
                          {' max'}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={[
                        styles.Textdb80b6d9,
                        { color: theme.colors.strong },
                      ]}
                    >
                      {'Rates'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <View style={styles.Viewdebd3207}>
                      <View style={styles.Viewc992f941}>
                        <Text
                          style={[
                            styles.Text1f76be60,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Nightly'}
                        </Text>
                      </View>

                      <View style={styles.Viewc992f941}>
                        <Text
                          style={[
                            styles.Text81070337,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'$'}
                          {fetchData?.nightly_price}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      style={styles.Divider22627dc6}
                      color={theme.colors.lightest}
                    />
                    <View style={styles.Viewdebd3207}>
                      <View style={styles.Viewc992f941}>
                        <Text
                          style={[
                            styles.Text1f76be60,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Weekly'}
                        </Text>
                      </View>

                      <View style={styles.Viewc992f941}>
                        <Text
                          style={[
                            styles.Text81070337,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'$'}
                          {fetchData?.weekly_price}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      style={styles.Divider22627dc6}
                      color={theme.colors.lightest}
                    />
                    <View style={styles.Viewdebd3207}>
                      <View style={styles.Viewc992f941}>
                        <Text
                          style={[
                            styles.Text1f76be60,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Monthly'}
                        </Text>
                      </View>

                      <View style={styles.Viewc992f941}>
                        <Text
                          style={[
                            styles.Text81070337,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'$'}
                          {fetchData?.monthly_rental_price}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={[
                        styles.Text62c8a806,
                        { color: theme.colors.strong },
                      ]}
                    >
                      {'Description'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <Text
                      style={[
                        styles.Text36edb13b,
                        { color: theme.colors.medium },
                      ]}
                    >
                      {fetchData?.description}
                    </Text>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={[
                        styles.Text62c8a806,
                        { color: theme.colors.strong },
                      ]}
                    >
                      {'More'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <View style={styles.Viewdebd3207}>
                      <View style={styles.Viewc992f941}>
                        <Text
                          style={[
                            styles.Text1f76be60,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Cancellation'}
                        </Text>
                      </View>

                      <View style={styles.Viewc992f941}>
                        <Text
                          style={[
                            styles.Text81070337,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {fetchData?.cancellation_policy}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      style={styles.Divider22627dc6}
                      color={theme.colors.lightest}
                    />
                    <View style={styles.Viewdebd3207}>
                      <View style={styles.Viewc992f941}>
                        <Text
                          style={[
                            styles.Text1f76be60,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Minimum stay'}
                        </Text>
                      </View>

                      <View style={styles.Viewc992f941}>
                        <>
                          {!fetchData?.min_stay ? null : (
                            <Text
                              style={[
                                styles.Text81070337,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {fetchData?.min_stay}
                            </Text>
                          )}
                        </>
                        <>
                          {fetchData?.min_stay ? null : (
                            <Text
                              style={[
                                styles.Text81070337,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {'No minimum'}
                            </Text>
                          )}
                        </>
                      </View>
                    </View>
                    <Divider
                      style={styles.Divider22627dc6}
                      color={theme.colors.lightest}
                    />
                    <View style={styles.Viewdebd3207}>
                      <View style={styles.Viewc992f941}>
                        <Text
                          style={[
                            styles.Text1f76be60,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Cleaning fee'}
                        </Text>
                      </View>

                      <View style={styles.Viewc992f941}>
                        <Text
                          style={[
                            styles.Text81070337,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {fetchData?.cleaning_fee}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Spacer top={16} right={8} bottom={16} left={8} />
                  <View>
                    <ButtonSolid
                      onPress={() => {
                        const handler = async () => {
                          try {
                            await WebBrowser.openBrowserAsync(
                              `https://www.google.com/maps/@${fetchData?.latitude},${fetchData?.longitude},18z`
                            );
                          } catch (err) {
                            console.error(err);
                          }
                        };
                        handler();
                      }}
                      style={[
                        styles.ButtonSolid9f8910b8,
                        { backgroundColor: theme.colors.primary },
                      ]}
                      title={'View on Map'}
                    />
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                </View>
              </View>
            </>
          );
        }}
      </ExamplePropertiesApi.FetchIndividualPropertyGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonOutline637fde77: {
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRadius: 8,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderWidth: 1,
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
  },
  ButtonSolid9f8910b8: {
    borderRadius: 8,
    fontFamily: 'Poppins_600SemiBold',
    paddingBottom: 16,
    paddingTop: 16,
    textAlign: 'center',
  },
  Divider22627dc6: { height: 1, marginBottom: 12, marginTop: 12 },
  ImageBackground8f6ed0a5: {
    height: '100%',
    justifyContent: 'flex-end',
    width: '100%',
  },
  Text1f76be60: { fontFamily: 'Poppins_400Regular' },
  Text36edb13b: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 26,
    textAlign: 'left',
  },
  Text462d98b4: { fontFamily: 'Poppins_400Regular', fontSize: 12 },
  Text62c8a806: { fontFamily: 'Poppins_600SemiBold', fontSize: 16 },
  Text81070337: { fontFamily: 'Poppins_500Medium' },
  Text83d95284: { fontFamily: 'Poppins_500Medium', fontSize: 16 },
  Text9b62aff0: { fontFamily: 'Poppins_600SemiBold', fontSize: 22 },
  Textdb80b6d9: { fontFamily: 'Poppins_600SemiBold', fontSize: 16 },
  View0bd09655: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  View4791e14e: {
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
  },
  Viewb5c47838: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 8,
    paddingTop: 6,
  },
  Viewb97ffe2b: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  Viewbe76371b: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  Viewc992f941: { flex: 1 },
  Viewdebd3207: { flexDirection: 'row' },
  Viewe5790288: {
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
  },
  Viewf63d9a7b: { height: 420, width: '100%' },
});

export default withTheme(PropertyDetailScreen);
