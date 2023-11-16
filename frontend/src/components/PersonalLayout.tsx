import {Link} from "react-router-dom";

function PersonalLayout() {
    return (
        <>
            <header>
            <div className="flex flex-col">
                <div className="flex justify-between items-center h-16 bg-black bg-opacity-70">
                    <div className="mx-3">
                        <span className="text-white text-3xl font-caveat">Poet in Ukraine</span>
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
            </div>
            </header>

            <div className="flex flex-row min-h-screen">
                <aside
                    className="w-64 bg-gray-800"
                >

                    {/*Sidebar content*/}
                    <div className="px-4 py-6">
                        <ul className="flex flex-col w-full">
                            <li className="my-px flex flex-row items-center h-10 px-3 rounded-lg text-rose-500 hover:bg-rose-300 hover:text-black">

                                <span className="flex items-center justify-center text-lg text-rose-500">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

              </span>
                                <span className="ml-3">Dashboard</span>

                            </li>
                            <li className="my-px flex flex-row items-center h-10 px-3 rounded-lg text-rose-500 hover:bg-rose-300 hover:text-black">
                            <span className="flex items-center justify-center text-lg text-rose-500">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
</svg>

              </span>
                                <span className="ml-3">Новини</span>

                            </li>
                            <li className="my-px flex flex-row items-center h-10 px-3 rounded-lg text-rose-500 hover:bg-rose-300 hover:text-black">

                        <span className="flex items-center justify-center text-lg text-rose-500">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
</svg>
              </span>
                                <span className="ml-3">Прогнози</span>

                            </li>

                        </ul>
                    </div>
                    {/*/Sidebar content*/}
                </aside>
                </div>
        </>
    );
}

export default PersonalLayout;
