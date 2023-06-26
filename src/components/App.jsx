import { useRef, useState } from 'react';

import '../App.css';
import { Layout, Row, Anchor, Button,Drawer } from 'antd';
import moment from 'moment';

import { RxHamburgerMenu } from 'react-icons/rx';

import { Home } from '../components/Home/Home';
import { AboutMe } from '../components/AboutMe/AboutMe';
import { Skills } from '../components/Skills/Skills';
import { Projects } from '../components/Projects/Projects';
import { Experience } from '../components/Experience/Experience';

const { Header, Footer } = Layout;

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
  const headerRef = useRef();

  const [hamburgerMenu, setHamburgerMenu] = useState(false)

  return (
    <Layout style={{ "backgroundColor": '#fff' }}
    >
      <Header className='app-header' ref={headerRef} >
        <Row>
          <div className='app-full-window-menu'>
          <Anchor
            targetOffset={64}
            direction="horizontal"
            items={URIS.map(uri => ({
              key: uri.uri,
              href: uri.uri,
              title: uri.label,
              label: <a href={uri.uri}>{uri.label}</a>
            }))} />
          </div>
          <div className='app-small-window-menu'>
            <Button type="link" className='app-burger-menu' onClick={()=>setHamburgerMenu(true)}> <RxHamburgerMenu/></Button>
            <Drawer
              placement={'left'}
              width={320}
              onClose={()=>setHamburgerMenu(false)}
              open={hamburgerMenu}
            >
              <Anchor
            targetOffset={64}
            direction="vertical"
            items={URIS.map(uri => ({
              key: uri.uri,
              href: uri.uri,
              title: uri.label,
              label: <a href={uri.uri}>{uri.label}</a>
            }))} />
            </Drawer>
          
          </div>


        </Row>

      </Header>

      {/* <Outlet context={[headerRef]} /> */}
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />

      <Footer className='app-footer' >
        Raquel ©{moment().format("YYYY")}
      </Footer>
    </Layout>

  );
}

export default App;