import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import appStore from "../Utils/appStore";
import SignInPage from "./Pages/SignInPage";
import Body from "./Body/Body";
import Shop from "./Pages/Shop";
import Search from "./Pages/Search";
import Cart from "./Pages/Cart";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

function App() {
  let persistor = persistStore(appStore);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Provider store={appStore}>
          <PersistGate persistor={persistor}>
            <Home />
          </PersistGate>
        </Provider>
      ),
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/signin",
          element: <SignInPage />,
        },
        {
          path: "/offers",
          element: <h1>This is offer Page</h1>,
        },
        {
          path: "/restaurants/:resId",
          element: <Shop />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
