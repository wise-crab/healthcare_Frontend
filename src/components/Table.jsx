import React from "react";
import { connect } from "react-redux";
import Tracker from "./Tracker";
import "../assets/styles/sass/components/_table.scss";
import "../assets/styles/sass/components/_stepProgress.scss";

const Table = ({ data }) => {
  const titles = Object.keys(data[0]);

  return (
    <>
      <Tracker />
      <div className="table">
        <div className="table__title">
          {titles.map((title, idx) => {
            return (
              <div className="table__title def" key={idx}>
                <h5>{title}</h5>
              </div>
            );
          })}
        </div>
        <div className="table__content">
          {data.map((item, idx) => {
            const date = new Date(item.date * 1000).toDateString();

            return (
              <div key={idx} className="table__content-item">
                <div className="table__item def">Select</div>
                <div className="table__item def">{item.type}</div>
                <div className="table__item def">{date}</div>
                <div className="table__item def">{item.$oid}</div>
                <div className="table__item def">
                  <button onClick={() => activateLasers(2)}>
                    {item.status}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
const activateLasers = (stepCount) => {
  Tracker.show({
    title: "Examen en Progreso",
    closeOnClick: false,
    content: (
      <>
        <div className="container">
          <div className="progress">
            <div className="progress-track"></div>
            <div id="step1" className="progress-step">
              Orden generada por el Doctor
            </div>
            <div id="step2" className="progress-step">
              Orden en proceso de Ejecución
            </div>
            <div id="step3" className="progress-step">
              Orden lista para descargar
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
