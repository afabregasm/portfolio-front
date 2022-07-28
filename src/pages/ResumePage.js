import React from "react";

function ResumePage() {
  return (
    <div className="CV">
      <div className="CVHeader">
        <h1>ANDREA FÀBREGAS MARTÍNEZ</h1>
        <h3>Desarrolladora Full Stack y Diseñadora Gráfica</h3>
      </div>
      <div className="CVBody">
        <div className="BodyLeft">
          <br />
          <div className="CVLeftSection">
            <h4>CONTACTO</h4>
            <p>
              Barcelona, España
              <br />
              626 70 15 62
              <br />
              a.fabregas@outlook.es
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/afabregasm"
              >
                linkedin.com/in/afabregasm
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/afabregasm"
              >
                github.com/afabregasm
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://behance.net/afabregasm"
              >
                behance.net/afabregasm
              </a>
            </p>
            <br />
          </div>
          <div className="CVLeftSection">
            <h4>FORMACIÓN</h4>
            <h5>WEB DEVELOPMENT BOOTCAMP</h5>
            <p>
              IRONHACK (2022)
              <br />
              Barcelona, España
            </p>
            <h5>GRÁFICA PUBLICITARIA</h5>
            <p>
              ESDAP LLOTJA (2014 - 2016)
              <br />
              Barcelona, España
            </p>
            <br />
          </div>
          <div className="CVLeftSection">
            <h4>HARD SKILLS</h4>
            <div className="CVSkills">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>ReactJS</p>
              <p>NodeJS</p>
              <p>ExpressJS</p>
              <p>MongoDB</p>
              <p>Mongoose</p>
              <p>Bootstrap</p>
              <p>Jest</p>
              <p>Git</p>
              <p>Adobe Creative Suite</p>
              <p>SEO</p>
            </div>
            <br />
          </div>
          <div className="CVLeftSection">
            <h4>SOFT SKILLS</h4>
            <div className="CVSkills">
              <p>Profesionalidad</p>
              <p>Gestión</p>
              <p>Organización</p>
              <p>Resolución de Problemas</p>
              <p>Creatividad</p>
              <p>Pensamiento Crítico</p>
              <p>Trabajo en Equipo</p>
            </div>
            <br />
          </div>
          <div className="CVLeftSection">
            <h4>IDIOMAS</h4>
            <p>
              English: <span>INTERMEDIATE</span>
              <br />
              Castellano: <span>NATIVO</span>
              <br />
              Català: <span>NATIU</span>
            </p>
            <br />
          </div>
        </div>
        <div className="BodyRight">
          <br />
          <div className="CVLeftSection">
            <h4>ACERCA DE</h4>
            <p>
              Soy una profesional recién formada en el mundo del desarrollo web
              en busca de un trabajo que me permita aplicar mis conocimientos
              técnicos mientras desarrollo ideas o proyectos originales y
              creativos. Me adapto rápidamente al entorno y a la metodología
              laboral.
            </p>
            <br />
          </div>
          <div className="CVLeftSection">
            <h4>EXPERIENCIA LABORAL</h4>
            <h5>DISEÑADORA GRÁFICA, GESTORA Y COMERCIAL</h5>
            <p>
              TRANSEOP (06/2017 - 03/2019)
              <br />
              Córdoba, España
            </p>
            <p>
              <span>FUNCIONES</span>
              <br />
              - Gestión y atención telefónica de más de mil clientes
              <br />
              - Diseño de la página web principal
              <br />
              - Diseño de toda la documentación empresarial
              <br />
              - SEO y Marketing Digital
              <br />- Gestión del blog y de las redes sociales de la empresa
            </p>
            <br />
            <h5>DEPENDIENTA</h5>
            <p>
              MAS PASTISSERS XOCOLATERS (04/2011 - 07/2013)
              <br />
              Barcelona, España
            </p>
            <p>
              <span>FUNCIONES</span>
              <br />
              - Encargada única de la tienda
              <br />
              - Gestión diaria de inventario y pedidos
              <br />
              - Atención al cliente en venta de producto
              <br />- Servicio de restauración y cafetería
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
