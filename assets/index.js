exports.handler = async (event) => {
    // TODO implement
    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify("Application under development. Search functionality will be implemented in Assignment 2"),
    // };
    const times = Date.now();
    let unstructured_message = {
      id:"",
      text:"Application under development. Search functionality will be implemented in Assignment 2",
      timestamp:""
    }
    let message_array = [
      {
        type:"unstructured",
        unstructured:unstructured_message
      }
      ];
    
    const response = {
    messages:message_array
    }
    return {
      'statusCode':200,
      'headers':{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      'body':JSON.stringify(response)
    };
};
