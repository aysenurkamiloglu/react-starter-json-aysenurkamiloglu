import Card from "../Card/Card";
import style from "./Students.module.scss"


const Students = () =>{

  const DATA = [{
    "id": 0,
    "name": "Abdullah Seyyid Ali",
    "assistant": false,
    "group": "OrangeRed"
  },
  {
    "id": 1,
    "name": "Abır AL MOHAMAD",
    "assistant": false,
    "group": "OrangeRed"
  },
  {
    "id": 2,
    "name": "Amani Shıkh Alashra ",
    "assistant": false,
    "group": "DeepPink"
  },
  {
    "id": 3,
    "name": "Amena ALKADRO",
    "assistant": false,
    "group": "AliceBlue"
  },
  {
    "id": 4,
    "name": "Ayşe Cansu Ünal",
    "assistant": false,
    "group": "OrangeRed"
  },
  {
    "id": 5,
    "name": "Ayşenur Kamiloğlu",
    "assistant": false,
    "group": "OrangeRed"
  },
  {
    "id": 6,
    "name": "Bahri Berke OK",
    "assistant": false,
    "group": "AliceBlue"
  },
  {
    "id": 7,
    "name": "Bal Elsada Hasun",
    "assistant": false,
    "group": "AliceBlue"
  },
  {
    "id": 8,
    "name": "Barış Karapelit",
    "assistant": false,
    "group": "OrangeRed"
  },
  {
    "id": 9,
    "name": "Burcu Aslan",
    "assistant": false,
    "group": "DeepPink"
  },
  {
    "id": 10,
    "name": "Fatin SABUNİ",
    "assistant": false,
    "group": "AliceBlue"
  },
  {
    "id": 11,
    "name": "Güncel aldemir",
    "assistant": false,
    "group": "AliceBlue"
  },
  {
    "id": 12,
    "name": "Güney Eroğlu",
    "assistant": false,
    "group": "OrangeRed"
  },
  {
    "id": 13,
    "name": "Hilal görgülüarslan",
    "assistant": false,
    "group": "AliceBlue"
  },
  {
    "id": 14,
    "name": "İSA SARI",
    "assistant": false,
    "group": "AliceBlue"
  },
  {
    "id": 15,
    "name": "İSMAİL ÖZCAN",
    "assistant": false,
    "group": "DeepPink"
  },
  {
    "id": 16,
    "name": "Kürşad Demirdöğen",
    "assistant": false,
    "group": "OrangeRed"
  },
  {
    "id": 17,
    "name": "Kusay ELHALİFE",
    "assistant": false,
    "group": "AliceBlue"
  },
  {
    "id": 18,
    "name": "Mahmut Şahan ÖZTEKİN",
    "assistant": false,
    "group": "AliceBlue"
  },
  {
    "id": 19,
    "name": "Melek malki",
    "assistant": false,
    "group": "AliceBlue"
  },
  {
    "id": 20,
    "name": "Mert Enercan",
    "assistant": false,
    "group": "DeepPink"
  },
  {
    "id": 21,
    "name": "Mert Yücesoy",
    "assistant": false,
    "group": "OrangeRed"
  },
  {
    "id": 22,
    "name": "MUHAMMED EL FARİS",
    "assistant": false,
    "group": "AliceBlue"
  },
  {
    "id": 23,
    "name": "Muhammed Nur Ghazi Alloush",
    "assistant": false,
    "group": "OrangeRed"
  },
  {
    "id": 24,
    "name": "MUSTAFA ELBAKKUR",
    "assistant": false,
    "group": "DeepPink"
  },
  {
    "id": 25,
    "name": "NEŞET MEHYEDİN",
    "assistant": false,
    "group": "AliceBlue"
  },
  {
    "id": 26,
    "name": "Onur Canoğlu",
    "assistant": false,
    "group": "DeepPink"
  },
  {
    "id": 27,
    "name": "Onur Morkoç",
    "assistant": false,
    "group": "DeepPink"
  },
  {
    "id": 28,
    "name": "rukiye motcu",
    "assistant": false,
    "group": "DeepPink"
  },
  {
    "id": 29,
    "name": "Ruqaya ALQARA LOUK",
    "assistant": false,
    "group": "OrangeRed"
  },
  {
    "id": 30,
    "name": "sabriye üregen",
    "assistant": false,
    "group": "DeepPink"
  },
  {
    "id": 31,
    "name": "Sacide DAHER",
    "assistant": false,
    "group": "OrangeRed"
  },
  {
    "id": 32,
    "name": "Sarp TOLUNAY",
    "assistant": false,
    "group": "AliceBlue"
  },
  {
    "id": 33,
    "name": "Şehriban turan",
    "assistant": false,
    "group": "OrangeRed"
  },
  {
    "id": 34,
    "name": "Tarık Bayram",
    "assistant": false,
    "group": "DeepPink"
  },
  {
    "id": 35,
    "name": "umur utkan öcal",
    "assistant": false,
    "group": "DeepPink"
  },
  {
    "id": 36,
    "name": "YEŞİM ÇETİNTAŞ",
    "assistant": false,
    "group": "OrangeRed"
  },
  {
    "id": 37,
    "name": "Zeynep Şenyürek",
    "assistant": false,
    "group": "DeepPink"
  }];

if (DATA.length === 0) {
    return <p>Öğrenci bulunmamaktadır.</p>
  }

  return (
    <div className={style.students}>
      {DATA.map(
        students => <Card id={students.id} name={students.name} group={students.group}/>
      )}
    </div>
  )
}

export default Students;

