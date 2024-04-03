import { useRef } from 'react'

export default function TopHeader() {
    const heading = useRef()

    const handleClose = () => heading.current.classList.add("hidden")

    return (
        <div ref = {heading} className = "bg-black text-center py-2 text-white">
            This project was made by <a rel = "noreferrer" target = "_blank" href = "" className = "text-sky-600">Azuogalanya Janet</a> and designed by <a href = "https://codewell.cc" className = "text-sky-600">Codewell</a><button className = "bg-transparent md:ml-4 ml-2" onClick = {handleClose}><img src = '\Close.svg'alt = "Close Button" /></button>
        </div>
    )
}