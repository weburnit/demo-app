import React from 'react';
import * as ExampleSavedPropertiesApi from '../apis/ExampleSavedPropertiesApi.js';
import {
  ButtonSolid,
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

const SavedScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [showList, setShowList] = React.useState(false);

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      scrollable={true}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <Text style={[styles.Text9c2faa04, { color: theme.colors.strong }]}>
        {'Saved Rentals'}
      </Text>

      <View style={styles.View9fa86917}>
        <View
          style={[
            styles.View6cba93de,
            {
              backgroundColor: theme.colors.divider,
              borderColor: theme.colors.lightest,
              borderRadius: 14,
            },
          ]}
        >
          <View style={styles.Viewc992f941}>
            {/* GridButtonActive */}
            <>
              {showList ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolid0de85cc1,
                    { backgroundColor: theme.colors.primary },
                  ]}
                  title={'Grid'}
                />
              )}
            </>
            {/* GridButtonInactive */}
            <>
              {!showList ? null : (
                <ButtonSolid
                  onPress={() => {
                    try {
                      setShowList(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolid4b684819,
                    {
                      backgroundColor: theme.colors.divider,
                      color: theme.colors.light,
                    },
                  ]}
                  title={'Grid'}
                />
              )}
            </>
          </View>

          <View style={styles.Viewc992f941}>
            {/* ListButtonActive */}
            <>
              {!showList ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolid4b684819,
                    { backgroundColor: theme.colors.primary },
                  ]}
                  title={'List'}
                />
              )}
            </>
            {/* ListButtonInactive */}
            <>
              {showList ? null : (
                <ButtonSolid
                  onPress={() => {
                    try {
                      setShowList(true);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolid87db028c,
                    {
                      backgroundColor: theme.colors.divider,
                      color: theme.colors.light,
                    },
                  ]}
                  title={'List'}
                />
              )}
            </>
          </View>
        </View>
      </View>

      <ExampleSavedPropertiesApi.FetchSavedPropertiesGET
        method={'GET'}
        limit={16}
      >
        {({ loading, error, data, refetchSavedProperties }) => {
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
              {/* Grid */}
              <>
                {showList ? null : (
                  <FlatList
                    data={fetchData}
                    listKey={'jVcvahch'}
                    keyExtractor={gridData =>
                      gridData?.id || gridData?.uuid || JSON.stringify(gridData)
                    }
                    renderItem={({ item }) => {
                      const gridData = item;
                      return (
                        <View style={styles.Viewb7efd8d7}>
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('ScreenStack', {
                                  screen: 'PropertyDetailScreen',
                                  params: { id: gridData?.propertiesId },
                                });
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            <View
                              style={[
                                styles.Viewd10efff8,
                                {
                                  backgroundColor: theme.colors.surface,
                                  borderColor: theme.colors.divider,
                                  borderRadius: 12,
                                },
                              ]}
                            >
                              <View style={styles.View5152e902}>
                                <ImageBackground
                                  style={styles.ImageBackgrounda98db7de}
                                  source={{
                                    uri: `${gridData?.properties?.image_url}`,
                                  }}
                                  resizeMode={'cover'}
                                />
                              </View>

                              <View style={styles.Viewd8f97984}>
                                <Text
                                  style={[
                                    styles.Textd6deb5e7,
                                    { color: theme.colors.strong },
                                  ]}
                                  numberOfLines={1}
                                  ellipsizeMode={'tail'}
                                >
                                  {gridData?.properties?.name}{' '}
                                </Text>

                                <View style={styles.Viewce4accf0}>
                                  <Text
                                    style={[
                                      styles.Textac4fb546,
                                      { color: theme.colors.primary },
                                    ]}
                                  >
                                    {'$'}
                                    {gridData?.properties?.nightly_price}
                                  </Text>

                                  <Text
                                    style={[
                                      styles.Text86b81d05,
                                      { color: theme.colors.primary },
                                    ]}
                                  >
                                    {'/night'}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </Touchable>
                        </View>
                      );
                    }}
                    contentContainerStyle={styles.FlatList7591d95eContent}
                    numColumns={2}
                  />
                )}
              </>
              <>
                {!showList ? null : (
                  <FlatList
                    data={fetchData}
                    listKey={'GapGFmJB'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          <View style={styles.Viewc992f941}>
                            <Touchable
                              onPress={() => {
                                try {
                                  navigation.navigate('ScreenStack', {
                                    screen: 'PropertyDetailScreen',
                                    params: { id: listData?.propertiesId },
                                  });
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              <View
                                style={[
                                  styles.View623a24be,
                                  {
                                    backgroundColor: theme.colors.surface,
                                    borderColor: theme.colors.divider,
                                    borderRadius: 12,
                                  },
                                ]}
                              >
                                <View style={styles.Viewc992f941}>
                                  <ImageBackground
                                    style={styles.ImageBackgrounda98db7de}
                                    source={{
                                      uri: `${listData?.properties?.image_url}`,
                                    }}
                                    resizeMode={'cover'}
                                  />
                                </View>

                                <View style={styles.View6af843ad}>
                                  <Text
                                    style={[
                                      styles.Textacf5772f,
                                      { color: theme.colors.light },
                                    ]}
                                  >
                                    {listData?.properties?.city}
                                  </Text>

                                  <Text
                                    style={[
                                      styles.Text06c6044e,
                                      { color: theme.colors.strong },
                                    ]}
                                    numberOfLines={1}
                                    ellipsizeMode={'tail'}
                                  >
                                    {listData?.properties?.name}{' '}
                                  </Text>

                                  <View style={styles.View76d90f06}>
                                    <Text
                                      style={[
                                        styles.Text252ba2db,
                                        { color: theme.colors.primary },
                                      ]}
                                    >
                                      {'$'}
                                      {listData?.properties?.nightly_price}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.Text86b81d05,
                                        { color: theme.colors.primary },
                                      ]}
                                    >
                                      {'/night'}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </Touchable>
                          </View>
                          <Spacer top={8} right={8} bottom={8} left={8} />
                        </>
                      );
                    }}
                    contentContainerStyle={styles.FlatListe6b20937Content}
                  />
                )}
              </>
            </>
          );
        }}
      </ExampleSavedPropertiesApi.FetchSavedPropertiesGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid0de85cc1: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonSolid4b684819: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonSolid87db028c: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  FlatList7591d95eContent: {
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  FlatListe6b20937Content: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  ImageBackgrounda98db7de: { height: '100%', width: '100%' },
  Text06c6044e: { fontFamily: 'Poppins_500Medium', fontSize: 14 },
  Text252ba2db: { fontFamily: 'Poppins_600SemiBold', fontSize: 14 },
  Text86b81d05: { fontFamily: 'Poppins_500Medium', fontSize: 10 },
  Text9c2faa04: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 26,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  Textac4fb546: { fontFamily: 'Poppins_600SemiBold' },
  Textacf5772f: { fontFamily: 'Poppins_400Regular', fontSize: 10 },
  Textd6deb5e7: { fontFamily: 'Poppins_600SemiBold', fontSize: 12 },
  View5152e902: { height: 140 },
  View623a24be: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  View6af843ad: {
    flex: 3,
    justifyContent: 'center',
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
  View6cba93de: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,
  },
  View76d90f06: { alignItems: 'center', flexDirection: 'row', marginTop: 4 },
  View9fa86917: { paddingLeft: 16, paddingRight: 16 },
  Viewb7efd8d7: {
    flex: 1,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  Viewc992f941: { flex: 1 },
  Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
  Viewd10efff8: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    overflow: 'hidden',
  },
  Viewd8f97984: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
});

export default withTheme(SavedScreen);
