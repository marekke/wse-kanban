import {useLocation, useNavigate} from "react-router-dom";

export function useModalNavigate() {
    const routerNavigate = useNavigate();
    const location = useLocation();

    return function navigate(to: string) {
        routerNavigate(to, {state:{ background: location }});
    }
}