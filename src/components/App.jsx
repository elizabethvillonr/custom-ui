import '../App.css';
import { Outlet, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import moment from 'moment';
// import {Moment as moment} from 'react-moment';

const { Header, Content, Footer } = Layout;

const headerStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center', background:'#fff'
}
const contentStyle = {
  padding: '25px 25px',
}
const footerStyle = {
  textAlign: 'center',
}

const Help = ()=>{
  return(
    <Link to="/">Help</Link>
  )
}

const MEMU_OPTIONS = [
  {
    key: 'home',
    label: <Link to="/">Home</Link> 
  },
  {
    key: 'private',
    label: <Link to="/private">Private</Link> 
  },
  {
    key: 'public',
    label: <Link to="/public">Public</Link>
  },
  {
    key: 'help',
    label: <Help/>
  }
  
]



const App = () => {

  return (
    <Layout>
      <Header style={headerStyle} >
        {/* <div className="demo-logo" /> */}
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={ (MEMU_OPTIONS)}
        />
      </Header>
      <Content className="site-layout" style={contentStyle} >
        <div style={{ minHeight: 380 }} >
          <Outlet />
        </div>
      </Content>
      <Footer style={footerStyle} >
        Raquel ©{moment().format("YYYY")}
      </Footer>
    </Layout>
  );
}

export default App;