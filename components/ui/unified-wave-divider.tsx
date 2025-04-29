interface UnifiedWaveDividerProps {
    flip?: boolean
    color?: string
  }
  
  export function UnifiedWaveDivider({ flip = false, color = "white" }: UnifiedWaveDividerProps) {
    return (
      <div className={`absolute ${flip ? "top-0" : "bottom-0"} left-0 right-0 ${flip ? "transform rotate-180" : ""}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill={color}>
          <path d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,58.7C1120,64,1280,64,1360,64L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"></path>
        </svg>
      </div>
    )
  }
  