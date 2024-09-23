export default function BodyTexts(props){
    return(
        <p key={props.text} className={`${props.textColor || 'text-costume-gray'} ${props.fontSize || 'text-sm'} font-normal`}>
          {props.text}
        </p>
    )
}