import React, { useState } from "react";
import Answers from "../Answers/Answers";
import "./Categories.css"
import chevrondown from "../../images/chevrondown.svg";
import chevronup from "../../images/chevronup.svg";

const Categories = ({ categories, questions, list, onClick }) => {
  //질문 카테고리
  const [accordion, setAccordion] = useState(true);
  
  const [value, setValue] = useState(questions);

  // const onClick = (e) => {
  //   setValue(answers.filter((answers) => answers.writer === e.target.value));
  // };

  return (
    <>
      <div className="categories_s">
        <div className="category_s">{categories}</div>

        <div className="accordion1" onClick={() => setAccordion(!accordion)}>
          <img alt="accordion" src={accordion ? chevronup : chevrondown} />
        </div>

        {questions.map((questions) => (
          <div className={accordion ? "open_s" : "close_s"}>
            <Answers
              onClick={onClick}
              question={questions.question}
              answers={questions.answers}
              list={list}
            ></Answers>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
