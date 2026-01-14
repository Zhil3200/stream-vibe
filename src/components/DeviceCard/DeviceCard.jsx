import './DeviceCard.scss'
import {Image} from "minista";

const DeviceCard = (props) => {
  const {
    title,
    description,
    imgSrc,
  } = props

  return (
    <div
      className="device-card"
    >
      <header className="device-card__header">
        <div className="device-card__image-wrapper">
          <Image
            className="device-card__image"
            src={imgSrc}
          />
        </div>
        <h3 className="device-card__title h4">{title}</h3>
      </header>
      <div className="device-card__description">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default DeviceCard