import {Plus} from "react-bootstrap-icons";
import {ReactElement} from "react";

interface ListViewProps {
    cards: ReactElement[]
}

export default function ListView(props: ListViewProps) {
    return (
        <div className="card rounded-0 me-3" style={{width: '300px'}}>
            <div className="card-body pt-2 bg-light">
                <div className="mb-2">
                    <h5 className="card-title d-inline">Lista 1</h5>
                    <Plus
                        className="float-end fs-2 text-secondary"
                        style={{marginTop: "-3px", marginRight: "-7px"}}
                    />
                </div>

                {props.cards}
            </div>
        </div>
    );
}