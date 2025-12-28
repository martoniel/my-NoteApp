
import { useState } from "react"
import NoteBox from "./NoteBox"






type Notes = {
  id: number,
  text: string,
  completed: boolean,
  // expanded: boolean,
}

function NoteApp() {
  
  const [Inputvalue, setInputvalue] = useState<string>('')
  const [notes, setNotes] = useState<Notes[]>([])

  const addNotes = () => {
    if (!Inputvalue.trim()) return;


    const newNotes = {
      id: Date.now(),
      text: Inputvalue,
      completed: false,
      // expanded: false,
    }
  

    // const toggleExpand = (id: number) => {
    // setNotes(notes.map((note) => note.id !== id ))}

  setNotes ((prevNotes) => [newNotes, ...prevNotes]);
  setInputvalue('')}

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note)=> note.id !== id));}



  return (
    <>
      <div className='bg-fuchsia-900 min-h-screen  m-auto flex-auto justify-items-center content-center'>
        <div  className='max-w-[500] w-[70%] bg-slate-200 mb-0 p-3 rounded-md shadow-black shadow-md'> 
            <h1 className="font-bold text-2xl p-0">My Notes</h1> 
            <div>
                <textarea className="w-full pt-1 placeholder-purple-350 outline-0" placeholder="type your notes" value={Inputvalue} onChange={(e)=> setInputvalue(e.target.value)} />
            </div>
              <button onClick={addNotes} className="float-right font bg-purple-400 rounded-md p-1 hover:bg-purple-300 hover:font-bold" >Add Note</button>
               <div>
                <h1 className="pt-7 text-center text-black font-bold">NOTES</h1>
               {notes.map((note) => {
                  return <NoteBox key={note.id} note={note} deleteNote={deleteNote} 
/>;
                 })}

               </div>   
        </div> 

      </div>
       
    </>
  )
}

export default NoteApp
