import { Provider } from "react-redux";
import { store } from "@/redux/store";

export const Providers = ({ children }) => {
  return (
    <main>
      <Provider store={store}>{children}</Provider>
    </main>
  );
};
