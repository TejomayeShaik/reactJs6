// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="card-con">
      <img src={imgUrl} alt={name} className="img" />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
