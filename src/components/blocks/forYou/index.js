import styles from "./ForYou.module.css";
import { FORYOU_CONTENT } from "../../../constants/text";
import ForYou1SRC from "../../../images/for-you-1.png"
import ForYou2SRC from "../../../images/for-you-2.png"
import ForYou3SRC from "../../../images/for-you-3.png"
import ForYou4SRC from "../../../images/for-you-4.png"
const item_1 =
    <>
        <div className={styles.itemImage}>
            <div className={styles.itemImageBackground}></div>
            <div className={styles.itemImageBackgroundCircle}></div>
            <img src={ForYou1SRC} alt="for-you" className={styles.imageForYou} />
        </div>
        <div className={styles.itemText}>
            <p>
            <span className={"text-secondary"}>{FORYOU_CONTENT.item_1}</span>
                <br />
                {FORYOU_CONTENT.item_11}
            </p>
        </div>
    </>


const item_2 =
    <>
        <div className={styles.itemImage}>
            <div className={styles.itemImageBackground}></div>
            <div className={styles.itemImageBackgroundCircle}></div>
            <img src={ForYou2SRC} alt="for-you" className={styles.imageForYou} />
        </div>
        <div className={styles.itemText}>
            <p>
            <span className={"text-secondary"}>{FORYOU_CONTENT.item_2}</span>
                <br />
                {FORYOU_CONTENT.item_22}
            </p>
        </div>
    </>

const item_3 =
    <>
        <div className={styles.itemImage}>
            <div className={styles.itemImageBackground}></div>
            <div className={styles.itemImageBackgroundCircle}></div>
            <img src={ForYou3SRC} alt="for-you" className={styles.imageForYou} />
        </div>
        <div className={styles.itemText}>
            <p>
            <span className={"text-secondary"}>{FORYOU_CONTENT.item_3}</span>
                <br />
                {FORYOU_CONTENT.item_33}
            </p>
        </div>
    </>


const item_4 =
    <>
        <div className={styles.itemImage}>
            <div className={styles.itemImageBackground}></div>
            <div className={styles.itemImageBackgroundCircle}></div>
            <img src={ForYou4SRC} alt="for-you" className={styles.imageForYou} />
        </div>
        <div className={styles.itemText}>
            <p>
            <span className={"text-secondary"}>{FORYOU_CONTENT.item_4}</span>
                {FORYOU_CONTENT.item_44}
            </p>
        </div>
    </>



const items = [item_1, item_2, item_3, item_4];


const ForYou = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2>
                    <span className={"text-secondary"}>
                        {FORYOU_CONTENT.title_1}
                    </span>
                </h2>
                <h2>
                    {FORYOU_CONTENT.title_2}
                </h2>

                <div className={styles.items}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.item}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ForYou;