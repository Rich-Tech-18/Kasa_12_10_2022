

function List(props){
    return (
        props.elem.map((el => <li key={el}>{el}</li>))
    )
}

export default List;