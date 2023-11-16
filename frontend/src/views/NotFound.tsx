

function NotFound() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen bg-gray-500">
                <h1 className="text-8xl text-white">404</h1>
                <h2 className="text-3xl text-gray-300">Вибачте, ми не знайшли цю сторінку</h2>
                <button className="mt-5 bg-gray-700 text-white">Перейти на головну сторінку</button>
            </div>
        </>
    );
}

export default NotFound;
