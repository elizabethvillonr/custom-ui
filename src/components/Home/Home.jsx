import { Row, Col } from 'antd'
import { AnimatedText } from '../Extras/AnimatedText'
import { AiOutlineCode } from "react-icons/ai";

export const Home = () => {

  return (
    <div id="home" className='app-container'>
      <div className='section-container'>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} >
            <center>

              <div className='home-icon'> <AiOutlineCode /></div>
              <div className='home-title'>Raquel Villon</div>
              <div className='home-description typical-container'>
                <AnimatedText
                  text={["JavaScript Developer ", " Front-End Developer "]}
                />
              </div>
            </center>
          </Col>
        </Row>
      </div>
    </div>
  )
}
