import styled from "styled-components";

const StyledFooter = styled.div`
  text-align: center;
  background: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.onsurface};
  padding: 10px;
  font-weight: 600;

  p {
    margin: 0;
    padding: 4px;
  }

  /* icon in footer */
  .movie-db {
    display: inline-block;
    width: 160px;
    height: 20px;
    line-height: 20px;
    vertical-align: text-top;
  }

  .movie-db:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }
`;

export default StyledFooter;
