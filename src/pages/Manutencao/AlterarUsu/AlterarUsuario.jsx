import { useParams } from "react-router-dom";
import UsuarioDetalhes from "./components/UsuarioDetalhes";
import { useGetUsuario } from "../../../hooks";
import Header from "../../../components/Header";

const AlteraUsuario = () => {
        const { id } = useParams();
        const { Usuario } = useGetUsuario(id);
        console.log(id)
        console.log(Usuario)
      
        return (
          <>
            <Header />
            {Usuario && <UsuarioDetalhes Usuario={Usuario}/>}
          </>
        );
      };
      
export default AlteraUsuario;