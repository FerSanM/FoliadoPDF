let materias = [];

const listarMaterias = async (codcarrera) => {
    try {
        const response = await fetch(`./materiasf/${codcarrera}`);
        const data = await response.json();
        checkboxContainer.innerHTML = "";
        if (data.message === "Success") {
            const semestres = ["Primer.", "Segundo.", "Tercer.", "Cuarto.", "Quinto.", "Sexto.", "Séptimo.", "Octavo.", "Noveno.", "Décimo."];

            semestres.forEach(semestre => {
                // Filtrar las materias por cada semestre
                const materiasSemestre = data.materias.filter(materia => materia.semestre === semestre);
                console.log(materiasSemestre);

                let checkboxes = ``;
                materiasSemestre.forEach((materia) => {
                    checkboxes += `
                        <input type="checkbox" id="materia${materia.id}" name="pdf_id" value="${materia.id}">
                        <label for="materia${materia.id}">${materia.materia}</label><br>
                    `;
                });

                const divContenedor = document.createElement('div');
                divContenedor.id = 'div-materias'
                //divContenedor.style.backgroundColor = 'lightgrey';
               // divContenedor.style.marginRight = '10px';
               // divContenedor.style.width = '100%'; // Establecer el ancho al 25%

                // Agregar fieldset con leyenda correspondiente al semestre
                const hr = document.createElement('hr')
                const fieldset = document.createElement('fieldset');
                const legend = document.createElement('legend');
                legend.textContent = `${semestre} Semestre`;
                fieldset.appendChild(legend);
                fieldset.appendChild(hr)
                fieldset.innerHTML += checkboxes;
                divContenedor.appendChild(fieldset);

                // Agregar el div contenedor al contenedor principal
                checkboxContainer.appendChild(divContenedor);
            });
        } else {
            alert("Materias no encontradas...");
        }
    } catch (error) {
        console.log(error);
    }
};



    const cargaInicial = async () => {
        listarMaterias('KTII');
        cboCarrera.addEventListener("change", (event) => {
            listarMaterias(event.target.value);
        });
    };

    window.addEventListener("load", async () => {
        await cargaInicial();
    });