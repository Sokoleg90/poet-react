import {Outlet} from "react-router-dom";

function PersonalLayout() {
    return (
        <>
            <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
                <aside
                    className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-800"
                >
                    <div className="sidebar-header flex items-center justify-center py-4">
                        <div className="inline-flex">
                            <a href="#" className="inline-flex flex-row items-center">
                                <span className="leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase">Poet in Ukraine</span>
                            </a>
                        </div>
                    </div>
                                {/*Sidebar content*/}
                    <div className="sidebar-content px-4 py-6">
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
    <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <header className="header bg-rose-300 shadow py-4 px-4">
            <div className="header-content flex items-center flex-row">
                <form action="#">
                    <div className="hidden md:flex relative">
                        <div
                            className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </div>

                        <input
                            id="search"
                            type="text"
                            name="search"
                            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400"
                            placeholder="Search..."
                        />
                    </div>
                    <div className="flex md:hidden">
                        <a href="#" className="flex items-center justify-center h-10 w-10 border-transparent">
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </a>
                    </div>
                </form>
                <div className="flex ml-auto">
                    <button type="button" className="text-rose-500 bg-gray-800 hover:bg-rose-300">Выйти</button>
                </div>
            </div>
        </header>
        <div className="main-content flex flex-col flex-grow p-4 bg-rose-900">
            <Outlet/>
        </div>
        <footer className="footer px-4 py-6 bg-rose-300">
            <div className="footer-content">
                <p className="text-sm text-gray-900 text-center">© TennisWTA 2023. All rights reserved.</p>
            </div>
        </footer>
    </main>
</div>
</>
    );
}

export default PersonalLayout;
