import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Chat from "../components/Chat";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export default function Router() {
  const { token } = useContext<any>(AuthContext)

  console.log(token)
  
  return (
    <Routes>
      {
        token ? (
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path=":id" element={<Chat/>} />
        </Route>
        ) : (
          <Route path="/" element={<p>AAA</p>} />
        )
      }
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
