import {useSelector} from "react-redux";
import {getCardByID} from "../../redux/card/selectors";
import {ApplicationState} from "../../redux/store";

interface CardViewProps {
    cardID: number
}

export default function CardView({cardID}: CardViewProps) {
    const card = useSelector((state: ApplicationState) => getCardByID(state, cardID));

    return (
        <>
            {card.id} <br />
            {card.title} <br />
            {card.content} <br />
        </>
    );
}