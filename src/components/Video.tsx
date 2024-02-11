import { ItemType } from '../App'

export const Video = ({url, views}: ItemType) => {
  return (
    <div className="item item-video">
      <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <p className="views">Просмотров: {views}</p>
    </div>
  )
}
