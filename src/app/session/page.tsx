"use client"

import { useRouter } from "next/navigation"
import { IExercise } from "../lib/interface/ITraining"
import Exercise from "../ui/components/exercise"
import ProgressiveBarSession from "../ui/components/progressiveBarSession"

import "./style.css"

export default function Page() {
    const router = useRouter()

    const training = localStorage.getItem("training") || null

    if (training == null) {
        return router.push("/training/create")
    }

    const workout = JSON.parse(training)
    console.log(workout)

    const day = workout.sessions % workout.days.length

    return (
        <div className="session container">
            <main>
                <ProgressiveBarSession days={workout.days.length} sessions={workout.sessions} />

                <section className="workoutDay">
                    {
                        workout.days[day].exercises.map((e: IExercise, index: number) => (

                            <div key={index} className="exercise">
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
