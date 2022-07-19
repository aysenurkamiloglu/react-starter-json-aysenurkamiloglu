import Card from "../Card/CardAssitants";
import style from "./Assistants.module.scss";


const Assistants = () => {

    const DATA = [
        {
            "id": 38,
            "name": "Derya",
            "assistant": true,
            "group": "OrangeRed"
        },
        {
            "id": 39,
            "name": "Mehmet",
            "assistant": true,
            "group": "DeepPink"
        },
        {
            "id": 40,
            "name": "Cem",
            "assistant": true,
            "group": "AliceBlue"
        }];

    if (DATA.length === 0) {
        return <p>Asistan bulunmamaktadır.</p>
    }

    return (
        <div className={style.assistants}>
            {DATA.map(
                assistants => <Card id={assistants.id} name={assistants.name} group={assistants.group} />
            )}
        </div>
    )
}

export default Assistants;