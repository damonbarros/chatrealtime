import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<></>} />
      </Route>
    </Routes>
  );
}
