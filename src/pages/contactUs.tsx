import * as React from "react";
import clsx from "clsx";
import { Layout } from "../components/Layout/Layout";

import { CommonPage } from "../components/CommonPage/CommonPage";

const classes = require("./base.module.scss");
const commonClasses = require("../components/common.module.scss");

function ContactUs() {
  return (
    <Layout pageTitle="Contact Us">
      <CommonPage
        title={"Contact Us"}
        image={"https://themes.stackbit.com/demos/azimuth/images/about.jpg"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula in eros facilisis, sed dignissim tellus aliquam. Etiam convallis enim nisi, at suscipit tortor pulvinar at. Nulla a interdum lacus. Sed a porttitor mi. Sed at risus eu orci ultricies mattis sed in tellus. Cras nec neque sed dui vehicula iaculis id vel ex. Phasellus non consectetur augue. Pellentesque condimentum sapien arcu, nec tempus nunc maximus eu. Duis blandit risus nulla. In dolor dui, placerat non finibus sit amet, venenatis pretium tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a lorem tellus. Aenean eu auctor purus. Cras pulvinar, nunc at sagittis dignissim, orci elit auctor leo, et consectetur est turpis a nunc. Vivamus in faucibus felis. Aenean rutrum magna at ex auctor, congue efficitur ligula feugiat. Proin a egestas arcu. Etiam feugiat turpis quis mollis pellentesque. Sed posuere luctus tortor, a eleifend augue varius sit amet. Integer ultrices neque sed quam dictum, quis vestibulum justo volutpat. Nam vitae tempus leo, ut mattis mi. "
        }
        subtitle={"Who we are and why we came together"}
      />
    </Layout>
  );
}

export default ContactUs;
