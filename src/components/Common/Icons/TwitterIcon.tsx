interface Props extends React.SVGProps<SVGSVGElement> {
  width?: number
}

export const TwitterIcon = ({ width = 16, ...props }: Props) => {
  if (typeof width !== 'number') throw new Error('width must be a number')
  const height = (width * 14) / 16

  return (
    <svg
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 16 14'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M11.0913 1.68308C10.485 1.68297 9.903 1.9338 9.47039 2.38159C9.03778 2.82937 8.78918 3.43833 8.7781 4.07741L8.75577 5.40198C8.75446 5.4731 8.73891 5.54312 8.71013 5.60746C8.68135 5.67179 8.64 5.72898 8.58878 5.77528C8.53756 5.82158 8.47764 5.85594 8.41294 5.8761C8.34824 5.89627 8.28023 5.90178 8.21337 5.89228L6.96824 5.71399C5.32988 5.47851 3.76011 4.68292 2.25415 3.36003C1.77716 6.14374 2.70881 8.07215 4.95259 9.55988L6.34608 10.4833C6.41229 10.5272 6.46729 10.5875 6.50628 10.6589C6.54527 10.7304 6.56706 10.8109 6.56974 10.8933C6.57241 10.9757 6.5559 11.0575 6.52164 11.1316C6.48737 11.2057 6.43641 11.2699 6.3732 11.3184L5.10335 12.2965C5.85872 12.3461 6.5758 12.3108 7.17085 12.1863C10.9341 11.3941 13.4364 8.40855 13.4364 3.48366C13.4364 3.08166 12.6291 1.68308 11.0913 1.68308ZM7.18281 4.04629C7.19673 3.23561 7.43717 2.44727 7.87402 1.77998C8.31087 1.11269 8.92471 0.596105 9.6387 0.294899C10.3527 -0.00630696 11.1351 -0.0787462 11.8879 0.0866512C12.6408 0.252049 13.3306 0.647932 13.8711 1.22474C14.4382 1.22053 14.9208 1.37191 16 0.682291C15.7328 2.06153 15.6012 2.66032 15.0317 3.48366C15.0317 9.91058 11.2851 13.0357 7.48352 13.8355C4.87681 14.3839 1.0864 13.4831 0 12.2872C0.553567 12.2418 2.80293 11.987 4.1031 10.9837C3.00314 10.2192 -1.37514 7.5028 1.50197 0.199558C2.85239 1.86221 4.22195 2.9942 5.60985 3.59467C6.53353 3.99415 6.76006 3.98574 7.18361 4.04713L7.18281 4.04629Z'
        fill='white'
      />
      <path
        d='M11.0913 1.68308C10.485 1.68297 9.903 1.9338 9.47039 2.38159C9.03778 2.82937 8.78918 3.43833 8.7781 4.07741L8.75577 5.40198C8.75446 5.4731 8.73891 5.54312 8.71013 5.60746C8.68135 5.67179 8.64 5.72898 8.58878 5.77528C8.53756 5.82158 8.47764 5.85594 8.41294 5.8761C8.34824 5.89627 8.28023 5.90178 8.21337 5.89228L6.96824 5.71399C5.32988 5.47851 3.76011 4.68292 2.25415 3.36003C1.77716 6.14374 2.70881 8.07215 4.95259 9.55988L6.34608 10.4833C6.41229 10.5272 6.46729 10.5875 6.50628 10.6589C6.54527 10.7304 6.56706 10.8109 6.56974 10.8933C6.57241 10.9757 6.5559 11.0575 6.52164 11.1316C6.48737 11.2057 6.43641 11.2699 6.3732 11.3184L5.10335 12.2965C5.85872 12.3461 6.5758 12.3108 7.17085 12.1863C10.9341 11.3941 13.4364 8.40855 13.4364 3.48366C13.4364 3.08166 12.6291 1.68308 11.0913 1.68308ZM7.18281 4.04629C7.19673 3.23561 7.43717 2.44727 7.87402 1.77998C8.31087 1.11269 8.92471 0.596105 9.6387 0.294899C10.3527 -0.00630696 11.1351 -0.0787462 11.8879 0.0866512C12.6408 0.252049 13.3306 0.647932 13.8711 1.22474C14.4382 1.22053 14.9208 1.37191 16 0.682291C15.7328 2.06153 15.6012 2.66032 15.0317 3.48366C15.0317 9.91058 11.2851 13.0357 7.48352 13.8355C4.87681 14.3839 1.0864 13.4831 0 12.2872C0.553567 12.2418 2.80293 11.987 4.1031 10.9837C3.00314 10.2192 -1.37514 7.5028 1.50197 0.199558C2.85239 1.86221 4.22195 2.9942 5.60985 3.59467C6.53353 3.99415 6.76006 3.98574 7.18361 4.04713L7.18281 4.04629Z'
        fill='currentColor'
      />
    </svg>
  )
}