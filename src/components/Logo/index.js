import * as S from "./styles";
import sync from "../../assets/images/sync-btn.svg";

const Logo = ({ done, setDone }) => {
    const content = done ? 'All done!' : 'Sync Contacts';

    return (
        <S.Container onClick={() => setDone(!done)}>
            <S.Image done={done} src={sync} alt='Logo' />
            <S.Text> {content} </S.Text>
        </S.Container>
    )
}

export default Logo;