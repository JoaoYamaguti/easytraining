"use client"

import { createContext, useContext, useState } from "react";
import { IPerson, IPersonContext } from "../interface/IPerson";

const personContext = createContext<IPersonContext | null>(null)

export function PersonProvider ({children}: Readonly<{ children: React.ReactNode; }>) {

    const [person, setPerson] = useState({} as IPerson)

    function addPerson(person: IPerson) {
        setPerson(person)
    }

    return (
        <personContext.Provider value={{person, addPerson}}>
            {children}
        </personContext.Provider>
    )
}

export const usePerson = () => useContext(personContext) as IPersonContext
