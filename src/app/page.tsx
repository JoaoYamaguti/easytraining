"use client"

import Image from "next/image";
import Link from "next/link";
import Header from "./ui/components/header";

import "./style.css";

export default function Home() {
    const haveTraining = localStorage.getItem("training") || null

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
                        <Link href={'/session'} className="submitButton">Continue...</Link>
                }
            </main>

            <footer>Made by João Yamaguti</footer>
        </div>
    );
}
