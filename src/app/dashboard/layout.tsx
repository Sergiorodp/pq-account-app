import React from "react";
import styles from '@app/app/dashboard/dashboardLayout.styles.module.scss'

import PQCONavUi from "@app/components/UI/PQCONav/PQCONavUi"
import PQCOAside from "@app/components/UI/PQCOAside/PQCOAside";

export default function DashBoardLayout({children} : Readonly<{children: React.ReactNode}>){
    return(
        <section className={styles.dashboard}>
            <header>
                <PQCONavUi/>
            </header>
            <div className={styles.dash_content}>   
                <div className={styles.dash_body}>
                    {children}
                </div> 
                <aside className={styles.aside_bar}>
                    <PQCOAside/>
                </aside>
            </div>
            <footer>

            </footer>
        </section>
    )
}
