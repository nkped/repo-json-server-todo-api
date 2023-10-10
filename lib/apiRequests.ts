import React from 'react'


const apiRequests = async ( url = '', optionsObj:RequestInit | undefined, errMsg = null ) => {

    try {
        const res = await fetch(url, optionsObj)
        if (!res.ok) throw new Error('Ressources could not be fetched. Please reload..')
    }
    catch(err: any) {
        errMsg = err.message
    }
    finally {
        return errMsg
    }    
}

export default apiRequests