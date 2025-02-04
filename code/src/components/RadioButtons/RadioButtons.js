import React from 'react'
import './RadioButtons.css'


const GenreGroups = [
    'Thriller',
    'Comedy',
    'Drama',
    'Sci-fi',
    'Animated'
]

const RadioButtons = ({GenreGroup, setGenreGroup}) =>{

    const onChangeGenre = (event) =>{
        setGenreGroup(event.target.value)
    }

    return(
        <div>
            <h2 tabindex="0" className="genre-heading">My favorite movie genre is?</h2>
                {GenreGroups.map((group) => (
                    <label htmlFor={group} key={group}> 
                        <input autoFocus
                            name='group'
                            type='radio'
                            value={group}
                            onChange={onChangeGenre}
                            checked={GenreGroup === group}
                            required
                        />
                        {group}
                    </label>  
                ))}
        </div>
    )
}

export default RadioButtons