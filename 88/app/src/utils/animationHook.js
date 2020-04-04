import { Animated } from 'react-native';
import { useState, useEffect } from 'react';

const useAnimation = (animation) => {
	const [variable, setVariable] = useState(new Animated.Value(0));

	const { duration } = animation;

	// console.log('def')
	
	useEffect(() => {
		Animated.timing(variable, {
			toValue: 1,
			duration,
			useNativeDriver: true
		}).start();

		return () => {
			setVariable(new Animated.Value(0));
		}
	}, []);

	return variable;
}

export default useAnimation;