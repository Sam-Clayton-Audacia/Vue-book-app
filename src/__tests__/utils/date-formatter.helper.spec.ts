import { test, describe, expect, toBe } from 'vitest'
import { formatDate } from '../../utils/date-formatter.helper.ts'

describe('format date function test', () =>
  test('01/01/2026 returns 01 Jan 2026', () => {
    //Arrange
    const date = new Date('01/01/2026')
    //Act
    const output = formatDate(date)
    //Assert
    expect(output).toBe('01 Jan 2026')
  }))
