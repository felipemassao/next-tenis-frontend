import { Router, Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages';
import { ConsultaProdutoId } from '../pages/Produto';
import { HomeManutencao } from '../pages/Manutencao';
import { ListarProduto } from '../pages/Manutencao/Listar';
import { ManutIncluiProduto } from '../pages/Manutencao/Incluir';
import { ManutExcluiProduto } from '../pages/Manutencao/Excluir';
import { IncluiUsuario } from '../pages/Manutencao/IncluirUsu';
import { Login } from '../pages/SignIn';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoutes';
import { history } from '../pages/history';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/produto" component={ConsultaProdutoId} />
      <Route exact path="/signin" component={Login} />
      <PrivateRoute exact path="/manutencao" component={HomeManutencao} />
      <PrivateRoute exact path="/manutencao/listar" component={ListarProduto} />
      <PrivateRoute exact path="/manutencao/incluir" component={ManutIncluiProduto} />
      <PrivateRoute exact path="/manutencao/excluir" component={ManutExcluiProduto} />
      <PrivateRoute exact path="/manutencao/incluirUsu" component={IncluiUsuario} />
      <PrivateRoute component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;