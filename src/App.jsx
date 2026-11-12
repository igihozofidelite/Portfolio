
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Figma",
  "UI/UX Design",
  "Responsive Design",
  "Git",
  "Problem-Solving",
  "Teamwork",
  "Communication",
]

const projects = [
  {
    number: "PROJECT 01",
    title: "FIDE KICKS — Online Shoe Store",
    description:
      "An e-commerce website designed to make buying shoes online simple. Customers can explore shoes, view product details, add products to a shopping cart, and proceed to checkout.",
    role:
      "Designing website pages using Figma, choosing colors and typography, and creating a user-friendly layout.",
  },
  {
    number: "PROJECT 02",
    title: "Commissioners Property Platform",
    description:
      "A platform that aims to connect property commissioners and customers. Commissioners can upload property pictures and locations, while customers can discover properties available for buying or renting.",
    role: "",
  },
]

const socialLinks = [
  { name: "GitHub", url: "https://github.com/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/" },
  { name: "Instagram", url: "https://www.instagram.com/" },
]

function Navbar() {
  const links = [
    "Home",
    "About",
    "Capabilities",
    "Projects",
    "Education",
    "Contact",
  ]

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap justify-between items-center gap-4">
        <a href="#home" className="text-2xl font-bold text-purple-400">
          I.Fidelite
        </a>

        <div className="flex flex-wrap gap-4 text-sm">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link === "Capabilities" ? "skills" : link.toLowerCase()}`}
              className="hover:text-purple-400 transition"
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      <div className="md:w-3/5">
        <p className="text-purple-400 font-semibold mb-3">
          ASPIRING SOFTWARE DEVELOPER
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Hello, I'm{" "}
          <span className="text-purple-400">IGIHOZO Fidelite</span>
        </h1>

        <p className="text-gray-400 mt-6 leading-7">
          I am an aspiring software developer from Kigali, Rwanda.
          I enjoy designing websites, learning new technologies,
          and creating useful digital solutions.
        </p>

        <div className="flex gap-4 mt-8 flex-wrap">
          <a
            href="#projects"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
          >
            My Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-600 hover:border-purple-400 px-6 py-3 rounded-lg transition"
          >
            Contact Me
          </a>
        </div>

        <div className="flex gap-5 mt-8 text-purple-400">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          About Me
        </h2>

        <p className="text-gray-400 leading-8 text-center">
          My name is IGIHOZO Fidelite. I am learning software development
          and improving my skills through practical projects. I am interested
          in technology, creativity, and solving real-world problems.
          My goal is to become a skilled software developer who creates
          reliable and user-friendly applications.
        </p>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        My Capabilities
      </h2>

      <p className="text-gray-400 text-center mb-8">
        I enjoy designing websites, solving problems, and learning new technologies.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-900 border border-gray-800 p-5 rounded-xl text-center hover:border-purple-500 hover:text-purple-400 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          My Projects
        </h2>

        <p className="text-gray-400 text-center mb-10">
          Projects I am developing and learning from.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.number}
              className="bg-gray-950 border border-gray-800 p-7 rounded-2xl hover:border-purple-500 transition"
            >
              <p className="text-purple-400 mb-3">
                {project.number}
              </p>

              <h3 className="text-xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {project.description}
              </p>

              {project.role && (
                <p className="text-gray-300 mt-4 leading-7">
                  <strong>My role:</strong> {project.role}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        My Education
      </h2>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-7 text-center">
        <h3 className="text-xl font-bold text-purple-400">
          Hope Haven School
        </h3>

        <p className="mt-4 text-gray-300">Subjects of Focus</p>

        <p className="text-gray-400 mt-2">
          Mathematics, Computer Science, and Economics
        </p>

        <p className="text-gray-400 mt-4 leading-7">
          My education has helped me develop logical thinking,
          problem-solving skills, and an interest in technology.
        </p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-gray-900 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-5">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-8">
          I am open to learning opportunities, internships,
          and project collaborations.
        </p>

        <div className="space-y-4 text-gray-300">
          <p>
            <span className="text-purple-400 font-semibold">Location:</span>{" "}
            Kigali, Rwanda
          </p>

          <p>
            <span className="text-purple-400 font-semibold">Phone:</span>{" "}
            +250 796 876 084
          </p>

          <p>
            <span className="text-purple-400 font-semibold">Email:</span>{" "}
            <a
              href="mailto:igihozofidelite31@gmail.com"
              className="hover:text-purple-400"
            >
              igihozofidelite31@gmail.com
            </a>
          </p>
        </div>

        <a
          href="mailto:igihozofidelite31@gmail.com"
          className="inline-block mt-8 bg-purple-600 hover:bg-purple-700 text-white px-7 py-3 rounded-lg transition"
        >
          Send Me an Email
        </a>

        <div className="flex justify-center flex-wrap gap-6 mt-8 text-purple-400">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              {social.name}
            </a>
          ))}

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-6 text-center">
      <h3 className="text-xl font-bold text-purple-400">
        Fidelite | My Portfolio
      </h3>

      <p className="text-gray-400 mt-2">
        Aspiring Software Developer | Kigali, Rwanda
      </p>

      <div className="flex justify-center gap-6 mt-5 text-gray-400">
        <a href="#home" className="hover:text-purple-400">Home</a>
        <a href="#projects" className="hover:text-purple-400">Projects</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
      </div>

      <p className="text-gray-500 text-sm mt-6">
        &copy; 2026 Fidelite. All rights reserved.
      </p>
    </footer>
  )
}

function App() {
  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App


