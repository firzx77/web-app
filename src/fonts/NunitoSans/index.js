// Light
import NunitoSansLightWoff2 from "./NunitoSans-Light.woff2";
import NunitoSansLightWoff from "./NunitoSans-Light.woff";
import NunitoSansLightTtf from "./NunitoSans-Light.ttf";
// Regular
import NunitoSansRegularWoff2 from "./NunitoSans-Regular.woff2";
import NunitoSansRegularWoff from "./NunitoSans-Regular.woff";
import NunitoSansRegularTtf from "./NunitoSans-Regular.ttf";
// Semi Bold
import NunitoSansSemiBoldWoff2 from "./NunitoSans-SemiBold.woff2";
import NunitoSansSemiBoldWoff from "./NunitoSans-SemiBold.woff";
import NunitoSansSemiBoldTtf from "./NunitoSans-SemiBold.ttf";
// Bold
import NunitoSansBoldWoff2 from "./NunitoSans-Bold.woff2";
import NunitoSansBoldWoff from "./NunitoSans-Bold.woff";
import NunitoSansBoldTtf from "./NunitoSans-Bold.ttf";

const nunitoSansLight = {
  fontFamily: "Nunito Sans",
  fontStyle: "normal",
  fontWeight: 300,
  src: `
    url(${NunitoSansLightWoff2}) format('woff2'),
    url(${NunitoSansLightWoff}) format('woff'),
    url(${NunitoSansLightTtf}) format('truetype');
  `
};

const nunitoSansRegular = {
  fontFamily: "Nunito Sans",
  fontStyle: "normal",
  fontWeight: "normal",
  src: `
    url(${NunitoSansRegularWoff2}) format('woff2'),
    url(${NunitoSansRegularWoff}) format('woff'),
    url(${NunitoSansRegularTtf}) format('truetype');
  `
};

const nunitoSansSemiBold = {
  fontFamily: "Nunito Sans",
  fontStyle: "normal",
  fontWeight: 600,
  src: `
    url(${NunitoSansSemiBoldWoff2}) format('woff2'),
    url(${NunitoSansSemiBoldWoff}) format('woff'),
    url(${NunitoSansSemiBoldTtf}) format('truetype');
  `
};

const nunitoSansBold = {
  fontFamily: "Nunito Sans",
  fontStyle: "normal",
  fontWeight: "bold",
  src: `
    url(${NunitoSansBoldWoff2}) format('woff2'),
    url(${NunitoSansBoldWoff}) format('woff'),
    url(${NunitoSansBoldTtf}) format('truetype');
  `
};

export { nunitoSansLight, nunitoSansRegular, nunitoSansSemiBold, nunitoSansBold };
