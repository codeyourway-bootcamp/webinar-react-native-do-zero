import styled from "styled-components/native";
import { colors } from "../../styles/colors";

import { AntDesign } from "@expo/vector-icons";

const FAB_SIZE = 70;

export const Touchable = styled.TouchableOpacity`
  background: ${colors.primary};
  width: ${FAB_SIZE}px;
  height: ${FAB_SIZE}px;
  border-radius: ${FAB_SIZE / 2}px;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 40px;
  right: 20px;
`;

export const Icon = styled(AntDesign).attrs(({ icon }: any) => ({
  name: icon,
  size: 32,
  color: colors.white,
}))``;
