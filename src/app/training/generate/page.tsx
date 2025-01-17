"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { postTraining } from "../../lib/api/api"
import { usePerson } from "../../lib/context/personContext"
import { useTraining } from "../../lib/context/trainingContext"
import { IPerson } from "../../lib/interface/IPerson"
import Loading from "../../ui/components/loading"

export default function Generate() {
    const router = useRouter()
    const { addTraining } = useTraining()
    const { person } = usePerson()

    if (person == {} as IPerson) {
        router.push("/training/create")
    }

    async function generate() {
        const workout = await postTraining(person)

        const training = { ...workout, sessions: 0 }

        addTraining(training)

        router.push('/training')
    }

    useEffect(() => {
        generate()
    }, [])

    return (<Loading />)
}
