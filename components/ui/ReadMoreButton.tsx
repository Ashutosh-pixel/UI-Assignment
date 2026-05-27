import React from 'react'

interface textprop {
    text: string
}

const ReadMoreButton: React.FC<textprop> = ({text}) => {
    return (
        <button className="w-full mt-10 py-3 border border-[#0f2e52] rounded-xl text-[10px] font-mono font-bold tracking-widest text-slate-400 hover:text-blue-500 hover:bg-white transition-all uppercase">
            {text}
        </button>
    )
}

export default ReadMoreButton