import React from "react";
import { connect } from "react-redux";
import Tracker from "./Tracker";
import "../assets/styles/sass/components/_table.scss";
import "../assets/styles/sass/components/_stepProgress.scss";
import Checkbox from './Checkbox';


const Table = ({ data }) => {
  const titles = Object.keys(data[0]);

  return (
    <div className='table-responsive'>
      <table className='table table-striped'>
        <thead>
          <tr>
            {titles.map((title, idx) => {
              return <th key={idx}>{title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            const date = new Date(item.date * 1000).toDateString();

            return (
              <tr key={idx}>
                <td>
                  <Checkbox text=' ' value={item.$oid} />
                </td>
                <td>{item.type}</td>
                <td>{date}</td>
                <td>{item.$oid}</td>
                <td>
                  <button onClick={() => activateLasers(2)}>
                    {item.status}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
const activateLasers = (stepCount) => {	
  Tracker.show({	
    title: "Exam in progress",	
    closeOnClick: false,	
    content: (	
      <>	
        <div className="container">	
          <div className="progress">	
            <div className="progress-track"></div>	
            <div id="step1" className="progress-step">	
              Ordered by	
            </div>	
            <div id="step2" className="progress-step">	
              checking	
            </div>	
            <div id="step3" className="progress-step">	
              Available to download	
            </div>	
          </div>	
        </div>	
      </>	
    ),	
  });	
  setTimeout(() => {	
    let step = 1;	
    const step1 = document.querySelector("#step1");	
    const step2 = document.querySelector("#step2");	
    const step3 = document.querySelector("#step3");	
    const next = () => {	
      if (step === 1) {	
        step = 2;	
        console.log(step1);
        debugger
        step1.classList.remove("is-active");	
        step1.classList.add("is-complete");	
        step2.classList.add("is-active");	
      } else if (step === 2) {	
        step = 3;	
        step2.classList.remove("is-active");	
        step2.classList.add("is-complete");	
        step3.classList.add("is-active");	
      } else if (step === 3) {	
        step = 4;	
        step3.classList.remove("is-active");	
        step3.classList.add("is-complete");	
        step4.classList.add("is-active");	
      }	
    };	
    for (let index = 1; index <= stepCount; index++) {	
      next();	
    }	
  }, 50);	
};	
const mapStateToProps = (reducers) => {	
  return reducers.patientsReducer;	
};
export default connect(mapStateToProps)(Table);
