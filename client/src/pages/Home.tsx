import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, Star } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Ethereal Royalty
 * - Deep Plum (#4A1A5C) as primary color representing authority and technical depth
 * - Gold (#D4AF37) accents celebrating achievements
 * - Asymmetric layout with floating cards and elegant animations
 * - Playfair Display for headings (luxury, serif), Lato for body (clean, readable)
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              Bhaviya
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Enhanced overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-background/30"></div>
          <div className="absolute inset-0 bg-primary/15"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="animate-slide-in-left">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 rounded-full bg-accent/30 border-2 border-accent mb-6 backdrop-blur-sm">
                <span className="text-accent font-semibold text-sm drop-shadow-lg">
                  DevOps Princess 👑
                </span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight drop-shadow-xl">
              Bhaviya Vyas
            </h1>
            <p className="text-xl text-foreground font-medium mb-8 leading-relaxed drop-shadow-lg">
              DevOps Engineer crafting elegant infrastructure solutions with
              precision and grace. Building scalable systems that empower teams.
            </p>
            <div className="flex gap-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 px-8 py-6 text-lg"
              >
                View Resume
              </Button>
            </div>
          </div>

          {/* Right: Crown Icon */}
          <div className="hidden md:flex justify-center animate-float">
            <div className="relative w-80 h-80">
              <img
                src="/images/crown-icon-bg.png"
                alt="Crown Icon"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-3">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase drop-shadow-lg">Scroll</p>
            <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2 animate-gold-glow">
              <div className="w-1 h-2 bg-accent rounded-full" style={{
                animation: 'bounce 2s infinite'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative py-12">
        <img
          src="/images/accent-pattern.png"
          alt="Divider"
          className="w-full h-24 object-cover"
        />
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                I'm a passionate DevOps Engineer with a love for elegant
                solutions and seamless automation. With expertise in cloud
                infrastructure, containerization, and CI/CD pipelines, I help
                organizations build robust systems that scale gracefully.
              </p>
              <p>
                My approach combines technical excellence with a focus on user
                experience and operational efficiency. I believe that great
                infrastructure should be invisible—it just works, reliably and
                beautifully.
              </p>
              <p>
                When I'm not orchestrating containers or optimizing deployments,
                you'll find me exploring new technologies, mentoring junior
                engineers, or enjoying a good cup of coffee ☕.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cloud Platforms */}
            <Card className="p-8 hover-lift border-2 border-accent/30 hover:border-accent">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-accent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Cloud Platforms
              </h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  AWS (EC2, RDS, S3, Lambda)
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  Google Cloud Platform
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  Azure Fundamentals
                </li>
              </ul>
            </Card>

            {/* Containerization & Orchestration */}
            <Card className="p-8 hover-lift border-2 border-accent/30 hover:border-accent">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-accent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Containers & Orchestration
              </h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  Docker & Docker Compose
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  Kubernetes (K8s)
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  Helm Charts
                </li>
              </ul>
            </Card>

            {/* CI/CD & Automation */}
            <Card className="p-8 hover-lift border-2 border-accent/30 hover:border-accent">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-accent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                CI/CD & Automation
              </h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  Jenkins & GitLab CI
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  GitHub Actions
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  Terraform & IaC
                </li>
              </ul>
            </Card>

            {/* Monitoring & Observability */}
            <Card className="p-8 hover-lift border-2 border-accent/30 hover:border-accent">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-accent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Monitoring & Observability
              </h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  Prometheus & Grafana
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  ELK Stack
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  Datadog
                </li>
              </ul>
            </Card>

            {/* Scripting & Languages */}
            <Card className="p-8 hover-lift border-2 border-accent/30 hover:border-accent">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-accent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Languages & Scripting
              </h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  Python & Bash
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  Go & Ruby
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  YAML & JSON
                </li>
              </ul>
            </Card>

            {/* Version Control & Collaboration */}
            <Card className="p-8 hover-lift border-2 border-accent/30 hover:border-accent">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-accent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Version Control & Collaboration
              </h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  Git & GitHub
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  GitLab & Bitbucket
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent" />
                  Agile & DevOps Culture
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Card className="overflow-hidden hover-lift border-2 border-accent/30 hover:border-accent">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">☁️</div>
                  <p className="text-primary font-semibold">Cloud Infrastructure</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Multi-Cloud Deployment Pipeline
                </h3>
                <p className="text-foreground/70 mb-6">
                  Architected and implemented a robust CI/CD pipeline supporting
                  deployments across AWS, GCP, and Azure with automated testing
                  and rollback capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    Terraform
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    Kubernetes
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    Jenkins
                  </span>
                </div>
                <Button
                  variant="ghost"
                  className="text-accent hover:text-accent hover:bg-accent/10 p-0"
                >
                  Learn More <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden hover-lift border-2 border-accent/30 hover:border-accent">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">📊</div>
                  <p className="text-primary font-semibold">Monitoring & Observability</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Enterprise Observability Stack
                </h3>
                <p className="text-foreground/70 mb-6">
                  Built comprehensive monitoring solution with Prometheus,
                  Grafana, and ELK Stack for real-time insights into system
                  health and performance metrics.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    Prometheus
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    Grafana
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    ELK Stack
                  </span>
                </div>
                <Button
                  variant="ghost"
                  className="text-accent hover:text-accent hover:bg-accent/10 p-0"
                >
                  Learn More <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden hover-lift border-2 border-accent/30 hover:border-accent">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🐳</div>
                  <p className="text-primary font-semibold">Containerization</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Microservices Containerization
                </h3>
                <p className="text-foreground/70 mb-6">
                  Migrated monolithic applications to microservices architecture
                  using Docker and Kubernetes, reducing deployment time by 70%.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    Docker
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    Kubernetes
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    Helm
                  </span>
                </div>
                <Button
                  variant="ghost"
                  className="text-accent hover:text-accent hover:bg-accent/10 p-0"
                >
                  Learn More <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            {/* Project 4 */}
            <Card className="overflow-hidden hover-lift border-2 border-accent/30 hover:border-accent">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🔄</div>
                  <p className="text-primary font-semibold">Automation</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Infrastructure as Code Framework
                </h3>
                <p className="text-foreground/70 mb-6">
                  Developed reusable Terraform modules and Ansible playbooks
                  enabling teams to provision infrastructure in minutes with
                  consistent configurations.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    Terraform
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    Ansible
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                    Python
                  </span>
                </div>
                <Button
                  variant="ghost"
                  className="text-accent hover:text-accent hover:bg-accent/10 p-0"
                >
                  Learn More <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              Let's Connect
            </h2>
            <p className="text-lg text-foreground/70 mb-12">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="mailto:bhaviyavyas289@gmail.com">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send Email
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/bhaviya-vyas-899277374/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 px-8 py-6 text-lg flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://github.com/radha718/bhaviya" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 px-8 py-6 text-lg flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </Button>
              </a>
            </div>

            <div className="divider-gold my-12"></div>

            <p className="text-foreground/60 text-sm">
              © 2024 Bhaviya Vyas. Crafted with elegance and precision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
