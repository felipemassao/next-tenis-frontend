import { useParams } from "react-router-dom";
import UsuarioDetalhes from "./components/UsuarioDetalhes";
import HeaderManutencao from "../../../components/HeaderManutencao";
import { useGetUsuario } from "../../../hooks";

const AlteraUsuario = () => {
        const { id } = useParams();
        const {loading, error, Usuario} = useGetUsuario(id);
        console.log(id)
        console.log(Usuario)
      
        return (
          <>
            <HeaderManutencao />
            {Usuario && <UsuarioDetalhes Usuario={Usuario}/>}
          </>
        );
      };
      
export default AlteraUsuario;