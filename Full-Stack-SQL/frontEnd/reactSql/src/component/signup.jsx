import React from 'react'

export default function Signup() {
  return (
    <div>
        <form>
            <h1>Sign Up</h1>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <label>
                Email:
                <input type="text" name="email" />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
