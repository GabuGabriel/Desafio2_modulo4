import { useState } from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";


const Registro = () => {
    const [alert , setAlert] = useState({ msg:"", color:""});
    return (
        <>
            <div className="container1">

                <h1>Crea tu cuenta</h1>

                <div className="containersocialbutton">
                    <SocialButton icono="fa-brands fa-facebook" />
                    <SocialButton icono="fa-brands fa-github" />
                    <SocialButton icono="fa-brands fa-linkedin-in" />
                </div>

                <h3>O usa tu Email para registrarte</h3>

                <Formulario setAlert = {setAlert} />

                {alert.msg && <Alert msg={alert.msg} color={alert.color}/>}

            </div>

        </>
    );
};


export default Registro