export const abi = {
    "programType": "contract",
    "specVersion": "1",
    "encodingVersion": "1",
    "concreteTypes": [
        {
            "type": "u64",
            "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
    ],
    "metadataTypes": [],
    "functions": [
        {
            "inputs": [],
            "name": "get",
            "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
            "attributes": [
                {
                    "name": "storage",
                    "arguments": [
                        "read"
                    ]
                }
            ]
        },
        {
            "inputs": [
                {
                    "name": "amount",
                    "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
                }
            ],
            "name": "increment",
            "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
            "attributes": [
                {
                    "name": "storage",
                    "arguments": [
                        "read",
                        "write"
                    ]
                }
            ]
        }
    ],
    "loggedTypes": [],
    "messagesTypes": [],
    "configurables": []
}