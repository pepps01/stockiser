import React, { useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

const AccordionItem = ({ index, question, answer, isOpen, onClick, stockName }) => {
  const contentHeight = useRef();
  const navigate = useNavigate();

  const data = { title: question, description: answer };
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
            ? { height: contentHeight.current.scrollHeight }
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
            <p className="answer-content">{answer}</p>
            <a href={`value-stock?stock_name=${stockName}&stock_type=value`} className="answer-button">
              {question}
            </a>
          </>
        ) : index + 1 === 2 ? (
          <>
            <p className="answer-content">{answer}</p>
            <a href={`value-stock?stock_name=${stockName}&stock_type=growth`} className="answer-button">
              {question}
            </a>
          </>
        ) : (
          <>
            <p className="answer-content">{answer}</p>
            <a href={`value-stock?stock_name=${stockName}&stock_type=equity`} className="answer-button">
              {question}
            </a>
          </>
        )}

        {/* <p className="answer-content">{answer}</p> */}
        {/* <a href={`stockview/${index + 1}`} className="answer-button"> */}
        {/* {question} */}
        {/* </a> */}

        {/* <Link
          to={{ 
            pathname: `/stock/${encodeURIComponent(index + 1)}`,
            state: { stock_id: index, title: question, description: answer },
          }}
        >
          {question}
        </Link> */}
        {/* <Link
          to={`/stock/${encodeURIComponent(
            index + 1
          )}}?title=${question}&description=${answer}`}
        >
          {question}
        </Link> */}
        {/* <Link
          to={`/stock/${encodeURIComponent(index + 1)}/${data.title}/${
            data.description
          }`}
        >
          {data.title}
        </Link> */}
      </div>
    </div>
  );
};

export default AccordionItem;
