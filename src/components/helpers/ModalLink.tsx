import {Link, useLocation} from "react-router-dom";

interface ModalLinkProps {
    to: string,
    children?: any
}

export default function ModalLink(props: ModalLinkProps) {
    const location = useLocation();

    return(
        <Link to={props.to} state={{ background: location }}>
            {props.children}
        </Link>
    );
}
