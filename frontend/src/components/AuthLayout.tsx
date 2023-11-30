import {Outlet} from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <div className="flex flex-col items-center h-screen bg-[url('../src/assets/BannerPoet.jpg')] bg-cover text-white">
                <Outlet/>
            </div>
        </>
    );
}

export default DefaultLayout;
