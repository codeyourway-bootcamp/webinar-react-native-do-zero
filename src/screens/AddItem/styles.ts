import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const Container = styled.SafeAreaView`
  background: ${colors.secondary};
  flex: 1;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Form = styled.View`
  gap: 20px;
  margin-top: 40px;
`;
