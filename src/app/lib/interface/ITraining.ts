export interface IExercise {
    name: string
    sets: string
    repetitions: string
    rest: string
    description: string
}

export interface IDay {
    title: string
    warmup: string
    exercises: [IExercise]
    cardio: string
}

export interface ITraining {
    sessions : number 
    description: string
    warning: string
    days: [IDay]
}

export interface ITrainingContext {
    training: ITraining
    addTraining: (training: ITraining) => void
}
