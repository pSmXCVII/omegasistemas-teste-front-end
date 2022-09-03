import { useEffect, useState } from 'react';
import { Box, Skeleton } from '@mui/material';
import { elapsedTime } from '../../../utils/dateCalculator';
import styles from './LastUpdate.module.sass';

const LastUpdate = ({ lastUpdate, hideable = true }) => {
  const [dateToRender, setDateToRender] = useState();

  useEffect(() => {
    if (lastUpdate)
    setDateToRender(elapsedTime(lastUpdate));
    return () => {
      setDateToRender();
    }
  }, [lastUpdate]);

  return (
    <Box className={hideable && styles.hideable}>
      {dateToRender ? (
        <Box sx={{ flexGrow: 0}} className={styles.badgeLastUpdate}>
          Dados atualizados há {dateToRender}
        </Box>
      ) : (
        <Skeleton
          variant="rectangular"
          width={280}
          height={48}
          sx={{ borderRadius: '10px'}}
        />
      )}
    </Box>
  )
}

export default LastUpdate