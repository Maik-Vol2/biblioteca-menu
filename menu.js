// =====================================================
// BIBLIOTECA DE MENÚ
// =====================================================


// =====================================================
// FUNCIÓN PRINCIPAL
// =====================================================

function crearMenu(configuracion) {

    // -------------------------------------------------
    // VALIDAR CONFIGURACIÓN
    // -------------------------------------------------

    if (!configuracion) {

        console.error(
            "No se recibió una configuración para el menú."
        );

        return;

    }


    // -------------------------------------------------
    // VALORES PREDETERMINADOS
    // -------------------------------------------------

    const nombre =
        configuracion.nombre || "Mi Tienda";

    const logo =
        configuracion.logo || "";
    
    const alturaMenu =
        configuracion.alturaMenu || 70;
    
    const tamanoLogo =
        configuracion.tamanoLogo || 40;
    
    const tamanoNombre =
        configuracion.tamanoNombre || 20;
    
    const tamanoOpciones =
        configuracion.tamanoOpciones || 16;

    const colorFondo =
        configuracion.colorFondo || "#222222";

    const colorTexto =
        configuracion.colorTexto || "#FFFFFF";

    const colorHover =
        configuracion.colorHover || "#FF6600";

    const opcionesConfiguradas =
        configuracion.opciones || [];

    const mostrarBusqueda =
       configuracion.mostrarBusqueda !== false;

    const posicionBusqueda =
       configuracion.posicionBusqueda || "derecha";

    const textoBusqueda =
    configuracion.textoBusqueda || "Buscar...";

    const anchoBusqueda =
    configuracion.anchoBusqueda || 180;

    const inputBusqueda =
    document.createElement("input");


    // -------------------------------------------------
    // BUSCAR CONTENEDOR
    // -------------------------------------------------

    const contenedor =
        document.getElementById("mi-menu");


    if (!contenedor) {

        console.error(
            "No se encontró el elemento #mi-menu."
        );

        return;

    }


    // -------------------------------------------------
    // CREAR BARRA DEL MENÚ
    // -------------------------------------------------

    const menu =
        document.createElement("nav");

    menu.classList.add("menu");

    menu.style.minHeight =
    `${alturaMenu}px`;

    menu.classList.add(
    `busqueda-${posicionBusqueda}`
);


    // -------------------------------------------------
    // APLICAR COLOR DE FONDO
    // -------------------------------------------------

    menu.style.backgroundColor =
        colorFondo;


    // -------------------------------------------------
    // CREAR LOGO
    // -------------------------------------------------

    let elementoLogo = null;

    if (logo !== "") {

        elementoLogo =
            document.createElement("img");

        elementoLogo.src =
            logo;

        elementoLogo.classList.add(
            "logo-tienda"
        );

        elementoLogo.style.width =
        `${tamanoLogo}px`;

        elementoLogo.style.height =
        `${tamanoLogo}px`;

        elementoLogo.alt =
            `Logo de ${nombre}`;

    }

    // -------------------------------------------------
    // CREAR NOMBRE DE LA TIENDA
    // -------------------------------------------------

    const elementoNombre =
        document.createElement("div");

    // -------------------------------------------------
    // CONTENEDOR DE LOGO Y NOMBRE
    // -------------------------------------------------

    const identidad =
        document.createElement("div");

    identidad.classList.add(
        "identidad-tienda"
    );

    // Agregar logo si existe

    if (elementoLogo) {
    
        identidad.appendChild(
            elementoLogo
        );
    
    }
    
    
    // Agregar nombre
    
    identidad.appendChild(
        elementoNombre
    );

    elementoNombre.classList.add("nombre-tienda");

    elementoNombre.textContent =
        nombre;


    // Aplicar color al nombre

    elementoNombre.style.color =
        colorTexto;

    elementoNombre.style.fontSize =
    `${tamanoNombre}px`;


    // -------------------------------------------------
    // CREAR CONTENEDOR DE OPCIONES
    // -------------------------------------------------

    const opciones =
        document.createElement("div");

    opciones.classList.add("opciones-menu");

    // -------------------------------------------------
    // CREAR BARRA DE BÚSQUEDA
    // -------------------------------------------------
    
let busqueda = null;

if (mostrarBusqueda) {

    busqueda =
        document.createElement("div");

    busqueda.classList.add("busqueda-menu");


    // -----------------------------------------
    // CAMPO DE BÚSQUEDA
    // -----------------------------------------

    const inputBusqueda =
        document.createElement("input");

    inputBusqueda.type = "text";

    inputBusqueda.placeholder =
    textoBusqueda;

    inputBusqueda.classList.add(
        "input-busqueda"
    );

    inputBusqueda.style.width =
    `${anchoBusqueda}px`;


    // -----------------------------------------
    // BOTÓN DE BÚSQUEDA
    // -----------------------------------------

    const botonBusqueda =
        document.createElement("button");

    botonBusqueda.type = "button";

    botonBusqueda.textContent = "🔍";

    botonBusqueda.classList.add(
        "boton-busqueda"
    );


    // -----------------------------------------
    // ARMAR BARRA DE BÚSQUEDA
    // -----------------------------------------

    busqueda.appendChild(
        inputBusqueda
    );

    busqueda.appendChild(
        botonBusqueda
    );

}

    // -------------------------------------------------
    // APLICAR COLORES A LAS OPCIONES
    // -------------------------------------------------

    opciones.style.setProperty(
        "--color-texto",
        colorTexto
    );


    opciones.style.setProperty(
        "--color-hover",
        colorHover
    );


    // -------------------------------------------------
    // CREAR OPCIONES
    // -------------------------------------------------

    opcionesConfiguradas.forEach(opcion => {

        const enlace =
            document.createElement("a");
        
        enlace.style.fontSize =
        `${tamanoOpciones}px`;


        enlace.textContent =
            opcion.nombre;


        enlace.href =
            opcion.ruta;


        opciones.appendChild(enlace);

    });


    // -------------------------------------------------
    // ARMAR EL MENÚ
    // -------------------------------------------------

    menu.appendChild(identidad);

    menu.appendChild(opciones);

    if (mostrarBusqueda) {

    menu.appendChild(busqueda);

}


    // -------------------------------------------------
    // COLOCAR EL MENÚ EN LA PÁGINA
    // -------------------------------------------------

    contenedor.appendChild(menu);

}