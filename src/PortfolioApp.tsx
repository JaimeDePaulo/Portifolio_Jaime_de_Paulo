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
  Youtube,
  Play,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  Download,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award
} from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Components ---

// --- Helper Functions ---
const getDriveImageUrl = (url: string) => {
  if (!url.includes("drive.google.com")) return url;
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/u/0/d/${match[1]}`;
  }
  return url;
};

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
    { name: "Formação", href: "#training" },
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
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center container mx-auto px-6 pt-20 gap-12">
      <div className="flex-1">
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
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="flex-1 hidden lg:block relative max-w-md"
      >
        <div className="absolute -inset-4 border-2 border-green rounded translate-x-4 translate-y-4"></div>
        <div className="relative aspect-[4/5] bg-navy-lightest rounded overflow-hidden shadow-2xl">
          <img 
            src={getDriveImageUrl("https://drive.google.com/file/d/1jv7HMLwlLgbGJl_cvficJuJHG-AHATO9/view?usp=sharing")} 
            alt="Jaime de Paulo" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-green/10"></div>
        </div>
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
              src={getDriveImageUrl("https://drive.google.com/file/d/1x1OWN7c1EwmZQqOsWizilnjEMHP82_Kj/view?usp=sharing")} 
              alt="Jaime de Paulo" 
              className="w-full h-full object-cover transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-green/10 group-hover:bg-transparent transition-colors duration-300"></div>
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

const ProfessionalTraining = () => {
  const courses = [
    { title: "Designer Gráfico", year: "2019", institution: "Befamily Center" },
    { title: "Gestão de Recursos Humanos", year: "2020", institution: "FREMUQUE" },
    { title: "Secretariado e Práticas Administrativas", year: "2023", institution: "ATS" },
    { title: "Excel Express", year: "2025", institution: "Simplifica Treinamentos" },
    { title: "Empreendedorismo", year: "2025", institution: "Cursa" },
    { title: "Segurança no Trabalho", year: "2025", institution: "Educape TV" },
    { title: "Marketing Multinível", year: "2025", institution: "Qualificare" }
  ];

  return (
    <section id="training" className="py-24 bg-navy-light/20">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">
          <span className="text-green font-mono text-xl mr-2">03.</span> Formação Profissional
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center gap-2 text-green mb-3">
                  <Award size={18} />
                  <span className="font-mono text-xs">{course.year}</span>
                </div>
                <h3 className="text-lg text-slate-lightest mb-2">{course.title}</h3>
              </div>
              <p className="text-slate text-sm flex items-center gap-2 mt-4">
                <GraduationCap size={14} className="text-green" /> {course.institution}
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
        <h2 className="section-heading"><span className="text-green font-mono text-xl mr-2">04.</span> Serviços Profissionais</h2>
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

const Portfolio = ({ onDesignClick }: { onDesignClick: () => void }) => {
  const projects = [
    {
      title: "Infraestrutura de Rede LAN",
      category: "Redes & Conectividade",
      images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"],
      desc: "Instalação e organização de cablagem estruturada e configuração de racks de servidores."
    },
    {
      title: "Monitorização CCTV IP",
      category: "Segurança Eletrónica",
      images: ["https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop"],
      desc: "Implementação de sistemas de vigilância com câmaras IP de alta resolução e acesso remoto."
    },
    {
      title: "Manutenção de Hardware",
      category: "Assistência Técnica",
      images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"],
      desc: "Reparação de motherboards, upgrades de componentes e limpeza técnica de equipamentos."
    },
    {
      title: "Design Gráfico Profissional",
      category: "Design & Branding",
      images: [
        "https://drive.google.com/file/d/1SVdi5oyMr5VYI3i3hYlcfML2FcfYLd_L/view?usp=sharing",
        "https://drive.google.com/file/d/1EGmftSoRalEQ16clA9VMkAkawZ8M_4Xp/view?usp=sharing"
      ],
      desc: "Criação de flyers, logótipos e identidades visuais completas para empresas e instituições.",
      isDesignLink: true
    },
    {
      title: "Educação Decolonial & Literatura",
      category: "Educação & Cultura",
      images: ["https://img.youtube.com/vi/WMsFCeVWYH0/maxresdefault.jpg"],
      desc: "Brasil e Angola: um olhar reflexivo para a educação decolonial por meio da literatura afro-brasileira e angolana.",
      youtubeLink: "https://www.youtube.com/watch?v=WMsFCeVWYH0"
    }
  ];

  return (
    <section id="portfolio" className="py-24 container mx-auto px-6">
      <h2 className="section-heading"><span className="text-green font-mono text-xl mr-2">05.</span> Alguns Projetos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard 
            key={i} 
            project={project} 
            index={i} 
            onClick={project.isDesignLink ? onDesignClick : undefined} 
          />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, onClick }: any) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = project.youtubeLink ? getYoutubeId(project.youtubeLink) : null;

  useEffect(() => {
    if (project.autoPlay && project.images.length > 1 && !isPlaying) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % project.images.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [project.autoPlay, project.images.length, isPlaying]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-lg bg-navy-light flex flex-col h-full ${onClick ? "cursor-pointer" : ""}`}
    >
      <div className="aspect-square overflow-hidden relative bg-navy-dark">
        {isPlaying && videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={project.title}
            className="w-full h-full absolute inset-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <img 
              src={getDriveImageUrl(project.images[currentImage])} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            
            {project.youtubeLink && (
              <button 
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-navy/20 group-hover:bg-navy/40 transition-colors z-20"
              >
                <div className="w-16 h-16 bg-green/90 text-navy rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                  <Play size={32} fill="currentColor" className="ml-1" />
                </div>
              </button>
            )}

            {project.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-navy/80 text-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-navy"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-navy/80 text-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-navy"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {project.images.map((_: any, i: number) => (
                    <div 
                      key={i} 
                      className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentImage ? "bg-green w-4" : "bg-white/30"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <span className="text-green font-mono text-xs mb-2 block">{project.category}</span>
        <h3 className="text-xl mb-2 group-hover:text-green transition-colors">{project.title}</h3>
        <p className="text-slate text-sm mb-6 flex-grow">{project.desc}</p>
        
        {project.youtubeLink && (
          <div className="flex flex-col gap-3 mt-auto">
            {isPlaying && (
              <button 
                onClick={(e) => { e.stopPropagation(); setIsPlaying(false); }}
                className="text-slate font-mono text-xs flex items-center gap-2 hover:text-green transition-colors"
              >
                <ArrowLeft size={14} /> Fechar Player
              </button>
            )}
            <a 
              href={project.youtubeLink} 
              target="_blank" 
              rel="noreferrer" 
              className="text-green font-mono text-xs flex items-center gap-2 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              <Youtube size={14} /> Ver no YouTube
            </a>
          </div>
        )}
      </div>
    </motion.div>
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
        <span className="text-green font-mono text-sm mb-4 block">06. Qual é o próximo passo?</span>
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

const GraphicDesignPage = ({ onBack }: { onBack: () => void }) => {
  const designProjects = [
    {
      title: "Flyers & Cartazes",
      category: "Design Gráfico",
      images: [
        "https://drive.google.com/file/d/1raqhQ8Py6hNZf43v6dFyUEPwVP9ccaRu/view?usp=drive_link",
        "https://drive.google.com/file/d/15r2-BpHCcX1ywr5xaJsrzsEOS2n6Jc1t/view?usp=drive_link",
        "https://drive.google.com/file/d/1tiqDCH1XvcALsEDWm6kG0VDrw8x8oLtF/view?usp=drive_link",
        "https://drive.google.com/file/d/1ayaIU3R8sdCZiIc5KEFuKSBy-IPRZtDI/view?usp=drive_link",
        "https://drive.google.com/file/d/1wPxkNXCDCnWEd5DUlpcA34pLJ-LSMtgj/view?usp=drive_link",
        "https://drive.google.com/file/d/1KtgWdyOCo89Z2HTYirZlWSLc1iFQphlu/view?usp=drive_link",
        "https://drive.google.com/file/d/1Jgr72vt-BsVsiJ1rmLMzJQ4z66uid0zq/view?usp=drive_link",
        "https://drive.google.com/file/d/1LAgR4lGD7PaPAgSPRn3wHQj244pm49pR/view?usp=drive_link",
        "https://drive.google.com/file/d/1td4gcwW3mPKmTkshzT9gBUj6ZzCV0njg/view?usp=drive_link",
        "https://drive.google.com/file/d/17BNyRvQbpXm697SiQ23sGAqA3xA1d_l0/view?usp=drive_link",
        "https://drive.google.com/file/d/1Av-_9x-4ht2hoe8KqvFh_4BcfLcu8PKG/view?usp=drive_link",
        "https://drive.google.com/file/d/1GPccmiqPxirgRXeGPtoIM7G2T7LOxt1M/view?usp=drive_link",
        "https://drive.google.com/file/d/1NLK30NKmEO6NYYvs2trfpTB4Efr0Lf2O/view?usp=drive_link",
        "https://drive.google.com/file/d/1Jnx1LO9O_og5FC7tBDOAd-vPGeBOXCXJ/view?usp=drive_link",
        "https://drive.google.com/file/d/1eWcuWGlmPCk5oJeDTZ_fRcGZRiiUJZ61/view?usp=drive_link",
        "https://drive.google.com/file/d/1n0t97OK_cy_aRVpB5VYx4nHgGX1f6HxR/view?usp=drive_link",
        "https://drive.google.com/file/d/17rOshHAbuNVZFPItcjuVYpxHhWOdJ_hg/view?usp=drive_link",
        "https://drive.google.com/file/d/1fNUZVfiro7bch_17mBTTJvv-UqiXri0N/view?usp=drive_link",
        "https://drive.google.com/file/d/1JzwYJVUPc2V0V6aIvQqJ80PVPVebN-Id/view?usp=drive_link",
        "https://drive.google.com/file/d/1jkD7XpxCXhT29bG_rH3Jr3PT4pvdnl03/view?usp=drive_link",
        "https://drive.google.com/file/d/1apyVi1vANXTxUDNX0FTSYaIBH8F0xcCp/view?usp=drive_link",
        "https://drive.google.com/file/d/1PgBA_nvIhGS_vQUj1kiqbo_5V8QNP4ad/view?usp=drive_link",
        "https://drive.google.com/file/d/1vSKIUMcNfZiGP_vPnNhrhAGPUKtP9syX/view?usp=drive_link",
        "https://drive.google.com/file/d/1LLEH4LCWKSPND_IueQxQfoE9TFBQqPT8/view?usp=drive_link",
        "https://drive.google.com/file/d/103Sgg0wnhh0_Ccq9wMb9dGuyMmV2H0lN/view?usp=drive_link",
        "https://drive.google.com/file/d/1GLgUpYsTNWWSuz-uaBPR6eIi-EJ38Pqy/view?usp=drive_link",
        "https://drive.google.com/file/d/1iCdviHSssR7AzPwaP4jhTTEzdE1lYHyD/view?usp=drive_link",
        "https://drive.google.com/file/d/1yO4_NQListTDXkSUjp4JrWOCKMZcFrHs/view?usp=drive_link",
        "https://drive.google.com/file/d/1m4lAHQukZALCabNYYF2hOwcwXXVFRspM/view?usp=drive_link",
        "https://drive.google.com/file/d/1p7rSvdkgmyOTRdMGQsjfnRlLTEUEh9XN/view?usp=drive_link",
        "https://drive.google.com/file/d/1zVkkp53_HpNYMoUAR5VSHZ72o6FOsUvh/view?usp=drive_link",
        "https://drive.google.com/file/d/12nMW7WydIF79b8x8FEnqQYEMejfM7OR4/view?usp=drive_link",
        "https://drive.google.com/file/d/1xiu1MxKybKZad3qWXp6w0uzWboyp6chn/view?usp=drive_link",
        "https://drive.google.com/file/d/1PMwmXBF1SaY6Ei_0ej3lBebmE40xtOVP/view?usp=drive_link",
        "https://drive.google.com/file/d/1jORCryan4RA8LjWXmbrubBCxbNp8qyZr/view?usp=drive_link",
        "https://drive.google.com/file/d/1ebwR-IfolTJPCSWLl4T9fmYikBWP9qqj/view?usp=drive_link",
        "https://drive.google.com/file/d/1G9flJ8iCgLoHNvmwABwxxuoJE7LvByQi/view?usp=drive_link"
      ],
      desc: "Criação de flyers promocionais, cartazes para eventos e materiais publicitários de alto impacto.",
      driveFolder: "https://drive.google.com/drive/folders/17NHZV2-kACCfpjHivcwxnPYQXsjmCa3z?usp=sharing",
      autoPlay: true
    },
    {
      title: "Design para Igreja",
      category: "Design Religioso",
      images: [
        "https://drive.google.com/file/d/1L_-q_lNPYnljYm8bajPRfVkbHBr-qMJC/view?usp=drive_link",
        "https://drive.google.com/file/d/1BR_1e__IUge2dN_ozqTWmxErq9nbBodb/view?usp=drive_link",
        "https://drive.google.com/file/d/1ZuvZbLXl8l_U-FRHae1eZkJZaY3Mkt51/view?usp=drive_link",
        "https://drive.google.com/file/d/1gnpITMKwOA4xXyhepQolgpHKW81XETY3/view?usp=drive_link",
        "https://drive.google.com/file/d/1ThJOs_j-sUo_YzYNpEtEVgwxtdRP-1FZ/view?usp=drive_link",
        "https://drive.google.com/file/d/1X575gCOE6thwOdqVyi2swIfqHmeHsgjT/view?usp=drive_link",
        "https://drive.google.com/file/d/19I5wbVYxh4gemHFaNuzjxeFLfPFTB4FS/view?usp=drive_link",
        "https://drive.google.com/file/d/13Y84C3Fs6l7ZiN2uu1Rx8TysXLS-iv2F/view?usp=drive_link"
      ],
      desc: "Materiais visuais para ministérios, eventos religiosos, redes sociais e comunicação eclesiástica.",
      driveFolder: "https://drive.google.com/drive/folders/12_AEmYUpk_jMjHsVyPRiOhTZ14i8carj?usp=drive_link",
      autoPlay: true
    },
    {
      title: "Logotipos e ID Visual",
      category: "Branding",
      images: [
        "https://drive.google.com/file/d/19L8iHJZ_wqkzNdoVd04U3ZwF-bfMcQWJ/view?usp=drive_link",
        "https://drive.google.com/file/d/19McmL9KuFJ_jMfHvVrq1Bvdm4ZXa3K2L/view?usp=drive_link",
        "https://drive.google.com/file/d/1HxQ-2geQj98qQIiS--Ax8U4b-tj1mUHS/view?usp=drive_link",
        "https://drive.google.com/file/d/1WGOZQjFkx3M538tiKI5wPBEyj9rJHBOh/view?usp=drive_link",
        "https://drive.google.com/file/d/1fr3rYpkhWLZPD-o8aPSH-bThPa2va2mY/view?usp=drive_link",
        "https://drive.google.com/file/d/1nHzfVrDFPK6OsfDMhDe64-hGbyx3cWVU/view?usp=drive_link",
        "https://drive.google.com/file/d/1cmRVNAtSi6TKXR-asSHcl6J_2Vjd7I_Q/view?usp=drive_link",
        "https://drive.google.com/file/d/1cooeALl8u9STY4SUVVFcTMu3T09vRzOE/view?usp=drive_link",
        "https://drive.google.com/file/d/1ndQEiPwiyvYwLHSYfOmeRtcpA2nGnThx/view?usp=drive_link",
        "https://drive.google.com/file/d/1r_AuftVcKCdUuZMPuZrlD086gXcox7yx/view?usp=drive_link",
        "https://drive.google.com/file/d/1MeC9k5pAia7daHHzfTfr5B0o48mEF5Ys/view?usp=drive_link",
        "https://drive.google.com/file/d/1yngIAk5N3lGAo7uGfa6EG09BKnJ42lH0/view?usp=drive_link",
        "https://drive.google.com/file/d/1cP7cQXpyeD5na1t9yAsulYtQxsggryfp/view?usp=drive_link",
        "https://drive.google.com/file/d/1xWQAFVF7ZD6sPXPNxhv5wjV8vJ_1yPiL/view?usp=drive_link",
        "https://drive.google.com/file/d/1aELkO6XUdcaB7t32iCWwrNQ1zuQlrgEi/view?usp=drive_link",
        "https://drive.google.com/file/d/15-TC_Mas7kBVP4ymtbtU-UmcrgRBf8ME/view?usp=drive_link",
        "https://drive.google.com/file/d/1R6LsjYtDnaM8hGMQQpSRUeOT8tP4OIXJ/view?usp=drive_link",
        "https://drive.google.com/file/d/19ApdF5EzSqOss7lJc6cbx95RI1t7q46L/view?usp=drive_link",
        "https://drive.google.com/file/d/1uSsnzZHHZaIAmpnWvAVdpUEOUiW6VbIc/view?usp=drive_link",
        "https://drive.google.com/file/d/1XSQlw-SGzLM7AgTfyxYmItzMyjO6pInX/view?usp=drive_link",
        "https://drive.google.com/file/d/12W0YWtPqkyxG0RU8GgY7HNQ3jPEOMgF8/view?usp=drive_link",
        "https://drive.google.com/file/d/1hcOCdN2TMDgMXxBYuchajN_iJiwnhQhL/view?usp=drive_link",
        "https://drive.google.com/file/d/1AVjYR9_Qjk3KhJglYUwOjo3BFyJuOzt5/view?usp=drive_link",
        "https://drive.google.com/file/d/1G7PTdSmEJFdY13C25N3r1l38Q12jmQ_6/view?usp=drive_link",
        "https://drive.google.com/file/d/1sfW-kO9KBBLvFX2dnLBO4Fn_at3evN1e/view?usp=drive_link",
        "https://drive.google.com/file/d/1qodb1VxeagM0ZwNq8nToljcgxXENRVru/view?usp=drive_link"
      ],
      desc: "Desenvolvimento de identidades visuais únicas, logótipos memoráveis e manuais de marca.",
      driveFolder: "https://drive.google.com/drive/folders/1VCSR3ceB9oQJenTuqODZgUtasHxgEh1e?usp=drive_link",
      autoPlay: true
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-navy pt-32 pb-24"
    >
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-green font-mono mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft size={18} /> Voltar ao Portfólio Principal
        </button>

        <h1 className="text-4xl md:text-6xl text-slate-lightest mb-4">Portfólio de Design Gráfico</h1>
        <p className="text-slate text-lg max-w-2xl mb-16">
          Uma coleção de trabalhos criativos focados em comunicação visual, 
          identidade de marca e materiais promocionais.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designProjects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
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
  const [view, setView] = useState<"home" | "design">("home");

  useEffect(() => {
    // Track visit
    const trackVisit = async () => {
      try {
        await fetch("/api/visit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userAgent: navigator.userAgent,
            language: navigator.language,
            referrer: document.referrer,
          }),
        });
      } catch (error) {
        console.error("Failed to track visit:", error);
      }
    };

    // Only track once per session to avoid noise
    if (!sessionStorage.getItem("visited")) {
      trackVisit();
      sessionStorage.setItem("visited", "true");
    }
  }, []);

  return (
    <div className="selection:bg-green/30 selection:text-green">
      <Navbar />
      <main>
        {view === "home" ? (
          <>
            <Hero />
            <About />
            <Experience />
            <ProfessionalTraining />
            <Services />
            <Portfolio onDesignClick={() => setView("design")} />
            <Contact />
          </>
        ) : (
          <GraphicDesignPage onBack={() => setView("home")} />
        )}
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
