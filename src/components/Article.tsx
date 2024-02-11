import { ItemType } from '../App'

export const Article = ({title, views}: ItemType) => {
  return (
    <div className="item item-article">
      <h3><a href="#">{title}</a></h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  )
}
