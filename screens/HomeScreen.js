import React from 'react';
import * as ExamplePropertiesApi from '../apis/ExamplePropertiesApi.js';
import {
  Divider,
  Icon,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const HomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      scrollable={true}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <Text style={[styles.Text76152570, { color: theme.colors.strong }]}>
        {'Popular Rentals'}
      </Text>

      <ExamplePropertiesApi.FetchListOfPropertiesGET method={'GET'} limit={12}>
        {({ loading, error, data, refetchListOfProperties }) => {
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
            <FlatList
              data={fetchData}
              listKey={'A0vfwJrX'}
              keyExtractor={listData =>
                listData?.id || listData?.uuid || JSON.stringify(listData)
              }
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <>
                    <View
                      style={[
                        styles.Viewd10efff8,
                        {
                          backgroundColor: theme.colors.surface,
                          borderColor: theme.colors.divider,
                          borderRadius: 8,
                        },
                      ]}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('ScreenStack', {
                              screen: 'PropertyDetailScreen',
                              params: { id: listData?.id },
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <View style={styles.View159f4146}>
                          <ImageBackground
                            style={[
                              styles.ImageBackgrounda98db7de,
                              { borderRadius: theme.roundness },
                            ]}
                            resizeMode={'cover'}
                            source={{ uri: `${listData?.image_url}` }}
                          >
                            <View style={styles.View272ee112}>
                              <View
                                style={[
                                  styles.Viewa76a6024,
                                  {
                                    backgroundColor: theme.colors.primary,
                                    borderBottomLeftRadius: 8,
                                    borderTopLeftRadius: 8,
                                  },
                                ]}
                              >
                                <Text
                                  style={[
                                    styles.Text62c8a806,
                                    { color: theme.colors.surface },
                                  ]}
                                  allowFontScaling={true}
                                  ellipsizeMode={'tail'}
                                  textBreakStrategy={'highQuality'}
                                >
                                  {'$'}
                                  {listData?.nightly_price}
                                </Text>

                                <Text
                                  style={[
                                    styles.Text86b81d05,
                                    { color: theme.colors.surface },
                                  ]}
                                  allowFontScaling={true}
                                  ellipsizeMode={'tail'}
                                  textBreakStrategy={'highQuality'}
                                >
                                  {'/night'}
                                </Text>
                              </View>
                            </View>
                          </ImageBackground>
                        </View>

                        <View style={styles.View8db74792}>
                          <View>
                            <Text
                              style={[
                                styles.Textd1fb55d2,
                                { color: theme.colors.strong },
                              ]}
                              textBreakStrategy={'highQuality'}
                              ellipsizeMode={'tail'}
                              allowFontScaling={true}
                              numberOfLines={2}
                            >
                              {listData?.name}
                            </Text>
                            <Spacer top={4} right={8} bottom={4} left={8} />
                            <Text
                              style={[
                                styles.Textb46deedc,
                                { color: theme.colors.medium },
                              ]}
                              ellipsizeMode={'tail'}
                              numberOfLines={2}
                            >
                              {listData?.description}
                            </Text>
                            <Divider
                              style={styles.Divider22627dc6}
                              color={theme.colors.divider}
                            />
                            <View style={styles.Viewce4accf0}>
                              <View style={styles.View7d6a39b7}>
                                <Icon
                                  name={'MaterialCommunityIcons/bed-king'}
                                  size={24}
                                  color={theme.colors.primary}
                                />
                                <Spacer right={2} left={2} />
                                <Text
                                  style={[
                                    styles.Textcbb2bb65,
                                    { color: theme.colors.medium },
                                  ]}
                                >
                                  {listData?.beds}
                                  {' beds'}
                                </Text>
                              </View>
                              <Spacer top={8} right={8} bottom={8} left={8} />
                              <View style={styles.View7d6a39b7}>
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
                                  {listData?.bathrooms}
                                  {' baths'}
                                </Text>
                              </View>
                              <Spacer top={8} right={8} bottom={8} left={8} />
                              <View style={styles.View7d6a39b7}>
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
                                  {listData?.maxGuests}
                                  {' guests'}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      </Touchable>
                    </View>
                    <Spacer top={12} right={8} bottom={12} left={8} />
                  </>
                );
              }}
              contentContainerStyle={styles.FlatList8db74792Content}
            />
          );
        }}
      </ExamplePropertiesApi.FetchListOfPropertiesGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Divider22627dc6: { height: 1, marginBottom: 12, marginTop: 12 },
  FlatList8db74792Content: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  ImageBackgrounda98db7de: { height: '100%', width: '100%' },
  Text462d98b4: { fontFamily: 'Poppins_400Regular', fontSize: 12 },
  Text62c8a806: { fontFamily: 'Poppins_600SemiBold', fontSize: 16 },
  Text76152570: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 26,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  Text86b81d05: { fontFamily: 'Poppins_500Medium', fontSize: 10 },
  Textb46deedc: { lineHeight: 24 },
  Textcbb2bb65: { fontFamily: 'Poppins_400Regular', fontSize: 12 },
  Textd1fb55d2: { fontFamily: 'Poppins_600SemiBold', fontSize: 18 },
  View159f4146: { height: 240 },
  View272ee112: { alignItems: 'flex-end', marginTop: 16 },
  View7d6a39b7: { alignItems: 'center', flexDirection: 'row' },
  View8db74792: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  Viewa76a6024: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
  },
  Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
  Viewd10efff8: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    overflow: 'hidden',
  },
});

export default withTheme(HomeScreen);
