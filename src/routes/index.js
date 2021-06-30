import { Router, Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages';
import { ProdutoPage } from '../pages/Produto/ProdutoPage';
import { HomeManutencao } from '../pages/Manutencao';
import { HomeManutencaoOkAlter } from '../pages/Manutencao';
import { HomeManutencaoOkInclu } from '../pages/Manutencao';
import { HomeManutencaoOkDel } from '../pages/Manutencao';
import { ListaProduto } from '../pages/Manutencao/Listar';
import { ManutIncluiProduto } from '../pages/Manutencao/Incluir';
import { ManutExcluiProduto } from '../pages/Manutencao/Excluir';
import { ManutAlteraProduto } from '../pages/Manutencao/Alterar';
import { IncluiUsuario } from '../pages/Manutencao/IncluirUsu';
import { ExcluiUsuario } from '../pages/Manutencao/ExcluirUsu';
import { ListaUsuario } from '../pages/Manutencao/ListarUsu';
import { AlteraUsuario } from '../pages/Manutencao/AlterarUsu';
import { Login } from '../pages/SignIn';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoutes';
import { history } from '../pages/history';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/produto/:id" component={ProdutoPage} />
      <Route exact path="/signin" component={Login} />
      <PrivateRoute exact path="/manutencao" component={HomeManutencao} />
      <PrivateRoute exact path="/manutencao/okAlter" component={HomeManutencaoOkAlter} />
      <PrivateRoute exact path="/manutencao/okDel" component={HomeManutencaoOkDel} />
      <PrivateRoute exact path="/manutencao/okInclu" component={HomeManutencaoOkInclu} />            

      <PrivateRoute exact path="/manutencao/listar" component={ListaProduto} />
      <PrivateRoute exact path="/manutencao/incluir" component={ManutIncluiProduto} />
      <PrivateRoute exact path="/manutencao/excluir/:id" component={ManutExcluiProduto} />
      <PrivateRoute exact path="/manutencao/alterar/:id" component={ManutAlteraProduto} />

      <PrivateRoute exact path="/manutencao/incluirUsu" component={IncluiUsuario} />
      <PrivateRoute exact path="/manutencao/excluirUsu/:id" component={ExcluiUsuario} />
      <PrivateRoute exact path="/manutencao/listarUsu" component={ListaUsuario} />      
      <PrivateRoute exact path="/manutencao/alterarUsu/:id" component={AlteraUsuario} />
      <PrivateRoute component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;