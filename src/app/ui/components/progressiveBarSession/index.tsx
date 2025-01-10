import "./style.css"

interface IProgressiveBarProps {
    sessions: number
}

export default function ProgressiveBarSession(props: IProgressiveBarProps) {

    const { sessions } = props

    return (
        <section className="progressiveBarSession">
            <h3></h3>
            <div className="ProgrssiveShell">
                <div className="ProgrssiveFill" style={"inline-size:" + (sessions / (sessions * 12)) + "%;"}></div>
            </div>
            <p>{sessions} / {sessions * 12}</p>
        </section>
    )
}