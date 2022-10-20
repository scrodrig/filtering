function ListView({ elements, funcFilterItems }) {
    return (
        <div>
            <input type="text" onChange={ev => funcFilterItems(ev.target.value)} />
            <ul>
                {
                    elements.map((element, index) => <li key={index}>{element}</li>)
                }
            </ul>
        </div>
    )
}

export default ListView