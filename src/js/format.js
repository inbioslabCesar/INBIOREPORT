import logo from "../img/logo-formato.png";
export const format = `
<header class="container">
      <div class="head_logo">
        <a class="logo" id="logo"><img src=${logo} alt=""></a>
      </div>
      <div class="head_datos" id="head_datos">
        <div class="dato_1">
          <div>
            <label for="orden">ORDEN :</label>
            <input type="text" />
          </div>
          <div>
            <label for="paciente">PACIENTE :</label>
            <input type="text" />
          </div>
          <div>
            <label for="compania">COMPAÑIA :</label>
            <input type="text" />
          </div>
          <div>
            <label for="medico">MÉDICO :</label>
            <input type="text" />
          </div>
        </div>
        <div class="dato_2">
          <div>
            <label for="dni">DNI :</label>
            <input type="text" />
          </div>
          <div>
            <label for="sexo">SEXO :</label>
            <input type="text" />
          </div>
        </div>
        <div class="dato_3">
          <div>
            <label for="edad">EDAD :</label>
            <input type="text" />
          </div>
        </div>
      </div>

      <main>
            RESULTADOS
      </main>
      <footer>
            FIRMA DIRECCION
      </footer>
    </header>
`;
