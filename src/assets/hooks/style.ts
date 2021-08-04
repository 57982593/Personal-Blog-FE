import {createUseStyles} from "react-jss";

const useBaseStyle = createUseStyles({
  layoutHeight100: {
    height: '100%',
  },
  layoutWidth100: {
    width: '100%',
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
});

export {
  useBaseStyle,
}
