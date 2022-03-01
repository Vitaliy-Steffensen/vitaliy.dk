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
      ? titleScrollFraction <= 0.2 && setVisible(false)
      : titleScrollFraction > 0.2 && setVisible(true);
  }, [titleScrollFraction]);

  return (
    <TitleContainer
      id={id}
      ref={titleRef}
      localScrollFraction={titleScrollFraction}
      visible={visible}
    >
      <TitleDecoration />
      <Title localScrollFraction={titleScrollFraction} visible={visible}>
        {children}
      </Title>
    </TitleContainer>
  );
}
