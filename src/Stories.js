import React from 'react';

import { useGlobalContext } from './context';

const Stories = () => {
  const { isLoading, hits } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return <section className="stories"></section>;
};

export default Stories;
