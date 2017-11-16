import { API } from './../../../ms3/ms3-v1-api-interface';
import Extension from './../../../ms3/ms3-v1-extension-interface';

export const originalProject: Extension = {
  'ms3_version': '1.0.1',
  'traits': [
    {
      'name': 'trait',
      'description': 'trait desc',
      'queryParameters': [
        {
          'displayName': 'query',
          'type': 'number',
          'repeat': false,
          'required': false
        }
      ],
      'headers': [
        {
          'displayName': 'header',
          'type': 'integer',
          'repeat': false,
          'required': false
        }
      ],
      'annotations': [
        {
          'name': 'annotation type obj',
          'type': 'object',
          'properties': [
            {
              'name': 'default1',
              'type': 'string',
              'required': false,
              'value': '1'
            },
            {
              'name': 'default2',
              'type': 'integer',
              'required': false,
              'value': '2'
            }
          ],
          'description': 'obj desc'
        }
      ],
      '__id': '23c3cd0c-cc04-4950-ae8e-11a9dc6bd1b3',
      'body': [
        {
          'annotations': [
            {
              'name': 'annotation type string',
              'type': 'string',
              'enum': [
                'enum1',
                'enum2'
              ],
              'description': 'string desc',
              'value': 'val'
            }
          ],
          'contentType': 'application\/pdf',
          'selectedExamples': [
            '25395750-2c11-4dd0-8d43-6bfa81dd8f53',
            '25395750-2c11-4dd0-8d43-6bfa81dd8f54'
          ],
          'type': '5211869b-b6a6-4e23-b79d-96104f6a14da'
        }
      ]
    }
  ],
  'examples': [
    {
      'title': 'exampleTXT',
      'content': '{}',
      'format': 'txt',
      'annotations': [
        {
          'name': 'annotation type obj',
          'type': 'object',
          'properties': [
            {
              'name': 'default1',
              'type': 'string',
              'required': false,
              'value': '1'
            },
            {
              'name': 'default2',
              'type': 'integer',
              'required': false,
              'value': '2'
            }
          ],
          'description': 'obj desc'
        },
        {
          'name': 'annotation type string',
          'type': 'string',
          'enum': [
            'enum1',
            'enum2'
          ],
          'description': 'string desc',
          'value': 'val'
        }
      ],
      '__id': '25395750-2c11-4dd0-8d43-6bfa81dd8f54'
    },
    {
      'title': 'exampleJSON',
      'content': '{}',
      'format': 'json',
      'annotations': [
        {
          'name': 'annotation type string',
          'type': 'string',
          'description': 'should overwrite',
          'value': 'value'
        }
      ],
      '__id': '25395750-2c11-4dd0-8d43-6bfa81dd8f53'
    }
  ],
  'settings': {
    'mediaType': 'application\/json',
    'extends': {
      'ms3_version': '1.0.1',
      'examples': [
        {
          'title': 'exampleJSON',
          'content': '{}',
          'format': 'json',
          'annotations': [
            {
              'name': 'annotation type obj',
              'type': 'object',
              'properties': [
                {
                  'name': 'default1',
                  'type': 'string',
                  'required': false,
                  'value': '1'
                },
                {
                  'name': 'default2',
                  'type': 'integer',
                  'required': false,
                  'value': '2'
                }
              ],
              'description': 'obj desc'
            },
            {
              'name': 'annotation type string',
              'type': 'string',
              'enum': [
                'enum1',
                'enum2'
              ],
              'description': 'string desc',
              'value': 'val'
            }
          ],
          '__id': '25395750-2c11-4dd0-8d43-6bfa81dd8f53'
        }
      ],
      'annotationTypes': [
        {
          'name': 'annotation type string',
          'type': 'string',
          'enum': [
            'enum1',
            'enum2'
          ],
          'description': 'string desc'
        },
        {
          'name': 'annotation type obj',
          'type': 'object',
          'properties': [
            {
              'name': 'default1',
              'type': 'string',
              'required': false,
            },
            {
              'name': 'default2',
              'type': 'integer',
              'required': false,
            }
          ],
          'description': 'obj desc'
        }
      ],
      'documentation': [
        {
          'name': 'documentation',
          'description': 'doc desc',
          'annotations': [
            {
              'name': 'annotation type string',
              'type': 'string',
              'enum': [
                'enum1',
                'enum2'
              ],
              'description': 'string desc',
              'value': 'val'
            }
          ],
          '__id': 'df3fbdfa-c2c3-460b-9570-859f1db706be'
        }
      ],
      'traits': [
        {
          'name': 'trait',
          'description': 'trait desc',
          'queryParameters': [
            {
              'displayName': 'query',
              'type': 'number',
              'repeat': false,
              'required': false
            }
          ],
          'headers': [
            {
              'displayName': 'header',
              'type': 'integer',
              'repeat': false,
              'required': false
            }
          ],
          'annotations': [
            {
              'name': 'annotation type obj',
              'type': 'object',
              'properties': [
                {
                  'name': 'default1',
                  'type': 'string',
                  'required': false,
                  'value': '1'
                },
                {
                  'name': 'default2',
                  'type': 'integer',
                  'required': false,
                  'value': '2'
                }
              ],
              'description': 'obj desc'
            }
          ],
          '__id': '23c3cd0c-cc04-4950-ae8e-11a9dc6bd1b3',
          'body': [
            {
              'annotations': [
                {
                  'name': 'annotation type string',
                  'type': 'string',
                  'enum': [
                    'enum1',
                    'enum2'
                  ],
                  'description': 'string desc',
                  'value': 'val'
                }
              ],
              'contentType': 'application\/pdf',
              'selectedExamples': [
                '25395750-2c11-4dd0-8d43-6bfa81dd8f53'
              ],
              'type': '5211869b-b6a6-4e23-b79d-96104f6a14da'
            }
          ]
        }
      ],
      'securitySchemes': [
        {
          'name': 'oauth 1.0',
          'type': 'OAuth 1.0',
          'description': '1.0 desc',
          'settings': {
            'requestTokenUri': 'http:\/\/some.uri',
            'authorizationUri': 'http:\/\/some.uri',
            'tokenCredentialsUri': 'http:\/\/some.uri',
            'signatures': [
              'RSA-SHA1'
            ]
          },
          'describedBy': {
            'headers': [
              {
                'displayName': 'header',
                'type': 'string',
                'repeat': false,
                'required': false
              }
            ],
            'queryParameters': [
              {
                'displayName': 'query',
                'description': 'desc ',
                'type': 'string',
                'example': 'example',
                'repeat': false,
                'required': false
              }
            ],
            'responses': [
              {
                'code': '200',
                'annotations': [
                  {
                    'name': 'annotation type obj',
                    'type': 'object',
                    'properties': [
                      {
                        'name': 'default1',
                        'type': 'string',
                        'required': false,
                        'value': '1'
                      },
                      {
                        'name': 'default2',
                        'type': 'integer',
                        'required': false,
                        'value': '2'
                      }
                    ],
                    'description': 'obj desc'
                  }
                ]
              }
            ]
          },
          '__id': '85f71e15-1d96-483d-82f9-4df61391f94c'
        }
      ],
      'resources': [
        {
          'path': '\/res',
          'name': 'res',
          'securedBy': [
            'oauth 1.0'
          ],
          'annotations': [
            {
              'name': 'annotation type obj',
              'type': 'object',
              'properties': [
                {
                  'name': 'default1',
                  'type': 'string',
                  'required': false,
                  'value': 'de'
                },
                {
                  'name': 'default2',
                  'type': 'integer',
                  'required': false,
                  'value': 'e'
                }
              ],
              'description': 'obj desc'
            },
            {
              'name': 'annotation type string',
              'type': 'string',
              'enum': [
                'enum1',
                'enum2'
              ],
              'description': 'string desc',
              'value': 'dsd'
            }
          ],
          'methods': [
            {
              'active': true,
              'name': 'GET',
              'selectedTraits': [
                '23c3cd0c-cc04-4950-ae8e-11a9dc6bd1b3'
              ],
              'securedBy': [
                'oauth 1.0'
              ]
            }
          ],
          '__id': 'c77bc6cb-840d-4b04-97a2-498787aca334',
          'selectedTraits': [
            '23c3cd0c-cc04-4950-ae8e-11a9dc6bd1b3'
          ]
        }
      ],
      'dataTypes': [
        {
          'type': 'string',
          'name': 'datatype string',
          '__id': 'c80ad73a-80d4-4cef-b512-9fb7c8aaf849'
        },
        {
          'type': 'number',
          'name': 'datatype number',
          '__id': '5211869b-b6a6-4e23-b79d-96104f6a14da'
        }
      ],
      'settings': {
        'mediaType': 'any\/*',
        'description': 'api description',
        'baseUri': 'http:\/\/base.uri{hi}',
        'version': '1.0',
        'title': 'api inside extension',
        'annotations': [
          {
            'name': 'annotation type string',
            'type': 'string',
            'enum': [
              'enum1',
              'enum2'
            ],
            'description': 'string desc',
            'value': 'string val'
          }
        ],
        'protocols': [
          'HTTP'
        ],
        'baseUriParameters': [
          {
            'displayName': 'hi',
            'description': 'hi desc',
            'type': 'number',
            'example': '2',
            'default': '3',
            'repeat': false,
            'required': true
          }
        ]
      },
      'entityTypeName': 'api'
    },
    'baseUri': 'http:\/\/api.hey{id}',
    'version': '1.1',
    'usage': 'for api project',
    'title': 'extension'
  },
  'entityTypeName': 'extension'
};

export const resultProject: API = {
  'ms3_version': '1.0.1',
  'examples': [
    {
      'title': 'exampleTXT',
      'content': '{}',
      'format': 'txt',
      'annotations': [
        {
          'name': 'annotation type obj',
          'type': 'object',
          'properties': [
            {
              'name': 'default1',
              'type': 'string',
              'required': false,
              'value': '1'
            },
            {
              'name': 'default2',
              'type': 'integer',
              'required': false,
              'value': '2'
            }
          ],
          'description': 'obj desc'
        },
        {
          'name': 'annotation type string',
          'type': 'string',
          'enum': [
            'enum1',
            'enum2'
          ],
          'description': 'string desc',
          'value': 'val'
        }
      ],
      '__id': '25395750-2c11-4dd0-8d43-6bfa81dd8f54'
    },
    {
      'title': 'exampleJSON',
      'content': '{}',
      'format': 'json',
      'annotations': [
        {
          'name': 'annotation type string',
          'type': 'string',
          'description': 'should overwrite',
          'value': 'value'
        },
        {
          'description': 'obj desc',
          'name': 'annotation type obj',
          'properties': [
            {
              'name': 'default1',
              'required': false,
              'type': 'string',
              'value': '1'
            },
            {
              'name': 'default2',
              'required': false,
              'type': 'integer',
              'value': '2'
            }],
          'type': 'object'
        }
      ],
      '__id': '25395750-2c11-4dd0-8d43-6bfa81dd8f53'
    }
  ],
  'annotationTypes': [
    {
      'name': 'annotation type string',
      'type': 'string',
      'enum': [
        'enum1',
        'enum2'
      ],
      'description': 'string desc'
    },
    {
      'name': 'annotation type obj',
      'type': 'object',
      'properties': [
        {
          'name': 'default1',
          'type': 'string',
          'required': false,
        },
        {
          'name': 'default2',
          'type': 'integer',
          'required': false,
        }
      ],
      'description': 'obj desc'
    }
  ],
  'documentation': [
    {
      'name': 'documentation',
      'description': 'doc desc',
      'annotations': [
        {
          'name': 'annotation type string',
          'type': 'string',
          'enum': [
            'enum1',
            'enum2'
          ],
          'description': 'string desc',
          'value': 'val'
        }
      ],
      '__id': 'df3fbdfa-c2c3-460b-9570-859f1db706be'
    }
  ],
  'traits': [
    {
      'name': 'trait',
      'description': 'trait desc',
      'queryParameters': [
        {
          'displayName': 'query',
          'type': 'number',
          'repeat': false,
          'required': false
        }
      ],
      'headers': [
        {
          'displayName': 'header',
          'type': 'integer',
          'repeat': false,
          'required': false
        }
      ],
      'annotations': [
        {
          'name': 'annotation type obj',
          'type': 'object',
          'properties': [
            {
              'name': 'default1',
              'type': 'string',
              'required': false,
              'value': '1'
            },
            {
              'name': 'default2',
              'type': 'integer',
              'required': false,
              'value': '2'
            }
          ],
          'description': 'obj desc'
        }
      ],
      '__id': '23c3cd0c-cc04-4950-ae8e-11a9dc6bd1b3',
      'body': [
        {
          'annotations': [
            {
              'name': 'annotation type string',
              'type': 'string',
              'enum': [
                'enum1',
                'enum2'
              ],
              'description': 'string desc',
              'value': 'val'
            }
          ],
          'contentType': 'application\/pdf',
          'selectedExamples': [
            '25395750-2c11-4dd0-8d43-6bfa81dd8f53',
            '25395750-2c11-4dd0-8d43-6bfa81dd8f54'
          ],
          'type': '5211869b-b6a6-4e23-b79d-96104f6a14da'
        }
      ]
    }
  ],
  'securitySchemes': [
    {
      'name': 'oauth 1.0',
      'type': 'OAuth 1.0',
      'description': '1.0 desc',
      'settings': {
        'requestTokenUri': 'http:\/\/some.uri',
        'authorizationUri': 'http:\/\/some.uri',
        'tokenCredentialsUri': 'http:\/\/some.uri',
        'signatures': [
          'RSA-SHA1'
        ]
      },
      'describedBy': {
        'headers': [
          {
            'displayName': 'header',
            'type': 'string',
            'repeat': false,
            'required': false
          }
        ],
        'queryParameters': [
          {
            'displayName': 'query',
            'description': 'desc ',
            'type': 'string',
            'example': 'example',
            'repeat': false,
            'required': false
          }
        ],
        'responses': [
          {
            'code': '200',
            'annotations': [
              {
                'name': 'annotation type obj',
                'type': 'object',
                'properties': [
                  {
                    'name': 'default1',
                    'type': 'string',
                    'required': false,
                    'value': '1'
                  },
                  {
                    'name': 'default2',
                    'type': 'integer',
                    'required': false,
                    'value': '2'
                  }
                ],
                'description': 'obj desc'
              }
            ]
          }
        ]
      },
      '__id': '85f71e15-1d96-483d-82f9-4df61391f94c'
    }
  ],
  'resources': [
    {
      'path': '\/res',
      'name': 'res',
      'securedBy': [
        'oauth 1.0'
      ],
      'annotations': [
        {
          'name': 'annotation type obj',
          'type': 'object',
          'properties': [
            {
              'name': 'default1',
              'type': 'string',
              'required': false,
              'value': 'de'
            },
            {
              'name': 'default2',
              'type': 'integer',
              'required': false,
              'value': 'e'
            }
          ],
          'description': 'obj desc'
        },
        {
          'name': 'annotation type string',
          'type': 'string',
          'enum': [
            'enum1',
            'enum2'
          ],
          'description': 'string desc',
          'value': 'dsd'
        }
      ],
      'methods': [
        {
          'active': true,
          'name': 'GET',
          'selectedTraits': [
            '23c3cd0c-cc04-4950-ae8e-11a9dc6bd1b3'
          ],
          'securedBy': [
            'oauth 1.0'
          ]
        }
      ],
      '__id': 'c77bc6cb-840d-4b04-97a2-498787aca334',
      'selectedTraits': [
        '23c3cd0c-cc04-4950-ae8e-11a9dc6bd1b3'
      ]
    }
  ],
  'dataTypes': [
    {
      'type': 'string',
      'name': 'datatype string',
      '__id': 'c80ad73a-80d4-4cef-b512-9fb7c8aaf849'
    },
    {
      'type': 'number',
      'name': 'datatype number',
      '__id': '5211869b-b6a6-4e23-b79d-96104f6a14da'
    }
  ],
  'settings': {
    'mediaType': 'application\/json',
    'description': 'api description',
    'baseUri': 'http:\/\/api.hey{id}',
    'version': '1.1',
    'title': 'extension',
    'annotations': [
      {
        'name': 'annotation type string',
        'type': 'string',
        'enum': [
          'enum1',
          'enum2'
        ],
        'description': 'string desc',
        'value': 'string val'
      }
    ],
    'protocols': [
      'HTTP'
    ],
    'baseUriParameters': [
      {
        'displayName': 'hi',
        'description': 'hi desc',
        'type': 'number',
        'example': '2',
        'default': '3',
        'repeat': false,
        'required': true
      }
    ]
  },
  'entityTypeName': 'api'
};