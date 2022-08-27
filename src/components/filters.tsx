import React from 'react'
import { Box, Flex, Select } from '@chakra-ui/react'
import { StringParam, useQueryParam } from 'use-query-params'

interface Props {
  categories: string[]
}
const Filters = ({ categories }: Props) => {
  const [categoryParam, setCategoryParam] = useQueryParam(
    'filterByCategory',
    StringParam
  )

  return (
    <Flex my={4} alignItems="center">
      Filter by category{' '}
      <Box mx={2}>
        <Select
          placeholder="Select option"
          onChange={(e) => setCategoryParam(e.target.value)}
          defaultValue={categoryParam ? categoryParam : ''}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
      </Box>
    </Flex>
  )
}

export default Filters
