const Tour = ({name, handleDelete}) => {
    return (
        <>
            <li>{name}</li>
            <button onClick={handleDelete}>{"Delete"}</button>
        </>
    )
}

export default Tour