'use client'

import { PiWarningFill } from "react-icons/pi";

import './style.css'
import { useEffect, useState } from "react";
import { ITraining } from "../lib/interface/ITraining";
import Card from "../ui/components/card";

export default function Page() {
    console.log(JSON.parse(localStorage.getItem("training") as string))
    const [training, setTraining] = useState<ITraining>()

    useEffect(() => {
        setTraining(JSON.parse(localStorage.getItem("training") as string))
        console.log(training)

    }, [])

    return (
        <div className="training">
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

                            {training.days.map((d,index) => <Card key={index} day={d}/>)}

                        </section>
                    )
                }
            </main>
        </div>
    )
}
