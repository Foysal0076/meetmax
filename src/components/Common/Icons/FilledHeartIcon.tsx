interface Props extends React.SVGProps<SVGSVGElement> {
  width?: number
}

export const FilledHeartIcon = ({ width = 16, ...props }: Props) => {
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
        d='M14.5941 1.33078C16.4037 3.04848 16.4661 5.78409 14.7829 7.56845L7.99905 14L1.21678 7.56845C-0.466386 5.78409 -0.403187 3.04394 1.40558 1.33078C2.81195 8.41457e-05 4.87431 -0.333157 6.60868 0.333325L3.47434 3.30069L4.60552 4.37236L7.99986 1.15885L7.98946 1.14825L8.00066 1.1581C9.87982 -0.439188 12.7838 -0.386173 14.5941 1.33078Z'
        fill='white'
      />
      <path
        d='M14.5941 1.33078C16.4037 3.04848 16.4661 5.78409 14.7829 7.56845L7.99905 14L1.21678 7.56845C-0.466386 5.78409 -0.403187 3.04394 1.40558 1.33078C2.81195 8.41457e-05 4.87431 -0.333157 6.60868 0.333325L3.47434 3.30069L4.60552 4.37236L7.99986 1.15885L7.98946 1.14825L8.00066 1.1581C9.87982 -0.439188 12.7838 -0.386173 14.5941 1.33078Z'
        fill='currentColor'
      />
    </svg>
  )
}
