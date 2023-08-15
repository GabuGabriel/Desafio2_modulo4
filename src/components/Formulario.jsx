import { useState } from "react";

const Formulario = ({ setAlert }) => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [confirmarContraseña, setConfirmarContraseña] = useState("")

    const registrarDatos = (e) => {
        e.preventDefault();

        if (contraseña != confirmarContraseña) {
            setAlert({
                msg: "La contraseña no coincide",
                color: "danger"
            });
            return;
        }

        if (
            nombre === "" ||
            email === "" ||
            contraseña === "" ||
            confirmarContraseña === ""
        ) {
            setAlert({
                msg: "Faltan campos por completar",
                color: "danger"
            });
            return;
        }

        setAlert({
            msg: "Datos registrados exitosamente",
            color: "success"
        });
        setNombre("")
        setEmail("")
        setContraseña("")
        setConfirmarContraseña("");
    };


    return (
        <>
            <div >

                <form onSubmit={registrarDatos} className="formulario">
                    <input
                        type="text"
                        name="Intraduce tu nombre"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Introduce tu Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        name="contraseña"
                        placeholder="Introduce tu contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                    />

                    <input
                        type="password"
                        name="confirmarContraseña"
                        placeholder="Confirma tu contraseña"
                        value={confirmarContraseña}
                        onChange={(e) => setConfirmarContraseña(e.target.value)}
                    />

                    <button type="submit">Registrar datos</button>
                </form>
            </div>

        </>
    );
};


export default Formulario   