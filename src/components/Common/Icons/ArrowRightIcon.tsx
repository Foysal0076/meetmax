interface Props extends React.SVGProps<SVGSVGElement> {
  width?: number
}

export const ArrowRightIcon = ({ width = 16, ...props }: Props) => {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 7.99997C0 7.50905 0.397969 7.11108 0.888889 7.11108H15.1111C15.602 7.11108 16 7.50905 16 7.99997C16 8.49089 15.602 8.88886 15.1111 8.88886H0.888889C0.397969 8.88886 0 8.49089 0 7.99997Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 7.99997C0 7.50905 0.397969 7.11108 0.888889 7.11108H15.1111C15.602 7.11108 16 7.50905 16 7.99997C16 8.49089 15.602 8.88886 15.1111 8.88886H0.888889C0.397969 8.88886 0 8.49089 0 7.99997Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.37143 0.26035C7.71857 -0.0867832 8.28138 -0.0867832 8.62851 0.26035L15.7396 7.37146C16.0868 7.71859 16.0868 8.28141 15.7396 8.62854L8.62851 15.7397C8.28138 16.0868 7.71857 16.0868 7.37143 15.7397C7.0243 15.3925 7.0243 14.8297 7.37143 14.4826L13.854 8L7.37143 1.51743C7.0243 1.1703 7.0243 0.607482 7.37143 0.26035Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.37143 0.26035C7.71857 -0.0867832 8.28138 -0.0867832 8.62851 0.26035L15.7396 7.37146C16.0868 7.71859 16.0868 8.28141 15.7396 8.62854L8.62851 15.7397C8.28138 16.0868 7.71857 16.0868 7.37143 15.7397C7.0243 15.3925 7.0243 14.8297 7.37143 14.4826L13.854 8L7.37143 1.51743C7.0243 1.1703 7.0243 0.607482 7.37143 0.26035Z'
        fill='currentColor'
      />
    </svg>
  )
}
