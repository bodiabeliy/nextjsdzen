
interface ArrowRightProps {
    className:string
    fill:string
    width:number;
    height:number;
}

export const PlusIcon = (props: ArrowRightProps) => {
    const {className, fill, width, height} = props

  return (
   <>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox="0 0 20 20">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </svg>
   </>
  )
}
