// app/(nondashboard)/search/SearchWrapper.tsx
import { Suspense } from 'react'
import SearchPage from './page'

export default function SearchWrapper() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchPage />
    </Suspense>
  )
}