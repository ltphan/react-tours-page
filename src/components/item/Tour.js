const Tour = ({id, name, handleDelete}) => {
    return (
        <div key={id}>
            <li>{name}</li>
            <button onClick={() => handleDelete(id)}>{"Delete"}</button>
        </div>
    )
}

export default Tour