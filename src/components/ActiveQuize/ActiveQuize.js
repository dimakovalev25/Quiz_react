import React from "react";
import classes from "./ActiveQuize.css";

const ActiveQuize = (props) => {
  return (
      <div className='ActiveQuize'>
        <p className='Question'>
            <span>
                <strong>
                    2.
                </strong>&nbsp;
                What?
            </span>
            <small> 4 from 12</small>
        </p>
          <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
          </ul>
      </div>
  )
}

export default ActiveQuize;