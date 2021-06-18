import {Router, Route, Switch} from 'react-router-dom';
import {HomePage} from '../pages';
import {ConsultaProdutoId} from '../pages/Produto';
import {HomeManutencao} from '../pages/Manutencao';
import {ManutExcluiProduto} from '../pages/Manutencao/Excluir';
import {Login} from '../pages/SignIn';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoutes';
import { history } from '../pages/history';

const Routes = () => (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Produto" component={ConsultaProdutoId} />   
        <Route exact path="/signin" component={Login} />               
        <PrivateRoute exact path="/manutencao" component={HomeManutencao} />   
        <PrivateRoute exact path="/manutencao/excluir" component={ManutExcluiProduto} />          
        <PrivateRoute component={NotFound}/>
      </Switch>
    </Router>
);

export default Routes;