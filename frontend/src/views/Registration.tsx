import MyInput from "../components/UI/MyInput.tsx";
import MyButton from "../components/UI/MyButton.tsx";

function Registration() {
    return (
        <>
            <div className="flex flex-col items-center bg-zinc-700 bg-opacity-80 mt-12 p-6 rounded-3xl">
                <h1 className="text-4xl mb-3">
                    Реєстрація
                </h1>
                <form>
                    <div className="flex flex-col">
                        <MyInput type="text" placeholder="Введіть ваше ім'я"></MyInput>
                        <MyInput type="email" placeholder="Введіть ваш email"></MyInput>
                        <MyInput placeholder="Введіть ваш пароль" type="password"></MyInput>
                        <MyInput placeholder="Підтвердіть ваш пароль" type="password"></MyInput>
                    </div>
                    <div className="flex justify-between items-center">

                        <span className="text-white hover:text-amber-400">В мене є акаунт</span>


                        <span className="text-white hover:text-amber-400">Забули пароль?</span>

                    </div>
                    <MyButton>Створити акаунт</MyButton>
                </form>
            </div>
        </>
    );
}

export default Registration;
