interface Props{
    src:string
}

export default function(props:Props){
    return (
        <>
            <img className="dark:invert h-20 aspect-square m-10" src={props.src}>
            
            </img>
        </>
    )
}