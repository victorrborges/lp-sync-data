import * as S from "./styles";
import chevron from "../../../assets/images/chevron.svg";
import check from "../../../assets/images/check-icon.svg";

const Header = ({ opened, setOpened }) => {
    return (
        <S.Container onClick={() => setOpened(!opened)}>
            <S.Icon src={check} alt="Check icon" />
            <S.Title> All contacts </S.Title>
            <S.Icon downsize shouldRotate opened={opened} src={chevron} alt="Chevron" />
        </S.Container>
    )
}

export default Header;