// import { registerApplication, start, LifeCycles } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import<LifeCycles>(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@personal/side-nav-mf",
//   app: () => System.import<LifeCycles>("@personal/side-nav-mf"),
//   activeWhen: ["/"],
// });

// start({
//   urlRerouteOnly: true,
// });
import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(
  document.querySelector("#single-spa-layout") as HTMLTemplateElement
);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    // @ts-ignore
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
