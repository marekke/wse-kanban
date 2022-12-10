import {useSelector} from "react-redux";
import {getCardByID} from "../selectors";
import {ApplicationState} from "../../../app/store";
import {useParams} from "react-router-dom";


export default function CardView() {
    const {cardID} = useParams();
    const card = useSelector((state: ApplicationState) => getCardByID(state, Number(cardID)));

    return (
        <>
            {card.id} <br />
            {card.title} <br />
            {card.content} <br />
        </>
    );
}