import styles  from './PQCONav-styles.module.scss'

export default function PQCONav(){
    
    const links = ['hello', 'chao']

    return(
        <nav className={styles.nav_container}>
            <ul className={styles.nav_list}>
                {
                    links.map( link => {
                        return(
                            <li key={link}>
                                <span>{link}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}