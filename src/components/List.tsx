import { ItemType } from "../App";
import { Article } from "./Article";
import { withHighlight } from "./Highlight";
import { Video } from "./Video";

const VideoHighlight = withHighlight(Video);
const ArticleHighlight = withHighlight(Article);

export const List = ({list}: {list: ItemType[]}) => {
  return list.map((item, idx) => {
    switch (item.type) {
      case 'video':
          return (
            // <Video {...item} />
            <VideoHighlight {...item} key={'video-'+idx}/>
          );

      case 'article':
          return (
            // <Article {...item} />
            <ArticleHighlight {...item} key={'article-'+idx} />
          );
    }
});
}
