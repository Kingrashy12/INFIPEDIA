import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,::after,::before{
  padding: 0;
  margin: 0;
}
body{
  position: relative;
  background: rgb(241 245 249);
  overflow-x: hidden;

  @media screen and (max-width: 700px) {
     padding-bottom: 2.5rem;
    }
}
.loader{
    animation: spin 1s infinite linear;

    @keyframes spin {
        form{
         transform: rotate(-350deg);
        } to{
        transform: rotate(350deg);
        }
    }
}
.hidelibo{
  @media (max-width: 2560px) {
    display: none;
  }
  @media (max-width: 800px) {
   display: block;
  }

}


.showHide{
  @media (max-width: 2560px) {
    display: block;
  }
  @media (max-width: 800px) {
   display: none;
  }

}
.tryloader{
  animation: load 1s infinite linear;
  position: relative;

  @keyframes load {
    from {
      transform: rotate(-350deg);
      color: #f99827;
    } to{
      transform: rotate(350deg);
      color: #f95f35;
    }
  }

  @media screen and (max-width:700px) {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 700px) {
  .logo{
    font-size: 20px;
  }
}
`;

export const BlurBg = styled.div`
  position: fixed;
  width: 22rem;
  height: 14rem;
  border-radius: 50%;
  background: #a6ddf0;
  filter: blur(72px);
  z-index: 0;
`;
