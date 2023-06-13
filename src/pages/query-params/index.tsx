import { useSearchParams } from "react-router-dom";
export default function QueryParams() {

    const [searchParams] = useSearchParams();

    return (
        <main>
            <div>
                <div className="page-info">
                    <h2>
                        Query params <p>query-params/index.tsx</p>
                    </h2>
                    <p>searchParams example.</p>
                    <code>
                        id: {searchParams.get('id') || 'Missing query param "id"'}
                    </code>
                </div>
            </div>
        </main>
    );
}
