import {useSelector} from "react-redux";
import {getCards} from "../redux/card/selectors";
import CardListItem from "./card/CardListItem";
import ListView from "./list/ListView";
import AppModal from "./AppModal";

function AppLayout() {

    const cardsData = useSelector(getCards);
    const cards = cardsData.map(card => <CardListItem key={card.id} card={card} />);

    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <strong>Kanban</strong>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarsExample02"
                            aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                elo
                            </li>
                        </ul>
                    </div>

                    <button className="btn btn-outline-light">
                        Dodaj nową listę
                    </button>
                </div>
            </nav>

            <AppModal />

            <div className="container-fluid mt-3 min-vh-100">
                <div className="d-flex min-vh-100" style={{overflowX: "scroll", height: "100%"}}>
                    <main className="d-flex flex-row flex-nowrap" style={{height: "100%"}}>
                        <ListView cards={cards} />
                    </main>
                </div>
            </div>
        </>
    );
}

export default AppLayout;
