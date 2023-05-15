import './ItemCount.css'

export const ItemCount = ({max, cantidad, modify}) =>{

    const restar = () =>{
        if(cantidad > 0){
            modify(cantidad -1)
        }
    }

    const sumar = () =>{
        if(cantidad < max){
            modify(cantidad + 1)
        }
    }

    return(
        <>
        <h4>{cantidad}</h4>
        <div>
        
            <button onClick={sumar}>➕</button>
            <button onClick={restar}>➖</button>
            {/* <button onClick={resetear}>🔄</button> */}
        </div>
        </>
    )
}
