import { useRef } from 'react';

import '../App.css';
import { useLocation } from 'react-router-dom';
import { Layout, Menu, Row } from 'antd';
import moment from 'moment';

import { Home } from '../components/Home/Home';
import { AboutMe } from '../components/AboutMe/AboutMe';
import { Skills } from '../components/Skills/Skills';
import { Projects } from '../components/Projects/Projects';
import { Experience } from '../components/Experience/Experience';

const { Header, Footer } = Layout;

const headerStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  background: '#fff'
}
const footerStyle = {
  textAlign: 'center',
  padding: '10px'
}

const URIS = [
  {
    uri: '#home',
    label: 'Home'
  },
  {
    uri: '#about-me',
    label: 'About Me'
  },
  {
    uri: '#skills',
    label: 'Skills'
  },
  {
    uri: '#projects',
    label: 'Projects'
  },
  
  {
    uri: '#experience',
    label: 'Experience'
  },
  {
    uri: 'mailto:raquel.villon.r@gmail.com',
    label: 'Contact Me'
  }
]

const App = () => {
  const location = useLocation()
  const headerRef = useRef();
  return (
    <Layout style={{ "backgroundColor": '#fff' }}
    >
      <Header style={headerStyle} ref={headerRef} >
        <Row>
          <Menu mode="horizontal" defaultSelectedKeys={[location.pathname.split('/')[1]]}
            items={URIS.map(uri=>({
              key: uri.uri ,
              label: <a href={uri.uri}>{uri.label}</a>
            }))}
          >
          </Menu>
        </Row>
        <Row>

        </Row>
      </Header>
        
        {/* <Outlet context={[headerRef]} /> */}
        <Home/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Experience/>

      <Footer style={footerStyle} >
        Raquel ©{moment().format("YYYY")}
      </Footer>
    </Layout>

  );
}

export default App;