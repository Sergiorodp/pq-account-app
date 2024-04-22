import { type IPQCOChildren } from '@app/types/layout/children'
import styles from './login-layout-styles.module.scss'

export default function LogInLayout({children}: Readonly<IPQCOChildren>){
    return(
        <section className={styles.layout_container}>
            {children}
        </section>
    )
}