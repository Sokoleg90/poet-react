import MyTitle from "../../components/UI/MyTitle.tsx";
import MyInput from "../../components/UI/MyInput.tsx";
import MyTextArea from "../../components/UI/MyTextArea.tsx";
import MyButton from "../../components/UI/MyButton.tsx";
import MySelect from "../../components/UI/MySelect.tsx";

function Create() {
    return (
        <>
            <div className="flex flex-col ml-6">
                <MyTitle>Почни творити!</MyTitle>
                <MyInput placeholder="Назва вірша"/>
                <MyTextArea placeholder="Текст вірша"/>
            </div>
            <div className="ml-6 mb-3">
            <MySelect>
                <option>Про кохання</option>
            </MySelect>
            </div>
            <div className="ml-6">
            <MyButton>Додати</MyButton>
            </div>
        </>
    );
}

export default Create;
