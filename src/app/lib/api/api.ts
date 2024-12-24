import { IPerson } from '../interface/IPerson'

const apiURL = process.env.NEXT_PUBLIC_EASYTRAINING_API
console.log(apiURL)

export async function postTraining(person: IPerson) {
    const request = new Request(`${apiURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    })

    const response = await (await fetch(request)).json()

    const data = response

    return data
}
