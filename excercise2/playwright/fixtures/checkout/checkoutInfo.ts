export const CHECKOUTINFO = {
    
    FULLINFO: {
        FIRSTNAME: 'Laura',
        LASTNAME: 'Esmoris',
        ZIP: '111111'
    },

    FIRSTNAME_EMPTY: {
        FIRSTNAME: '',
        LASTNAME: 'Esmoris',
        ZIP: '111111'
    },

    LASTNAME_EMPTY: {
        FIRSTNAME: 'Laura',
        LASTNAME: '',
        ZIP: '111111'
    },

    ZIP_EMPTY: {
        FIRSTNAME: 'Laura',
        LASTNAME: 'Esmoris',
        ZIP: ''
    }
};

export const checkoutInfo = {
    firstName: CHECKOUTINFO.FULLINFO.FIRSTNAME,
    lastName: CHECKOUTINFO.FULLINFO.LASTNAME,
    postalCode: CHECKOUTINFO.FULLINFO.ZIP
};
