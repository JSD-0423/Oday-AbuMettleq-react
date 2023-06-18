import Details from "./pages/Details/Details";
import Home from "./pages/Home/Home";

//layout
import RootLayout from "./layouts/RootLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <Home
            topicsArray={[
              {
                id: "1",
                topic: "HTML",
                name: "Oday AbuMettleq",
                image: "html.png",
                rating: "4.1",
                category: "Web Development Languages",
              },
            ]}
          />
        ),
      },
      {
        path: "/details",
        element: (
          <Details
            image={"html.png"}
            topic={"HTML"}
            category={"Web Development Languages"}
            rating={4.1}
            name={"Sarah Smith"}
            description={
              "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images, and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web."
            }
            subtopics={[
              "HTML syntax and structure",
              "HTML elements and attributes",
              "HTML forms and input elements",
              "HTML tables and lists",
              "HTML multimedia elements (audio, video, images)",
              "HTML accessibility and semantic markup",
            ]}
          />
        ),
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
