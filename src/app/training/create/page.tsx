'use client'

import { useState } from 'react'
// import Link from 'next/link'
import './style.css'
import { IPerson } from '@imgenhancer/app/lib/interface/IPerson'

export default function Page() {
    const todayString = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
    console.log(todayString)
    const data = {
        week: Array(7).fill(''),
        level: ['iniciante', 'intermediario', 'avançado', 'profissional']
    }

    const [person, setPerson] = useState({} as IPerson)


    function handleAge(birthDay: string) {
        const birthDate = new Date(birthDay)
        const age = new Date().getFullYear() - birthDate.getFullYear()

        setPerson({...person, age})
    }


    return (
        <main className="createTraining">
            <form>
                <label htmlFor="age">
                    Birthday
                    <input type="date" name="age" id="age" max={todayString} onChange={(e) => handleAge(e.target.value)}/>
                </label>

                <label htmlFor="sex">
                    Sex
                    <select name="sex" id="sex">
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                </label>

                <label htmlFor="days">
                    Days for Week
                    <select name="days" id="days">
                        {
                            data.week.map((_, index) => <option key={index} value={index + 1}>{index + 1}</option>)
                        }
                    </select>
                </label>
                <label htmlFor="days">
                    level
                    <select name="days" id="days">
                        {
                            data.level.map((l, index) => <option key={index} value={l}>{l}</option>)
                        }
                    </select>
                </label>

                <button type='button' className="submitButton" onClick={() => console.log(person)}>Create Training</button >
            </form>
        </main>
    )
}
