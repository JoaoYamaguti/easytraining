"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import { usePerson } from '../../lib/context/personContext';
import { IPerson } from '../../lib/interface/IPerson';

import './style.css';
import Modal from "@imgenhancer/app/ui/components/modal";

export default function Page() {
    const { addPerson } = usePerson()
    const router = useRouter()
    const [person, setPerson] = useState({} as IPerson)
    const [showModal, setShowModal] = useState(false)

    const todayString = new Date().toISOString().split("T")[0]

    const data = {
        week: Array(7).fill(''),
        level: ['iniciante', 'intermediario', 'avançado', 'profissional']
    }

    function handleAge(birthDay: string) {
        const birthDate = new Date(birthDay)
        const age = new Date().getFullYear() - birthDate.getFullYear()

        setPerson({ ...person, age })
    }

    function handleSex(sex: string) {
        console.log(sex)
        setPerson({ ...person, sex })
    }

    function handleDays(day: string) {
        setPerson({ ...person, days: Number(day) })
    }

    function handleLevel(level: string) {
        setPerson({ ...person, level })
    }

    async function saveInfos() {
        console.log(person)
        if (!person.age || !person.sex || !person.days || !person.level) {
            alert('please fulfill all fields.')
            return
        }

        if (person.age < 10) {
            alert("Please consult a doctor of your choice for better guidance.")
            return
        }

        addPerson(person)

        router.push("/training/generate")
    }

    function callbackForModal() {
        localStorage.removeItem("training")
        setShowModal(false)
    }

    useEffect(() => {
        if (localStorage.getItem("training")) {
            setShowModal(true)
        }
    })

    return (
        <main className="createTraining container">
            <form>
                <p>
                    <label htmlFor="age">
                        Birthday
                    </label>
                    <input type="date" name="age" id="age" max={todayString} onChange={(e) => handleAge(e.target.value)} />
                </p>

                <p>
                    <label htmlFor="sex">
                        Sex
                    </label>
                    <select name="sex" id="sex" onChange={(e) => handleSex(e.target.value)}>
                        <option value=""></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </p>

                <p>
                    <label htmlFor="days">
                        Days for Week
                    </label>
                    <select name="days" id="days" onChange={(e) => handleDays(e.target.value)}>
                        <option value=""></option>
                        {
                            data.week.map((_, index) => <option key={index} value={index + 1}>{index + 1}</option>)
                        }
                    </select>
                </p>
                <p>
                    <label htmlFor="days">
                        level
                    </label>
                    <select name="days" id="days" onChange={(e) => handleLevel(e.target.value)}>
                        <option value=""></option>
                        {
                            data.level.map((l, index) => <option key={index} value={l}>{l}</option>)
                        }
                    </select>
                </p>

                <button type="button" className="submitButton" onClick={saveInfos}>Create Training</button >
            </form>
            {
                showModal && <Modal
                    title="Delete Workout"
                    label="Do you sure you want to create a new workout?"
                    returnTo="/session"
                    callback={callbackForModal}
                />
            }
        </main>
    )
}
