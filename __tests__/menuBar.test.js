import React from "react";
import MenuBar from "../src/components/menuBar";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Link from "next/link";

Enzyme.configure({ adapter: new Adapter() });

// jest.mock("next/link", () => {
//   return ({ children }) => {
//     return children;
//   };
// });

// describe("Test of <HeaderContainer>", () => {
//   test("Test the page redirect after click", async (done) => {
//     const wrapper = mount(<MenuBar />);
//     await wrapper.find("#pokemon-list-link").at(0).simulate("click");
//     // expect the page getting redirect
//   });
// });

describe("Test of <MenuBar />", () => {
  test("Test the page redirect to /", async () => {
    const wrapper = mount(<MenuBar />);
    const href = wrapper.find(Link).at(0).props().href;

    expect(href).toBe("/");
  });

  test("Test the page redirect to /mypokemon", async () => {
    const wrapper = mount(<MenuBar />);
    const href = wrapper.find(Link).at(1).props().href;

    expect(href).toBe("/mypokemon");
  });
});
