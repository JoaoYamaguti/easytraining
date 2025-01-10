"use client"

import { useEffect, useState } from "react";
import { PiWarningFill } from "react-icons/pi";
import { ITraining } from "../lib/interface/ITraining";
import Card from "../ui/components/card";

import './style.css'

export default function Page() {
    const [training, setTraining] = useState<ITraining>()

    useEffect(() => {
        setTraining(JSON.parse(localStorage.getItem("training") as string))
        console.log(training)

    }, [])

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

                <button className="submitButton">Save Training</button>

            </main>
        </div>
    )
}
