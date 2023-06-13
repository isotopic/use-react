import { useParams } from 'react-router-dom';

export default function DynamicRoute() {

    const { id } = useParams();

    return (
        <main>
            <div>
                <div className="page-info">
                    <h2>
                        Dynamic route <p>dynamic-route/index.tsx</p>
                    </h2>
                    <p>useParams example.</p>
                    <code>
                        id: {id || 'Missing id parameter'}
                    </code>
                </div>
            </div>
        </main>
    );
}
