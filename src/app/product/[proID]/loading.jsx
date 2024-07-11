import "./loading.scss";

import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__img bg__animation "></div>
      <div className="loading__info ">
        <div className="loading__info__item bg__animation "></div>
        <div className="loading__info__item bg__animation "></div>
        <div className="loading__info__item bg__animation "></div>
      </div>
    </div>
  );
};

export default Loading;
