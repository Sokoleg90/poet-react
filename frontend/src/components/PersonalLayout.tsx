import {Link, Outlet} from "react-router-dom";

function PersonalLayout() {
    return (
        <>
            <div className="flex flex-col bg-gray-700">
            <header className="flex flex-col">
                <div className="flex flex-col">
                    <div className="flex justify-between items-center h-16 bg-black bg-opacity-70">
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
                    <div className="flex justify-center items-center h-14 bg-black bg-opacity-30">
                        <div className="lg:mx-16 sm:ml-7">
                            <Link to={''}>
                                <span className="text-white font-alice hover:text-amber-500 lg:text-3xl sm:text-sm">Ваші дані</span>
                            </Link>
                        </div>
                        <div className="lg:mx-16 sm:ml-7">
                            <Link to={''}>
                                <span className="text-white font-alice hover:text-amber-500 lg:text-3xl sm:text-sm">Ваші вірші</span>
                            </Link>
                        </div>
                        <div className="lg:mx-16 sm:ml-7">
                            <Link to={''}>
                                <span className="text-white font-alice hover:text-amber-500 lg:text-3xl sm:text-sm">Коментарі</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="min-h-screen">
                <Outlet/>
            </main>

            <footer>

            </footer>
            </div>
        </>
    );
}

export default PersonalLayout;
