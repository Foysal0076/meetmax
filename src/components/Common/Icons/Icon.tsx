'use client'

import dynamic from 'next/dynamic'
import React from 'react'

import Spinner from '@/components/Common/Spinner'

export type iconProps = {
  width?: number
} & React.HTMLAttributes<SVGSVGElement>

export type Props = iconProps & {
  name: string
}

export const Icon = React.memo(({ name, ...rest }: Props) => {
  const DynamicIcon = dynamic(
    () => import(`./${name}`).then((component) => component[`${name}`]),
    {
      ssr: true,
      loading: () => <Spinner className='text-neutral-100' />,
    }
  )

  return <DynamicIcon {...rest} />
})
