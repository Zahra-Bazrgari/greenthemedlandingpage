export default function Buttons(props) {
    return (
      <button className={`flex items-center px-4 py-2 m-1 rounded-sm font-normal ${props.bg || 'bg-costume-primary'} ${props.textColor || 'text-white'} w-fit text-xs`}>
        {props.text}
        {props.Icon && <props.Icon className="ml-2" />}
      </button>
    );
  }
  