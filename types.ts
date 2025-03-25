/* Types file generated by flow2code */

/*=== f2c_start __file ===*/

/*=== f2c_end __file ===*/
/** UserLoginLog */
export interface UserLoginLog {
	/** The main identifier */
	id: string;
	domain?: string;
	id_user?: string;
	/** Can be 'login' | 'logout' | 'error' */
	action: string;
	data?: any;
	username?: string;
	ip?: string;
	email?: string;
}

export const UserLoginLogKeys = {
	'id': { type: 'string', priv: false },
	'domain': { type: 'string', priv: false },
	'id_user': { type: 'string', priv: false },
	'action': { type: 'string', priv: false },
	'data': { type: 'any', priv: false },
	'username': { type: 'string', priv: false },
	'ip': { type: 'string', priv: false },
	'email': { type: 'string', priv: false },
};

/** UserLoginLogPublic */
export interface UserLoginLogPublic {
	/** The main identifier */
	id: string;
	id_user?: string;
	/** Can be 'login' | 'logout' | 'error' */
	action: string;
	data?: any;
	username?: string;
	email?: string;
	ip?: string;
}

export const UserLoginLogPublicKeys = {
	'id': { type: 'string', priv: false },
	'id_user': { type: 'string', priv: false },
	'action': { type: 'string', priv: false },
	'data': { type: 'any', priv: false },
	'username': { type: 'string', priv: false },
	'email': { type: 'string', priv: false },
	'ip': { type: 'string', priv: false },
};

