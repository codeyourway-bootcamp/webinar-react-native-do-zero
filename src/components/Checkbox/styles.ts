import { Checkbox as CheckboxComp } from "expo-checkbox";
import styled from "styled-components/native";

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Checkbox = styled(CheckboxComp).attrs(({ value }) => ({
  color: value ? "#4630EB" : undefined,
}))`
  margin: 8px;
`;

export const Label = styled.Text`
  font-size: 15px;
`;
