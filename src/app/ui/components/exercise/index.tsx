'use client'

import { IExercise } from "@imgenhancer/app/lib/interface/ITraining";

import './style.css'

interface IExerciseProps {
    exercise: IExercise
}

export default function Exercise(props: IExerciseProps) {
    const {exercise} = props

    return (
        <div className="exerciseDetails">

            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
            <p>{exercise.sets} sets - {exercise.repetitions} reps</p>
            <p>{exercise.rest}</p>

        </div>
    )
}
