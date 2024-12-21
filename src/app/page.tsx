import "./style.css";
import Link  from "next/link";

export default function Home() {
    return (
        <div className="home">
            <header>
                <h1>EasyTraining</h1>
            </header>

            <main>
                <section>
                    <p>Get your own training created by AI.</p>
                </section>

                <Link href={'/training/create'} className="submitButton">Create Training</Link>
            </main>

            <footer>Made by João Yamaguti</footer>
        </div>

    );
}
