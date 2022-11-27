import {useDispatch} from "react-redux";
import {ModalActionTypes, show} from "../../modalAction";
import {Card} from "../cardSlice";

interface CardViewProps {
    card: Card
}

export default function CardListItem(props: CardViewProps) {
    const {card} = props;
    const dispatch = useDispatch();

    function onClickHandler() {
        dispatch(show({
            type: ModalActionTypes.CardView,
            referenceID: card.id,
            title: `[#${card.id}] - Szczegóły`,
    }))
    }

    return (
        <div className="card mb-3 rounded-0 list-card" role="button" onClick={onClickHandler} >
            <div className="card-body">
                <p className="card-text">{card.title}</p>
            </div>
        </div>

    );
}
