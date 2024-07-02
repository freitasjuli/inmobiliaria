const propiedadesEnVenta = [
    {
        imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        titulo:'Apartamento de lujo en zona exclusiva',
        texto:'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        uvicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        numeroDeHabitaciones:'4',
        numeroDeBaños:'4',
        valorNoche:'5000',
        permiteMascotas: false,
        permiteFumar: false,
    },
    {
        imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        titulo:'Apartamento acogedor en la montaña',
        texto:'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        uvicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        numeroDeHabitaciones:'2',
        numeroDeBaños:'1',
        valorNoche:'1200',
        permiteMascotas: true,
        permiteFumar: true,
    },
    {
      imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      titulo:'Penthouse de lujo con terraza panorámica',
      texto:'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
      uvicacion: '567 Skyline Avenue, Skyview City, CA 56789',
      numeroDeHabitaciones:'3',
      numeroDeBaños:'3',
      valorNoche:'4500',
      permiteMascotas: false,
      permiteFumar: true,
  },
]
const propiedadesEnAlquiler = [
  {
      imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
      titulo:'Apartamento de lujo en zona exclusivaApartamento en el centro de la ciudad',
      texto:'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
      uvicacion: '123 Main Street, Anytown, CA 91234',
      numeroDeHabitaciones:'2',
      numeroDeBaños:'2',
      valorNoche:'2000',
      permiteMascotas: false,
      permiteFumar: true,
  },
  {
      imagen: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      titulo:'Apartamento luminoso con vista al mar',
      texto:'Este hermoso apartamento ofrece una vista impresionante al mar',
      uvicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
      numeroDeHabitaciones:'3',
      numeroDeBaños:'3',
      valorNoche:'2500',
      permiteMascotas: true,
      permiteFumar: true,
  },
  {
    imagen: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    titulo:'Condominio moderno en zona residencial',
    texto:'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    uvicacion: '123 Main Street, Anytown, CA 91234',
    numeroDeHabitaciones:'2',
    numeroDeBaños:'2',
    valorNoche:'2200',
    permiteMascotas: false,
    permiteFumar: false,
},
]

fichaPropiedadesEnVenta = function() {
  const divFicha = document.querySelector('.fichaPropiedades');

  let template ="";
    
  for (const propiedad of propiedadesEnVenta) {

  
    template += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src= ${propiedad.imagen}
            class="card-img-top"
            alt="Imagen del departamento"
          />
        </div>
        <div class="card-body p-2">
          <h5 class="card-title mt-2">${propiedad.titulo}</h5>
          <p class="card-text mt-2">${propiedad.texto}</p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${propiedad.uvicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${propiedad.numeroDeHabitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad.numeroDeBaños} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.valorNoche}</p>
          <p class="${propiedad.permiteFumar? "text-success" : "text-danger"}">
            <i class="${propiedad.permiteFumar ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i>${propiedad.permiteFumar ? "Se permite fumar" : "No se permite fumar"} 
          </p>
          <p class="${propiedad.permiteMascotas? "text-success" : "text-danger"}">
            <i class="${propiedad.permiteMascotas? "fas fa-paw" : "fas fa-ban"}"></i> ${propiedad.permiteFumar ? "Se per miten mascotas" : "No se permiten mascotas"} 
          </p>                                                
        </div>
      </div>
    `;

    divFicha.innerHTML = template;

  }
}

fichaPropiedadesEnAlquiler = function() {
  const divFicha = document.querySelector('.fichaPropiedadesEnAlquiler');

  let template ="";
    
  for (const propiedad of propiedadesEnAlquiler) {

  
    template += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src= ${propiedad.imagen}
            class="card-img-top"
            alt="Imagen del departamento"
          />
        </div>
        <div class="card-body p-2">
          <h5 class="card-title mt-2">${propiedad.titulo}</h5>
          <p class="card-text mt-2">${propiedad.texto}</p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${propiedad.uvicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${propiedad.numeroDeHabitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad.numeroDeBaños} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.valorNoche} El mes</p>
          <p class="${propiedad.permiteFumar? "text-success" : "text-danger"}">
            <i class="${propiedad.permiteFumar ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i>${propiedad.permiteFumar ? "Se permite fumar" : "No se permite fumar"} 
          </p>
          <p class="${propiedad.permiteMascotas? "text-success" : "text-danger"}">
            <i class="${propiedad.permiteMascotas? "fas fa-paw" : "fas fa-ban"}"></i> ${propiedad.permiteFumar ? "Se per miten mascotas" : "No se permiten mascotas"} 
          </p>
        </div>
      </div>
    `;

    divFicha.innerHTML = template;

  }
}

fichaPropiedadesEnVenta();

fichaPropiedadesEnAlquiler();