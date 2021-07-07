import { useParams } from "react-router-dom";
import DetalheUsuarioDel from "./components/UsuarioDetalhesDel";
import HeaderManutencao from "../../../components/HeaderManutencao";
import { useGetUsuario } from "../../../hooks";
import Header from "../../../components/Header";

const ExcluiUsuario = () => {
        const { id } = useParams();
        const {loading, error, Usuario} = useGetUsuario(id);
        
        console.log(Usuario)

        return (
          <>
            <Header />
            {Usuario && <DetalheUsuarioDel Usuario={Usuario}/>}
          </>
        );
      };
      
export default ExcluiUsuario;