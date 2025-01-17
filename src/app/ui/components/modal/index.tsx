
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";

import "./style.css";

interface IModalProps {
    title: string | ""
    label: string
    returnTo: string
    callback: () => void
}

export default function Modal(props: IModalProps) {
    const { title,  label, returnTo, callback } = props

    const router = useRouter()

    return (
        <div className="backgroundModal">
            <div className="modal">
                <header>
                    <h2>{title}</h2>
                    <IoMdClose />
                </header>
                <hr />
                <p>{label}</p>
                <div className="btnsModal">
                    <button type="button" className="cancelButton" onClick={() => router.push(returnTo)}>Cancel</button>
                    <button type="button" className="confirmButton" onClick={callback}>Confirm</button>
                </div>
            </div>
        </div>
    )
}
