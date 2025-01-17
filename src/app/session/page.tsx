"use client"

import { useRouter } from "next/navigation"
import { IExercise } from "../lib/interface/ITraining"
import Exercise from "../ui/components/exercise"
import ProgressiveBarSession from "../ui/components/progressiveBarSession"

import { useEffect, useState } from "react"
import "./style.css"

export default function Page() {
    const router = useRouter()

    const training = localStorage.getItem("training") || null

    if (training == null) {
        return router.push("/training/create")
    }

    const [workout, setWorkout] = useState(JSON.parse(training))

    const [isCompleted, setIsCompleted] = useState(false)

    const day = workout.sessions % workout.days.length

    function finish() {
        if (workout.sessions < (workout.days.length * 12)) {
            const helper = { ...workout, sessions: workout.sessions + 1 }
            setWorkout(helper)
            localStorage.setItem("training", JSON.stringify(helper))
        }

        if (workout.sessions == (workout.days.length * 12)) {
            setIsCompleted(true)
        }
    }

    function createWorkout() {
        localStorage.removeItem("training")
        router.push("training/create")
    }

    useEffect(() => {
        if (workout.sessions >= (workout.days.length * 12)) {
            setIsCompleted(true)
        }
    }, [])

    return (
        <main className={`session container ${isCompleted && "completed"}`}>
            <ProgressiveBarSession days={workout.days.length} sessions={workout.sessions} />
            {
                !isCompleted ? (
                    <section className="workoutDay">
                        {
                            workout.days[day].exercises.map((e: IExercise, index: number) => (
                                <div key={index} className="exercise">
                                    <Exercise exercise={e} />
                                </div>
                            )
                            )
                        }
                        <button type="button" className="confirmButton" onClick={finish}>Finish</button>
                    </section>
                )
                    : (
                        <section className="completedSection">
                            <div>
                                <h4>
                                    Congratulations!!!
                                </h4>
                                <p>
                                    You completed your workout.
                                </p>
                            </div>
                            <button type="button" className="confirmButton" onClick={createWorkout}>Create a new Workout</button>
                        </section>
                    )
            }
        </main>
    )
}
