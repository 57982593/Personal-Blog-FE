import {createUseStyles} from "react-jss";

const useBaseStyle = createUseStyles({
  layoutHeight100: {
    height: '100%',
  },
  layoutVerticalCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {
  useBaseStyle,
}
