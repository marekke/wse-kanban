import {Card} from "../../redux/card/reducers";
import {useDispatch} from "react-redux";
import {showModalAction} from "../../redux/app/actions";
import {ModalActionTypes} from "../../redux/app/reducers";

interface CardViewProps {
    card: Card
}

export default function CardListItem(props: CardViewProps) {
    const {card} = props;
    const dispatch = useDispatch();

    function onClickHandler() {
        dispatch(showModalAction({
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
