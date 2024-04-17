import styles  from './PQCONav-styles.module.scss'

export default function PQCONav(){
    
    const links = ['hello', 'chao']

    return(
        <nav className={ `${styles.nav_container}`}>
            <div className="cds--css-grid">
            <div className='cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 pq--lg:col-span-16'>
                <ul className={`${styles.nav_list}`}>
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
            </div>
            </div>
        </nav>
    )
}