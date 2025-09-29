import './Navegacao.css';
import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import Skill from '../Skill';
import Projetos from '../Projetos';


const skillsDev = [
    { src: "./icons/html.png", alt: "HTML logo" },
    { src: "./icons/css-3.png", alt: "CSS logo" },
    { src: "./icons/js.png", alt: "JavaScript logo" },
    { src: "./icons/nodejs.png", alt: "Node logo" },
    { src: "./icons/science.png", alt: "React logo" },
    { src: "./icons/python.png", alt: "Python logo" },
  ];

  const skillsDesigner = [
    { src: "./icons/canva.png", alt: "canva logo" },
    { src: "./icons/capcut.png", alt: "capcut logo" },
    { src: "./icons/figma.png", alt: "figma logo" },
    { src: "./icons/ilustrator.png", alt: "ilustrator logo" },
    { src: "./icons/photoshop.png", alt: "photoshop logo" },
  ];

  const projetos = [
  {id :"despesasio", src:'./projetos/projeto1.jpeg', titulo: "Despesas.io", descricao: "Organize suas despesas rápido e fácil.", link: "https://gabrielcastelodev.github.io/Assistente-financeiro/", botaoTexto: "Ver Projeto"},
  {id : "css", src: './projetos/projeto2.png', titulo: "Calculadora", descricao: "Calculadora simples.", link: "https://github.com/GabrielCasteloDev/calculadora", botaoTexto: "Ver Repositório"},
  {id : "css", src: './projetos/projeto3.png', titulo: "Sistema de Chamados", descricao: "Sistema de chamados desenvolvido para atender a uma demanda real.", link: "", botaoTexto: "Rep. Privado"},
  ]

  const projetosDesign = [
  {id : "css", src: './projetos/logo1.jpeg', titulo: "Eduarda Bianca - Logo", descricao: "Logo feita para clínica de estética Eduarda Bianca - Estética Avançada.", link: "", botaoTexto: "Ver Projeto"},
  {id : "css", src: './icons/css.png', titulo: "?????", descricao: "Em breve.", link: "", botaoTexto: "Ver Projeto"},
  {id : "css", src: './icons/css.png', titulo: "?????", descricao: "Em breve.", link: "", botaoTexto: "Ver Projeto"},
  ]

const tabs = [
  { id: "dev" ,label: "Desenvolvedor" ,content: [<Skill skills ={skillsDev} titulo = "Conhecimentos"/>,  <Projetos projetos= {projetos}/>]},
  { id: "designer", label: "Designer - Editor de Video", content: [<Skill skills ={skillsDesigner} titulo = "Conhecimentos"/>, <Projetos projetos={projetosDesign}/>] },
];

const Navegacao = () => {
  const [abaAtiva, setAbaAtiva] = useState("dev");

  return (
    <LayoutGroup>
      <div className="screen" id='projetos'>
        {/* menu de abas */}
        <div className="buttons" role="tablist" aria-label="Navegação do portfólio">
          {tabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={abaAtiva === tab.id}
              aria-controls={`panel-${tab.id}`}
              className={`tabButton ${abaAtiva === tab.id ? "active" : ""} button`}
              onClick={() => setAbaAtiva(tab.id)}
            >
              {tab.label}

              {/* underline fica DENTRO do botão ativo */}
              {abaAtiva === tab.id && (
                <motion.div
                  layoutId="underline"
                  className="underline"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* painéis */}
        <div className="panels">
          {tabs.map(tab => (
            <div
              key={tab.id}
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              hidden={abaAtiva !== tab.id}
              className="panel"
            >
              {abaAtiva === tab.id && (
                <>
                  <div className='content'>{tab.content}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </LayoutGroup>
  );
};

export default Navegacao;
