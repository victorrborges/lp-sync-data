import { useState } from "react";
import * as S from "./styles";
import square from "../../../assets/images/square-icon.svg";
import check from "../../../assets/images/check-square-icon.svg";


const List = ({ item }) => {
    const [selected, setSelected] = useState(false);

    return (
        <S.Container onClick={() => setSelected(!selected)}>
            <S.Icon src={selected ? check : square} alt={selected ? "Selected item" : "Not selected item"} />
            <S.Item> {item} </S.Item>
        </S.Container>
    )
}

export default List;