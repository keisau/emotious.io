import { Logger, transports } from "winston"
import config from "./config"

export default new Logger ({
	transports: [
		new transports.Console ({
			level: config.codes[config.codes.length - 1],
			colorize: true
		})
	],
	levels: config.levels,
	colors: config.colors
})
