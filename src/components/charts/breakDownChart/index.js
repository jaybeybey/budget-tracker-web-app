import React from 'react'
import DonutChart from './donutChart'
import SpendingsTable from './spendingsTable'
import "./styles.css";

export default function BreakDownChart() {
  return (
    <div className='chart-contianer'>
      <SpendingsTable/>
      <DonutChart/>
    </div>
  )
}
