import { storiesOf } from "@storybook/react";
import React from "react";

import { Progress } from "@/elements";

storiesOf("Elements/Progress", module).add("Default", () => (
  <div>
    <Progress max={100} value={15} color="primary" size="small" />
    <Progress max={100} value={15} color="info" />
    <Progress max={100} value={15} color="success" size="medium" />
    <Progress max={100} value={15} color="danger" size="large" />
  </div>
));