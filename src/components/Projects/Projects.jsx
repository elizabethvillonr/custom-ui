import { Card, Col, Row, Space } from 'antd'
import React from 'react'

const { Meta } = Card
export const Projects = () => {
  return (
    <div id="projects" className='app-container'>
      <div className='section-container' >
        <Row gutter={16} justify={"center"} >
          <Col xs={24} sm={24} md={20} lg={16} xl={16}>
          <center>
            <Space wrap size={'large'}>

              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src="https://www.engranajesculturales.com/wp-content/uploads/2015/03/coming-soon-940x529.jpg" />}
              >
                <Meta title="Coming Soon" description="coming soon" />
              </Card>

            </Space>
            </center>
          </Col>
        </Row>
      </div>
    </div>
  )
}
