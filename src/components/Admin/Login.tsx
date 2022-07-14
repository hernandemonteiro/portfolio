import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from "../../styles/Form.module.css";

export default function Login() {
    return (
        <div className={styles.FormBox}>
            <form className={styles.Form}>
                <TextField
                    id="filled-email-input"
                    className={styles.Input}
                    label="Email"
                    type="email"
                    required
                    autoComplete="off"
                    variant="filled"
                /><br />
                <TextField
                    id="filled-password-input"
                    className={styles.Input}
                    label="Password"
                    type="password"
                    required
                    autoComplete="off"
                    variant="filled"
                /><br /><br />
                <Button type='submit' className='m-2 bold' variant="contained">Entrar</Button>

            </form>
        </div>
    )
}