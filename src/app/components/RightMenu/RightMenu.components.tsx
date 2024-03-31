import VendorSwiper from "../Swipers/VendorsSwiper.components";
import styles from "./RightMenu.module.scss"

const BasketEmpty = () => {
    return (
        <div className="d-col-basket">
            <h3>Корзина</h3>
            <div className="basket-empty">
                <div className="basket-empty__content">
                <img src="/icons/basket-empty.svg" alt="" />
                <h3>В вашей корзине пока пусто</h3>
                </div>
            </div>
        </div>
    );
}

const VendorChange = () => {

    const vendors = [
        {
            alt: "Аккумуляторная дрель-шуруповерт всего за 1500 рублей!",
            srcImage: "https://mst.tools/assets/content/images/shops_logo/abk-logo.png",
            url: "/"
        },
        {
            alt: "Аккумуляторная дрель-шуруповерт всего за 1500 рублей!",
            srcImage: "https://mst.tools/assets/content/images/shops_logo/mstoldlogo.png",
            url: "/"
        },
        {
            alt: "Аккумуляторная дрель-шуруповерт всего за 1500 рублей!",
            srcImage: "https://mst.tools/assets/content/images/shops_logo/abk-logo.png",
            url: "/"
        },
        {
            alt: "Аккумуляторная дрель-шуруповерт всего за 1500 рублей!",
            srcImage: "https://mst.tools/assets/content/images/shops_logo/mstoldlogo.png",
            url: "/"
        },
        {
            alt: "Аккумуляторная дрель-шуруповерт всего за 1500 рублей!",
            srcImage: "https://mst.tools/assets/content/images/shops_logo/abk-logo.png",
            url: "/"
        },
        {
            alt: "Аккумуляторная дрель-шуруповерт всего за 1500 рублей!",
            srcImage: "https://mst.tools/assets/content/images/shops_logo/mstoldlogo.png",
            url: "/"
        },
        {
            alt: "Аккумуляторная дрель-шуруповерт всего за 1500 рублей!",
            srcImage: "https://mst.tools/assets/content/images/shops_logo/abk-logo.png",
            url: "/"
        },
        {
            alt: "Аккумуляторная дрель-шуруповерт всего за 1500 рублей!",
            srcImage: "https://mst.tools/assets/content/images/shops_logo/mstoldlogo.png",
            url: "/"
        },
        {
            alt: "Аккумуляторная дрель-шуруповерт всего за 1500 рублей!",
            srcImage: "https://mst.tools/assets/content/images/shops_logo/abk-logo.png",
            url: "/"
        },
        {
            alt: "Аккумуляторная дрель-шуруповерт всего за 1500 рублей!",
            srcImage: "https://mst.tools/assets/content/images/shops_logo/mstoldlogo.png",
            url: "/"
        },
    ]

    return (
        <div className="d-col-shop mb-2" data-store="53">
            <div className="d-col-shop__left">
                <span className="d-col-shop__span">Выбранный магазин</span>
                <span className="h3 btnActiveChangeshopOn">6 из 45<i className="pi pi-angle-down"></i></span>
            </div>
            <div className={styles.vendors}>
                <VendorSwiper items={vendors}/>
            </div>
		</div>
    );
}

const RightMenu = () => {
    return (
        <div>
            {VendorChange()}
            {BasketEmpty()}
        </div>
    );
}

export default RightMenu;