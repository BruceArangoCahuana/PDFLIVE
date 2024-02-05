
import { TextField } from "@mui/material"
import { Fragment } from "react"


interface campos{
    name?:any,
    setName?:any,
    setDe?:any
    setPara?:any
}
export default function PlantillaHTML({name ,setName,setDe,setPara}:campos){
        //<input onChange={(e) =>setName(e.target.value) }/>
        return(
            <Fragment>
        <style type="text/css">
          {`.text-center {
            text-align: center!important;
          }
          .text-header-label {
            font-size: 11px!important;
          }
          .ul-line {
            list-style: none!important;
            line-height: 2px!important;
          }
          .container {
            width: 900px;
            margin: 0 auto;
            height: 100%!important;
          }
          .paddig {
            padding: 10px!important;
          }
          .box {
            -webkit-box-shadow: 10px 10px 44px -20px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 44px -20px rgba(0,0,0,0.75);
            box-shadow: 10px 10px 44px -20px rgba(0,0,0,0.75);
          }`}
        </style>
        <div className="container box">
          <h5 style={{ textAlign: "center" }}>MEMORANDUM</h5>
          <section className="paddig">
            <ul style={{
                fontSize:'11px',
                lineHeight:'20px'
            }}>
                <li>
                    <span>DE:
                    <input 
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded py-1 px-1  leading-tight focus:outline-none focus:bg-white focus:border-gray-400" 
                    id="inline-full-name" type="text"  onChange={(e) =>setDe(e.target.value)} />
                    </span>
                </li>
                <li>
                    <span>PARA:
                    <input 
                    className="bg-gray-100 appearance-none border-2 border-gray-100 rounded py-1 px-1  leading-tight focus:outline-none focus:bg-white focus:border-gray-400" 
                    id="inline-full-name" type="text"  onChange={(e) =>setPara(e.target.value)} />
                    </span>
                </li>
                <li>
                    <span>FECHA:</span>
                </li>
                <li>
                     <p style={{
                                fontSize:'9px'
                            }}>Asunto:Sancion disciplinaria por incumplimiento del Reglamento Interno de Trabajo.</p>
                </li>
            </ul>
            <p className="text-header-label mt-5">
              Sr./Sra.<input 
                className="bg-gray-100 appearance-none border-2 border-gray-100 rounded py-1 px-1  leading-tight focus:outline-none focus:bg-white focus:border-gray-400" 
                id="inline-full-name" type="text"  onChange={(e) =>setName(e.target.value)} /> , por medio de la 
              presente nos dirigimos a usted para 
              notificarle el presente llamado de atención 
              severo a propósito del incumplimiento al Reglamento Interno 
              de Trabajo (RIT) que en su artículo 76°, numeral i), establece como 
              prohibición de los colaboradores: Utilizar vestimenta diferente al uniforme en los complejos.
            </p>
            <p className="text-header-label mt-5">
                Al respecto, usted el día (indicar día) de (indicar mes) de (indicar año), ingresó a su turno a las 00:00 hrs., 
                de acuerdo a su reporte de asistencias. Sin embargo, usted ingresó con (indicar la falta al uniforme cometida, 
                por ejemplo: polo de trabajo distinto al entregado), lo cual es contrario a lo establecido por la compañía. 
                Conforme es de su conocimiento y de acuerdo a la información brindada a usted en su inducción de ingreso a la compañía, 
                todos los colaboradores de complejo deben ingresar a su turno y realizar sus labores utilizando correctamente su uniforme
                 de trabajo, no estando permitido el ingreso con (indicar la falta al uniforme de trabajo). 
                 Le recordamos que se encuentra prohibido utilizar vestimenta diferente al uniforme en los complejos.
            </p>
            <p className="text-header-label mt-5">
                Confío que la aplicación de esta medida disciplinaria genere en usted un replanteamiento de su proceder en aras de 
                que cumpla con los lineamientos que tiene la empresa. Cabe señalar que el presente documento será anexado a su legajo
                personal y se remitirá una copia del mismo al área de personal.
            </p>
            <p className="text-header-label mt-5">
                Finalmente, indicar que la empresa le ofrece la posibilidad de que, ejerciendo su derecho de defensa y respetando el 
                principio de debido proceso, desvirtúe los cargos de las faltas imputadas y presente las pruebas que estime pertinentes.
                En tal sentido, se le otorga el plazo de 02 (dos) días calendarios contados a partir de la recepción de la presente,
                a fin de formular sus descargos por escrito ante su supervisor o la oficina de Relaciones Laborales, al correo 
                asesorialaboral@cineplanet.com.pe. De no presentar descargos dentro del plazo señalado, se tiene por aceptada la presente
                medida disciplinaria.
            </p>
            <div id="firma" style={{ marginTop: "20px" }}>
              <div style={{ width: "90px" }}>
                <hr />
                <p style={{ fontSize: "7px" }}>REPRESENTANTE LEGAL</p>
                <p style={{ fontSize: "7px" }}>CINEPLEX S.A.</p>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
        )
}