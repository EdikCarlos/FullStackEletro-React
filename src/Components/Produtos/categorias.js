import '../../estilos/estilos.css'

export default function Categorias () {
    return (
        <div>
            <header>
                <h2 className="display-4">Produtos</h2>
                <hr />
            </header>
            <section className="categorias">
                <h3 className="text-center">Categorias</h3>
                <ul className="list-group ulCat">
                    <li onclick="exibir_todos()" className="list-group-item ">Todos (12)</li>
                    <li onclick="exibir_categoria('geladeira')" className="list-group-item">Geladeiras (3)</li>
                    <li onclick="exibir_categoria('fogao')" className="list-group-item">Fogões (2)</li>
                    <li onclick="exibir_categoria('microondas')" className="list-group-item">Microondas (3)</li>
                    <li onclick="exibir_categoria('lavaroupas')" className="list-group-item">Lavadora de roupas (2)</li>
                    <li onclick="exibir_categoria('lavaloucas')" className="list-group-item">Lava-louças (2)</li>
                </ul>
            </section>
        </div>
    )
}