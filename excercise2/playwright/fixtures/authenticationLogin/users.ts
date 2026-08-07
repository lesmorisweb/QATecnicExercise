export const USERS = {

    STANDARD: {
        username: 'standard_user',
        password: 'secret_sauce'
    },

    INVALID_USERNAME: {
        username: 'invalid_username',
        password:  'secret_sauce'
    },

    INVALID_PASSWORD: {
        username: 'standard_user',
        password: 'invalid_password'
    },

    USERNAME_EMPTY: {
        username: '',
        password: 'secret_sauce'
    },

    PASSWORD_EMPTY: {
        username: 'standard_user',
        password: ''
    },

    LOCKED: {
        username: 'locked_out_user',
        password: 'secret_sauce'
    }

};

export const STANDARD = USERS.STANDARD;
export const INVALID_USERNAME = USERS.INVALID_USERNAME;
export const INVALID_PASSWORD = USERS.INVALID_PASSWORD;
export const LOCKED = USERS.LOCKED;
export const INVALID = USERS.INVALID_USERNAME;
