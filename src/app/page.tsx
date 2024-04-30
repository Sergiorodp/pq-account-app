"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import APP_CONFIG from "@app/app/config/routes";

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    if(true){
      router.push(APP_CONFIG.APP_ROUTES.login)
    }
  },[])

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Hola mundo </p>
      </div>
    </main>
  );
}
