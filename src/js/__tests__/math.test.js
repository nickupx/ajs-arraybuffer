/* eslint-disable no-unused-expressions */
import { Magician, Daemon } from '../math'

const gandalf = new Magician('Gandalf')
const vasya = new Daemon('Vasya')
vasya.distance = 3

test('should get attack', () => {
  expect(gandalf.attack).toBe(75)
})

test('should set stoned', () => {
  vasya.stoned
  expect(vasya.attack).toBe(48)
})

test('should set attack', () => {
  vasya.distance = 1
  vasya.attack = 99
  expect(vasya.attack).toBe(99)
})

test('should be 0', () => {
  vasya.distance = 15
  expect(vasya.attack).toBe(0)
})
