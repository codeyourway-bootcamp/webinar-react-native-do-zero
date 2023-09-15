import { styled } from "styled-components/native";
import { colors } from "../../styles/colors";

export const Input = styled.TextInput.attrs({
  placeholderTextColor: `${colors.text}80`,
})`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: ${colors.text};
`;
