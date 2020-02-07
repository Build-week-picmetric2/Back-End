describe('test environment', () => {
  test('enviroment variable is set to "test"', () =>
    expect(process.env.NODE_ENV).toBe('test'))
})
