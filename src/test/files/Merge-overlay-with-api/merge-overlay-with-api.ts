import * as API from './../../../ms3/ms3-v1-api-interface';
import Overlay from './../../../ms3/ms3-v1-overlay-interface';

const apiSettings: API.Settings = {
  'mediaType': 'any\/*',
  'description': 'api description',
  'baseUri': 'http:\/\/base.uri{hi}',
  'version': '1.0',
  'title': 'api inside overlay',
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
};

const apiExamples: API.Example[] = [
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
];

const apiAnnotationTypes: API.AnnotationType[] = [
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
];

const apiTraits: API.Trait[] = [
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
];

const apiSecuritySchemes: API.SecurityScheme[] = [
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
];

const apiResources: API.Resource[] = [
  {
    'path': '\/res',
    'name': 'res',
    'securedBy': [
      '85f71e15-1d96-483d-82f9-4df61391f94c'
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
          '85f71e15-1d96-483d-82f9-4df61391f94c'
        ]
      }
    ],
    '__id': 'c77bc6cb-840d-4b04-97a2-498787aca334',
    'selectedTraits': [
      '23c3cd0c-cc04-4950-ae8e-11a9dc6bd1b3'
    ]
  }
];

const overlayResources: API.Resource[] = [
  {
    'path': '\/res',
    'name': 'res',
    'description': 'overlay desc',
    'securedBy': [
      '85f71e15-1d96-483d-82f9-4df61391f94c'
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
        'description': 'overlay'
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
          '85f71e15-1d96-483d-82f9-4df61391f94c'
        ]
      }
    ],
    '__id': 'c77bc6cb-840d-4b04-97a2-498787aca334',
    'selectedTraits': [
      '23c3cd0c-cc04-4950-ae8e-11a9dc6bd1b3'
    ]
  }
];

const apiDataTypes: API.DataType[] = [
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
];

const overlayDataTypes: API.DataType[] = [
  {
    'type': 'number',
    'name': 'datatype number',
    'description': 'overlay desc',
    '__id': '5211869b-b6a6-4e23-b79d-96104f6a14da'
  },
  {
    'type': 'integer',
    'name': 'overlay',
    '__id': '5211869b-b6a6-4e23-b79d-96104f6a14da'
  }
];

const api: API.API = {
  'entityTypeName': 'api',
  'examples': apiExamples,
  'annotationTypes': apiAnnotationTypes,
  'traits': apiTraits,
  'securitySchemes': apiSecuritySchemes,
  'resources': apiResources,
  'dataTypes': apiDataTypes,
  'settings': apiSettings,
  'ms3_version': '1.0.0'
};

const overlaySettings = {
  'mediaType': 'any\/*',
  'description': 'overlay description',
  'baseUri': 'http:\/\/base.uri{hi}',
  'version': '1.1',
  'title': 'overlay',
  'extends': api,
  'annotations': [
    {
      'name': 'annotation type string',
      'type': 'string',
      'enum': [
        'enum1',
        'enum2'
      ],
      'description': 'from overlay',
      'value': 'string val'
    },
    {
      'name': 'annotation type obj',
      'type': 'object',
      'properties': [
        {
          'name': 'default1',
          'type': 'string',
          'required': false,
          'value': 'overlay1'
        },
        {
          'name': 'default2',
          'type': 'integer',
          'required': false,
          'value': 'overlay2'
        }
      ],
      'description': 'obj desc'
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
};

const overlayExamples: API.Example[] = [
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
        'description': 'overlay'
      }
    ],
    '__id': '25395750-2c11-4dd0-8d43-6bfa81dd8f53'
  },
  {
    'title': 'exampleTXT',
    'content': '{}',
    'format': 'txt',
    '__id': '25395750-2c11-4dd0-8d43-6bfa81dd8f54'
  }
];

export const originalProject: any = {
  'entityTypeName': 'overlay',
  'examples': overlayExamples,
  'annotationTypes': apiAnnotationTypes,
  'traits': apiTraits,
  'securitySchemes': apiSecuritySchemes,
  'resources': overlayResources,
  'dataTypes': overlayDataTypes,
  'settings': overlaySettings,
  'ms3_version': '1.0.0'
};

export const resultProject: API.API = {
  'entityTypeName': 'api',
  'ms3_version': '1.0.0',
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
          'description': 'overlay'
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
    },
    {
      'title': 'exampleTXT',
      'content': '{}',
      'format': 'txt',
      '__id': '25395750-2c11-4dd0-8d43-6bfa81dd8f54'
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
      'description': 'overlay desc',
      'securedBy': [
        '85f71e15-1d96-483d-82f9-4df61391f94c'
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
          'description': 'overlay'
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
            '85f71e15-1d96-483d-82f9-4df61391f94c'
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
      'type': 'number',
      'name': 'datatype number',
      'description': 'overlay desc',
      '__id': '5211869b-b6a6-4e23-b79d-96104f6a14da'
    },
    {
      'type': 'integer',
      'name': 'overlay',
      '__id': '5211869b-b6a6-4e23-b79d-96104f6a14da'
    },
    {
      'type': 'string',
      'name': 'datatype string',
      '__id': 'c80ad73a-80d4-4cef-b512-9fb7c8aaf849'
    }
  ],
  'settings': {
    'mediaType': 'any\/*',
    'description': 'overlay description',
    'baseUri': 'http:\/\/base.uri{hi}',
    'version': '1.1',
    'title': 'overlay',
    'annotations': [
      {
        'name': 'annotation type string',
        'type': 'string',
        'enum': [
          'enum1',
          'enum2'
        ],
        'description': 'from overlay',
        'value': 'string val'
      },
      {
        'name': 'annotation type obj',
        'type': 'object',
        'properties': [
          {
            'name': 'default1',
            'type': 'string',
            'required': false,
            'value': 'overlay1'
          },
          {
            'name': 'default2',
            'type': 'integer',
            'required': false,
            'value': 'overlay2'
          }
        ],
        'description': 'obj desc'
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
  }
};