import React from "react";
import styles from '@app/app/dashboard/dashboardLayout.styles.module.scss'

import PQCONavUi from "@app/components/UI/PQCONav/PQCONavUi"
import PQCOAside from "@app/components/UI/PQCOAside/PQCOAside";
import PQCOGridCds from "@app/components/UI/PQCOCDS/PQCOGrid";

export default function DashBoardLayout({children} : Readonly<{children: React.ReactNode}>){
    return(
        <section className={styles.dashboard}>
            <header>
                <PQCONavUi/>
            </header>

            <aside className={styles.aside_bar}>
                <PQCOAside/>
            </aside>
            
            {children}
                
            <footer>

            </footer>
        </section>
    )
}
