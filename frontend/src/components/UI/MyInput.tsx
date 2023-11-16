

function MyInput({...props}) {
    return (
        <>
            <input {...props} className="text-black placeholder-black pl-3 rounded-3xl w-72 h-8 enabled:hover:border-gray-400 disabled:opacity-75 my-3 focus:border" type="text"/>
        </>
    );
}

export default MyInput;
