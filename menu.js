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
        configuracion.colorFondo || "#222222";


    // -------------------------------------------------
    // CREAR NOMBRE DE LA TIENDA
    // -------------------------------------------------

    const nombre =
        document.createElement("div");

    nombre.classList.add("nombre-tienda");

    nombre.textContent =
        configuracion.nombre || "Mi Tienda";


    // Aplicar color al nombre
    nombre.style.color =
        configuracion.colorTexto || "#FFFFFF";


    // -------------------------------------------------
    // CREAR CONTENEDOR DE OPCIONES
    // -------------------------------------------------

    const opciones =
        document.createElement("div");

    opciones.classList.add("opciones-menu");


    // -------------------------------------------------
    // APLICAR COLORES A LAS OPCIONES
    // -------------------------------------------------

    opciones.style.setProperty(
        "--color-texto",
        configuracion.colorTexto || "#FFFFFF"
    );


    opciones.style.setProperty(
        "--color-hover",
        configuracion.colorHover || "#FF6600"
    );


    // -------------------------------------------------
    // CREAR OPCIONES
    // -------------------------------------------------

    if (configuracion.opciones) {

        configuracion.opciones.forEach(opcion => {

            const enlace =
                document.createElement("a");


            enlace.textContent =
                opcion.nombre;


            enlace.href =
                opcion.ruta;


            opciones.appendChild(enlace);

        });

    }


    // -------------------------------------------------
    // ARMAR EL MENÚ
    // -------------------------------------------------

    menu.appendChild(nombre);

    menu.appendChild(opciones);


    // -------------------------------------------------
    // COLOCAR EL MENÚ EN LA PÁGINA
    // -------------------------------------------------

    contenedor.appendChild(menu);

}