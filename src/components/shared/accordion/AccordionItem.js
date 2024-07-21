import React, { useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import "./styles.css";
import { useNavigate } from "react-router-dom";

const AccordionItem = ({ index, question, answer, isOpen, onClick, stockName }) => {
  const contentHeight = useRef();
  // const navigate = useNavigate();

  // const data = { title: question, description: answer };
  return (
    <div className="wrapper">
      <button
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
      </button>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen 
            ? { height: "120px" }
            : { height: "0px" }
        }
      >
        {/* TODO: 
          1. Switch to the Value Stock Page 
          2. Run the yahoo finance apis, cutOff functions and Evar Library functions 
          upon clicking the value, equity and growth selector buttons to display 
          TABLE RESULTS 

          ---negate cron jobs

        */}
        {index + 1 === 1 ? (
          <>
            <p className="answer-content mb-8">{answer}</p>
            <a href={`value-stock?stock_name=${stockName}&stock_type=value`} className="answer-button">
              {question}
            </a>
          </>
        ) : index + 1 === 2 ? (
          <>
            <p className="answer-content mb-8 ">{answer}</p>
            <a href={`value-stock?stock_name=${stockName}&stock_type=growth`} className="answer-button">
              {question}
            </a>
          </>
        ) : (
          <>
            <p className="answer-content mb-8">{answer}</p>
            <a href={`value-stock?stock_name=${stockName}&stock_type=equity`} className="answer-button">
              {question}
            </a>
          </>
        )}

  
      </div>
    </div>
  );
};

export default AccordionItem;
