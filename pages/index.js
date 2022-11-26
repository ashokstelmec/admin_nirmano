import Head from "next/head";
import styles from "../styles/Home.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
export default function Home() {
    const [user, setUser] = useState({
        username: "username1",
        password: "password1",
    });
    const router = useRouter();

    const passwordRef = useRef(null);
    const userRef = useRef(null);
    function login(event) {
        event.preventDefault();
        console.log(userRef.current.value);
        console.log(passwordRef.current.value);

        if (
            userRef.current.value === user.username &&
            passwordRef.current.value === user.password
        ) {
            router.push("/collection/emoji");
        }
        //
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Admin</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossOrigin="anonymous"
                />

                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
                />
            </Head>

            <form onSubmit={login}>
                <label>Username:</label>
                <input type="text" name="username" ref={userRef} />
                <label>password:</label>
                <input type="password" name="password" ref={passwordRef} />
                <button type="submit">login</button>
            </form>
        </div>
    );
}
