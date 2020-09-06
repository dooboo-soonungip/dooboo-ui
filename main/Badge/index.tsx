import React, { FC, useRef } from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

interface badgeProps {
  count?: number;
  color?: string;
  maximumValue?: number;
  showZero?: boolean;
  opacityVisible?: boolean;
  position? : string;
  border? : string;
  text? : string;
}

// TODO: Android , IOS 스타일 매기는 기준이 달라서 조사하는 것도 좋을듯!

const StyledView = styled.View`
position: absolute;
  top: -20px;
  ${(props:badgeProps) => props.position}: -18px;
  width : auto;
  height : 60px;
  min-width : 60px;
  background-color :${(props:badgeProps)=> props.color};
  opacity:0.9;
  border-width: 5px;
  border-color: ${(props:badgeProps)=> props.border};
  border-radius : 50;
  justify-content : center;
  align-items : center;
  opacity: ${(props: badgeProps): number =>
    props.count === 0 ||
    props.count! <= props.maximumValue! ||
    !props.opacityVisible
    ? 1
    : 0.6};
    `;
    // #109CF1;

const StyledText = styled.Text`
  margin-left : 3px;
  margin-right : 3px;
  color :${(props:badgeProps)=> props.text};
  text-align : center;
  padding: 5px;
`;

const styles = StyleSheet.create({
  count: {
    fontWeight: "600",
    fontSize: 20,
  },
})

const Badge: FC<badgeProps> = (props) => {
  const {
    count = 10,
    color = 'white',
    maximumValue = 300,
    showZero,
    opacityVisible = true,
    position = 'right',
    border = '#109CF1',
    text = '#109CF1',
  } = props;

  if (!showZero) {
    if (count == 0) return null;
  }

  return (
    <StyledView
      count={count}
      maximumValue={maximumValue}
      color={color}
      opacityVisible={opacityVisible}
      position={position}
      border={border}>
      <StyledText text={text} style={styles.count}>
        {count! <= maximumValue! ? count : maximumValue + '+'}
      </StyledText>
    </StyledView>
  );
};

export { Badge };