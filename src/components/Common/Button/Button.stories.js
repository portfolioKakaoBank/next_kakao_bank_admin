import React from 'react'
import Button from './Button'

export default {
  title: 'Common/Button',
  component: Button
}

export const primary = () => <Button variant='primary'>primary</Button>
export const secondary = () => <Button variant='secondary'>secondary</Button>
export const success = () => <Button variant='success'>success</Button>
export const danger = () => <Button variant='danger'>danger</Button>