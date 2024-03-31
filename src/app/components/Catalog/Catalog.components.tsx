'use client'
import { useEffect, useState } from "react";
import CatalogEl from "./CatalogEl.components";
import styles from "./Catalog.module.scss"

const Catalog = ({catalog}:any) => {

    const [menuActive, setMenuActive] = useState(true);

    return (
        <>
            <div className="dart-catalog-menu">
                {catalog.map((item: any) => (
                    <CatalogEl key={item.label} item={item}/>
                ))}
            </div>
            <div className={menuActive? `${styles.closemenu}` : `${styles.closemenu} ${styles.active}`} onClick={() => setMenuActive(!menuActive)}>
                <i className="pi pi-angle-left"></i>
                <p>Скрыть</p>
            </div>
        </>
    );
}

export default Catalog;