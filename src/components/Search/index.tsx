import {Search as SearchIcon} from 'lucide-react'
import "./style.css"

export default function Search({ onChange }: { onChange: any }) {
    return (
        <div className='boxSearch'>
            <input onChange={(e) => onChange(e)} type="text" className='inputSearch'/>
            <SearchIcon color='#ccc' className='iconSearch'/>
        </div>
    )
}