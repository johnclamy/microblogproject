import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'


const Dictionary: React.FC = () => {
    const [word, setWord] = useState<string>('')
    const navigate = useNavigate()
 
    return (
        <div>
            <input
                type="text"
                onChange={(e) => setWord(e.target.value)}
            />
            <button
                onClick={() => {
                    navigate('/definition/' + word.trim(), {replace:true})
                }}
            >
                Search
            </button>
        </div>
    )
}


export default Dictionary
