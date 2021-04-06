import React from "react";
import renderer from "react-test-renderer";
import MenuBar from "../src/components/menuBar";
import Enzyme, { mount } from "enzyme";
import Router from "next/router";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

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

describe("Test of <HeaderContainer>", () => {
  const spies = {};

  beforeEach(() => {
    spies.routerChangeStart = jest.fn();
    Router.events.on("routeChangeStart", spies.routerChangeStart);
  });

  afterEach(() => {
    Router.events.off("routeChangeStart", spies.routerChangeStart);
  });

  test("Test the page redirect after click", async (done) => {
    const wrapper = mount(<MenuBar />);
    await wrapper.find("#pokemon-list-link").at(0).simulate("click");

    expect(spies.routerChangeStart).toHaveBeenCalledWith("/");
  });
});
