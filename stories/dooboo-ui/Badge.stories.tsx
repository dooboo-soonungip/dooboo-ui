import React, { ReactElement, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Badge } from '../../main/Badge';
import { ContainerDeco } from '../../storybook/decorators';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ShowContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StyledTitle = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;

const StyledView: any = styled.View`
  margin : 50px;
  width : 150px;
  height : 150px;
  background-color : black;
  border-radius: 20;
`;

const Badge1 = (): React.ReactElement => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          marginTop: 8,
          alignSelf: 'stretch',
          paddingHorizontal: 20,
          paddingVertical: 100,
        }}>
        <Container>
          <View style={{ marginTop: 50 }}>
            <StyledTitle>Badge (default)</StyledTitle>
            <StyledView>
              <Badge />
            </StyledView>
          </View>

          <View>
            <StyledTitle>Badge (showZero,opacityVisible)</StyledTitle>
            <ShowContainer>
              <StyledView>
                <Badge
                  opacityVisible={false}
                  color="white"
                  text="#E0C4F2"
                  border="#E0C4F2"
                  count={3000}
                  maximumValue={100}
                  position="right"
                />
              </StyledView>
              <StyledView>
                <Badge 
                  text= "white" 
                  color="#5C73F2" 
                  border="#5C73F2" 
                  count={0} 
                  maximumValue={0} 
                  showZero 
                  position="left"
                />
              </StyledView>
            </ShowContainer>
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

const Badge2 = (): React.ReactElement => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          marginTop: 8,
          alignSelf: 'stretch',
          paddingHorizontal: 20,
          paddingVertical: 100,
        }}>
        <Container>
          <View>
            <StyledTitle>Badge 3</StyledTitle>
            <StyledView>
              <Badge 
                color="white" 
                count={20} 
                maximumValue={0}
                position="right"/>
            </StyledView>
          </View>
          <View style={{ marginTop: 50 }}>
            <StyledTitle style={{ marginBottom: 10 }}>Badge 4</StyledTitle>
            <StyledView>
              <Badge 
                border="#0B42FF" 
                text="#0B42FF"
                color="white" 
                count={0} 
                maximumValue={0} 
                showZero 
                position="left"
              />
            </StyledView>
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

/**
 * Below are stories for web
 */
export default {
  title: 'Badge',
};

export const toStorybook1 = (): ReactElement => <Badge1 />;
export const toStorybook2 = (): ReactElement => <Badge2 />;

toStorybook1.story = {
  name: 'Badge',
  notes: 'Basic TextInput style',
};
toStorybook2.story = {
  name: 'Badge2',
  notes: 'You can change the label position.',
};

/**
 * Below are stories for app
 */
storiesOf('Badge', module)
  .addDecorator(ContainerDeco)
  .add('Badge11', () => <Badge1 />, {
    notes: 'Basic TextInput style',
  })
  .add('Badge22', () => <Badge2 />, {
    notes: 'You can change the label position.',
  });
