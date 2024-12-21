import "./style.css";

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

                <button type="button">Create Training</button>
            </main>

            <footer>Made by João Yamaguti</footer>
        </div>

    );
}
