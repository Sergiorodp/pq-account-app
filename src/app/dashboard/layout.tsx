import React from "react";
import styles from '@app/app/dashboard/dashboardLayout.styles.module.scss'
import PQCONavUi from "@app/components/UI/PQCONav/PQCONavUi"; "@app/components/UI/PQCONavUi.tsx";

export default function DashBoardLayout({children} : Readonly<{children: React.ReactNode}>){
    return(
        <section className={styles.dashboard}>
            <header>
                <PQCONavUi/>
            </header>
            
            {children}
        
            <footer></footer>
        </section>
    )
}
