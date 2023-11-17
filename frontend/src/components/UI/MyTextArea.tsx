

function MyTextArea({...props}) {
    return (
        <>
            <textarea {...props} className="text-black placeholder-black pl-3 rounded-2xl border-2 border-black w-1/2 h-60 enabled:hover:border-gray-400 disabled:opacity-75 my-3 focus:border"/>
        </>
    );
}

export default MyTextArea;
