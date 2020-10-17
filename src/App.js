import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { Router, Redirect } from "@reach/router";
import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorFallback from "./components/ErrorFallback";
import FallbackLoader from "./components/FallbackLoader";
import { theme } from "./theme";

function retry(fn, retriesLeft = 5, interval = 1000) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch(error => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
}

const LoginPage = React.lazy(() => retry(() => import("./pages/Login")));
const UsersListPage = React.lazy(() => retry(() => import("./pages/Users/UsersList")));
const InvitedUsersPage = React.lazy(() =>
  retry(() => import("./pages/Users/InvitedList"))
);
const CategoriesList = React.lazy(() =>
  retry(() => import("./pages/Categories/CategoriesList"))
);
const CategoryEditPage = React.lazy(() =>
  retry(() => import("./pages/Categories/CategoryEditPage"))
);
const QuestionsList = React.lazy(() =>
  retry(() => import("./pages/Questions/QuestionsList"))
);
const QuestionEditPage = React.lazy(() =>
  retry(() => import("./pages/Questions/QuestionEditPage"))
);
const CompanySettingsPage = React.lazy(() =>
  retry(() => import("./pages/Settings/Company"))
);
const ProfileSettingsPage = React.lazy(() =>
  retry(() => import("./pages/Settings/Profile"))
);

// Layouts
const Layout = React.lazy(() => retry(() => import("./components/Layout")));
const UsersListLayout = React.lazy(() =>
  retry(() => import("./components/UsersListLayout"))
);
const CategoriesLayout = React.lazy(() =>
  retry(() => import("./components/CategoriesLayout"))
);
const QuestionsLayout = React.lazy(() =>
  retry(() => import("./components/QuestionsLayout"))
);
const SettingsLayout = React.lazy(() =>
  retry(() => import("./components/SettingsLayout"))
);

// const NotFoundPage = () => <div>
//   Not Found Pages
// </div>

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary fallback={<ErrorFallback />}>
        <React.Suspense fallback={<FallbackLoader />}>
          <Router basepath={`${process.env.REACT_APP_BASE_PATH || ""}`} primary={false}>
            <LoginPage path="login" />
            <Layout path="/">
              {/* users page by default */}
              <Redirect from="/" to="users" noThrow />
              <UsersListLayout path="users">
                <UsersListPage path="/" />
                <InvitedUsersPage path="invited" />
                {/* <NotFoundPage default /> */}
              </UsersListLayout>
              <CategoriesLayout path="categories">
                <CategoriesList path="/" />
                <CategoryEditPage path="/:id" />
              </CategoriesLayout>
              <QuestionsLayout path="questions">
                <QuestionsList path="/" />
                <QuestionEditPage path="/:id" />
              </QuestionsLayout>
              <SettingsLayout path="settings">
                <Redirect from="/" to="company" noThrow />
                <CompanySettingsPage path="company" />
                <ProfileSettingsPage path="profile" />
                {/* <NotFoundPage default /> */}
              </SettingsLayout>
              {/* <NotFoundPage default /> */}
            </Layout>
            {/* <NotFoundPage default /> */}
          </Router>
        </React.Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
