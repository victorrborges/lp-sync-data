import { useState } from "react";
import * as S from "./styles";
import Header from "./Header";
import Item from "./Item";

const Dropdown = ({ items }) => {
    const [opened, setOpened] = useState(false);

    return (
        <S.Container opened={opened}>
            <Header opened={opened} setOpened={setOpened} />
            <S.ListContainer>
                { items.map((item, index) => (
                    <Item key={index} item={item} />
                )) }
            </S.ListContainer>
        </S.Container>
    );
}

export default Dropdown;