"use client"

import { useRouter } from "next/navigation"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { IExercise, ITraining } from "../lib/interface/ITraining"
import Exercise from "../ui/components/exercise"
import ProgressiveBarSession from "../ui/components/progressiveBarSession"

import { useEffect, useState } from "react"
import "./style.css"

export default function Page() {
    const router = useRouter()

    useEffect(()=>{
        if (!localStorage.getItem("training")) {
            return router.push("/training/create")
        }
    }, [])

    const [workout, setWorkout] = useState<ITraining>(JSON.parse(localStorage.getItem("training") as string))

    const [isCompleted, setIsCompleted] = useState(false)

    const [day, setDay] = useState(workout.sessions % workout.days.length)

    function changeDay(op: string) {
        if (op === "+") {
            if (day + 1 >= workout.days.length) {
                setDay(0)
            } else {
                setDay(day => day + 1)
            }
        } else if (op === "-") {
            if (day - 1 < 0) {
                setDay(workout.days.length - 1)
            } else {
                setDay(day => day - 1)
            }
        }
    }

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

                        <nav className="navSession">
                            <span onClick={() => changeDay("-")}>
                                <FiChevronLeft />
                            </span>
                            <h3>{workout.days[day].title}</h3>
                            <span onClick={() => changeDay("+")}>
                                <FiChevronRight />
                            </span>
                        </nav>

                        {
                            workout.days[day].exercises.map((e: IExercise, index: number) => (
                                <div key={index} className="exercise">
                                    <Exercise exercise={e} />
                                </div>
                            )
                            )
                        }
                        <button type="button" className="confirmButton" onClick={finish}>Start {workout.days[day].title}</button>
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
