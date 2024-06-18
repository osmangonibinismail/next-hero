import Meals from '@/components/Meals'
import React from 'react'
import styles from './styles.module.css'
export const metadata = {
    title: 'Meals',
    description: "Meal Page"
  }
const mealsPage = () => {
  return (
    <div className='p-12'>
      <h1 className='text-3xl font-semibold'>Choose your meals</h1>
      <p className={styles.text_large}>Choose meal of you choice by searching...... </p>
      <Meals/>
    </div>
  )
}

export default mealsPage
