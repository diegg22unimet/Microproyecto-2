import styles from "./SignUpPage.module.css"

function SignUpPage(){
    return (
        <div>
            <div>
                <h1>Registro de usuario</h1>
            </div>
            <div>
                <form action="">
                    <div>
                        <label htmlFor="">Nombre</label>
                        <input type="text" />
                        <label htmlFor="">Apellido</label>
                        <input type="text" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Nombre de usuario</label>
                        <input type="text" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Correo electrónico</label>
                        <input type="text" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Contraseña</label>
                        <input type="text" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Videojuego favorito</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage