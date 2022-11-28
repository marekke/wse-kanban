import {Card} from "../cardSlice";
import {useModalNavigate} from "../../../app/hooks";

interface CardViewProps {
    card: Card
}

export default function CardListItem(props: CardViewProps) {
    const {card} = props;
    const navigate = useModalNavigate();

    return (
        <div className="card mb-3 rounded-0 list-card" role="button" onClick={() => navigate(`/cards/${card.id}`)}>
            <div className="card-body">
                <p className="card-text">{card.title}</p>
            </div>
        </div>
    );
}
