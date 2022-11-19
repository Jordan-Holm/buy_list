import { AuthConsumer } from "../../providers/AuthProvider";
import { useState } from "react";

const Register = ({ handleRegister }) => {
    const [user, setUser] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        handleRegister(user)
    }
}

const ConnectedRegister = (props) => {
    <AuthConsumer>
        { value => <Register {...props} {...value} />} 
    </AuthConsumer>
}

export default ConnectedRegister;