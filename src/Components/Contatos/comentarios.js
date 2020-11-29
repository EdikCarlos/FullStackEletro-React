import React, { useState, useEffect } from 'react';

const Comentarios = () => {
    const [coments, setComents] = useState([]);

    useEffect(async () => {
        const url2 = "http://localhost/www/FullStackEletro_BootstrapAtt/getComent.php?table=comentarios";
        const res2 = await fetch(url2);
        setComents(await res2.json());
    }, [])

    // if (isset($_POST={nome}) && isset($_POST={msg})) {
    //     $nomeAtt = $_POST={nome};
    //     $msgAtt = $_POST={msg};

    //     $sql = "insert into comentarios (nome, msg) values ('$nomeAtt','$msgAtt')";
    //     $result = $conn.query($sql);

    return (
        <> {
            coments.map(row => {
                return (
                    <div style={{textAlign:"center", marginTop: "10px"}}>



                        Data: {row.data}<br />
                        Nome: {row.nome}<br />
                        Mensagem: {row.msg}<br />
                        <hr />



                    </div>
                )
            })
        }
        </>
    )
}
// }

export default Comentarios