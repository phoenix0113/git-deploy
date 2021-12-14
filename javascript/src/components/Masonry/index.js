import React from "react";
import sizeMe from "react-sizeme";
import StackGrid from "react-stack-grid";
import "./style.scss";

const Masonry = (props) => {
  return (
    <div className="masonry-content">
      <StackGrid columnWidth={props.width}>
        {props.cards &&
          props.cards.map((card, key) => (
            <div className="card-content" key={key}>
              <img className="card-image" src={card.image} alt="" />
              <div className="card-date">{card.date}</div>
              <div className="card-title">{card.title}</div>
              <div className="card-author">Powed by {card.author}</div>
            </div>
          ))}
      </StackGrid>
    </div>
  );
};

export default sizeMe()(Masonry);
