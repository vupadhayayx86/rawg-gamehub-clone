import { Link } from 'react-router-dom'
interface Props{
    text:String
}

const LinkComponent = ({text}:Props) => {
  return (
    <div className='mb-1 p-1'>
    <Link className='link-component' to={`/${text}`.toLowerCase()}>{text}</Link>
    </div>
  )
}

export default LinkComponent