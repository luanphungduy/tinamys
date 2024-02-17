"use client";

import React, { useState } from "react";
import background1 from "@/assets/images/bg-img-1.png";
import "./Greet.css";

type GreetProps = {
  id: number;
  name: string;
  age: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const bg_style = {
    backgroundImage: `url(${background1.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "500px",
    height: "300px",
  };
  return (
    <div style={bg_style}>
      <h1>Welcome, {props.name}</h1>
    </div>
  );
};

export default Greet;

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: PersonProps) => {
  return (
    <div>
      <h1>
        Hello {props.name.first} {props.name.last}
      </h1>
    </div>
  );
};

type PersonsListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonsList = (props: PersonsListProps) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {props.names.map((name, index) => (
        <h2 key={index}>
          {name.first} {name.last}
        </h2>
      ))}

      <button>
        <h2>Liên hệ</h2>
        <i>Icon</i>
      </button>

      <div className={`show-more-container ${showMore ? "show" : ""}`}>
        <strong className="icon">ICON</strong> <br />{" "}
        <button onClick={handleShowMoreClick}>
          {showMore ? "Ẩn đi" : "Xem thêm"}
        </button>
        {showMore && (
          <p className="additional-content">Nội dung hiển thị thêm</p>
        )}
      </div>
    </div>
  );
};
