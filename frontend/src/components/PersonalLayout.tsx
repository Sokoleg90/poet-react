import {Link, Outlet} from "react-router-dom";

function PersonalLayout() {
    return (
        <>
            <div className="flex flex-col">
            <header>
                <div className="flex flex-col">
                    <div className="flex justify-between items-center h-16 bg-stone-800">
                        <div className="mx-3">
                            <Link to={'/'}>
                            <span className="text-white text-3xl font-caveat">Poet in Ukraine</span>
                            </Link>
                        </div>
                        <div className="flex justify-around items-center">
                            <Link to={'/personal'}>
                                <span
                                    className="lg:text-xl lg:mx-12 sm:mx-4 sm:text-sm text-white hover:text-rose-700 font-alice">Особистий кабінет</span>
                            </Link>
                            <Link to={'/registration'}>
                                <span
                                    className="lg:text-xl lg:mx-12 sm:mx-4 sm:text-sm text-white hover:text-rose-700 font-alice">Реєстрація</span>
                            </Link>
                            <Link to={'/login'}>
                                <span
                                    className="lg:text-xl lg:mx-12 sm:mx-4 sm:text-sm text-white hover:text-rose-700 font-alice">Увійти</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-14 bg-stone-500">
                        <div className="lg:mx-16 sm:ml-7">
                            <Link to={''}>
                                <span className="text-black font-alice hover:text-white lg:text-3xl sm:text-sm">Ваші дані</span>
                            </Link>
                        </div>
                        <div className="lg:mx-16 sm:ml-7">
                            <Link to={''}>
                                <span className="text-black font-alice hover:text-white lg:text-3xl sm:text-sm">Ваші вірші</span>
                            </Link>
                        </div>
                        <div className="lg:mx-16 sm:ml-7">
                            <Link to={''}>
                                <span className="text-black font-alice hover:text-white lg:text-3xl sm:text-sm">Коментарі</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="bg-stone-300 min-h-screen">
                <Outlet/>
            </main>

            <footer>

            </footer>
            </div>
        </>
    );
}

export default PersonalLayout;
