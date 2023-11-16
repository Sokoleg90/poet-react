import React from "react";

interface MyButtonProps {
    children: React.ReactNode;
}

function MyButton(props: MyButtonProps) {
    return (
        <>
            <button className="inline-block px-3 py-1 border-2 rounded-lg text-white text-xl font-alice bg-black bg-opacity-30 hover:text-amber-500 hover:border-amber-500 ">
                {props.children}
            </button>
        </>
    );
}

export default MyButton;
