import { Animated } from 'react-native';
import { useState, useEffect } from 'react';

const useAnimation = (animation) => {
	const { doAnimation, duration } = animation;

	const [variable] = useState(new Animated.Value(0));

	useEffect(() => {
		Animated.timing(variable, {
			toValue: doAnimation ? 1 : 0,
			duration,
			useNativeDriver: true
		}).start();

	}, [doAnimation]);

	return variable;
}

export default useAnimation;