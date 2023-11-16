import React from "react";

interface MyButtonProps {
    children: React.ReactNode;
}

function MyButton(props: MyButtonProps) {
    return (
        <>
            <button className="mt-3 w-40 h-8 rounded bg-gray-800 text-white hover:bg-gray-200 hover:text-black">{props.children}</button>
        </>
    );
}

export default MyButton;
