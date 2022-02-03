import { createTheme, colors } from '@material-ui/core';
import shadows from './shadow';
import typography from './typography';

const theme = createTheme({
  palette: {
    background: {
      // dark: '#F4F6F8',
      // default: '#F5F4F9',
      // paper: '#F5F4F9',
      // white: '#fff',
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    greyBackground: {
      main: '#F6F7F8'
    },
    primary: {
      main: '#BD3630'
    },
    secondary: {
      main: '#636e80'
    },
    text: {
      primary: colors.blueGrey[800],
      secondary: colors.blueGrey[500]
    },
    success: {
      contrastText: '#ffffff',
      dark: colors.green[900],
      main: colors.green[600],
      light: colors.green[400]
    },
    info: {
      contrastText: '#ffffff',
      dark: colors.blue[900],
      main: colors.blue[600],
      light: colors.blue[400]
    },
    warning: {
      contrastText: '#ffffff',
      dark: colors.orange[900],
      main: colors.orange[600],
      light: colors.orange[400]
    },
    error: {
      contrastText: '#ffffff',
      dark: colors.red[900],
      main: colors.red[600],
      light: colors.red[400]
    },
    submitButton: {
      backgroundColor: '#388e3c',
      '&:hover': { backgroundColor: '#1b5e20' }
    }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        fontWeight: 400,
        '&.Mui-focused': {
          color: '#918b95',
          fontWeight: 700
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        // position: 'relative',
        // '& $notchedOutline': {
        //   borderColor: 'rgba(0, 0, 0, 0.23)'
        // },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: '#636e80'
          // Reset on touch devices, it doesn't add specificity
          // '@media (hover: none)': {
          //   borderColor: 'rgba(0, 0, 0, 0.23)'
          // }
        },
        '&$focused $notchedOutline': {
          borderColor: '#636e80'
          // borderWidth: 1
        }
      }
      // MuiOutlinedInput: {
      //   root: {
      //     backgroundColor: 'green',
      //     '&:hover': {
      //       backgroundColor: 'yellow'
      //     },
      //     '&.Mui-focused': {
      //       backgroundColor: 'purple'
      //     }
      //   }
      // }
    }
  },
  shadows,
  typography
});

export default theme;
