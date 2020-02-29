import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { INewsItem } from "../../models/news";
import { getNews } from "../../api/News";
import NewsItem from "./NewsItem";

const News: React.FC<RouteComponentProps> = () => {
  const [news, setNews] = useState<INewsItem[]>([]);

  useEffect(() => {
    getNews()
      .then(res => setNews(res.data))
      .catch(err => {
        // tslint:disable-next-line: no-console
        console.warn("Getting news problem", err);
      });
  }, []);
  return (
    <div className="news">
      {news.map(item => (
        <NewsItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default News;
