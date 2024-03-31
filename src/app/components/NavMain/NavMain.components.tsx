/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './NavMain.module.scss'

const NavMain = () => {
    return (
        <div className={styles.navmain}>
            <div className={styles.navmain__hand}>
                <Link className={styles.navmain__logo} href="#">
                    <img src="/logo.svg" alt="Логотип" />
                    <span>для бизнеса</span>
                </Link>

                <div className={`${styles.navmain__search} dart-input dart-input-search`}>
                    <div className={styles.navmain__search_btn}>
                        <input type="text" placeholder="Найти во всех магазинах" />
                        <a href="/search.html" className={`${styles.navmain__dart_btn} dart-btn dart-btn-primary`}>Найти</a>
                    </div>
                </div>
            </div>
            

            <a href="#" className={`${styles.navmain__components_desctop} dart-btn`}>
                <i className="pi pi-sliders-h"></i>
                <b>Сравнение</b>
            </a>
        </div>
    );
}

export default NavMain;