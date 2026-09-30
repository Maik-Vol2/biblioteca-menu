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

    const colorFondo =
        configuracion.colorFondo || "#222222";

    const colorTexto =
        configuracion.colorTexto || "#FFFFFF";

    const colorHover =
        configuracion.colorHover || "#FF6600";

    const opcionesConfiguradas =
        configuracion.opciones || [];


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


    // -------------------------------------------------
    // APLICAR COLOR DE FONDO
    // -------------------------------------------------

    menu.style.backgroundColor =
        colorFondo;


    // -------------------------------------------------
    // CREAR NOMBRE DE LA TIENDA
    // -------------------------------------------------

    const elementoNombre =
        document.createElement("div");

    elementoNombre.classList.add("nombre-tienda");

    elementoNombre.textContent =
        nombre;


    // Aplicar color al nombre

    elementoNombre.style.color =
        colorTexto;


    // -------------------------------------------------
    // CREAR CONTENEDOR DE OPCIONES
    // -------------------------------------------------

    const opciones =
        document.createElement("div");

    opciones.classList.add("opciones-menu");

    // -------------------------------------------------
    // CREAR BARRA DE BÚSQUEDA
    // -------------------------------------------------
    
    const busqueda =
        document.createElement("div");
    
    busqueda.classList.add("busqueda-menu");
    
    
    // Campo de búsqueda
    const inputBusqueda =
        document.createElement("input");
    
    inputBusqueda.type = "text";
    
    inputBusqueda.placeholder = "Buscar...";
    
    inputBusqueda.classList.add("input-busqueda");
    
    
    // Botón de búsqueda
    const botonBusqueda =
        document.createElement("button");
    
    botonBusqueda.type = "button";
    
    botonBusqueda.textContent = "🔍";
    
    botonBusqueda.classList.add("boton-busqueda");
    
    
    // Agregar campo y botón
    busqueda.appendChild(inputBusqueda);
    
    busqueda.appendChild(botonBusqueda);

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


        enlace.textContent =
            opcion.nombre;


        enlace.href =
            opcion.ruta;


        opciones.appendChild(enlace);

    });


    // -------------------------------------------------
    // ARMAR EL MENÚ
    // -------------------------------------------------

    menu.appendChild(elementoNombre);

    menu.appendChild(opciones);

    menu.appendChild(busqueda);


    // -------------------------------------------------
    // COLOCAR EL MENÚ EN LA PÁGINA
    // -------------------------------------------------

    contenedor.appendChild(menu);

}