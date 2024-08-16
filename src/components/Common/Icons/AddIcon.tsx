interface Props extends React.SVGProps<SVGSVGElement> {
  width?: number
}

export const AddIcon = ({ width = 16, ...props }: Props) => {
  if (typeof width !== 'number') throw new Error('width must be a number')
  const height = (width * 16) / 16

  return (
    <svg
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M6.85714 6.85714V0H9.14286V6.85714H16V9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714Z'
        fill='white'
      />
      <path
        d='M6.85714 6.85714V0H9.14286V6.85714H16V9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714Z'
        fill='currentColor'
      />
    </svg>
  )
}
