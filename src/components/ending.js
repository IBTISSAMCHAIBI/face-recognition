import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/ending.css'

const Ending= () => {
  return (
    <div className="container mt-5">
        <div className="header">
          <div className="logo">
            <img src="header.png" alt="Logo" />
          </div>
          <div className="text">
            <h2>DEVOSPACE</h2>
            <p>Seamless Real-time Identity Verification</p>
          </div>
        </div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-center">Data Verification</h3>
          <p className="text-center">
            Based on the results of the comparison between facial recognition and your ID card document, we have determined that you are not the same person.
          </p>
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                <th>Document Verification</th>
                <th>Face Recognition</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EyeLookOutLeft</td>
                <td>0.2346719</td>
                <td>0.673975</td>
                <td>
                  <span className="text-danger">&#x2716;</span>
                </td>
              </tr>
              <tr>
                <td>EyeLookInRight</td>
                <td>0.1747629</td>
                <td>0.284729</td>
                <td>
                  <span className="text-danger">&#x2716;</span>
                </td>
              </tr>
              <tr>
                <td>Smile</td>
                <td>0.1987292</td>
                <td>0.1987292</td>
                <td>
                  <span className="text-success">&#x2714;</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary">Continue</button>
      </div>
    </div>
  );
};

export default Ending;
