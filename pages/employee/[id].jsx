import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function EmployeePage(props) {
  const { employee } = props;

  if (!employee) return (<div>Loading...</div>)
  return (
    <>
      <Head>
        <title>Employees</title>
      </Head>
      <h1>{employee.first_name} {employee.last_name}</h1>
      <div>
        <p>Gender: {employee.gender}</p>
        <p>Job: {employee.job_title} -- {employee.department}</p>
        <p>Salary: ${employee.salary}</p>
        <p>Age: {employee.age}</p>
        <p>Phone: {employee.phone}</p>
        <p>Email: {employee.email}</p>

      </div>
      <Link href="/employee">Back to Employee List</Link>
    </>
  )
}

export async function getServerSideProps(context) {
  console.log(`Fetching Employee ID: ${context.params['id']}`)
  console.debug(`Fetching ${process.env.APIURL}employee/${context.params['id']}`)
  const ret = await fetch(`${process.env.APIURL}employee/${context.params['id']}`)
  const employee = await ret.json()
  console.log(employee)
  return {
    props: {
      employee
    }
  }

}