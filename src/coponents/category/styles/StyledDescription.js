import styled from "styled-components";

const StyledDescription = styled.div`
  display: flex;
  line-height: 1.5em;
  padding: 15px 10px;

  .movie-desc {
    flex: 2;
  }

  .movie-desc p {
    margin: 0;
    line-height: 1.5em;
    max-height: 100px;
    overflow: hidden;
    position: relative;
    transition: max-height 0.7s ease;
  }

  .movie-desc p:before {
    content: "";
    display: block;
    width: 100%;
    height: 50%;
    background: ${(props) => props.theme.surfaceGradient};
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 1;
    transition: all 0.7s ease;
  }

  .movie-desc.show p {
    max-height: 1000px;
  }

  .movie-desc.show p:before {
    opacity: 0;
    height: 0;
  }

  .open-box {
    text-align: center;
    font-size: 16px;
    padding: 5px;
    transition: all 0.4s ease;
  }
  
  .movie-desc.show .open-box {
    transform: rotate(180deg);
  }

`;

export default StyledDescription;
