export const Content = (props) => {
    return (<>
        {props.parts.map(part => (<p>{part.text} {part.value}</p>))}
    </>)
}