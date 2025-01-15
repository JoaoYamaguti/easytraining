"use client"

import { useRouter } from "next/navigation"
import { IExercise, ITraining } from "../lib/interface/ITraining"
import Exercise from "../ui/components/exercise"

import "./style.css"
import ProgressiveBarSession from "../ui/components/progressiveBarSession"
import { useState } from "react"

export default function Page() {
    const router = useRouter()

    const training = localStorage.getItem("training")

    if (training == null) {
        return router.push("/training/create")
    }

    const workout = JSON.parse(training)
    console.log(workout)

    const day = workout.sessions % workout.days.length

    return (
        <div className="session container">
            <main>
                <ProgressiveBarSession sessions={workout.sessions}/>

                <section className="workoutDay">
                    {
                        workout.days[day].exercises.map((e: IExercise) => (

                            <div className="exercise">
                                <Exercise exercise={e} />
                            </div>
                        )
                        )
                    }
                </section>
            </main>
        </div>
    )
}
