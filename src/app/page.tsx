"use client"

import Image from "next/image";
import Link from "next/link";
import Header from "./ui/components/header";

import "./style.css";
import { useEffect, useState } from "react";

export default function Home() {
    const [haveTraining, setHaveTraining] = useState(false)

    useEffect(()=>{
        if (localStorage.getItem("training")) {
            setHaveTraining(true)
        }

    },[])

    return (
        <div className="home container">
            <Header />

            <main>
                <section>
                    <p>Get your own training created by AI.</p>

                    <Image
                        src="/personFreshAirWorkout.png"
                        alt="Person training"
                        width={270}
                        height={230}
                    />
                </section>
                {
                    !haveTraining ?
                        <Link href={'/training/create'} className="submitButton">Create Training</Link>
                        :
                        <Link href={'/workout'} className="submitButton">Continue...</Link>
                }
            </main>

            <footer>Made by João Yamaguti</footer>
        </div>
    );
}
