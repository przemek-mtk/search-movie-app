import styled from "styled-components";

const StyledReviewPost = styled.div`
  padding: 8px;
  margin-bottom: 25px;
  background: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.onsurface};
  border-radius: 4px;
  box-shadow: 0 0 4px ${props => props.theme.shadow};

  .review-post__author,
  .review-post__content {
    margin: 0;
  }

  .review-post__author {
    margin: 8px 0;
    font-size: 16px;
    color: ${(props) => props.theme.shadow};
  }

  .review-post__content {
    line-height: 1.5em;

    max-height: 100px;
    overflow: hidden;
    position: relative;

    transition: max-height 1s ease;
  }

  .review-post__content:before {
    content: '';
    display: block;
    width: 100%;
    height: 50%;
    background: ${props => props.theme.surfaceGradient};
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 1;
    transition: all 1s ease;
  }

  .show {
    max-height: 1700px;
  }

  .review-post__content.show:before {
    opacity: 0;
    height: 0;
  }

  .review-post__btn-box {
    padding: 6px 0;
    text-align: end;
  }

  .show-more {
    font-size: 12px;
  }
`;

export default StyledReviewPost;