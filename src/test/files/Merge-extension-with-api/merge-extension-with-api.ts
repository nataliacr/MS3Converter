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
      '__id': 'ext-trait-id-1',
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
            'ext-example-id-2',
            'ext-example-id-1'
          ],
          'type': 'api-dt-id-2'
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
      '__id': 'ext-example-id-1'
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
      '__id': 'ext-example-id-2'
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
          '__id': 'api-example-id-1'
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
          '__id': 'api-trait-id-1',
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
                'api-example-id-1'
              ],
              'type': 'api-dt-id-2'
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
          '__id': 'api-security-id-1'
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
                'ext-trait-id-1'
              ],
              'securedBy': [
                'oauth 1.0'
              ]
            }
          ],
          '__id': 'api-resource-id-1',
          'selectedTraits': [
            'ext-trait-id-1'
          ]
        }
      ],
      'dataTypes': [
        {
          'type': 'string',
          'name': 'datatype string',
          '__id': 'api-dt-id-1'
        },
        {
          'type': 'number',
          'name': 'datatype number',
          '__id': 'api-dt-id-2'
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
      '__id': 'ext-example-id-1'
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
      '__id': 'ext-example-id-2'
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
      '__id': 'ext-trait-id-1',
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
            'ext-example-id-2',
            'ext-example-id-1'
          ],
          'type': 'api-dt-id-2'
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
      '__id': 'api-security-id-1'
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
            'ext-trait-id-1'
          ],
          'securedBy': [
            'oauth 1.0'
          ]
        }
      ],
      '__id': 'api-resource-id-1',
      'selectedTraits': [
        'ext-trait-id-1'
      ]
    }
  ],
  'dataTypes': [
    {
      'type': 'string',
      'name': 'datatype string',
      '__id': 'api-dt-id-1'
    },
    {
      'type': 'number',
      'name': 'datatype number',
      '__id': 'api-dt-id-2'
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