import {Head, router, useForm, usePage} from '@inertiajs/react';
import App from "@/Layouts/App.jsx";
import {Inertia} from '@inertiajs/inertia';
import {useEffect, useRef, useState} from "react";

export default function Show(props) {
    const {auth} = usePage().props;
    const {user, chats} = props;
    const {data, setData, reset, errors, post} = useForm({message:''});
    const scrollRef = useRef(null);
    const messageRef = useRef(null);
    const sts = (x, y, option = 'justify') =>{
        if(option == 'justify'){
            return x === y ? 'justify-end mb-10 text-right':'justify-start';
        }
        if(option == 'background'){
            return x === y ? 'bg-green-200 text-green-900':'bg-gray-100 text-gray-800';
        }

    }
    const submitHandler = (event) => {
        event.preventDefault();
        post(route('chat.store', user.username), {
            onSuccess: () => {
                reset('message');
                scrollRef.current.scrollTo(0, 9999999)
            }
        })
    }

    Echo.private('chats.'+ auth.user.uuid).listen('MessageSent', ({chat}) => {
        router.get(route('chat.show',user.username, {
            onSuccess: () => {
                scrollRef.current.scrollTo(0, 9999999)
            }
        } ))
        // setChats(chats => [chat,...chats]);
    });

    useEffect(() => {
        scrollRef.current.scrollTo(0, 9999999)
        messageRef.current.focus()
    }, [])

    return (
        <>
            <Head title={`Chat with ${user.name}`}></Head>
            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 shadow-3xl">
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full max-w-full px-3 shrink-0 md:w-10/12 md:flex-0">
                        <div className="flex items-center">
                            <img
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                                alt="avatar-img"
                                className="inline-flex items-center justify-center w-12 h-12 text-base text-white transition-all duration-200 ease-in-out rounded-xl"/>
                            <div className="ml-4">
                                <h6 className="block mb-0">{user.name}</h6>
                                <span className="text-sm leading-normal opacity-80 text-slate-700">last seen today </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative p-6 h-[400px] overflow-y-auto bg-gray-200 rounded-lg py-6'>
                <div className="flex-1 px-4 py-2" ref={scrollRef}>
                    {chats.length ? (
                        chats.map((chat) => (
                            <div key={chat.id}
                                 className={`flex flex-wrap mb-6 -mx-3 ${sts(auth.user.id, chat.sender_id)}`}>
                                <div className="w-auto max-w-full px-3 flex-0">
                                    <div
                                        className={`relative flex flex-col min-w-0 break-words ${sts(auth.user.id, chat.sender_id, 'background')} border-0 shadow-xl rounded-2xl bg-clip-border`}>
                                        <div className="flex-auto px-4 py-2">
                                            <p className="mb-1">{chat.message}</p>
                                            <div className="flex items-center text-sm leading-normal opacity-60">
                                                <i className="mr-1 text-sm leading-normal ni ni-check-bold"></i>
                                                <small>4:31pm</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='flex justify-center w-full'>
                            <div className='bg-yellow-200 px-4 py-2 text-sm text-yellow-700 rounded-lg'>No have chat
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 block">
                <form onSubmit={submitHandler} className="items-center">
                    <div className="flex">
                        <input type="text" id='message' ref={messageRef} value={data.message}
                               onChange={(event) => setData({...data, message: event.target.value})} name='message'
                               placeholder="Type here"
                               autoComplete={"off"}
                               className="focus:shadow-primary-outline text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"/>
                        <button type="submit"
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

Show.layout = (page) => <App children={page}/>
