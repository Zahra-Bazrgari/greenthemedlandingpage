export default function HeadersTexts(props){
    return (
        <p className={`${props.fontWeight || 'font-bold'} ${props.fontSize || 'text-2xl'} ${props.textColor || 'text-costume-d-gray'}`}>
          {props.text}
        </p>
    )
}
