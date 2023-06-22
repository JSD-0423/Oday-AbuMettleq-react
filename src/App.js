import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";

//layout
import RootLayout from "./layouts/RootLayout";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import { ThemeProvider } from "./context/ThemeContext";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />

      <Route path="/details/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
