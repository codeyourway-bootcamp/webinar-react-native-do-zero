import styled from "styled-components/native";
import { colors } from "../../styles/colors";

export const Container = styled.SafeAreaView`
  background: ${colors.background};
  flex: 1;
`;

export const Content = styled.View`
  padding: 20px;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;
