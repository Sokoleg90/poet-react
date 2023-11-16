
import {Link, Outlet} from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <header className="flex flex-col bg-[url('../src/assets/BannerPoet.jpg')] bg-cover">
                    <div className="flex justify-between items-center h-20 bg-black bg-opacity-70">
                        <div className="mx-3">
                            <span className="text-white font-extrabold font-mono">POET IN UKRAINE</span>
                        </div>
                        <div className="flex justify-around items-center">
                            <Link to={'/personal'}>
                            <span className="lg:text-xl lg:mx-12 sm:mx-4 sm:text-sm text-white hover:text-rose-700 font-alice">Особистий кабінет</span>
                            </Link>
                            <Link to={'/registration'}>
                            <span className="lg:text-xl lg:mx-12 sm:mx-4 sm:text-sm text-white hover:text-rose-700 font-alice">Реєстрація</span>
                            </Link>
                            <Link to={'/login'}>
                                <span className="lg:text-xl lg:mx-12 sm:mx-4 sm:text-sm text-white hover:text-rose-700 font-alice">Увійти</span>
                            </Link>
                            </div>
                    </div>
                    {/*Navbar*/}
                    <div className="flex justify-center items-center h-20 bg-black bg-opacity-30">
                        <div className="lg:mx-16 sm:ml-7">
                            <Link to={'/'}>
                            <span className="text-white font-mono hover:text-amber-400 lg:text-3xl sm:text-sm">ГОЛОВНА СТОРІНКА</span>
                            </Link>
                        </div>
                        <div className="lg:mx-16 sm:ml-7">
                            <Link to={'/poets'}>
                            <span className="text-white font-mono hover:text-amber-400 lg:text-3xl sm:text-sm">НАШІ ПОЕТИ</span>
                            </Link>
                        </div>
                        <div className="lg:mx-16 sm:ml-7">
                            <Link to={'/poems'}>
                            <span className="text-white font-mono hover:text-amber-400 lg:text-3xl sm:text-sm">ВІРШІ</span>
                            </Link>
                        </div>
                        <div className="lg:mx-16 sm:ml-7">
                            <Link to={'/about'}>
                            <span className="text-white font-mono hover:text-amber-400 lg:text-3xl sm:text-sm">ПРО НАС</span>
                            </Link>
                        </div>
                    </div>
                    {/*/Navbar*/}
                    {/*Banner*/}
                    <div className="flex flex-col justify-center items-center w-full text-center py-10">
                        <h1 className="text-white text-9xl font-caveat mb-3">Поет в Україні</h1>
                        <p className="text-white text-xl mb-6">Це українська платформа для поетів сучасників та цінувачів української поезії</p>
                        <button className="w-40 h-16 border-4 text-white bg-black bg-opacity-30 hover:text-amber-500 hover:border-amber-500 ">
                            Напиши свого вірша!
                        </button>
                    </div>
                    {/*/Banner*/}
                </header>
                {/*Main*/}
                <div className="">
                    <Outlet/>
                </div>
                {/*/Main*/}
                <footer className="flex items-center pl-6 h-14 bg-zinc-500 text-white">
                    <p>© PoetInUkraine 2023. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}

export default DefaultLayout;
