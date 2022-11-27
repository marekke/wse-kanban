import {useSelector} from "react-redux";
import AppLayoutNavbar from "./AppLayoutNavbar";
import {listSelectors, ListView} from "../feature/list";
import {AppModal} from "../feature/modalAction";

function AppLayout() {
    const listsData = useSelector(listSelectors.getLists);
    const lists = listsData.map(list => <ListView list={list} />);

    return (
        <>
            <AppLayoutNavbar />

            <AppModal />

            <div className="container-fluid mt-3 min-vh-100">
                <div className="d-flex min-vh-100" style={{overflowX: "scroll", height: "100%"}}>
                    <main className="d-flex flex-row flex-nowrap" style={{height: "100%"}}>
                        {lists}
                    </main>
                </div>
            </div>
        </>
    );
}

export default AppLayout;
