import React from 'react'


const apiRequests = async ( url = '', optionsObj: any, errMsg = null ) => {
// 

        const res = await fetch(url, optionsObj)
        console.log('optionObj and errMsg from apiReq: ', optionsObj, errMsg)
        const result = await res.json()
        console.log('result from apiRequest:', result)
        
        return result

    }


export default apiRequests