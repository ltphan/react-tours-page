const Tour = ({id, name, handleDelete}) => {
    return (
        <>
            <li>{name}</li>
            <button onClick={() => handleDelete(id)}>{"Delete"}</button>
        </>
    )
}

export default Tour