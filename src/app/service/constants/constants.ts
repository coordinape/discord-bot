export default Object.freeze({
	APP_VERSION: process.env.npm_package_version,
	APP_NAME: 'app-name',
	_DB_NAME_DEGEN: 'db-name',
	get DB_NAME_CO() {
		return this._DB_NAME_DEGEN;
	},
	set DB_NAME_CO(value) {
		this._DB_NAME_DEGEN = value;
	},
	
	MONGODB_URI_PARTIAL: `${process.env.MONGODB_PREFIX}://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}/`,
	
});