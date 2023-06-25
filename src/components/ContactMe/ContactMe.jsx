import { Col, Row } from 'antd'
import React from 'react'

export const ContactMe = () => {
  return (
    <div id="contact-me" className='app-container'>
      <div className='section-container' >
        <Row gutter={16} justify={"center"} >
          <Col xs={24} sm={24} md={20} lg={24} xl={14}>
            ContactMe
          </Col>
        </Row>
      </div>
    </div>
  )
}
