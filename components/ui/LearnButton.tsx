import React from 'react'

type padProp = {
    padding: string,
    text: string
}

const LearnButton:React.FC<padProp> = ({padding, text}) => {
    return (
        <div className={`pt-${padding}`}>
            <a 
              href="#all-insights" 
              className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 hover:text-blue-400 transition-colors uppercase border-b border-transparent hover:border-blue-400 pb-1"
            >
              {text}
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
        </div>
    )
}

export default LearnButton