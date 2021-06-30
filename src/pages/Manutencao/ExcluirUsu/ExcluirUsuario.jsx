import { useParams } from "react-router-dom";
import DetalheUsuarioDel from "./components/UsuarioDetalhesDel";
import HeaderManutencao from "../../../components/HeaderManutencao";
import { useGetUsuario } from "../../../hooks";

const ExcluiUsuario = () => {
        const { id } = useParams();
        const {loading, error, Usuario} = useGetUsuario(id);
        
        console.log(Usuario)

        return (
          <>
            <HeaderManutencao />
            {Usuario && <DetalheUsuarioDel Usuario={Usuario}/>}
          </>
        );
      };
      
export default ExcluiUsuario;