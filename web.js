import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const sections = {
  About: "I am Ankitha V, a DevOps Engineer passionate about automation, CI/CD, and cloud technologies.",
  Education: [
    "Bachelor of Technology in Computer Science Engineering, Reva University, 2022",
    "Diploma in Computer Science Engineering, Government Polytechnic, Mulbagal, 2019",
  ],
  Skills: {
    "Version Control - Git, GitHub": ["Repositories", "Branching", "Merging", "Pull Requests"],
    "Cloud Technologies - AWS": ["IAM", "VPC", "EC2", "S3", "AWS CLI", "CloudWatch"],
    "Containerization - Docker": ["Dockerfile", "Docker Compose", "Image Management"],
  },
  Projects: {
    "DevOps Workflow Optimization": "CI/CD pipeline with GitHub Actions, ArgoCD, Kubernetes, and Helm.",
    "AWS Cloud Cost Optimization": "Automated Lambda function for managing stale EBS snapshots.",
  },
  Experience: [
    "CGI (Associate Software Engineer): Enhanced Java applications and managed GitLab repositories.",
    "Self-learning (DevOps Projects): Hands-on cloud automation and deployment pipelines.",
  ],
  Contact: {
    Email: "jobsforankithav@gmail.com",
    Phone: "8971488385",
    GitHub: "https://github.com/ankithaV",
    LinkedIn: "https://linkedin.com/in/ankithaV",
  },
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("About");
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B3D8A8] via-[#F3D8D7] to-[#FBFFE4] text-gray-900 p-8 max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800">Ankitha V - DevOps Engineer</h1>
      <div className="flex flex-wrap space-x-4 justify-center mt-6">
        {Object.keys(sections).map((section) => (
          <Button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`${activeSection === section ? "bg-[#5D9ECC]" : "bg-[#7FB3D5]"} hover:bg-[#5D9ECC] text-white font-semibold`}
          >
            {section}
          </Button>
        ))}
      </div>
      <motion.div key={activeSection} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <Card className="p-6 mt-6 bg-[#F5F5F5] shadow-lg rounded-lg border border-gray-300">
          {typeof sections[activeSection] === "string" && <p className="text-gray-700">{sections[activeSection]}</p>}
          {Array.isArray(sections[activeSection]) && (
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {sections[activeSection].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          {activeSection === "Skills" && (
            <div className="space-y-4">
              {Object.keys(sections.Skills).map((item) => (
                <div key={item}>
                  <h3 className="font-semibold text-lg text-gray-800">{item}</h3>
                  <div className="flex flex-wrap gap-2">
                    {sections.Skills[item].map((skill) => (
                      <span key={skill} className="bg-blue-200 text-blue-800 px-2 py-1 text-sm font-semibold rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeSection === "Projects" && (
            <div className="space-y-4">
              {Object.keys(sections.Projects).map((project) => (
                <button
                  key={project}
                  onClick={() => setActiveProject(project)}
                  className="block text-lg font-semibold text-blue-600 hover:underline"
                >
                  {project}
                </button>
              ))}
            </div>
          )}
          {activeSection === "Contact" && (
            <div className="space-y-4">
              <p><FaEnvelope className="inline mr-2" /> {sections.Contact.Email}</p>
              <p><FaPhone className="inline mr-2" /> {sections.Contact.Phone}</p>
              <p><a href={sections.Contact.GitHub} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"><FaGithub className="inline mr-2" /> GitHub</a></p>
              <p><a href={sections.Contact.LinkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"><FaLinkedin className="inline mr-2" /> LinkedIn</a></p>
            </div>
          )}
        </Card>
      </motion.div>
      {activeProject && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
        >
          <Card className="p-6 bg-white shadow-lg rounded-lg max-w-md">
            <h2 className="text-xl font-bold">{activeProject}</h2>
            <p className="text-gray-700 mt-2">{sections.Projects[activeProject]}</p>
            <Button onClick={() => setActiveProject(null)} className="mt-4 bg-red-500 hover:bg-red-700 text-white">Close</Button>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
