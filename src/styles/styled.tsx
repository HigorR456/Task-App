import styled from 'styled-components'

export const AppContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 5px;

    .taskIncrementWrap {
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.5);
        width: 80%;
        height: 55px;
        margin: 5px;
    
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    
        .incrementTask {
            display: flex;
            width: 54%;
            input {width: 90%; height: 25px; border-radius: 5px; border: 0;}
    
            .inputAlert {
              background: rgb(255, 230, 230);
              &::placeholder { color: red; }
    
            }
        }
    
        .incrementStart {
            width: 18%;
            input {width: 90%; height: 25px; border-radius: 5px; border: 0;}
        }
    
        .incrementMin {
            width: 18%;
            input {width: 90%; height: 25px; border-radius: 5px; border: 0;}
        }
    
        .buttonWrap {
          width: 35px;
          button {
              width: 100%;
              height: 35px;
              background: 0;
              border: 0;
              .plusIcon {
                  width: 100%;
                  height: 25px;
                  color: white;
              }
              &:hover {
                  cursor: pointer;
              }
              &:active {
                  background: rgb(0, 0, 0, 0.2);
                  border-radius: 5px;
              }
          }
        }
      }`

export const SplitterContent = styled.div`
border-radius: 5px;
width: 80%;
margin: 5px;

.adding {
    animation: addingTransition 0.15s 1;
    animation-timing-function: ease-in;
}

.removing {
    animation: removingTransition 0.15s 1;
    animation-timing-function: ease-in;
    margin-top: -60px;
}

@keyframes removingTransition {
    0% {margin-top: 0px;}
    100% {margin-top: -60px; background: rgba(0, 0, 0, 0);}
}

@keyframes addingTransition {
    0% {margin-top: -60px;}
}


    .splitterWrap {
        border-radius: 5px;
        width: 100%;
        height: 55px;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        background: rgba(0, 0, 0, 0.2);

    * {
        color: white;
        font-family: sans-serif;
        font-weight: bold;
    }

    .splitTask {
        text-align: left;
        width: 54%;
        input {width: 90%; height: 25px;}
        &:hover button {opacity: 1;}
    }

    .splitStart {
        width: 18%;
        input {width: 90%; height: 25px;}
        &:hover button {opacity: 1;}
    }

    .splitMin {
        width: 18%;
        input {width: 90%; height: 25px;}
        &:hover button {opacity: 1;}
    }

    .splitBtn {
        width: 35px;
        button {opacity: 1;}
    }

    button {
        opacity: 0;
        width: 35px;
        height: 35px;
        background: 0;
        border: 0;
            .trashIcon {
                width: 100%;
                height: 25px;
                color: white;
            }
            &:hover {
                cursor: pointer;
            }
            &:active {
                background: rgb(0, 0, 0, 0.2);
                border-radius: 2px;
            }
        }

    input {
        color: black;
        
    }

}`



