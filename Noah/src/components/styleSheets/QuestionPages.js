/*
    Design aller Buttons auf den Question- und
    Repeat-Seiten
*/

export const questionButtonStyle = {
    navButtonImageStyle: {    
        height: 18,
        width: 18,
    },
    navButtonStyle: {
        flex: 1,
        width: '40%',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 0,
        flexDirection: 'column',
    },
    markButtonStyle: {
        //height: 50,
        //width: '15%',
        flex: 0,
        resizeMode: 'cover',
        flexDirection: 'column',
        justifyContent: 'center',
        //justifyContent: 'space-around',
        //flex: 0,
        alignSelf: 'center',
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 0,
        elevation: 1,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5
    },
    markButtonImageStyle: {
        alignSelf: 'center',
        height: 25,
        flex: 1,
    },
    navTextStyle: {
        justifyContent: 'flex-start',
        color: '#007aff',
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: '400',
    },
    navTextStyle2: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        color: '#007aff',
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: '400',
    },
    cardStyle: {
        backgroundColor: 'rgba(255,255,255, 0.3)',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
        flex: 1
    },
};

export const questionCardStyle = {
    navCardStyle: {
        //paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: 'rgba(255,255,255, 0.3)',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 0,
    },
    cardStyle: {
        backgroundColor: 'rgba(255,255,255, 0.3)',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
        flex: 1
    }
};

export const userMessage = {
    flashMessage: {
        zIndex: 100
    }
};