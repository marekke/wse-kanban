import {Card} from "../cardSlice";
import {useModalNavigate} from "../../../app/hooks";
import {useDrag} from "react-dnd";

interface CardViewProps {
    card: Card
}

const dragType = 'card';

export default function CardListItem(props: CardViewProps) {
    const {card} = props;
    const cardID = card.id;
    const navigate = useModalNavigate();

    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: dragType,
            item: { cardID },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [cardID, dragType],
    )

    return (
        <div ref={drag} className={`card mb-3 rounded-0 list-card ${isDragging ? 'invisible' : ''}`} role="button" onClick={() => navigate(`/cards/${card.id}`)}>
            <div className="card-body">
                <p className="card-text">{card.title}</p>
            </div>
        </div>
    );
}
