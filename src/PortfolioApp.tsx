import { motion } from "motion/react";
import { 
  Monitor, 
  Network, 
  Camera, 
  ShieldCheck, 
  Wrench, 
  Cpu, 
  Layout, 
  Users,
  Github,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  Download,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Sobre", href: "#about" },
    { name: "Experiência", href: "#experience" },
    { name: "Serviços", href: "#services" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-navy/90 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-green font-display font-bold text-2xl tracking-tighter"
        >
          JP<span className="text-slate-lightest">.tech</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="nav-link"
            >
              <span className="text-green mr-1">0{i + 1}.</span> {item.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="btn-primary"
          >
            Currículo
          </motion.a>
        </div>

        {/* Mobile menu button could go here, but for now keeping it simple */}
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center container mx-auto px-6 pt-20">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-green font-mono mb-5"
      >
        Olá, o meu nome é
      </motion.p>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl text-slate-lightest mb-4"
      >
        Jaime de Paulo.
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-6xl text-slate mb-6 leading-tight"
      >
        Soluções Inteligentes em TI para o seu Negócio.
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-xl text-lg mb-12"
      >
        Sou um Técnico de Informática multifuncional especializado em suporte técnico, 
        redes, sistemas CCTV e segurança da informação. Focado em resolver problemas 
        complexos com eficiência e profissionalismo.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap gap-4"
      >
        <a href="https://wa.me/244939785068" target="_blank" rel="noreferrer" className="btn-filled flex items-center gap-2">
          <MessageCircle size={18} /> Fale Comigo no WhatsApp
        </a>
        <a href="#portfolio" className="btn-primary">Ver Meus Projetos</a>
      </motion.div>
    </section>
  );
};

const About = () => {
  const skills = [
    "Suporte Hardware/Software",
    "Redes de Computadores",
    "Sistemas CCTV (Vigilância)",
    "Segurança da Informação",
    "Troubleshooting Avançado",
    "Design Gráfico",
    "Administração de Sistemas",
    "RH & Assistência Administrativa"
  ];

  return (
    <section id="about" className="py-24 container mx-auto px-6">
      <h2 className="section-heading"><span className="text-green font-mono text-xl mr-2">01.</span> Sobre Mim</h2>
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-4 text-lg">
          <p>
            Olá! O meu nome é Jaime de Paulo e sou apaixonado por tecnologia e inovação. 
            Com um perfil multifuncional, atuo na linha de frente do suporte tecnológico, 
            garantindo que infraestruturas digitais funcionem sem interrupções.
          </p>
          <p>
            A minha jornada na TI começou com a curiosidade de entender como as coisas funcionam, 
            o que me levou a especializar-me em diversas áreas, desde a manutenção física de 
            equipamentos até à implementação de redes seguras e sistemas de vigilância modernos.
          </p>
          <p>
            Além da parte técnica, possuo competências em design gráfico e gestão administrativa, 
            o que me permite ter uma visão holística das necessidades de uma empresa.
          </p>
          <p className="mb-4">Aqui estão algumas tecnologias e áreas com as quais tenho trabalhado:</p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
            {skills.map(skill => (
              <li key={skill} className="flex items-center gap-2">
                <ChevronRight size={14} className="text-green" /> {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 border-2 border-green rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          <div className="relative aspect-square bg-navy-lightest rounded overflow-hidden">
            <img 
              src="https://picsum.photos/seed/tech-pro/600/600" 
              alt="Jaime de Paulo" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-green/20 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Projetos Independentes",
      role: "Experiência em Redes",
      period: "2019 - Presente",
      description: [
        "Planeamento e execução de infraestruturas de rede local (LAN).",
        "Configuração de routers, switches e pontos de acesso Wi-Fi.",
        "Otimização de tráfego e segurança de rede para pequenas empresas.",
        "Resolução de problemas de conectividade e performance."
      ]
    },
    {
      company: "Criança Feliz Angola",
      role: "Técnico de TI & Suporte",
      period: "2022 - Presente",
      description: [
        "Manutenção preventiva e corretiva de todo o parque informático.",
        "Gestão da rede local e suporte direto aos utilizadores.",
        "Implementação de sistemas de segurança e backup de dados.",
        "Apoio administrativo e gestão de recursos tecnológicos."
      ]
    },
    {
      company: "Freelance IT Solutions",
      role: "Consultor de TI & Redes",
      period: "2020 - 2022",
      description: [
        "Instalação e configuração de sistemas CCTV para clientes residenciais e comerciais.",
        "Desenvolvimento de projetos de redes estruturadas.",
        "Recuperação de dados e remoção de malware.",
        "Criação de identidade visual e materiais gráficos para pequenas empresas."
      ]
    }
  ];

  const education = [
    {
      institution: "Instituto Politécnico da Huíla (IPH)",
      degree: "Engenharia Informática",
      period: "2016 - 2022"
    },
    {
      institution: "Instituto Médio Politécnico da Humpata (IMPH)",
      degree: "Técnico de Informática",
      period: "2013 - 2015"
    }
  ];

  return (
    <section id="experience" className="py-24 container mx-auto px-6">
      <h2 className="section-heading"><span className="text-green font-mono text-xl mr-2">02.</span> Experiência & Formação</h2>
      
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h3 className="flex items-center gap-3 text-xl text-green font-mono mb-6">
            <Briefcase size={20} /> Onde Trabalhei
          </h3>
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-navy-lightest"
            >
              <div className="absolute w-4 h-4 bg-green rounded-full -left-[9px] top-1 border-4 border-navy"></div>
              <h4 className="text-xl text-slate-lightest">{exp.role} <span className="text-green">@ {exp.company}</span></h4>
              <p className="text-sm font-mono mb-4 text-slate">{exp.period}</p>
              <ul className="space-y-2">
                {exp.description.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-slate text-sm">
                    <ChevronRight size={14} className="text-green mt-1 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <h3 className="flex items-center gap-3 text-xl text-green font-mono mb-6">
            <GraduationCap size={20} /> Formação Académica
          </h3>
          {education.map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg text-slate-lightest">{edu.degree}</h4>
                <span className="text-xs font-mono text-green bg-green-tint px-2 py-1 rounded">{edu.period}</span>
              </div>
              <p className="text-slate flex items-center gap-2">
                <MapPin size={14} className="text-green" /> {edu.institution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Suporte Técnico",
      icon: <Monitor className="text-green" size={32} />,
      desc: "Assistência remota e presencial para hardware e software. Resolução de problemas críticos em tempo real."
    },
    {
      title: "Redes de Computadores",
      icon: <Network className="text-green" size={32} />,
      desc: "Instalação, configuração e manutenção de redes cabeadas e Wi-Fi. Otimização de sinal e segurança."
    },
    {
      title: "Sistemas CCTV",
      icon: <Camera className="text-green" size={32} />,
      desc: "Instalação de câmaras de vigilância modernas com acesso remoto via smartphone. Segurança 24/7."
    },
    {
      title: "Manutenção de PCs",
      icon: <Wrench className="text-green" size={32} />,
      desc: "Limpeza física, upgrade de componentes (SSD, RAM) e formatação com backup seguro."
    },
    {
      title: "Segurança Digital",
      icon: <ShieldCheck className="text-green" size={32} />,
      desc: "Proteção contra vírus, configuração de firewalls e consultoria em boas práticas de segurança."
    },
    {
      title: "Design & Conteúdo",
      icon: <Layout className="text-green" size={32} />,
      desc: "Criação de logótipos, artes para redes sociais e materiais de marketing digital."
    }
  ];

  return (
    <section id="services" className="py-24 bg-navy-light/30">
      <div className="container mx-auto px-6">
        <h2 className="section-heading"><span className="text-green font-mono text-xl mr-2">03.</span> Serviços Profissionais</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex flex-col items-start gap-4"
            >
              <div className="p-3 bg-navy-lightest rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl text-slate-lightest">{service.title}</h3>
              <p className="text-slate text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Infraestrutura de Rede LAN",
      category: "Redes & Conectividade",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      desc: "Instalação e organização de cablagem estruturada e configuração de racks de servidores."
    },
    {
      title: "Monitorização CCTV IP",
      category: "Segurança Eletrónica",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop",
      desc: "Implementação de sistemas de vigilância com câmaras IP de alta resolução e acesso remoto."
    },
    {
      title: "Manutenção de Hardware",
      category: "Assistência Técnica",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      desc: "Reparação de motherboards, upgrades de componentes e limpeza técnica de equipamentos."
    },
    {
      title: "Identidade Visual Corporativa",
      category: "Design Gráfico",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
      desc: "Criação de logótipos, manuais de marca e materiais de comunicação visual para empresas."
    }
  ];

  return (
    <section id="portfolio" className="py-24 container mx-auto px-6">
      <h2 className="section-heading"><span className="text-green font-mono text-xl mr-2">04.</span> Alguns Projetos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg bg-navy-light flex flex-col h-full"
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 flex-grow">
              <span className="text-green font-mono text-xs mb-2 block">{project.category}</span>
              <h3 className="text-xl mb-2 group-hover:text-green transition-colors">{project.title}</h3>
              <p className="text-slate text-sm">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 container mx-auto px-6 max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-green font-mono text-sm mb-4 block">05. Qual é o próximo passo?</span>
        <h2 className="text-4xl md:text-5xl text-slate-lightest mb-6">Entre em Contacto</h2>
        <p className="text-lg mb-12 text-slate">
          Estou atualmente disponível para novos projetos e oportunidades. 
          Se tiver uma dúvida ou apenas queira dizer olá, farei o meu melhor para lhe responder!
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="glass-card flex flex-col items-center gap-3">
            <Mail className="text-green" />
            <h4 className="text-slate-lightest">Email</h4>
            <p className="text-xs">jaimenglelodepaulo@gmail.com</p>
            <p className="text-xs">ngalelo2022@gmail.com</p>
          </div>
          <div className="glass-card flex flex-col items-center gap-3">
            <Phone className="text-green" />
            <h4 className="text-slate-lightest">Telefone</h4>
            <p className="text-sm">+244 939 785 068</p>
            <p className="text-sm">+244 945 880 831</p>
          </div>
          <div className="glass-card flex flex-col items-center gap-3">
            <MapPin className="text-green" />
            <h4 className="text-slate-lightest">Localização</h4>
            <p className="text-sm">Luanda, Angola</p>
          </div>
        </div>

        <a href="https://wa.me/244939785068" target="_blank" rel="noreferrer" className="btn-filled text-lg px-10 py-4 inline-flex items-center gap-2">
          Diga Olá no WhatsApp
        </a>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-navy-lightest">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/jaime-de-paulo-4a2046193" target="_blank" rel="noreferrer" className="text-slate hover:text-green transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-slate hover:text-green transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-slate hover:text-green transition-colors"><Github size={20} /></a>
          <a href="mailto:jaimenglelodepaulo@gmail.com" className="text-slate hover:text-green transition-colors"><Mail size={20} /></a>
        </div>
        <div className="text-center font-mono text-xs space-y-2">
          <p>Desenhado & Desenvolvido por Jaime de Paulo</p>
          <p className="text-slate-light/50">© 2026 Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppFloating = () => {
  return (
    <motion.a
      href="https://wa.me/244939785068"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 bg-green text-navy p-4 rounded-full shadow-2xl hover:shadow-green/20 transition-all"
      title="Fale comigo no WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
};

// --- Main App ---

export default function PortfolioApp() {
  return (
    <div className="selection:bg-green/30 selection:text-green">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
