    <h3>Benvingut a la pàgina principal del framework picat a pedra!</h3>
    <p>Dessitjo que sigui del teu gust</p>
    <table id=peliculas>
        <tr>
            <th>Id</th>
            <th>nombre</th>
            <th>genero</th>
            <th>edad</th>
            <th>likes</th>
        </tr>
    </table>
    <script>
        function procesa_usuarios(data){
                    for (var i=0;i < data.length; i++){
                        var row = document.getElementById("users").insertRow(1 + i);
                        if (i%2==0){
                            row.classList.add("fila_parell");
                        }else{
                            row.classList.add("fila_senar");
                        }
                        var cell_id = row.insertCell(0).innerHTML = data[i].ID;
                        var cell_titol = row.insertCell(1);
                        cell_titol.innerHTML = data[i].TITULO;
                        cell_titol.classList.add("cell_titol");
                        var cell_any = row.insertCell(2).innerHTML = data[i].ANYO;
                        var cell_puntuacio = row.insertCell(3).innerHTML = data[i].PUNTUACION;
                        var cell_Vots = row.insertCell(4).innerHTML = data[i].VOTOS;
                    }
        }

        function init(){
            fetch("https://private-325db3-martamillanlombrana.apiary-mock.com/login?New%20item=")
                .then(response => response.json())
                .then(data => procesa_pelicules(data));
        }
        setTimeout(init, 1000);
    </script>
</body>
</html>