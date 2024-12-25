'use client'

import { useState } from 'react'
import { useRouter } from "next/navigation";
import { IPerson } from '@imgenhancer/app/lib/interface/IPerson'
import { postTraining } from '@imgenhancer/app/lib/api/api'
import Loading from '@imgenhancer/app/ui/components/loading'
import './style.css'

export default function Page() {
    const todayString = `${new Date().getFullYear() - 1}-${new Date().getMonth()}-${new Date().getDate()}`

    const data = {
        week: Array(7).fill(''),
        level: ['iniciante', 'intermediario', 'avançado', 'profissional']
    }

    const router = useRouter()

    const [person, setPerson] = useState({} as IPerson)
    const [loading, setLoading] = useState(false)

    function handleAge(birthDay: string) {
        const birthDate = new Date(birthDay)
        const age = new Date().getFullYear() - birthDate.getFullYear()

        setPerson({ ...person, age })
    }

    function handleSex(sex: string) {
        setPerson({ ...person, sex })
    }

    function handleDays(day: string) {
        setPerson({ ...person, days: Number(day) })
    }

    function handleLevel(level: string) {
        setPerson({ ...person, level })
    }

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

        const training = await postTraining(person)

        localStorage.setItem("training", JSON.stringify(training))

        setLoading(false)

        router.push('/training')
    }

    return (
        <main className="createTraining">
            <form>
                <label htmlFor="age">
                    Birthday
                    <input type="date" name="age" id="age" max={todayString} onChange={(e) => handleAge(e.target.value)} />
                </label>

                <label htmlFor="sex">
                    Sex
                    <select name="sex" id="sex" onChange={(e) => handleSex(e.target.value)}>
                        <option value=""></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>

                <label htmlFor="days">
                    Days for Week
                    <select name="days" id="days" onChange={(e) => handleDays(e.target.value)}>
                        <option value=""></option>
                        {
                            data.week.map((_, index) => <option key={index} value={index + 1}>{index + 1}</option>)
                        }
                    </select>
                </label>
                <label htmlFor="days">
                    level
                    <select name="days" id="days" onChange={(e) => handleLevel(e.target.value)}>
                        <option value=""></option>

                        {
                            data.level.map((l, index) => <option key={index} value={l}>{l}</option>)
                        }
                    </select>
                </label>

                <button type='button' className="submitButton" onClick={generate}>Create Training</button >
            </form>
            {
                loading && <Loading />
            }
        </main>
    )
}
