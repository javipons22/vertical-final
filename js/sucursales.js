var sucursales = {
    cordoba: ['CORDOBA','Luis de Tejeda 4289','0351 4819630','cordoba@verticalonline.com.ar','cordoba.jpg'],
    bsas: ['BUENOS AIRES','Av. Libertador 14689 Acassuso','011 52635142','buenosaires@verticalonline.com.ar','bsas.jpg'],
    rosario:['ROSARIO','Moreno 1647','0341 5402211','rosario@verticalonline.com.ar','rosario.jpg'],
    losmolles: ['LOS MOLLES','Ruta 222 km 30','260 440 2502','losmolles@verticalonline.com.ar','losmolles.jpg'],
    sanrafael: ['SAN RAFAEL','Av. Balloffet 1352','0260 4425988','sanrafael@verticalonline.com.ar','sanrafael.jpg'],
    malargue: ['MALARGUE','Av. San Martín 176','02604 472593','malargue@verticalonline.com.ar','malargue.jpg'],
    sanjuan: ['SAN JUAN','Mendoza 143 Norte','0261 4203932','sanjuan@verticalonline.com.ar','sanjuan.jpg'],
    bariloche1: ['BARILOCHE 1','Carlos Bustos 9813. Base Cerro Catedral.','351 6648691','bariloche@verticalonline.com.ar','bariloche1.jpg'],
    bariloche2: ['BARILOCHE 2','La Hoya 9957. Base Cerro Catedral.','','bariloche@verticalonline.com.ar','bariloche2.jpg'],
    bariloche3: ['BARILOCHE 3','Base Cerro Catedral - Centro Comercial Las Terrazas','','bariloche@verticalonline.com.ar','bariloche3.jpg'],
}

function crearHTMLSucursal(nombre,direccion,telefono,email,linkImg,linkWhatsapp,linkEmail,linkGPS){
    return `
    <div class="col mt-4">
        <div class="row sucursal mx-1 d-flex flex-nowrap">
            <div class="d-flex sucursal__contenedor-imagen"><img class="sucursal__imagen" src="../img/sucursales/${linkImg}" alt="sucursal cordoba"></div>
            <div class="col py-2 pl-3 d-flex flex-column justify-content-between ">
                
                    <h6 class="sucursal__titulo mt-3 mb-3">SUCURSAL ${nombre}</h6>
                    <div>
                        <p class="sucursal__direccion sucursal__info"><i class="fas fa-map-marker-alt sucursal__icon"></i> ${direccion}</p>
                        <p class="sucursal__telefono sucursal__info">
                        ${telefono.length > 0 ? '<i class="fas fa-phone-alt"></i> ' + telefono : ''}
                        </p>
                        <p class="sucursal__email sucursal__info"><i class="far fa-envelope"></i> ${email}</p>
                    </div>
                <div class="sucursal__links d-flex mt-3 mb-2 justify-content-between justify-content-md-start">
                    <a href="${linkWhatsapp}" class="d-flex d-md-none justify-content-center align-items-center mr-md-2 p-2 sucursal__link-whatsapp"><i class="fab fa-whatsapp"></i>Enviar</a>
                    <a href="mailto:${linkEmail}" class="d-flex justify-content-center align-items-center mr-md-2 p-2 sucursal__link-mail"><i class="far fa-envelope"></i>Enviar</a>
                    <a href="${linkGPS}" class="d-flex justify-content-center align-items-center mr-md-2 p-2 sucursal__link-mapa"><i class="fas fa-map-pin"></i>Mapa</a>
                </div>
            </div>
        </div>
    </div>`;
};