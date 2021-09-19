import * as S from "./styles";
import * as C from "../../components";
import Title from "./Title";

const PlatformContainer = ({ config }) => {

    const description = `These ${config.label} contacts will sync to ${config.target}`;

    return (
        <S.Container>
            <Title style={config.platformId} label={config.label} description={description} />
            <C.Dropdown items={config.lists} />
        </S.Container>
    )

}

export default PlatformContainer;