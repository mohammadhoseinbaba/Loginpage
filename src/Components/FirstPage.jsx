import { Link } from "react-router-dom"

function FirstPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
            {/*Navbar*/}
            <nav className="w-full flex justify-between items-center px-8 py-4 bg-gray-800 shadow-md fixed top-0 left-0 border-b border-gray-700">
                <div className="text-xl font-bold text-violet-400"> Mohammadhossein baba </div>
                <div className="flex gap-6 text-sm font-medium">
                    <a
                        href="https://github.com/mohammadhoseinbaba"
                        className="hover:text-violet-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mohammad-hosein-baba-ir1998/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-400 transition-colors"
                    >
                        Linkedin
                    </a>
                    <a
                        href="mailto:baba.mohammadhosein@gmail.com"
                        className="hover:text-violet-400 transition-colors"
                    >
                        Email
                    </a>
                    <Link
                        to="/login"
                        className="bg-violet-600 text-white px-3 py-1 rounded hover:bg-violet-700 transition-colors"
                    >
                        Welcome
                    </Link>
                </div>
            </nav>

            <main className="mainInfo ">
                <h1 className="text-lg leading-relaxed mb-6 text-gray-300 bg-gray-800 p-8 rounded" >
                    I'm a software engineer in Genova. I love building things for the web and beyond. Let's connect and create something amazing together! 🚀
                </h1>
                <div className="grid md:grid-cols-2 gap-10">
                <section className="bg-gray-800 p-4 rounded ">
                    <h1 className="text-2xl font-semibold text-violet-400 mb-2">
                        What I Do 👨‍💻
                    </h1>
                    <ul className="space-y-1 text-gray-300">
                        <li>Frontend with React</li>
                        <li>Backend with Node.js</li>
                        <li>Building scalable microservices</li>
                        <li>Contributing to open source</li>
                    </ul>
                </section>
                <section className="bg-gray-800 p-4 rounded ">
                    <h1 className="text-2xl font-semibold text-violet-400 mb-2">
                        Let's Chat ☕
                    </h1>
                    <p className="text-gray-300">
                        If you're in Genova and want to talk tech, grab a coffee, or
                        collaborate on a project, feel free to reach out!
                    </p>
                </section>
                </div>
            </main>
        </div>
    )
}
export default FirstPage