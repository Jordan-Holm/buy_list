import { AuthConsumer } from "../../../providers/AuthProvider";
import { useState } from "react";

const Login = ({ handleLogin }) => {
    const [user, setUser] = useState({ email: '', passworld: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(user)
    }
}

const ConnectedLogin = (props) => (
    <AuthConsumer>
        { value => <Login {...props} {...value} />}
    </AuthConsumer>
)

export default ConnectedLogin;