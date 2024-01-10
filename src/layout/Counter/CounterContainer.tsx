import {connect} from 'react-redux';
import {Counter} from './Counter';
import {Dispatch} from 'redux';
import {AppRootStateType} from '../../state/store';
import {changeValueCounterAC, increaseAC} from '../../state/counter-reducer';


// <Counter score={score}
//          setScoreHandler={setScoreHandler}
//          maxMinValue={rangeOfValues}
//          isSetValue={isSetValue}
//          isCorrectValues={isCorrectValues}/>

type MapStatePropsType = {
  score: number
  rangeOfValue: RangeOfValueType
}
type RangeOfValueType = {
  maxValue: number
  minValue: number
}
type MapDispatchPropsType = {
  setValueHandler: (num: number) => void
}
export type MyPostsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType):MapStatePropsType => {
  return {
    score: state.score,
    rangeOfValue: state.rangeOfValue
  }
}


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    setValueHandler: (num: number) => {
      dispatch(changeValueCounterAC(num))
    },
  }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default CounterContainer;