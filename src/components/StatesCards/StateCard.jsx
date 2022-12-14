import { Box, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './StateCard.module.sass';

const StateCard = ({ stateData }) => {
  return (
    <Card className={styles.states} sx={{ background: 'transparent'}}>
      <Link to={`/estado/${stateData.uf}`}>
        <CardContent>
          <Typography className={styles.stateName} gutterBottom>
            {stateData.state}
          </Typography>
          <Box className={styles.stateStats}>
            <Typography className={styles.badgeCases}>
              Casos: {stateData?.cases.toLocaleString()}
            </Typography>
            <Typography className={styles.badgeDeaths}>
              Mortes: {stateData?.deaths.toLocaleString()}
            </Typography>
            <Typography className={styles.badgeSuspects}>
              Suspeitos: {stateData?.suspects.toLocaleString()}
            </Typography>
          </Box>
        </CardContent>
      </Link>
    </Card>
  )
}

export default StateCard