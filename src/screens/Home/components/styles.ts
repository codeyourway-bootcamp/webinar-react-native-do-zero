import styled from "styled-components/native";

import { colors } from "../../../styles/colors";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Content = styled.View``;

export const Title = styled.Text`
  color: ${colors.text};
  font-family: "Lato";
  font-size: 16px;
`;

export const Time = styled(Title)`
  margin-top: 5px;
  font-size: 11px;
`;
