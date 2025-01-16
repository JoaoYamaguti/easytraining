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
    console.log(person)

    if (person == {} as IPerson) {
        router.push("/training/create")
    }

    async function generate() {
        console.log("entrou")
        const workout = await postTraining(person)

        const training = { ...workout, sessions: 0 }

        addTraining(training)

        console.log("saiu")

        router.push('/training')
    }

    useEffect(() => {
        generate()
    }, [])

    return (<Loading />)
}
