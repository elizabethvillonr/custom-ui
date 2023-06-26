import React from 'react'
import { Card, Image } from 'antd'

import { GoLink } from 'react-icons/go';
import { FaGithub } from 'react-icons/fa'


export const ProjectItem = ({ project }) => {
  console.log(project.cover_img);
  return (
    <Card
      hoverable
      className='project-card'
      cover={
        <Image
          className='project-card-img'
                    alt={project.title}
                    src={process.env.PUBLIC_URL + project.cover_img}
                    style={project.cover_img_style||{}}
                  />
      }
    >
      <p className='project-card-text' >
        <strong>{project.title}</strong> 
        <br />
        {project.description}
        <br />

        <ul className='project-card-action-list' >
          <li>
            <a target='_blank' rel="noreferrer" href={project.link}>
              <GoLink key="setting" className='project-card-action-icon' /></a>
          </li>
          <li>
            <a target='_blank' rel="noreferrer" href={project.github}>
              <FaGithub key="repo" className='project-card-action-icon' /></a>
          </li>
        </ul>
      </p>
    </Card>
  )
}
