import imagen1 from './large_nuestro_servicio_cuidados_en_casa_5c42b040a9.jpg';
import imagen2 from './large_trabajo_cuidadora_personas_mayores_03e82c314c.jpg';
import imagen3 from './medium_cuidado_interno_24h_qida_5be723f563.jpg';

const Body = () => (

<div>
<div className="container-fluid">
<div className="row">
    <div className=" col-12 bienvenida d-flex flex-column align-items-center justify-content-center">
        <h1 className="py-4 tituloPrincipal">
            El cuidado de quién más te importa, en las mejores manos
        </h1>
        <button className="btnMain">SABER MÁS</button>
    </div>
</div>
</div>
<div className="container section">
<div className="row">
    <div className="col-md-6">
        <h3>Cuidadores calificados a tu disposición</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            sunt similique quisquam dolore distinctio quae eligendi necessitatibus
            animi ipsum deserunt, ducimus voluptate. Nulla dolore a tempore ipsa
            provident ea? Cum ex fugit incidunt, eaque nemo ratione? Consequatur
            quis possimus numquam accusamus ratione. Accusamus, dolor architecto?
        </p>
        <div className="text-center">
            <button className="btnMain">Saber más</button>
        </div>
    </div>
    <div className="col-md-6">
        <img
            src={imagen1}
            alt="imagen1"
        />
    </div>
</div>
<div className="row">
    <div className="col-md-6">
        <img
            src={imagen2}
            alt="imagen2"
        />
    </div>
    <div className="col-md-6">
        <h3>Atención dónde y cuando la necesites</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            sunt similique quisquam dolore distinctio quae eligendi necessitatibus
            animi ipsum deserunt, ducimus voluptate. Nulla dolore a tempore ipsa
            provident ea? Cum ex fugit incidunt, eaque nemo ratione? Consequatur
            quis possimus numquam accusamus ratione. Accusamus, dolor architecto?
        </p>
        <div className="text-center">
            <button className="btnMain">Saber más</button>
        </div>
    </div>
</div>
<div className="row">
    <div className="col-md-6">
        <h3>Si eres cuidador, también es tu sitio</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            sunt similique quisquam dolore distinctio quae eligendi necessitatibus
            animi ipsum deserunt, ducimus voluptate. Nulla dolore a tempore ipsa
            provident ea? Cum ex fugit incidunt, eaque nemo ratione? Consequatur
            quis possimus numquam accusamus ratione. Accusamus, dolor architecto?
        </p>
        <div className="text-center">
            <button className="btnMain">Saber más</button>
        </div>
    </div>
    <div className="col-md-6">
        <img
            src={imagen3}
            alt="imagen3"
        />
    </div>
</div>
</div>
{/*Por qué nosotros*/}
<div className="container p-b-5 py-5" id="porque">
<div className="text-center py-1">
    <h2 className="fw-bolder py-3">
        Para que no tengas que preocuparte de nada
    </h2>
</div>
<section id="why-us" className="why-us section-bg">
    <div className="container">
        <div className="row gy-12">
            <div className="col-lg-12 d-flex align-items-center">
                <div className="row gy-12">
                    <div className="col-xl-3">
                        <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                            <h4>Cuidadores con la mejor cualificación</h4>
                            <p>
                                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                                laboris nisi ut aliquip
                            </p>
                        </div>
                    </div>
                    {/* End Icon Box */}
                    <div className="col-xl-3">
                        <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                            <h4>Sanitarios disponibles en todo momento</h4>
                            <p>
                                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                                laboris nisi ut aliquip
                            </p>
                        </div>
                    </div>
                    {/* End Icon Box */}
                    <div className="col-xl-3">
                        <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                            <h4>Si no estás seguro, mira las puntuaciones</h4>
                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt
                            </p>
                        </div>
                    </div>
                    {/* End Icon Box */}
                    <div className="col-xl-3">
                        <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                            <h4>Cuidados en todos los ámbitos</h4>
                            <p>
                                Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                                maiores omnis facere
                            </p>
                        </div>
                    </div>
                    {/* End Icon Box */}
                </div>
            </div>
        </div>
    </div>
</section>
</div>
{/*Formulario de contacto*/}
<div className="container mt-5 pt-3 formulario">
<div className="col-12">
    <div className="bg-secondary opacity-75 bg-primary p-3 text-center mb-2 text-white fw-bolder fs-3">
        Contacta con nosotros
    </div>
    <hr />
</div>
<form className="row g-3">
    <div className="col-12">
        <label htmlFor="inputName" className="form-label">
            Nombre
        </label>
        <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Nombre"
        />
    </div>
    <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">
            Email
        </label>
        <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Introduzca su email"
        />
    </div>
    <div className="col-md-6">
        <label htmlFor="buscar" className="form-label">
            ¿Eres cuidador o particular?
        </label>
        <input
            type="text"
            className="form-control"
            id="inputBuscar"
            placeholder="Cuidador..."
        />
    </div>
    <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">
            Dirección
        </label>
        <input
            type="text"
            className="form-control"
            id="inputDirección"
            placeholder="Calle de Daw, 24"
        />
    </div>
    <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">
            Localidad
        </label>
        <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="col-md-4">
        <label htmlFor="Provincia" className="form-label">
            Comunidad Autónoma
        </label>
        <select id="inputState" className="form-select">
            <option defaultValue="">Choose...</option>
            <option>Región de Murcia</option>
            <option>Comunidad Valenciana</option>
            <option>Andalucía</option>
            <option>...</option>
        </select>
    </div>
    <div className="col-md-2">
        <label htmlFor="inputCP" className="form-label">
            CP
        </label>
        <input type="text" className="form-control" id="inputCP" />
    </div>
    <div className="col-12">
        <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
                Acepto los términos de condición.
            </label>
        </div>
    </div>
    <div className="col-6 text-end">
        <button
            type="submit"
            className="btnMain p-3 text-center mb-2 text-white fw-bolder"
        >
            Enviar
        </button>
        <a href="#" className="text-primary shadow-sm">
            ¿Necesita ayuda?
        </a>
    </div>
</form>
</div>
</div>
)
export default Body;