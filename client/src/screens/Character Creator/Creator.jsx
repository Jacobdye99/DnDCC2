import { useEffect } from 'react'
import { useState } from 'react'
import { getClasses, getRaces, getAlignments } from '../../Services/dnd'
import './Creator.css'

export default function Creator() {
  const [race, setRace] = useState([])
  const [classes, setClasses] = useState([])
  const [alignment, setAlignments] = useState([])

  useEffect(() => {
    const fetchRaces = async () => {
      const races = await getRaces()
      setRace(races.results)
    }
    const fetchClasses = async () => {
      const res = await getClasses()
      setClasses(res.results)
    }

    const fetchAlignments = async () => {
      const alignments = await getAlignments()
      setAlignments(alignments.results)
    }
    fetchAlignments()
    fetchClasses()
    fetchRaces()
    // console.log(race)
  }, [])

  
  return (
    <div className='Creatediv'>
      <fieldset id='border'>
      <legend id="legend">Create a Character</legend>
      <form className='creatorForm'>
        <input placeholder='Character Name' className='options' />
        <select name='races' className='selects'>
          <option className="options">Race</option>
          {race.map((x) => {
            return (
              <option key={x.index} className="options">{x.name}</option>
            )
          }) }
        </select>
        <select name='classes' className='selects'>
          <option className="options">Class</option>
          {classes.map((x) => {
            return (
              <option key={x.index} className="options">{x.name}</option>
            )
          })}
        </select>
        <select name='alignments' className='selects'>
          <option className="options">Alignment</option>
          {alignment.map((x) => {
            return (
              <option key={x.index} className="options">{x.name}</option>
            )
          })}
        </select>
        <button className='Button'>Submit</button>
      </form>
      </fieldset>
    </div>
  )
}