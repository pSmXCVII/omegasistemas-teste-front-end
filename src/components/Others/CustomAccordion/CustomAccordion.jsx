import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Card, CardContent } from '@mui/material';
import CustomBarChart from '../CustomBarChart/CustomBarChart';
import styles from './CustomAccordion.module.sass';

const CustomAccordion = ({ data }) => {
  const options = {
    title: `Estatística do COVID-19 por estado`,
    legend: 'none',
    chartArea: { width: "60%", height: "50%",},
    colors: ['#1976d2', '#D56552', '#b5a952'],
    background: 'transparent'
  };
  return (
    <Card >
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={styles.states}
        >
          <CardContent>
            <Typography className={styles.stateName}>
              {data.state}
            </Typography>
            <Box className={styles.stateStats}>
              <Typography className={styles.badgeCases}>
                Casos: {data?.cases.toLocaleString()}
              </Typography>
              <Typography className={styles.badgeDeaths}>
                Mortes: {data?.deaths.toLocaleString()}
              </Typography>
              <Typography className={styles.badgeSuspects}>
                Suspeitos: {data?.suspects.toLocaleString()}
              </Typography>
            </Box>
          </CardContent>
        </AccordionSummary>
        <AccordionDetails>
          <CustomBarChart data={data} options={options} type="byState" />
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}

export default CustomAccordion