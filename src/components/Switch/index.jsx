import { FormControlLabel } from '@mui/material';
import React from 'react';

import { MaterialUISwitch } from './ui';

const UISwitch = ({ ...rest }) => {
  return (
    <FormControlLabel
      control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
      {...rest}
    />
  );
};

export default UISwitch;
