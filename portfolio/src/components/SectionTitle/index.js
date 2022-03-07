import React, { useEffect, useRef, useState } from "react";
import { TitleContainer } from "./components/TitleContainer.style";
import { useLocalScrollFraction } from "../../Hooks/useLocalScrollFraction";
import { Title } from "./components/Title.style";
import { TitleDecoration } from "./components/TitleDecoration.style";

export default function SectionTitle({ id, children }) {
  const [visible, setVisible] = useState(false);
  const titleRef = useRef();
  const titleScrollFraction = useLocalScrollFraction(titleRef);

  useEffect(() => {
    visible
      ? titleScrollFraction <= 0.1 && setVisible(false)
      : titleScrollFraction > 0.1 && setVisible(true);
  }, [titleScrollFraction]);

  return (
    <TitleContainer id={id} ref={titleRef} visible={visible}>
      <TitleDecoration />
      <Title visible={visible}>{children}</Title>
    </TitleContainer>
  );
}
