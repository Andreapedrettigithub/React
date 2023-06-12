

const Item =({id, name, precio, categoria, img, stock }) =>{
    return (
        <article className="CardItem">
        <header className="Header">
        <h2 className="ItemHeader"></h2>
        {name}
        </header>
        <picture>
        <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
        <p className="Info">
        precio:${precio}
        </p>
        <p className="Info">
        stock disponible: {stock}
        </p>
        </section>
        <footer className='ItemFooter'>
        <button className='Option'>Ver detalle</button>
        </footer>
        </article>

    )
}

export default Item