import '../../estilos/estilos.css'



export default function Categorias () {
    function ExibirCategoria(categoria){
        let elementos = document.getElementsByClassName('box');
        for(var i=0; i<elementos.length; i++){
            if(categoria === elementos[i].id)
                elementos[i].style = 'display:inline-block';
            else
                elementos[i].style = 'display:none';
        }
    }
    
    let ExibirTodos = () => {
        let elementos = document.getElementsByClassName('box');
        for(var i=0; i<elementos.length;i++){
            elementos[i].style = 'display:inline-block';
        }
    }
    return (
        <div>
            <header>
                <h2 className="display-4">Produtos</h2>
                <hr />
            </header>
            <section className="categorias">
                <h3 className="text-center">Categorias</h3>
                <ul className="list-group ulCat">
                    <li onclick={ExibirTodos} className="list-group-item box ">Todos (12)</li>
                    <li onclick={ExibirCategoria('geladeira')} className="list-group-item box">Geladeiras (3)</li>
                    <li onclick={ExibirCategoria('fogao')} className="list-group-item box">Fogões (2)</li>
                    <li onclick={ExibirCategoria('microondas')} className="list-group-item box">Microondas (3)</li>
                    <li onclick={ExibirCategoria('lavaroupas')} className="list-group-item box">Lavadora de roupas (2)</li>
                    <li onclick={ExibirCategoria('lavaloucas')} className="list-group-item box">Lava-louças (2)</li>
                </ul>
            </section>
        </div>
       
    )
}