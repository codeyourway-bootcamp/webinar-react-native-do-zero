import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const Touchable = styled.TouchableOpacity`
  background: ${colors.primary};
  height: 40px;
  padding: 0 20px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Label = styled.Text`
  color: ${colors.text};
  font-size: 13px;
  font-family: Lato;
`;
