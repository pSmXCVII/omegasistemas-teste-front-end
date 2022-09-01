import { Card, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const AsideCard = ({ stateData }) => {
  return (
    <Card className='states'>
      <Link to={`/${stateData.uf}`}>
        <CardContent>
          <Typography className='stateName' gutterBottom>
            {stateData.state}
          </Typography>
          <Typography className='badge-cases'>
            Casos: {stateData?.cases.toLocaleString()}
          </Typography>
          <Typography className='badge-deaths'>
            Mortes: {stateData?.deaths.toLocaleString()}
          </Typography>
          <Typography className='badge-suspects'>
            Suspeitos: {stateData?.suspects.toLocaleString()}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

export default AsideCard