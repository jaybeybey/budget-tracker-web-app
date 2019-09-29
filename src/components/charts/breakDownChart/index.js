import React from 'react'
import DonutChart from './donutChart'
import SpendingsTable from './spendingsTable'
import "./styles.css";

export default function BreakDownChart() {
  return (
    <div className='chart-contianer row align-items-center justify-content-center'>
      <div className="col-md-12 col-lg-6 d-flex justify-content-center">
        <SpendingsTable />
      </div>
      <div className="col-md-12 col-lg-6 d-flex justify-content-center">
        <DonutChart />
      </div>
    </div>
  )
}
