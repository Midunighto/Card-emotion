function Card (){
    return(
        <div className="main">
            <img src="./img/album.png"/>
            <div>
                <h1>nadie sabe lo que va a pasar mañana</h1>
                <h2>Bad Bunny</h2>
                <p>LATIN · 2023</p>
                <div className="buttons">
                    <button>▶︎Lecture</button>
                    <button><img src="./img/shuffle.svg" alt="" width={15}/>Aléatoire</button>
                </div>
            </div>
        </div>

    )
}

export default Card;