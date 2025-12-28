import { FaTrash } from "react-icons/fa";

type NoteProps ={
  note: {
    id: number,
    text: string,
    completed: boolean}
    deleteNote: (id: number)=> void;
  
}

function NoteBox({note, deleteNote}: NoteProps) {
  // const [count, setCount] = useState(0)


  return (
    <>
      <div className= " bg-purple-500 justify-evenly font-semibold p-1 m-1 rounded-md overflow-hidden text-ellipsis whitespace-nowrap"  >{note.text}
      <FaTrash onClick={() => deleteNote(note.id)} className="flex m-1 float-right cursor-pointer  hover:text-red-600"  />       
    </div>
    </>
  )
}

export default NoteBox
