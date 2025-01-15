export interface IPerson {
    age: number
    sex: string
    days: number
    level: string
}

export interface IPersonContext {
    person: IPerson
    addPerson: (person: IPerson) => void
}
