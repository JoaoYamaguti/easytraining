import personContext from "@imgenhancer/app/lib/context/personContext"
import { IPersonContext } from "@imgenhancer/app/lib/interface/IPerson"
import { useContext } from "react"


export default function Generate() {

    const { person } = useContext<IPersonContext>(personContext)

    console.log(person)

    async function generate() {
        console.log(person)
        if (!person.age || !person.sex || !person.days || !person.level) {
            alert('please fulfill all fields.')
            return
        }

        if (person.age < 10) {
            alert("Please consult a doctor of your choice for better guidance.")
            return
        }

        setLoading(true)

        const workout = await postTraining(person)

        const training = { ...workout, sessions: 0 }

        localStorage.setItem("training", JSON.stringify(training))

        router.push('/training')

        setLoading(false)
    }

    return (
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum delectus molestiae est, possimus ex suscipit vel qui quisquam blanditiis accusamus veritatis similique quas unde rerum nihil consequatur tempora expedita fugit!</p>
    )
}
