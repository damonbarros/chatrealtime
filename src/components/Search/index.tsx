import {Search as SearchIcon} from 'lucide-react'
import "./style.css"

export default function Search() {
    return (
        <div className='boxSearch'>
            <input type="text" className='inputSearch'/>
            <SearchIcon color='#ccc' className='iconSearch'/>
        </div>
    )
}