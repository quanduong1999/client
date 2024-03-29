import { useRouter } from "next/router";
import React from "react";

const Success = () => {
    const Router = useRouter();
    const backHome = () => {
        Router.replace("/")
    }
  return (
    <div className="wrapperAlert success">
      <div className="success-contentAlert">
        <div className="success-topHalf">
          <p>
            <svg viewBox="0 0 512 512" width="100">
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
            </svg>
          </p>
          <h1>Giao dịch thành công</h1>

          <ul className="success-bg-bubbles">
            <li className="success-li"></li>
            <li className="success-li"></li>
            <li className="success-li"></li>
            <li className="success-li"></li>
            <li className="success-li"></li>
            <li className="success-li"></li>
            <li className="success-li"></li>
            <li className="success-li"></li>
            <li className="success-li"></li>
            <li className="success-li"></li>
          </ul>
        </div>

        <div className="success-bottomHalf">
          <button className="success-button" id="alertMO" onClick={backHome}>Về trang chủ</button>
        </div>
      </div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Khand:wght@500&display=swap");
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .success {
          text-align: center;
          margin: auto;
          margin-top: 6%;
          width:50%;
        }
        .success-wrapperAlert {
          width: 500px;
          height: 400px;
          overflow: hidden;
          border-radius: 12px;
          border: thin solid #ddd;
        }

        .success-topHalf {
          width: 100%;
          color: white;
          overflow: hidden;
          min-height: 250px;
          position: relative;
          padding: 40px 0;
          background: rgb(0, 0, 0);
          background: -webkit-linear-gradient(45deg, #019871, #a0ebcf);
        }

        .success-topHalf p {
          margin-bottom: 30px;
        }

        svg {
          fill: white;
        }

        .success-topHalf h1 {
          font-size: 2.25rem;
          display: block;
          font-weight: 500;
          letter-spacing: 0.15rem;
          text-shadow: 0 2px rgba(128, 128, 128, 0.6);
        }

        /* Original Author of Bubbles Animation -- https://codepen.io/Lewitje/pen/BNNJjo */

        .success-bg-bubbles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .success-li {
          position: absolute;
          list-style: none;
          display: block;
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.15);
          /* fade(green, 75%);*/
          bottom: -160px;
          -webkit-animation: square 20s infinite;
          animation: square 20s infinite;
          -webkit-transition-timing-function: linear;
          transition-timing-function: linear;
        }

        .success-li:nth-child(1) {
          left: 10%;
        }

        .success-li:nth-child(2) {
          left: 20%;
          width: 80px;
          height: 80px;
          animation-delay: 2s;
          animation-duration: 17s;
        }

        .success-li:nth-child(3) {
          left: 25%;
          animation-delay: 4s;
        }

        .success-li:nth-child(4) {
          left: 40%;
          width: 60px;
          height: 60px;
          animation-duration: 22s;
          background-color: rgba(white, 0.3);
          /* fade(white, 25%); */
        }

        .success-li:nth-child(5) {
          left: 70%;
        }

        .success-li:nth-child(6) {
          left: 80%;
          width: 120px;
          height: 120px;
          animation-delay: 3s;
          background-color: rgba(white, 0.2);
          /* fade(white, 20%); */
        }

        .success-li:nth-child(7) {
          left: 32%;
          width: 160px;
          height: 160px;
          animation-delay: 7s;
        }

        .success-li:nth-child(8) {
          left: 55%;
          width: 20px;
          height: 20px;
          animation-delay: 15s;
          animation-duration: 40s;
        }

        .success-li:nth-child(9) {
          left: 25%;
          width: 10px;
          height: 10px;
          animation-delay: 2s;
          animation-duration: 40s;
          background-color: rgba(white, 0.3);
          /*fade(white, 30%);*/
        }

        .success-li:nth-child(10) {
          left: 90%;
          width: 160px;
          height: 160px;
          animation-delay: 11s;
        }

        @-webkit-keyframes square {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-500px) rotate(600deg);
          }
        }

        @keyframes square {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-500px) rotate(600deg);
          }
        }

        .success-bottomHalf {
          align-items: center;
          padding: 35px;
        }

        .success-bottomHalf p {
          font-weight: 500;
          font-size: 1.05rem;
          margin-bottom: 20px;
        }

        .success-button {
          border: none;
          color: white;
          cursor: pointer;
          border-radius: 12px;
          padding: 10px 18px;
          background-color: #019871;
          text-shadow: 0 1px rgba(128, 128, 128, 0.75);
        }

        .success-button:hover {
          background-color: #85ddbf;
        }
      `}</style>
    </div>
  );
};

export default Success;
