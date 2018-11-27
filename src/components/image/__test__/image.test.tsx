import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import { Image } from "../image";

describe("Image component", () => {
  it("Should exist", () => {
    expect(Image).toMatchSnapshot();
  });

  it("Should have image classname", () => {
    const component = renderer.create(
      <Image src="http://mydomain.com/image" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("Should be square", () => {
    const component = renderer.create(
      <Image size={"square" as "square"} src="http://mydomain.com/image" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("Should be 32x32", () => {
    const component = renderer.create(
      <Image size={32 as number} src="http://mydomain.com/image" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("Should update src", () => {
    const component = shallow(<Image src="http://mydomain.com/image" />);
    component.setProps({ src: "http://mydomain.com/other" });
    expect(component.find("img").props()).toHaveProperty(
      "src",
      "http://mydomain.com/other",
    );
  });

  it("Should NOT update src", () => {
    const component = shallow(<Image src="http://mydomain.com/image" />);
    component.setProps({ alt: "change prop" });
    expect(component.find("img").props()).toHaveProperty(
      "src",
      "http://mydomain.com/image",
    );
  });
});
