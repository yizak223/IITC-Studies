import React, { useState } from 'react'
import Login from '../../component/login'
import Signup from '../../component/signup'

export default function Home() {
    const [logSignUpMode, setLogSignUpMode] = useState(false)
    return (
        <div>
            {
                !logSignUpMode ?
                    <>
                        <Login />
                        <p>Don't have an account?</p>
                        <button onClick={() => setLogSignUpMode(true)}>Sign Up</button>
                    </>
                    :
                    <>
                        <Signup />
                        <p>Already have an account?</p>
                        <button onClick={() => setLogSignUpMode(false)}>Log In</button>
                    </>
            }
        </div>
    )
}
