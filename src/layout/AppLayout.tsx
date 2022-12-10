import {useSelector} from "react-redux";
import AppLayoutNavbar from "./AppLayoutNavbar";
import {listSelectors, ListView} from "../feature/list";
import ModalLink from "../components/helpers/ModalLink";

function AppLayout() {
    const listsData = useSelector(listSelectors.getLists);
    const lists = listsData.map(list => <ListView key={list.id} list={list} />);

    return (
        <>
            <AppLayoutNavbar />

            <div className="container-fluid mt-3 min-vh-100">
                <div className="d-flex min-vh-100" style={{overflowX: "scroll", height: "100%"}}>
                    <main className="d-flex flex-row flex-nowrap" style={{height: "100%"}}>
                        {lists}

                        <div>
                            <ModalLink to={"/lists/create"}>
                                <button className="btn btn-secondary rounded-0" style={{width: 300}}>Dodaj nową listę</button>
                            </ModalLink>

                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default AppLayout;
