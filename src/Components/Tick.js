import React from "react"
import styled from "styled-components"

const AnimationTick = styled.div`
  text-align: center;
  margin-top: 5em;
`

const IconAnimated = styled.div`
  polyline {
    -webkit-animation: checkmark 0.25s ease-in-out 0.7s backwards;
    animation: checkmark 0.25s ease-in-out 0.7s backwards;
  }

  circle {
    -webkit-animation: checkmark-circle 0.6s ease-in-out backwards;
    animation: checkmark-circle 0.6s ease-in-out backwards;
  }
  circle#colored {
    -webkit-animation: colored-circle 0.6s ease-in-out 0.7s backwards;
    animation: colored-circle 0.6s ease-in-out 0.7s backwards;
  }

  @-webkit-keyframes checkmark {
    0% {
      stroke-dashoffset: 100px;
    }

    100% {
      stroke-dashoffset: 200px;
    }
  }

  @-ms-keyframes checkmark {
    0% {
      stroke-dashoffset: 100px;
    }

    100% {
      stroke-dashoffset: 200px;
    }
  }

  @keyframes checkmark {
    0% {
      stroke-dashoffset: 100px;
    }

    100% {
      stroke-dashoffset: 0px;
    }
  }

  @-webkit-keyframes checkmark-circle {
    0% {
      stroke-dashoffset: 480px;
    }

    100% {
      stroke-dashoffset: 960px;
    }
  }

  @-ms-keyframes checkmark-circle {
    0% {
      stroke-dashoffset: 240px;
    }

    100% {
      stroke-dashoffset: 480px;
    }
  }

  @keyframes checkmark-circle {
    0% {
      stroke-dashoffset: 480px;
    }

    100% {
      stroke-dashoffset: 960px;
    }
  }

  @keyframes colored-circle {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 100;
    }
  }
`

function Tick() {
  return (
    <>
      <AnimationTick>
        <IconAnimated>
          <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">
            <g fill="none" stroke="#22AE73" stroke-width="2">
              <circle
                cx="77"
                cy="77"
                r="72"
                style={{
                  strokeDasharray: "480px 480px",
                  strokeDashoffset: "960px",
                }}
              ></circle>
              <circle
                id="colored"
                fill="#22AE73"
                cx="77"
                cy="77"
                r="72"
                style={{
                  strokeDasharray: "480px 480px",
                  strokeDashoffset: "960px",
                }}
              ></circle>
              <polyline
                className="st0"
                stroke="#fff"
                stroke-width="10"
                points="43.5,77.8 63.7,97.9 112.2,49.4 "
                style={{
                  strokeDasharray: "100px 100px",
                  strokeDashoffset: "200px",
                }}
              />
            </g>
          </svg>
        </IconAnimated>
      </AnimationTick>
    </>
  )
}

export default Tick
