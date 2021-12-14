import React from "react";
import sizeMe from "react-sizeme";
import StackGrid from "react-stack-grid";
import "./style.scss";

interface IProps {
  cards: Array<any>;
  width: string;
}

const Masonry = ({ cards, width }: IProps) => {
  return (
    <div className="masonry-content">
      <StackGrid columnWidth={width}>
        {cards &&
          cards.map((card, key) => (
            <div className="card-content" key={key}>
              <img className="card-image" src={card.image} alt="" />
              <div className="card-date">{card.date}</div>
              <div className="card-title">{card.title}</div>
              <div className="card-author">Powed by {card.title}</div>
            </div>
          ))}
      </StackGrid>
    </div>
  );
};

export default sizeMe()(Masonry);
