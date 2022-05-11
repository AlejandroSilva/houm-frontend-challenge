import { FC, useMemo } from 'react'
import cn from 'classnames'

import { calculatePagination, INTERVAL_GAP } from '../utils/calculatePagination'

// I don't tend to set several components on the same file, but these are pretty small
type PageButtonProps = {
  content: any
  active?: boolean
  disabled?: boolean
  onClick: () => void
}
const PageButton: FC<PageButtonProps> = ({ content, active, disabled, onClick }) => (
  <button className={cn('round-button pagination__button', { 'round-button--active': active })}
          disabled={disabled}
          onClick={onClick}
  >
    {content}
  </button>
)

const IntervalGap: FC = () => (
  <button className='round-button pagination__button pagination__button--gap' disabled>...</button>
)

type PaginateProps = {
  currentPage: number
  totalPages: number
  onPageSelect: (page: number) => void
}
export const Pagination: FC<PaginateProps> = ({ currentPage, totalPages, onPageSelect}) => {
  const pages = useMemo(() => calculatePagination(totalPages, currentPage), [totalPages, currentPage])
  return (
    <div className='pagination'>
      <PageButton
        content='<'
        disabled={currentPage===1}
        onClick={() => onPageSelect(currentPage-1)}
      />
      {pages.map((pageNumber, index) => (
        pageNumber === INTERVAL_GAP ? (
          <IntervalGap key={index}/>
        ) : (
          <PageButton
            key={index}
            content={pageNumber}
            active={pageNumber===currentPage}
            onClick={() => onPageSelect(pageNumber)}
          />
        )
      ))}
      <PageButton
        content='>'
        disabled={currentPage===totalPages}
        onClick={() => onPageSelect(currentPage+1)}
      />
    </div>
  )
}
