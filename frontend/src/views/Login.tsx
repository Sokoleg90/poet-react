import MyInput from "../components/UI/MyInput.tsx";
import MyButton from "../components/UI/MyButton.tsx";


function Login() {
    return (
        <>
            <div className="flex flex-col items-center bg-zinc-700 bg-opacity-80 mt-12 p-6 rounded-3xl">
                <h1 className="text-4xl mb-3">
                    Увійдіть у свій акаунт
                </h1>
                <form method="POST">
                    <div className="flex flex-col">
                        <MyInput type="email" placeholder="Введіть ваш email"></MyInput>
                        <MyInput type="password" placeholder="Введіть ваш пароль"></MyInput>
                    </div>
                    <div className="flex justify-between items-center">

                        <span className="text-white hover:text-amber-400">Створити акаунт</span>


                        <span className="text-white hover:text-amber-400">Забули пароль?</span>

                    </div>
                    <MyButton>Увійти</MyButton>
                </form>
            </div>
        </>
    );
}

export default Login;
