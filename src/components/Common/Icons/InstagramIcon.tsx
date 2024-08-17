interface Props extends React.SVGProps<SVGSVGElement> {
  width?: number
}

export const InstagramIcon = ({ width = 16, ...props }: Props) => {
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
        d='M8 5.6C7.36348 5.6 6.75303 5.85286 6.30294 6.30294C5.85286 6.75303 5.6 7.36348 5.6 8C5.6 8.63652 5.85286 9.24697 6.30294 9.69706C6.75303 10.1471 7.36348 10.4 8 10.4C8.63652 10.4 9.24697 10.1471 9.69706 9.69706C10.1471 9.24697 10.4 8.63652 10.4 8C10.4 7.36348 10.1471 6.75303 9.69706 6.30294C9.24697 5.85286 8.63652 5.6 8 5.6ZM8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8C12 9.06087 11.5786 10.0783 10.8284 10.8284C10.0783 11.5786 9.06087 12 8 12C6.93913 12 5.92172 11.5786 5.17157 10.8284C4.42143 10.0783 4 9.06087 4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4ZM13.2 3.8C13.2 4.06522 13.0946 4.31957 12.9071 4.50711C12.7196 4.69464 12.4652 4.8 12.2 4.8C11.9348 4.8 11.6804 4.69464 11.4929 4.50711C11.3054 4.31957 11.2 4.06522 11.2 3.8C11.2 3.53478 11.3054 3.28043 11.4929 3.09289C11.6804 2.90536 11.9348 2.8 12.2 2.8C12.4652 2.8 12.7196 2.90536 12.9071 3.09289C13.0946 3.28043 13.2 3.53478 13.2 3.8ZM8 1.6C6.0208 1.6 5.6976 1.6056 4.7768 1.6464C4.1496 1.676 3.7288 1.76 3.3384 1.912C2.9912 2.0464 2.7408 2.2072 2.4744 2.4744C2.22401 2.71632 2.03148 3.01167 1.9112 3.3384C1.7592 3.7304 1.6752 4.1504 1.6464 4.7768C1.6048 5.66 1.6 5.9688 1.6 8C1.6 9.9792 1.6056 10.3024 1.6464 11.2232C1.676 11.8496 1.76 12.2712 1.9112 12.6608C2.0472 13.0088 2.2072 13.2592 2.4728 13.5248C2.7424 13.7936 2.9928 13.9544 3.3368 14.0872C3.732 14.24 4.1528 14.3248 4.7768 14.3536C5.66 14.3952 5.9688 14.4 8 14.4C9.9792 14.4 10.3024 14.3944 11.2232 14.3536C11.8488 14.324 12.2704 14.24 12.6608 14.0888C13.0072 13.9536 13.2592 13.7928 13.5248 13.5272C13.7944 13.2576 13.9552 13.0072 14.088 12.6632C14.24 12.2688 14.3248 11.8472 14.3536 11.2232C14.3952 10.34 14.4 10.0312 14.4 8C14.4 6.0208 14.3944 5.6976 14.3536 4.7768C14.324 4.1512 14.24 3.7288 14.088 3.3384C13.9674 3.012 13.7753 2.71677 13.5256 2.4744C13.2838 2.22388 12.9884 2.03133 12.6616 1.9112C12.2696 1.7592 11.8488 1.6752 11.2232 1.6464C10.34 1.6048 10.0312 1.6 8 1.6ZM8 0C10.1736 0 10.4448 0.00799995 11.2976 0.048C12.1496 0.088 12.7296 0.2216 13.24 0.42C13.768 0.6232 14.2128 0.8984 14.6576 1.3424C15.0644 1.74232 15.3792 2.22607 15.58 2.76C15.7776 3.2696 15.912 3.8504 15.952 4.7024C15.9896 5.5552 16 5.8264 16 8C16 10.1736 15.992 10.4448 15.952 11.2976C15.912 12.1496 15.7776 12.7296 15.58 13.24C15.3797 13.7742 15.0649 14.2581 14.6576 14.6576C14.2576 15.0643 13.7738 15.379 13.24 15.58C12.7304 15.7776 12.1496 15.912 11.2976 15.952C10.4448 15.9896 10.1736 16 8 16C5.8264 16 5.5552 15.992 4.7024 15.952C3.8504 15.912 3.2704 15.7776 2.76 15.58C2.22586 15.3796 1.74202 15.0648 1.3424 14.6576C0.935525 14.2577 0.620745 13.774 0.42 13.24C0.2216 12.7304 0.088 12.1496 0.048 11.2976C0.0104 10.4448 0 10.1736 0 8C0 5.8264 0.00799995 5.5552 0.048 4.7024C0.088 3.8496 0.2216 3.2704 0.42 2.76C0.620189 2.22574 0.935043 1.74186 1.3424 1.3424C1.74214 0.935385 2.22594 0.620583 2.76 0.42C3.2704 0.2216 3.8496 0.088 4.7024 0.048C5.5552 0.0104 5.8264 0 8 0Z'
        fill='white'
      />
      <path
        d='M8 5.6C7.36348 5.6 6.75303 5.85286 6.30294 6.30294C5.85286 6.75303 5.6 7.36348 5.6 8C5.6 8.63652 5.85286 9.24697 6.30294 9.69706C6.75303 10.1471 7.36348 10.4 8 10.4C8.63652 10.4 9.24697 10.1471 9.69706 9.69706C10.1471 9.24697 10.4 8.63652 10.4 8C10.4 7.36348 10.1471 6.75303 9.69706 6.30294C9.24697 5.85286 8.63652 5.6 8 5.6ZM8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8C12 9.06087 11.5786 10.0783 10.8284 10.8284C10.0783 11.5786 9.06087 12 8 12C6.93913 12 5.92172 11.5786 5.17157 10.8284C4.42143 10.0783 4 9.06087 4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4ZM13.2 3.8C13.2 4.06522 13.0946 4.31957 12.9071 4.50711C12.7196 4.69464 12.4652 4.8 12.2 4.8C11.9348 4.8 11.6804 4.69464 11.4929 4.50711C11.3054 4.31957 11.2 4.06522 11.2 3.8C11.2 3.53478 11.3054 3.28043 11.4929 3.09289C11.6804 2.90536 11.9348 2.8 12.2 2.8C12.4652 2.8 12.7196 2.90536 12.9071 3.09289C13.0946 3.28043 13.2 3.53478 13.2 3.8ZM8 1.6C6.0208 1.6 5.6976 1.6056 4.7768 1.6464C4.1496 1.676 3.7288 1.76 3.3384 1.912C2.9912 2.0464 2.7408 2.2072 2.4744 2.4744C2.22401 2.71632 2.03148 3.01167 1.9112 3.3384C1.7592 3.7304 1.6752 4.1504 1.6464 4.7768C1.6048 5.66 1.6 5.9688 1.6 8C1.6 9.9792 1.6056 10.3024 1.6464 11.2232C1.676 11.8496 1.76 12.2712 1.9112 12.6608C2.0472 13.0088 2.2072 13.2592 2.4728 13.5248C2.7424 13.7936 2.9928 13.9544 3.3368 14.0872C3.732 14.24 4.1528 14.3248 4.7768 14.3536C5.66 14.3952 5.9688 14.4 8 14.4C9.9792 14.4 10.3024 14.3944 11.2232 14.3536C11.8488 14.324 12.2704 14.24 12.6608 14.0888C13.0072 13.9536 13.2592 13.7928 13.5248 13.5272C13.7944 13.2576 13.9552 13.0072 14.088 12.6632C14.24 12.2688 14.3248 11.8472 14.3536 11.2232C14.3952 10.34 14.4 10.0312 14.4 8C14.4 6.0208 14.3944 5.6976 14.3536 4.7768C14.324 4.1512 14.24 3.7288 14.088 3.3384C13.9674 3.012 13.7753 2.71677 13.5256 2.4744C13.2838 2.22388 12.9884 2.03133 12.6616 1.9112C12.2696 1.7592 11.8488 1.6752 11.2232 1.6464C10.34 1.6048 10.0312 1.6 8 1.6ZM8 0C10.1736 0 10.4448 0.00799995 11.2976 0.048C12.1496 0.088 12.7296 0.2216 13.24 0.42C13.768 0.6232 14.2128 0.8984 14.6576 1.3424C15.0644 1.74232 15.3792 2.22607 15.58 2.76C15.7776 3.2696 15.912 3.8504 15.952 4.7024C15.9896 5.5552 16 5.8264 16 8C16 10.1736 15.992 10.4448 15.952 11.2976C15.912 12.1496 15.7776 12.7296 15.58 13.24C15.3797 13.7742 15.0649 14.2581 14.6576 14.6576C14.2576 15.0643 13.7738 15.379 13.24 15.58C12.7304 15.7776 12.1496 15.912 11.2976 15.952C10.4448 15.9896 10.1736 16 8 16C5.8264 16 5.5552 15.992 4.7024 15.952C3.8504 15.912 3.2704 15.7776 2.76 15.58C2.22586 15.3796 1.74202 15.0648 1.3424 14.6576C0.935525 14.2577 0.620745 13.774 0.42 13.24C0.2216 12.7304 0.088 12.1496 0.048 11.2976C0.0104 10.4448 0 10.1736 0 8C0 5.8264 0.00799995 5.5552 0.048 4.7024C0.088 3.8496 0.2216 3.2704 0.42 2.76C0.620189 2.22574 0.935043 1.74186 1.3424 1.3424C1.74214 0.935385 2.22594 0.620583 2.76 0.42C3.2704 0.2216 3.8496 0.088 4.7024 0.048C5.5552 0.0104 5.8264 0 8 0Z'
        fill='currentColor'
      />
    </svg>
  )
}