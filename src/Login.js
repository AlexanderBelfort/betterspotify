import React from 'react'
import "./Login.css";

function Login() {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            {/*spotify logo*/}


            <a>LOGIN WITH SPOTIFY</a>
            {/*spotify button*/}

            {/*it will actually be a button so we will use more of a redirect and since this will add an underline to the text, we have to use text-decoration: none; to ignore that*/}

            {/*we also want the button to be as close to the spotify one so we will use their hexadec green color and round our anchor to a border-rad of 99px; */}
        </div>
    )
}

export default Login
