interface Props extends React.SVGProps<SVGSVGElement> {
  width?: number
}

export const AppleIcon = ({ width = 16, ...props }: Props) => {
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
        d='M15 11.6827C14.7387 12.484 14.3266 13.2853 13.7638 14.0865C12.8995 15.3429 12.0385 15.9712 11.1809 15.9712C10.8526 15.9712 10.3836 15.8686 9.77387 15.6635C9.19765 15.4583 8.69179 15.3558 8.25628 15.3558C7.84757 15.3558 7.37186 15.4615 6.82915 15.6731C6.28643 15.891 5.84422 16 5.50251 16C4.48409 16 3.47571 15.1699 2.47739 13.5096C1.49246 11.8365 1 10.2244 1 8.67308C1 7.21154 1.37856 6.01282 2.13568 5.07692C2.8928 4.15385 3.84422 3.69231 4.98995 3.69231C5.47236 3.69231 6.06533 3.78846 6.76884 3.98077C7.46566 4.17308 7.92797 4.26923 8.15578 4.26923C8.45729 4.26923 8.93635 4.16026 9.59297 3.94231C10.2764 3.72436 10.8559 3.61538 11.3317 3.61538C12.129 3.61538 12.8425 3.82372 13.4724 4.24038C13.8208 4.47115 14.1692 4.79167 14.5176 5.20192C13.9883 5.63141 13.6064 6.00962 13.3719 6.33654C12.9363 6.9391 12.7186 7.60256 12.7186 8.32692C12.7186 9.1218 12.9497 9.83654 13.4121 10.4712C13.8744 11.1058 14.4037 11.5096 15 11.6827ZM11.2211 0.403846C11.2211 0.794872 11.124 1.23077 10.9296 1.71154C10.7286 2.19231 10.4171 2.63462 9.99498 3.03846C9.63317 3.38462 9.27136 3.61538 8.90955 3.73077C8.66164 3.80128 8.31323 3.85577 7.86432 3.89423C7.88442 2.9391 8.14573 2.11538 8.64824 1.42308C9.14405 0.73718 9.98157 0.262821 11.1608 0C11.1675 0.0192308 11.1759 0.0544872 11.1859 0.105769C11.196 0.157051 11.2044 0.192308 11.2111 0.211538C11.2111 0.23718 11.2127 0.269231 11.2161 0.307692C11.2194 0.346154 11.2211 0.378205 11.2211 0.403846Z'
        fill='white'
      />
      <path
        d='M15 11.6827C14.7387 12.484 14.3266 13.2853 13.7638 14.0865C12.8995 15.3429 12.0385 15.9712 11.1809 15.9712C10.8526 15.9712 10.3836 15.8686 9.77387 15.6635C9.19765 15.4583 8.69179 15.3558 8.25628 15.3558C7.84757 15.3558 7.37186 15.4615 6.82915 15.6731C6.28643 15.891 5.84422 16 5.50251 16C4.48409 16 3.47571 15.1699 2.47739 13.5096C1.49246 11.8365 1 10.2244 1 8.67308C1 7.21154 1.37856 6.01282 2.13568 5.07692C2.8928 4.15385 3.84422 3.69231 4.98995 3.69231C5.47236 3.69231 6.06533 3.78846 6.76884 3.98077C7.46566 4.17308 7.92797 4.26923 8.15578 4.26923C8.45729 4.26923 8.93635 4.16026 9.59297 3.94231C10.2764 3.72436 10.8559 3.61538 11.3317 3.61538C12.129 3.61538 12.8425 3.82372 13.4724 4.24038C13.8208 4.47115 14.1692 4.79167 14.5176 5.20192C13.9883 5.63141 13.6064 6.00962 13.3719 6.33654C12.9363 6.9391 12.7186 7.60256 12.7186 8.32692C12.7186 9.1218 12.9497 9.83654 13.4121 10.4712C13.8744 11.1058 14.4037 11.5096 15 11.6827ZM11.2211 0.403846C11.2211 0.794872 11.124 1.23077 10.9296 1.71154C10.7286 2.19231 10.4171 2.63462 9.99498 3.03846C9.63317 3.38462 9.27136 3.61538 8.90955 3.73077C8.66164 3.80128 8.31323 3.85577 7.86432 3.89423C7.88442 2.9391 8.14573 2.11538 8.64824 1.42308C9.14405 0.73718 9.98157 0.262821 11.1608 0C11.1675 0.0192308 11.1759 0.0544872 11.1859 0.105769C11.196 0.157051 11.2044 0.192308 11.2111 0.211538C11.2111 0.23718 11.2127 0.269231 11.2161 0.307692C11.2194 0.346154 11.2211 0.378205 11.2211 0.403846Z'
        fill='currentColor'
      />
    </svg>
  )
}
