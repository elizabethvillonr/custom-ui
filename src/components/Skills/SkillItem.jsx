import { Card } from 'antd'

const {Meta} = Card

export const SkillItem = ({Icon, title, level}) => {
  return (
    <Card className='skill-card'
      cover={<Icon className='skill-icon' />}
    >
      <center>
        <Meta title={title} description={level} />
      </center>
    </Card>
  )
}
