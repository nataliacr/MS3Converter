import { API as MS3 } from './../../../ms3/ms3-v1-api-interface';
import { API as OAS } from './../../../oas/oas-30-api-interface';

export const originalProjectWithResourcesTypes: MS3 = {
  'ms3_version': '1.0.1',
  'traits': [
    {
      'name': 'trait1',
      'description': 'trait1 description',
      'queryParameters': [
        {
          'displayName': 'trait1QueryP',
          'type': 'boolean',
          'repeat': false,
          'required': false
        }
      ],
      'responses': [
        {
          'code': '200',
          'description': 'trait1 response desc',
          'headers': [
            {
              'displayName': 'trait1ResponseHeader',
              'type': 'string',
              'repeat': false,
              'required': false
            }
          ]
        }
      ],
      '__id': '1702b615-6587-42f4-bba0-06c07e85966a',
      'body': [
        {
          'contentType': 'application\/json'
        }
      ]
    },
    {
      'name': 'trait2',
      'headers': [
        {
          'displayName': 'trait2Header',
          'type': 'string',
          'repeat': false,
          'required': false
        }
      ],
      'responses': [
        {
          'code': '200',
          'body': [
            {
              'contentType': 'application\/json'
            }
          ]
        }
      ],
      '__id': '23005ee4-d8ed-48a1-a579-c02e7fc28e46'
    }
  ],
  'resourcesTypes': [
    {
      'name': 'resourceType1',
      'description': 'resourceType1 desc',
      'methods': [
        {
          'active': false,
          'name': 'GET'
        },
        {
          'active': false,
          'name': 'POST'
        },
        {
          'active': true,
          'name': 'PUT',
          'description': 'resourceType1 put desc',
          'queryParameters': [
            {
              'displayName': 'resourceType1PUTQueryP',
              'type': 'date',
              'repeat': false,
              'required': false
            }
          ],
          'body': [
            {
              'contentType': 'application\/json'
            }
          ]
        }
      ],
      '__id': '2ee4ccc1-089e-40ee-8499-308da9553b5d'
    }
  ],
  'resources': [
    {
      'path': '\/res',
      'name': 'res',
      'type': 'resourceType1',
      'methods': [
        {
          'active': true,
          'name': 'GET'
        },
        {
          'active': true,
          'name': 'POST',
          'description': 'resourcePOST desc',
          'headers': [
            {
              'displayName': 'resourcePOSTQueryP',
              'type': 'boolean',
              'repeat': false,
              'required': false
            }
          ],
          'selectedTraits': [
            'trait2'
          ],
          'body': [
            {
              'contentType': 'application\/json'
            }
          ]
        },
        {
          'active': true,
          'name': 'PUT',
          'headers': [
            {
              'displayName': 'resourcePUTHeader',
              'type': 'boolean',
              'repeat': false,
              'required': false,
            }
          ],
          'responses': [
            {
              'code': '200',
              'description': 'resourcePUTResponse200',
              'body': [
                {
                  'contentType': 'application\/pdf'
                }
              ]
            },
            {
              'code': '201',
              'body': [
                {
                  'contentType': 'application\/pdf'
                }
              ]
            }
          ]
        }
      ],
      '__id': '541098a8-76d5-4947-81b7-b5b17e09dded',
      'selectedTraits': [
        'trait1'
      ]
    }
  ],
  'settings': {
    'baseUri': 'http:\/\/merge',
    'title': 'Merge'
  },
  'entityTypeName': 'api'
};

export const resultProjectWithResourcesTypes: MS3 = {
  'ms3_version': '1.0.1',
  'resources': [
    {
      'path': '\/res',
      'name': 'res',
      'description': 'resourceType1 desc',
      'methods': [
        {
          'active': true,
          'name': 'GET',
          'description': 'trait1 description',
          'queryParameters': [
            {
              'displayName': 'trait1QueryP',
              'type': 'boolean',
              'repeat': false,
              'required': false
            }
          ],
          'body': [
            {
              'contentType': 'application\/json'
            }
          ],
          'responses': [
            {
              'code': '200',
              'description': 'trait1 response desc',
              'headers': [
                {
                  'displayName': 'trait1ResponseHeader',
                  'type': 'string',
                  'repeat': false,
                  'required': false
                }
              ]
            }
          ]
        },
        {
          'active': true,
          'name': 'POST',
          'description': 'resourcePOST desc',
          'queryParameters': [
            {
              'displayName': 'trait1QueryP',
              'type': 'boolean',
              'repeat': false,
              'required': false
            }
          ],
          'headers': [
            {
              'displayName': 'resourcePOSTQueryP',
              'type': 'boolean',
              'repeat': false,
              'required': false
            },
            {
              'displayName': 'trait2Header',
              'type': 'string',
              'repeat': false,
              'required': false
            }
          ],
          'body': [
            {
              'contentType': 'application\/json'
            }
          ],
          'responses': [
            {
              'code': '200',
              'description': 'trait1 response desc',
              'headers': [
                {
                  'displayName': 'trait1ResponseHeader',
                  'type': 'string',
                  'repeat': false,
                  'required': false
                }
              ],
              'body': [
                {
                  'contentType': 'application\/json'
                }
              ]
            }
          ]
        },
        {
          'active': true,
          'name': 'PUT',
          'description': 'resourceType1 put desc',
          'queryParameters': [
            {
              'displayName': 'resourceType1PUTQueryP',
              'type': 'date',
              'repeat': false,
              'required': false
            },
            {
              'displayName': 'trait1QueryP',
              'type': 'boolean',
              'repeat': false,
              'required': false
            }
          ],
          'headers': [
            {
              'displayName': 'resourcePUTHeader',
              'type': 'boolean',
              'repeat': false,
              'required': false,
            }
          ],
          'body': [
            {
              'contentType': 'application\/json'
            }
          ],
          'responses': [
            {
              'code': '201',
              'body': [
                {
                  'contentType': 'application\/pdf'
                }
              ]
            },
            {
              'code': '200',
              'description': 'resourcePUTResponse200',
              'headers': [
                {
                  'displayName': 'trait1ResponseHeader',
                  'type': 'string',
                  'repeat': false,
                  'required': false
                }
              ],
              'body': [
                {
                  'contentType': 'application\/pdf'
                }
              ]
            }
          ]
        }
      ],
      '__id': '541098a8-76d5-4947-81b7-b5b17e09dded'
    }
  ],
  'settings': {
    'baseUri': 'http:\/\/merge',
    'title': 'Merge'
  },
  'entityTypeName': 'api'
};