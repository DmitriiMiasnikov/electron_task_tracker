import React, { useState, useEffect, ReactNode } from "react";
import styled from "styled-components";

import Header, { HEADER_HEIGHT } from "../../molecules/Header";
import Footer, { FOOTER_HEIGHT } from "../../molecules/Footer";
import Button from "../../atoms/Button";

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  min-height: calc(100vh - ${FOOTER_HEIGHT} - ${HEADER_HEIGHT});
  flex-grow: 1;
  padding: 1rem;
  overflow: auto; // add this to enable overflow
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  position: fixed;
  top: 40px;
  right: 20px;
`;

const DefaultTemplate = ({ children }: { children: ReactNode }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      {showScrollButton && (
        <ButtonWrapper>
          <Button label="Scroll to top" onClick={handleScrollToTop} color="black" />
        </ButtonWrapper>
      )}
      <Footer />
    </>
  );
};

export default DefaultTemplate;
