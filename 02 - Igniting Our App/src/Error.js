import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    return (
        <div className="errorPage">
            <h1>404 Error</h1>
            <h1>Page Not Found</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    )

}

export default Error