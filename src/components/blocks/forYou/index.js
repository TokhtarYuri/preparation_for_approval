import styles from "./ForYou.module.css";
import { FORYOU_CONTENT } from "../../../constants/text";
import ForYou1SRC from "../../../images/for-you-1.png";
import ForYou2SRC from "../../../images/for-you-2.png";
import ForYou3SRC from "../../../images/for-you-3.png";
import ForYou4SRC from "../../../images/for-you-4.png";
import { getImageSrc } from "../../../utils/imageHelper";

const itemsData = [
  { img: ForYou1SRC, title: FORYOU_CONTENT.item_1, text: FORYOU_CONTENT.item_11 },
  { img: ForYou2SRC, title: FORYOU_CONTENT.item_2, text: FORYOU_CONTENT.item_22 },
  { img: ForYou3SRC, title: FORYOU_CONTENT.item_3, text: FORYOU_CONTENT.item_33 },
  { img: ForYou4SRC, title: FORYOU_CONTENT.item_4, text: FORYOU_CONTENT.item_44 },
];

const ForYou = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}><span className="text-secondary">{FORYOU_CONTENT.title_1}</span></h2>
        <h2 className={styles.title}>{FORYOU_CONTENT.title_2}</h2>

        <div className={styles.items}>
          {itemsData.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.itemImage}>
                <img src={getImageSrc(item.img)} alt="for-you" className={styles.imageForYou} />
              </div>
              <div className={styles.itemText}>
                <p>
                  <span className="text-secondary">{item.title}</span><br/>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForYou;
