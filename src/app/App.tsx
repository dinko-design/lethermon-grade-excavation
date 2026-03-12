import { RouterProvider } from "react-router";
import { router } from "./routes";
import { SanityProvider } from "./providers/SanityProvider";

export default function App() {
  return (
    <SanityProvider>
      <RouterProvider router={router} />
    </SanityProvider>
  );
}
