import { Head } from '@inertiajs/react';
import App from "@/Layouts/App.jsx";

export default function Dashboard({ auth }) {
    return (
        <App
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
        </App>
    );
}
