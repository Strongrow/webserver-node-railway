const http = require("http");

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "application/json" });
    /*     res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    res.writeHead(200, { "Content-Type": "application/csv" }); */

    res.write("hola mundo ");
    /*     res.write("1, juan \n");
    res.write("2, camilo \n");
    res.write("3, camila \n");
    res.write("4, erika \n");
    res.write("5, alejandra \n"); */
    res.end();

    const persona = {
      id: 1,
      nombre: "juan",
    };

    res.write(JSON.stringify(persona));
    res.end();
  })
  .listen(8090);

console.log("escuchando", 8080);
