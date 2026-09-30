// =====================================================
// BIBLIOTECA DE MENÚ
// =====================================================

// -----------------------------------------------------
// CONFIGURACIÓN DEL MENÚ
// -----------------------------------------------------

const configuracionMenu = {

    // Nombre que aparecerá en el menú
    nombre: "Krea",

    // Colores del menú
    colorFondo: "#222222",
    colorTexto: "#FFFFFF",
    colorHover: "#FF6600",

    // Opciones del menú
    opciones: [

        {
            nombre: "Inicio",
            ruta: "/"
        },

        {
            nombre: "Productos",
            ruta: "/productos"
        },

        {
            nombre: "Catalogo",
            ruta: "/ofertas"
        },

        {
            nombre: "Contacto",
            ruta: "/contacto"
        }

    ]

};


// =====================================================
// CREAR MENÚ
// =====================================================

function crearMenu() {

    // Buscar el elemento donde colocaremos el menú
    const contenedor =
        document.getElementById("mi-menu");


    // Verificar que exista el contenedor
    if (!contenedor) {

        console.error(
            "No se encontró el elemento #mi-menu"
        );

        return;

    }


    // Crear la barra del menú
    const menu =
        document.createElement("nav");

    menu.classList.add("menu");


    // -------------------------------------------------
    // CREAR NOMBRE DE LA TIENDA
    // -------------------------------------------------

    const nombre =
        document.createElement("div");

    nombre.classList.add("nombre-tienda");

    nombre.textContent =
        configuracionMenu.nombre;


    // -------------------------------------------------
    // CREAR CONTENEDOR DE OPCIONES
    // -------------------------------------------------

    const opciones =
        document.createElement("div");

    opciones.classList.add("opciones-menu");


    // -------------------------------------------------
    // CREAR CADA OPCIÓN
    // -------------------------------------------------

    configuracionMenu.opciones.forEach(opcion => {

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

    menu.appendChild(nombre);

    menu.appendChild(opciones);


    // -------------------------------------------------
    // COLOCAR EL MENÚ EN LA PÁGINA
    // -------------------------------------------------

    contenedor.appendChild(menu);

}


// =====================================================
// EJECUTAR LA BIBLIOTECA
// =====================================================

crearMenu();