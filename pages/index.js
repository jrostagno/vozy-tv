import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status !== "loading" && status === "authenticated") {
    router.push("/dashboards");
  }

  return (
    <div className={styles.content}>
      <h1 className="display-6 text-muted d-none  d-lg-block">
        Find your TV show ,<br /> Login with your gitHub account
      </h1>
      <div className={styles.loginpanel}>
        <h1 className="display-4 text-muted">Login</h1>
        <button
          type="button"
          class="btn btn-light px-4 p-6"
          onClick={() => signIn()}
        >
          <div className={styles.btnContent}>
            Sign in{" "}
            <FaGithub
              className={styles.fagithub}
              style={{ fontSize: "2.5em" }}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Login;
