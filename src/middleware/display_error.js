export const display_error=(err)=>{
    const statusCodes = {
        "200":"Task successfully completed",
        "400": "Bad Request: The server cannot process the request due to malformed syntax.",
        "401": "Unauthorized: Authentication is required but has failed or not been provided.",
        "403": "Forbidden: The server understands the request but refuses to authorize it.",
        "404": "Not Found: The server cannot find the requested resource.",
        "405": "Method Not Allowed: The request method is not supported for the requested resource.",
        "406": "Not Acceptable: The requested resource is not available in a format acceptable to the client.",
        "409": "Conflict: The request could not be processed because of a conflict with the current state of the resource.",
        "410": "Gone: The requested resource is no longer available and will not be available again.",
        "415": "Unsupported Media Type: The request’s media format is not supported by the server.",
        "422": "Unprocessable Entity: The server understands the request but is unable to process the contained instructions.",
        "429": "Too Many Requests: The client has sent too many requests in a given time frame.",
        "500": "Internal Server Error: The server encountered an unexpected condition.",
        "501": "Not Implemented: The server does not support the functionality required to fulfill the request.",
        "502": "Bad Gateway: The server received an invalid response from the upstream server.",
        "503": "Service Unavailable: The server is currently unavailable due to overload or maintenance.",
        "504": "Gateway Timeout: The server did not receive a timely response from the upstream server.",
        "505": "HTTP Version Not Supported: The server does not support the HTTP protocol version used in the request."
      };
      
      return statusCodes[err]
}