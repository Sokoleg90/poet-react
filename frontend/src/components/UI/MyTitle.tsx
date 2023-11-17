import React from "react";

interface MyTitleProps {
    children: React.ReactNode;
}

function MyTitle(props: MyTitleProps) {
    return (
        <>
            <h1 className="text-center mt-5 text-3xl font-alice">
                {props.children}
            </h1>
        </>
    );
}

export default MyTitle;
