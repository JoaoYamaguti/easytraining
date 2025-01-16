import "./style.css"

interface IProgressiveBarProps {
    days: number
    sessions: number
}

export default function ProgressiveBarSession(props: IProgressiveBarProps) {

    const { days, sessions } = props

    const fillWidth = Math.trunc(((sessions / (days * 12)) * 100))
    console.log(fillWidth)

    return (
        <section className="progressiveBarSession">
            <h3></h3>
            <progress value={fillWidth} max={100}></progress>
            <p>{sessions} / {days * 12}</p>
        </section>
    )
}
