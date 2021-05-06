import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
  const { isLoading, hits } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID, title, num_commets, url, points, author } = story;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">{points} points by</p>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
