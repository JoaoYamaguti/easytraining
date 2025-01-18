"use client"

import { useRouter } from "next/navigation";
import { PiWarningFill } from "react-icons/pi";
import { TiCancel, TiRefresh } from "react-icons/ti";
import { useTraining } from "../lib/context/trainingContext";
import Card from "../ui/components/card";

import './style.css';
import { useEffect } from "react";

export default function Page() {
    const { training } = useTraining()
    const router = useRouter()

    function saveTraining() {
        localStorage.setItem("training", JSON.stringify(training))

        router.push("/workout")
        return
    }

    useEffect(()=>{
        if (localStorage.getItem("training")) {
            router.push("/workout")
            return
        }
    },[])

    return (
        <div className="training container">
            <main>
                <section className="warning">
                    <h1><PiWarningFill /> Warning <PiWarningFill /></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vero ea ex accusantium, dolore corporis provident assumenda voluptatem laudantium quod quia molestias cum deserunt.</p>
                </section>

                <hr />

                <h2>Here is your own training created by AI.</h2>

                <hr />

                {
                    training && (
                        <section className='content'>
                            <p>{training.description}</p>

                            <p>{training.warning}</p>

                            {training.days.map((d, index) => <Card key={index} day={d} />)}

                        </section>
                    )
                }

                <div className="btns">
                    <button className="cancelButton" onClick={() => router.push("/training/create")}><TiCancel /></button>
                    <button className="backButton" onClick={() => router.push("/training/generate")}><TiRefresh /></button>
                    <button className="submitButton" onClick={saveTraining}>Save Training</button>
                </div>
            </main>
        </div>
    )
}
