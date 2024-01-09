import {Head, Link, usePage} from '@inertiajs/react';

export default function App({children, title}) {
    const {users, auth} = usePage().props;

    return (
        <div className="flex bg-white">
            <Head title={title}></Head>
                <div
                    className="w-1/4 flex-col mb-12 overflow-auto overflow-x-hidden break-words bg-white border-0 max-h-70-screen lg:mb-0 bg-white/80 shadow-blur dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border ps ps--active-y">
                    <div className="border-black/12.5 rounded-t-2xl border-b border-solid p-4">
                        <div
                            className="w-full border rounded-lg shadow bg-gray-800 border-gray-700">
                            <div className="flex w-full justify-center items-center py-6 gap-4">
                                <img className="w-12 h-12 mt-2 rounded-full shadow-lg"
                                     src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                                     alt="Bonnie image"/>
                                <div>
                                    <h5 className="mb-1 text-lg font-medium text-white">{auth.user.name}</h5>
                                    <Link method="post" href={route('logout')} as="button"
                                          className="inline-flex items-center px-3 py-1 text-xs font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">Logout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto p-2 max-h-[500px] overflow-y-auto">
                        {users.map(user => (
                            <Link
                                key={user.id}
                                href={route('chat.show', user.username)}
                                className={`block p-2 rounded-xl ${route().current('chat.show', user.username) ? 'bg-gradient-to-tl from-blue-500 to-violet-500' : 'text-gray-800'}`}>
                                <div className="flex p-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                                        alt="Image"
                                        className="inline-flex items-center justify-center w-12 h-12 text-base text-white transition-all duration-200 ease-in-out shadow-2xl rounded-xl"/>
                                    <div className="ml-4">
                                        <div className="items-center justify-between">
                                            <h6 className="mb-0 text-gray-800">
                                                {user.name}
                                            </h6>
                                            <p className={`mb-0 text-sm leading-normal ${route().current('chat.show', user.username) ? 'text-white' : 'text-gray-800'}`}>last
                                                seen today</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div
                    className="w-3/4 flex flex-col mb-12 break-words bg-white border-0  lg:mb-0 bg-white/80 shadow-blur dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border mx-0">
                    {children}
                </div>
        </div>
    );
}
