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
    background: '#ffffff',
    '& .ant-menu': {
      height: '100%',
      width: '200px',
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
    height: 'calc(100% - 64px)',
    overflow: 'auto',
    background: '#FFFFFF',
    '& div[class*=language-javascript]': {
      position: 'relative',
    },
    '& code[class~=language-javascript]:before': {
      position: 'absolute',
      zIndex: 3,
      top: '.8em',
      right: '1em',
      fontSize: '.75rem',
      color: 'hsla(0,0%,100%,.4)',
      content: '"js"',
    },
  },
} );

export {
  useBaseStyle,
};
