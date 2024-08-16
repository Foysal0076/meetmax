interface Props extends React.SVGProps<SVGSVGElement> {
  width?: number
}

export const VideoCameraIcon = ({ width = 16, ...props }: Props) => {
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
        d='M15.6384 1.40722C15.8604 1.52149 16 1.75027 16 2V8.66666C16 8.91639 15.8604 9.14517 15.6384 9.25944C15.4163 9.37371 15.1491 9.3543 14.9458 9.20915L10.2792 5.87582C10.104 5.75068 10 5.54863 10 5.33333C10 5.11803 10.104 4.91598 10.2792 4.79084L14.9458 1.45751C15.1491 1.31236 15.4163 1.29295 15.6384 1.40722ZM11.6471 5.34983L14.5 7.24983V3.49983L11.6471 5.34983Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.6384 1.40722C15.8604 1.52149 16 1.75027 16 2V8.66666C16 8.91639 15.8604 9.14517 15.6384 9.25944C15.4163 9.37371 15.1491 9.3543 14.9458 9.20915L10.2792 5.87582C10.104 5.75068 10 5.54863 10 5.33333C10 5.11803 10.104 4.91598 10.2792 4.79084L14.9458 1.45751C15.1491 1.31236 15.4163 1.29295 15.6384 1.40722ZM11.6471 5.34983L14.5 7.24983V3.49983L11.6471 5.34983Z'
        fill='currentColor'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.07246 1.5C1.72028 1.5 1.43478 1.77982 1.43478 2.125V7.875C1.43478 8.22018 1.72028 8.5 2.07246 8.5H8.92754C9.27972 8.5 9.56522 8.22018 9.56522 7.875V2.125C9.56522 1.77982 9.27972 1.5 8.92754 1.5H2.07246ZM0 1.875C0 0.839466 0.856499 0 1.91304 0H9.08696C10.1435 0 11 0.839466 11 1.875V8.125C11 9.16053 10.1435 10 9.08696 10H1.91304C0.856499 10 0 9.16053 0 8.125V1.875Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.07246 1.5C1.72028 1.5 1.43478 1.77982 1.43478 2.125V7.875C1.43478 8.22018 1.72028 8.5 2.07246 8.5H8.92754C9.27972 8.5 9.56522 8.22018 9.56522 7.875V2.125C9.56522 1.77982 9.27972 1.5 8.92754 1.5H2.07246ZM0 1.875C0 0.839466 0.856499 0 1.91304 0H9.08696C10.1435 0 11 0.839466 11 1.875V8.125C11 9.16053 10.1435 10 9.08696 10H1.91304C0.856499 10 0 9.16053 0 8.125V1.875Z'
        fill='currentColor'
      />
    </svg>
  )
}
