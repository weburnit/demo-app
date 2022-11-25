import React from 'react';
import * as ExampleUserApi from '../apis/ExampleUserApi.js';
import { Circle, Icon, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const ProfileScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      style={styles.screen}
      scrollable={true}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <ExampleUserApi.FetchGetUserGET>
        {({ loading, error, data, refetchGetUser }) => {
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
              <View
                style={[
                  styles.Viewb9c4a83a,
                  {
                    backgroundColor: theme.colors.surface,
                    borderColor: theme.colors.divider,
                    borderRadius: 12,
                  },
                ]}
              >
                <View>
                  <Circle size={84} bgColor={theme.colors.primary}>
                    <Image
                      style={styles.Imagefb8b56cb}
                      resizeMode={'cover'}
                      source={{ uri: `${fetchData?.avatar}` }}
                    />
                  </Circle>
                </View>
                <Spacer top={8} right={8} bottom={8} left={8} />
                <View style={styles.View5cf968ba}>
                  <Text
                    style={[
                      styles.Text7e29b72f,
                      { color: theme.colors.strong },
                    ]}
                  >
                    {fetchData?.full_name}
                  </Text>
                  <Spacer top={3} right={8} bottom={3} left={8} />
                  <View style={styles.View7d6a39b7}>
                    <View style={styles.Viewce4accf0}>
                      <Icon
                        style={styles.Iconed0d1bd6}
                        name={'MaterialIcons/location-on'}
                        size={20}
                        color={theme.colors.primary}
                      />
                      <Text
                        style={[
                          styles.Text462d98b4,
                          { color: theme.colors.light },
                        ]}
                      >
                        {fetchData?.city}
                        {', '}
                        {fetchData?.state}{' '}
                      </Text>
                    </View>
                    <Spacer top={8} right={8} bottom={8} left={8} />
                    <View style={styles.Viewce4accf0}>
                      <Icon
                        style={styles.Icone0bcd704}
                        name={'MaterialIcons/alternate-email'}
                        size={20}
                        color={theme.colors.primary}
                      />
                      <Text
                        style={[
                          styles.Text462d98b4,
                          { color: theme.colors.light },
                        ]}
                      >
                        {fetchData?.username}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <Spacer top={6} right={8} bottom={6} left={8} />
              <View
                style={[
                  styles.Viewcced50b2,
                  {
                    backgroundColor: theme.colors.surface,
                    borderColor: theme.colors.divider,
                    borderRadius: 12,
                  },
                ]}
              >
                <Text
                  style={[styles.Text637a97dc, { color: theme.colors.primary }]}
                >
                  {'Bio'}
                </Text>
                <Spacer top={4} right={8} bottom={4} left={8} />
                <Text
                  style={[
                    styles.Text1f76be60,
                    {
                      color: theme.colors.medium,
                      typography: theme.typography.body1,
                    },
                  ]}
                >
                  {fetchData?.bio}
                </Text>
              </View>
              <Spacer top={6} right={8} bottom={6} left={8} />
              <View
                style={[
                  styles.Viewaa26ed9b,
                  {
                    backgroundColor: theme.colors.surface,
                    borderColor: theme.colors.divider,
                    borderRadius: 12,
                  },
                ]}
              >
                <Text
                  style={[styles.Text637a97dc, { color: theme.colors.primary }]}
                >
                  {'More'}
                </Text>
                <Spacer top={4} right={8} bottom={4} left={8} />
                <View style={styles.Viewdebd3207}>
                  <View style={styles.Viewc992f941}>
                    <Text
                      style={[
                        styles.Text3e0ee043,
                        { color: theme.colors.strong },
                      ]}
                    >
                      {'University'}
                    </Text>
                  </View>

                  <View style={styles.View1b928f09}>
                    <Text
                      style={[
                        styles.Text04c2524d,
                        { color: theme.colors.medium },
                      ]}
                    >
                      {fetchData?.university}
                    </Text>
                  </View>
                </View>
                <Spacer top={4} right={8} bottom={4} left={8} />
                <View style={styles.Viewdebd3207}>
                  <View style={styles.Viewc992f941}>
                    <Text
                      style={[
                        styles.Text3e0ee043,
                        { color: theme.colors.strong },
                      ]}
                    >
                      {'Job Title'}
                    </Text>
                  </View>

                  <View style={styles.View1b928f09}>
                    <Text
                      style={[
                        styles.Text04c2524d,
                        { color: theme.colors.medium },
                      ]}
                    >
                      {fetchData?.job_title}
                    </Text>
                  </View>
                </View>
                <Spacer top={4} right={8} bottom={4} left={8} />
                <View style={styles.Viewdebd3207}>
                  <View style={styles.Viewc992f941}>
                    <Text
                      style={[
                        styles.Text3e0ee043,
                        { color: theme.colors.strong },
                      ]}
                    >
                      {'Birthday'}
                    </Text>
                  </View>

                  <View style={styles.View1b928f09}>
                    <Text
                      style={[
                        styles.Text04c2524d,
                        { color: theme.colors.medium },
                      ]}
                    >
                      {fetchData?.birthdate}
                    </Text>
                  </View>
                </View>
              </View>
            </>
          );
        }}
      </ExampleUserApi.FetchGetUserGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Fetch431eb058: { minHeight: 40 },
  Icone0bcd704: { height: 20, width: 20 },
  Iconed0d1bd6: { height: 20, width: 20 },
  Imagefb8b56cb: {
    alignSelf: 'center',
    borderRadius: 42,
    height: 76,
    width: 76,
  },
  Text04c2524d: { fontFamily: 'Poppins_400Regular' },
  Text1f76be60: { fontFamily: 'Poppins_400Regular' },
  Text3e0ee043: { fontFamily: 'Poppins_500Medium' },
  Text462d98b4: { fontFamily: 'Poppins_400Regular', fontSize: 12 },
  Text637a97dc: { fontFamily: 'Poppins_600SemiBold', fontSize: 20 },
  Text7e29b72f: { fontFamily: 'Poppins_600SemiBold', fontSize: 20 },
  View1b928f09: { flex: 2 },
  View5cf968ba: { flex: 1, justifyContent: 'center' },
  View7d6a39b7: { alignItems: 'center', flexDirection: 'row' },
  Viewaa26ed9b: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
  },
  Viewb9c4a83a: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
  },
  Viewc992f941: { flex: 1 },
  Viewcced50b2: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24,
  },
  Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
  Viewdebd3207: { flexDirection: 'row' },
  screen: {
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
  },
});

export default withTheme(ProfileScreen);
