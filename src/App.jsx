import Sobre from "./Components/About";
import Contato from "./Components/Contato";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Navegacao from "./Components/Navegação";
import Orcamento from "./Components/Orcamento";

const servicosDev = [
  {id:"1" ,titulo: "Desenvolvimento Web", descricao: "Criação de sites e aplicações web responsivas e modernas.", preco: "R$ 1500"},
  {id:"2" ,titulo: "Design Gráfico", descricao: "Criação de logotipos, banners, flyers e materiais promocionais.", preco: "R$ 800"},
  {id:"3" ,titulo: "Edição de Vídeo", descricao: "Edição e pós-produção de vídeos para YouTube, redes sociais e apresentações.", preco: "R$ 1200"},
  {id:"4" ,titulo: "Manutenção de Computadores", descricao: "Serviços de reparo, otimização e atualização de hardware e software.", preco: "R$ 300"},
];

function App() {


  return (
    <div className="App">
      <Header />
      <Main />
      <Sobre/>
      <Navegacao/>
      <Orcamento servicos={servicosDev}/>
      <Contato />
      <Footer />
    </div>
  );
}

export default App;

