import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import './Rodape.css'
import { useSorteador } from "../state/hook/useSorteador";

const Rodape = () => {
  const participantes = useListaDeParticipantes()

  const navegaPara = useNavigate()
  const sortear = useSorteador()


  const iniciar = () => {
    sortear()
    navegaPara('/sorteio')
  }
  
  return (
    <footer className="rodape-configuracoes">
      <button className="botao" disabled={participantes.length < 3}
        onClick={iniciar}
      >Iniciar brincadeira</button>
    </footer>
  )
}

export default Rodape;
