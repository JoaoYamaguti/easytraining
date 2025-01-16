"use client"

import { createContext, useContext, useState } from "react";
import { ITraining, ITrainingContext } from "../interface/ITraining";


const trainingContext = createContext<ITrainingContext | null>(null)

export function TrainingProvider ({children}: Readonly<{ children: React.ReactNode; }>) {

    const [training, setTraining] = useState({} as ITraining)

    function addTraining(training: ITraining) {
        setTraining(training)
    }

    return (
        <trainingContext.Provider value ={{training, addTraining}}>
        {children}
        </ trainingContext.Provider>
    )
}

export const useTraining = () => useContext(trainingContext) as ITrainingContext
