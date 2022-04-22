import { createUseStyles } from 'react-jss';

const useBaseStyle = createUseStyles( {
  layoutHeight100: {
    height: '100%',
  },
  layoutWidth100: {
    width: '100%',
  },
  relative: {
    position: 'relative',
  },
  layoutVerticalCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  layoutFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  homeSider: {
    '& .ant-menu': {
      height: '100%',
      width: '200px !important'
    },
  },
  homeHeader: {
    background: '#ffffff',
    textAlign: 'center',
    fontWeight: 600,
  },
  homeContentLayout: {
  },
  homeContent: {
    padding: '20px',
    height: '100%',
    overflow: 'auto',
    background: '#FFFFFF',
  },
} );

export {
  useBaseStyle,
};
