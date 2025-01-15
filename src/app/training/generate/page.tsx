"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { postTraining } from "../../lib/api/api"
import { usePerson } from "../../lib/context/personContext"
import Loading from "../../ui/components/loading"
import { useTraining } from "../../lib/context/trainingContext"


export default function Generate() {
    const router = useRouter()
    const {addTraining} = useTraining()
    const { person } = usePerson()
    console.log(person)

    if (person == null) {
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
