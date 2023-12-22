
interface ArrowRightProps {
    className:string
    fill:string
    width:string;
    height:string;
}

export const ArrowRightIcon = (props: ArrowRightProps) => {
    const {className, fill, width, height} = props

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
        <path fill={fill} d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/>
    </svg>
  )
}
