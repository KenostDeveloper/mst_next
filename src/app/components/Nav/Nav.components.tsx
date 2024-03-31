import styles from './Nav.module.scss'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__leave}>Выйти <i className='pi pi-sign-out'></i></div>
        </nav>
    );
}

export default Nav;