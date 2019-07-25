import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import App from "../App";
import Textinput from "../components/common/Textinput";
import Button from "../components/common/Button";
import Index from "../components/main/Index";

storiesOf("App", module).add("App", () => <App />);

storiesOf("Common", module)
  .add("Textinput", () => (
    <Textinput value="" onchange={action("hshaj")} type="number" placeholder="please enter your text" />
  ))
  .add("Button", () => (
    <Button onclick={action("hello")} content="click Me!" type="submit" />
  ));

storiesOf("main", module).add("Main", () => <Index />);
