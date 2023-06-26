import { Card } from 'antd'

export const SkillItem = ({Icon, title, level}) => {
  return (
    <Card className='skill-card'
      cover={<Icon className='skill-icon' />}
    >
      <center>
        <div style={{textAlign:'center'}}>
          <strong>{title}</strong> <br/>
          {level}
        </div>
      </center>
    </Card>
  )
}
