"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap/dist/css/bootstrap.min.css");
var document_1 = require("next/document");
// redux
var react_redux_1 = require("react-redux");
var next_redux_wrapper_1 = __importDefault(require("next-redux-wrapper"));
var store_1 = __importDefault(require("../redux/store"));
require("react-datepicker/dist/react-datepicker.css");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (<react_redux_1.Provider store={store_1.default}>
      <Component {...pageProps}>
        <document_1.Head>
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'/>
        </document_1.Head>
      </Component>
    </react_redux_1.Provider>);
}
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps }
// }
// export default MyApp;
exports.default = next_redux_wrapper_1.default(function () { return store_1.default; })(MyApp);
