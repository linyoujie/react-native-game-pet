import { Dimensions } from 'react-native';

export default Constants = {
    MAX_WIDTH: Dimensions.get("screen").width,
    MAX_HEIGHT: Dimensions.get("screen").height,
    GAP_SIZE: 250,
    PIPE_WIDTH: 100,
    CAT_WIDTH: 80,
    CAT_HEIGHT: 80,

    CASH_IN_MULTIPLIER: 1 / 35,
    MIN_STAT_VALUE:20,
    WARNING_STAT_VALUE :40,

    DANGER_COLOR: "#eb554699",
    WARNING_COLOR:"#fff62a99",
    OOD_COLOR: "#32cd32",

    // export const UPDATE_INTERVAL:： Math.round(1000 * 60 * 60);
    UPDATE_INTERVAL: Math.round(1000 * 2)

}

