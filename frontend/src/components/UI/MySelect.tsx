import React from "react";

interface MySelectProps {
    children: React.ReactNode;
}

function MySelect(props: MySelectProps) {
    return (
        <>
            <select>
                <option>{props.children}</option>
            </select>
        </>
    );
}

export default MySelect
