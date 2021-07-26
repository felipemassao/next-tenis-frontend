import { useParams } from "react-router-dom";
import DetalheUsuarioDel from "./components/UsuarioDetalhesDel";
import { useGetUsuario } from "../../../hooks";
import Header from "../../../components/Header";

const ExcluiUsuario = () => {
        const { id } = useParams();
        const { Usuario } = useGetUsuario(id);
        
        console.log(Usuario)

        return (
          <>
            <Header />
            {Usuario && <DetalheUsuarioDel Usuario={Usuario}/>}
          </>
        );
      };
      
export default ExcluiUsuario;