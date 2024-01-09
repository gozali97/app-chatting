import { Head } from '@inertiajs/react';
import App from "@/Layouts/App.jsx";

export default function Home() {
    return (
        <>
            <Head title="Chat"></Head>
            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 shadow-3xl">
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full max-w-full px-3 shrink-0 md:w-10/12 md:flex-0">
                        <div className="flex items-center">
                            <img
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                                alt="avatar-img"
                                className="inline-flex items-center justify-center w-12 h-12 text-base text-white transition-all duration-200 ease-in-out rounded-xl"/>
                            <div className="ml-4">
                                <h6 className="block mb-0">Users</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-auto p-6 overflow-auto overflow-x-hidden bg-gray-200 rounded-lg ps ps--active-y">

            </div>
            <div className="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 block">
                <form className="items-center">
                    <div className="flex">
                        <input type="text" id='message' name='message' placeholder="Type here"
                               className="focus:shadow-primary-outline dark:bg-slate-850 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
                        <button type="button"
                                className="inline-block px-5 py-2.5 mb-0 ml-2 text-sm font-bold text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs bg-gradient-to-tl from-blue-500 to-violet-500 leading-normal tracking-tight-rem bg-150 bg-x-25">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="icon icon-tabler icon-tabler-send" width="24" height="24"
                                 viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 14l11 -11"/>
                                <path
                                    d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

Home.layout = (page) => <App children={page} title="Chat"/>
