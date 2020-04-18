import React, { Component } from 'react';

import HeaderBee from '../../componentes/HeaderBee';
import FooterBee from '../../componentes/FooterBee';
import SidebarBee from '../../componentes/SidebarBee';
import { Switch, Route } from 'react-router-dom';
import {
   Layout
} from 'antd';
import ListApicultor from './subpages/Apicultor/Lista';
import ApicultorPerfil from './subpages/Apicultor/Perfil'
import ListApiario from './subpages/Apiarios/Lista';
import Home from './subpages/Home';

class Dashboard extends Component {

   render() {
      return (

         <Layout style={{ minHeight: '100vh' }}>

            {/* INIT SIDEBAR */}
            <SidebarBee />
            {/* END SIDEBAR */}

            <Layout>

               {/* INIT HEADER */}
               <HeaderBee history={this.props.history} />
               {/* END HEADER */}

               {/* INIT CONTENT */}
               <main>
                  <Switch>
                     <Route exact path="/apiarios/list" component={ListApiario} history={this.props.history} />
                     <Route exact path="/apicultores/list" component={ListApicultor} history={this.props.history} />
                     <Route exact path="/apicultores/perfil" component={ApicultorPerfil} history={this.props.history} />
                     <Route exact path="/dashboard" component={Home} history={this.props.history} />
                     <Route exact path="/home" component={Home} history={this.props.history} />
                     <Route exact path="/" component={Home} history={this.props.history} />
                  </Switch>
               </main>
               {/* END CONTENT */}

               {/* <ContentBee/> */}

               {/* INIT FOOTER */}
               <FooterBee />
               {/* END FOOTER */}
            </Layout>
         </Layout>
      );
   }
}

export default Dashboard;
