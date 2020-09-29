import React from "react";
import { Menu } from "antd";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item key="quizList">
        <a href="/quizList">QuizList</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
