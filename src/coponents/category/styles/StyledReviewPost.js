import styled from "styled-components";

const StyledReviewPost = styled.div`
  padding: 4px;
  background: ${(props) => props.theme.surface};
  border-radius: 4px;

  .review-post__author,
  .review-post__content {
    margin: 0;
  }

  .review-post__author {
    font-size: 16px;
    color: ${(props) => props.theme.shadow};
  }

  .review-post__content {
    /* padding: 8px 0; */
    font-size: 14px;
    line-height: 1.5em;
    color: ${(props) => props.theme.onsurface};
  }

  .collaps {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
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
