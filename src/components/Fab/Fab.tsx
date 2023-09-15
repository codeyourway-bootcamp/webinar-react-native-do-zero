import * as S from "./styles";

type FabProps = {
  icon: string;
  onPress: () => void;
};

const Fab = ({ icon, onPress }: FabProps) => {
  return (
    <S.Touchable onPress={onPress}>
      <S.Icon icon={icon} />
    </S.Touchable>
  );
};

export default Fab;
