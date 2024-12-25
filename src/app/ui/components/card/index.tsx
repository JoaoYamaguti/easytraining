"use client"

import { IDay } from "@imgenhancer/app/lib/interface/ITraining"
import Exercise from "../exercise"
import { FaChevronRight } from "react-icons/fa";
import "./style.css"
import { useState } from "react";

interface ICardProps {
    day: IDay
}

export default function Card(props: ICardProps) {
    const { day } = props

    const [showDetails, setShowDetails] = useState(false)

    return (
        <div className="card">
            <h2 onClick={() => setShowDetails(!showDetails)}>
                <span>{day.title}</span>
                <FaChevronRight className={showDetails ? "rotate" : ""} />
            </h2>

            {
                showDetails && (
                    <>
                        <hr />

                        {
                            day.exercises.map((e, index) => <Exercise key={index} exercise={e} />)
                        }

                        <p>Cardio: {day.cardio}</p>

                        {/* <p>Aquecimento: {day.warmup}</p> */}
                    </>
                )
            }
        </div>
    )
}
