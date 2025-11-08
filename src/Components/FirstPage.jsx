import { Link } from "react-router-dom"

function FirstPage() {
    return (
        <div>
            <div className="navbar">
                <a > Mohammadhossein baba </a>
                <a href="https://github.com/mohammadhoseinbaba">GitHub</a>
                <a href="https://www.linkedin.com/in/mohammad-hosein-baba-ir1998/">Linkedin</a>
                <a href="mailto:baba.mohammadhosein@gmail.com">Email</a>
                <Link
                    to="/login">
                    Welcome
                </Link>
            </div>
            <div className="mainInfo">
                <p>I'm a software engineer in Hamburg. I love building things for the web and beyond. Let's connect and create something amazing together! 🚀</p>
            </div>
            <div className="Duty">
                <h1>What I Do 👨‍💻</h1>
                Frontend with React
                Backend with Node.js
                Building scalable microservices
                Contributing to open source
            </div>
            <div className="chat">
                <h1>Let's Chat ☕</h1>
                If you're in Hamburg and want to talk tech, grab a coffee, or collaborate on a project, feel free to reach out!
            </div>
        </div>
    )
}
export default FirstPage