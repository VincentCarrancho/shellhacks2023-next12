import React from "react";
import { Title, Text } from "@mantine/core";

function HomepageStatisticCircle(props: { statistic: number; desc: string }) {
  return (
    <div>
      <Title>{props.statistic}+</Title>
      <Text>{props.desc}</Text>
    </div>
  );
}

export default HomepageStatisticCircle;
