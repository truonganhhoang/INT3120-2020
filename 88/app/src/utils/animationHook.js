import { Animated } from 'react-native';
import { useState, useEffect } from 'react';

/**
 * @typedef {Object} Animation - Contains parameters of animation
 * @property {boolean} doAnimation - Animation will be trigger if this prop are different with local state
 * @property {number} duration - Animation duration
 */

/**
 * Make a variable change in a period time
 * @param {Animation} animation
 * @returns {Animated.Value} - Time variable
 */
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