import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div id="error-page">
                <h1>Error</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.data.message}</i>
                </p>
            </div>
        );
    } else {
        return <></>;
    }
}