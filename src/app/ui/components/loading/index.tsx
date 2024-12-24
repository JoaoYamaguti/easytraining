
import { FaDumbbell } from "react-icons/fa6";
import './style.css'

export default function Loading() {

    return (
        <div className="loading">

            <div className="container">
                <FaDumbbell />

                <p>Generating your own <span>training</span></p>
            </div>
        </div>
    )
}
