import Animated, { Easing } from 'react-native-reanimated';

const {
  Value,
  block,
  cond,
  clockRunning,
  set,
  startClock,
  stopClock,
  timing,
  debug
} = Animated;

const runTiming = (clock, value, dest, duration) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(
      clockRunning(clock),
      [
        set(config.toValue, dest)
      ],
      [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock)
      ]
    ),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position
  ]);
};

export default runTiming;