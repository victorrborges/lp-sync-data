import * as S from "./styles";
import gmail from "../../../assets/images/gmail.svg";
import mailchimp from "../../../assets/images/mailchimp.svg";

const Title = ({ style, label, description }) => {

    const logo = style === 'gmail' ? gmail : mailchimp;

    return (
        <S.Container>
            <S.Logo src={logo} alt="Logo" />
            <S.Label> {label} </S.Label>
            <S.Description> {description} </S.Description>
        </S.Container>
    )

}

export default Title;