import React from "react";
import { INewsItem } from "../../models/news";

export interface INewsItemProps {
  data: INewsItem;
}

const NewsItem: React.FC<INewsItemProps> = ({
  data: { title, text, link, timestamp }
}) => {
  return (
    <article>
      <br />
      <div>
        {
          <a href={link} target="_blank">
            {title}
          </a>
        }{" "}
        | {timestamp.toLocaleDateString()}
      </div>
      <div>{text}</div>
    </article>
  );
};

export default NewsItem;
