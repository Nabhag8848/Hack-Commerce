import { Dispatch, SetStateAction } from 'react'

import { SkillType } from '../types/Skills'
import classNames from 'classnames'
import { skillsByType } from '../utils/analysis'

export const Badge = (props: {
  value: string
  onClickCallBack?: Dispatch<SetStateAction<string>>
  children?: React.ReactNode
}) => {
  const { value, onClickCallBack, children } = props
  const type = Object.keys(skillsByType).find((type) => skillsByType[type].flat().includes(value))
  return (
    <span
      onClick={() => onClickCallBack && onClickCallBack(value)}
      className={classNames(
        {
          'bg-[#e6e6e6b2]': type === SkillType.LANGUAGE,
          'bg-[#cbf3f0]': type === SkillType.FRONTEND || type === SkillType.NATIVE_OR_CROSS,
          'bg-[#2ec4b5a3]': type === SkillType.BACKEND,
          'bg-[#ffbf69]': type === SkillType.DATABASE,
          'bg-[#ff9f1c]': type === SkillType.CLOUD_INFRA,
          'bg-[#bde6ff]': type === SkillType.AI_ML || type === SkillType.COMPUTE_GRAPHICS,
          'bg-[#a571ff7b]': !type,
          'cursor-pointer': onClickCallBack,
        },
        'my-0.5 mr-2 flex items-center gap-1 rounded-lg px-1.5 py-[1px] text-xs text-black sm:font-medium'
      )}
    >
      {value}
      {children}
    </span>
  )
}
