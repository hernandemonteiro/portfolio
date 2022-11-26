import React, { useEffect } from "react";
import Template from "../../components/blog/TemplateBlog";
import LoginForm from "../../components/system/Login/LoginForm";
import LoginPage from "../../components/system/LoginPage";
import LoaderAdmin from "../../components/ui/Loading";
import useAuthAdmin from "../../hooks/useAuthAdmin";
import useAuth from "../../hooks/useAuthAdmin";

export default function Home() {
  const {
    setEmail,
    setPassword,
    login,
    redirectLoginPageIfLogged,
    message,
    loading,
  } = useAuth();

  useEffect(() => {
    redirectLoginPageIfLogged();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <LoaderAdmin />;
  } else {
    return (
      <Template>
        <LoginPage>
          <LoginForm
            message={message}
            onSubmit={login}
            onChangeEmail={(e) => setEmail(e.target.value)}
            onChangePassword={(e) => setPassword(e.target.value)}
          />
        </LoginPage>
      </Template>
    );
  }
}
