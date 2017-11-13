const originalProject: any = {
  '_id': '5a0972db8833570d4b92471a',
  'updatedAt': '2017-11-13T10:28:14.037Z',
  'createdAt': '2017-11-13T10:24:27.978Z',
  'ms3_version': '1.0.2',
  '__v': 0,
  '_creator': '587620f13b4e9f19192177e4',
  'lockedBy': 'alexei',
  '_deleted': false,
  'examples': [
    {
      'title': 'ProjectExample',
      'description': '',
      'content': '<name>My Name<\/name>',
      'format': 'xml',
      'annotations': [

      ],
      '__id': '6def13cb-6675-46de-98da-1dd627d62d55'
    }
  ],
  'schemas': [

  ],
  'annotationTypes': [
    {
      'name': 'ProjectAnnotationType',
      'type': 'string',
      'enum': [

      ],
      'pattern': '',
      'description': 'description',
      '__id': '51f622ed-0971-4f5e-a5cb-c32e3df4aeb9'
    }
  ],
  'documentation': [

  ],
  'traits': [
    {
      'name': 'ProjectTrait',
      'description': '',
      'queryParameters': [

      ],
      'headers': [

      ],
      'responses': [

      ],
      'annotations': [

      ],
      '__id': 'b872baf5-e32e-4c7a-a6a3-e41363063294',
      'selectedTraits': [

      ],
      'securedBy': [

      ]
    }
  ],
  'resourcesTypes': [
    {
      'path': '',
      'name': 'ProjectResourceType',
      'description': 'description',
      'pathVariables': [

      ],
      'queryParameters': [

      ],
      'annotations': [

      ],
      'methods': [
        {
          'active': false,
          'name': 'GET',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'POST',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'PUT',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'DELETE',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'PATCH',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'OPTIONS',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'HEAD',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'TRACE',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        }
      ],
      '__id': '21fc013d-a42c-452a-bda1-5bca2c023f2a'
    }
  ],
  'securitySchemes': [
    {
      'name': 'ProjectSecSchema',
      'type': 'OAuth 2.0',
      'description': '123123',
      'annotations': [

      ],
      'settings': {
        'scopes': [

        ],
        'accessTokenUri': 'http:\/\/name.token',
        'authorizationGrants': [
          'authorization_code',
          'client_credentials'
        ]
      },
      'customSettings': [

      ],
      'describedBy': {
        'headers': [

        ],
        'queryParameters': [

        ],
        'responses': [

        ]
      },
      '__id': 'c2999a0e-b038-40a7-bde3-47ced8a5d0ac'
    }
  ],
  'resources': [
    {
      'path': '\/path',
      'name': '',
      'type': '42ab8ff7-d590-4d2d-b0af-f5936af99c2f',
      'description': '',
      'pathVariables': [

      ],
      'securedBy': [
        '548c994d-ab76-41bf-bb1d-cc59b40e1728'
      ],
      'queryParameters': [

      ],
      'resources': [

      ],
      'annotations': [
        {
          'name': 'MyLibrary.LibraryAnnotationType',
          'type': 'string',
          'enum': [

          ],
          'pattern': '',
          'description': 'desription',
          'value': '1'
        }
      ],
      'methods': [
        {
          'active': false,
          'name': 'GET',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': true,
          'name': 'POST',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ],
          'annotations': [

          ],
          'body': [
            {
              'annotations': [

              ],
              'contentType': 'application\/json',
              'selectedExamples': [

              ],
              'type': 'f00f7ae3-7001-44f1-9bed-49ef59cdd83d'
            }
          ]
        },
        {
          'active': false,
          'name': 'PUT',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'DELETE',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'PATCH',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'OPTIONS',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'HEAD',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'TRACE',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        }
      ],
      '__id': '193d1454-f1b1-4b9a-8893-5f5fe56923e9',
      'selectedTraits': [
        'f8649cb3-5d56-4f2f-91ea-0638ec9bdaf7'
      ]
    }
  ],
  'dataTypes': [
    {
      'type': 'integer',
      'description': '1',
      'name': 'ProjectDataType',
      'example': 3,
      'default': 2,
      'format': 'int32',
      'minimum': 1,
      'maximum': 3,
      'multipleOf': 1,
      '__id': 'e50011c4-081a-43f6-b610-3c29ab53cdf1'
    }
  ],
  'libraries': [
    {
      '_id': '5a0972db8833570d4b924718',
      'library': {
        '_id': '5a0972db8833570d4b924718',
        'updatedAt': '2017-11-13T10:24:27.929Z',
        'createdAt': '2017-11-13T10:24:27.929Z',
        'ms3_version': '1.0.1',
        '__v': 0,
        '_creator': '587620f13b4e9f19192177e4',
        '_deleted': false,
        'examples': [
          {
            'title': 'LibraryExample',
            'description': '',
            'content': '<Library>Library<\/Library>',
            'format': 'xml',
            'annotations': [

            ],
            '__id': '31b653cb-b853-4df4-b13f-cf5a57bb32ae'
          }
        ],
        'annotationTypes': [
          {
            'name': 'LibraryAnnotationType',
            'type': 'string',
            'enum': [

            ],
            'pattern': '',
            'description': 'desription',
            '__id': 'd72620ba-2046-4b7e-97e5-703e64d315b5'
          }
        ],
        'traits': [
          {
            'name': 'LibraryTrait',
            'description': '',
            'queryParameters': [

            ],
            'headers': [

            ],
            'responses': [

            ],
            'annotations': [

            ],
            '__id': 'f8649cb3-5d56-4f2f-91ea-0638ec9bdaf7',
            'selectedTraits': [

            ],
            'securedBy': [

            ]
          }
        ],
        'resourcesTypes': [
          {
            'path': '',
            'name': 'LibraryResourceType',
            'description': '',
            'pathVariables': [

            ],
            'queryParameters': [

            ],
            'annotations': [

            ],
            'methods': [
              {
                'active': false,
                'name': 'GET',
                'description': '',
                'queryParameters': [

                ],
                'headers': [

                ],
                'responses': [

                ]
              },
              {
                'active': false,
                'name': 'POST',
                'description': '',
                'queryParameters': [

                ],
                'headers': [

                ],
                'responses': [

                ]
              },
              {
                'active': false,
                'name': 'PUT',
                'description': '',
                'queryParameters': [

                ],
                'headers': [

                ],
                'responses': [

                ]
              },
              {
                'active': false,
                'name': 'DELETE',
                'description': '',
                'queryParameters': [

                ],
                'headers': [

                ],
                'responses': [

                ]
              },
              {
                'active': false,
                'name': 'PATCH',
                'description': '',
                'queryParameters': [

                ],
                'headers': [

                ],
                'responses': [

                ]
              },
              {
                'active': false,
                'name': 'OPTIONS',
                'description': '',
                'queryParameters': [

                ],
                'headers': [

                ],
                'responses': [

                ]
              },
              {
                'active': false,
                'name': 'HEAD',
                'description': '',
                'queryParameters': [

                ],
                'headers': [

                ],
                'responses': [

                ]
              },
              {
                'active': false,
                'name': 'TRACE',
                'description': '',
                'queryParameters': [

                ],
                'headers': [

                ],
                'responses': [

                ]
              }
            ],
            '__id': '42ab8ff7-d590-4d2d-b0af-f5936af99c2f'
          }
        ],
        'securitySchemes': [
          {
            'name': 'LibrarySecSchema',
            'type': 'OAuth 2.0',
            'description': 'description',
            'annotations': [

            ],
            'settings': {
              'scopes': [

              ]
            },
            'customSettings': [

            ],
            'describedBy': {
              'headers': [

              ],
              'queryParameters': [

              ],
              'responses': [

              ]
            },
            '__id': '548c994d-ab76-41bf-bb1d-cc59b40e1728'
          }
        ],
        'dataTypes': [
          {
            'type': 'boolean',
            'description': 'description',
            'name': 'LibraryDataType',
            'example': true,
            'default': false,
            '__id': 'f00f7ae3-7001-44f1-9bed-49ef59cdd83d'
          }
        ],
        'folder': [

        ],
        'libraries': [

        ],
        'settings': {
          'usage': 'usage',
          'title': 'MyLibrary',
          'annotations': [

          ]
        },
        'entityTypeName': 'library'
      },
      'refName': 'MyLibrary'
    }
  ],
  'folder': [

  ],
  'settings': {
    'baseUri': 'http:\/\/project.net',
    'version': '',
    'title': 'Project',
    'annotations': [

    ],
    'protocols': [

    ],
    'baseUriParameters': [

    ],
    'securedBy': [

    ]
  },
  'entityTypeName': 'api'
};

const resultObject: any = {
  '_id': '5a0972db8833570d4b92471a',
  'updatedAt': '2017-11-13T10:28:14.037Z',
  'createdAt': '2017-11-13T10:24:27.978Z',
  'ms3_version': '1.0.2',
  '__v': 0,
  '_creator': '587620f13b4e9f19192177e4',
  'lockedBy': 'alexei',
  '_deleted': false,
  'examples': [
    {
      'title': 'ProjectExample',
      'description': '',
      'content': '<name>My Name<\/name>',
      'format': 'xml',
      'annotations': [

      ],
      '__id': '6def13cb-6675-46de-98da-1dd627d62d55'
    },
    {
      'title': 'LibraryExample',
      'description': '',
      'content': '<Library>Library<\/Library>',
      'format': 'xml',
      'annotations': [

      ],
      '__id': '31b653cb-b853-4df4-b13f-cf5a57bb32ae'
    }
  ],
  'schemas': [

  ],
  'annotationTypes': [
    {
      'name': 'ProjectAnnotationType',
      'type': 'string',
      'enum': [

      ],
      'pattern': '',
      'description': 'description',
      '__id': '51f622ed-0971-4f5e-a5cb-c32e3df4aeb9'
    },
    {
      'name': 'LibraryAnnotationType',
      'type': 'string',
      'enum': [

      ],
      'pattern': '',
      'description': 'desription',
      '__id': 'd72620ba-2046-4b7e-97e5-703e64d315b5'
    }
  ],
  'documentation': [

  ],
  'traits': [
    {
      'name': 'ProjectTrait',
      'description': '',
      'queryParameters': [

      ],
      'headers': [

      ],
      'responses': [

      ],
      'annotations': [

      ],
      '__id': 'b872baf5-e32e-4c7a-a6a3-e41363063294',
      'selectedTraits': [

      ],
      'securedBy': [

      ]
    },
    {
      'name': 'LibraryTrait',
      'description': '',
      'queryParameters': [

      ],
      'headers': [

      ],
      'responses': [

      ],
      'annotations': [

      ],
      '__id': 'f8649cb3-5d56-4f2f-91ea-0638ec9bdaf7',
      'selectedTraits': [

      ],
      'securedBy': [

      ]
    }
  ],
  'resourcesTypes': [
    {
      'path': '',
      'name': 'ProjectResourceType',
      'description': 'description',
      'pathVariables': [

      ],
      'queryParameters': [

      ],
      'annotations': [

      ],
      'methods': [
        {
          'active': false,
          'name': 'GET',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'POST',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'PUT',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'DELETE',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'PATCH',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'OPTIONS',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'HEAD',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'TRACE',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        }
      ],
      '__id': '21fc013d-a42c-452a-bda1-5bca2c023f2a'
    },
    {
      'path': '',
      'name': 'LibraryResourceType',
      'description': '',
      'pathVariables': [

      ],
      'queryParameters': [

      ],
      'annotations': [

      ],
      'methods': [
        {
          'active': false,
          'name': 'GET',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'POST',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'PUT',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'DELETE',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'PATCH',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'OPTIONS',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'HEAD',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'TRACE',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        }
      ],
      '__id': '42ab8ff7-d590-4d2d-b0af-f5936af99c2f'
    }
  ],
  'securitySchemes': [
    {
      'name': 'ProjectSecSchema',
      'type': 'OAuth 2.0',
      'description': '123123',
      'annotations': [

      ],
      'settings': {
        'scopes': [

        ],
        'accessTokenUri': 'http:\/\/name.token',
        'authorizationGrants': [
          'authorization_code',
          'client_credentials'
        ]
      },
      'customSettings': [

      ],
      'describedBy': {
        'headers': [

        ],
        'queryParameters': [

        ],
        'responses': [

        ]
      },
      '__id': 'c2999a0e-b038-40a7-bde3-47ced8a5d0ac'
    },
    {
      'name': 'LibrarySecSchema',
      'type': 'OAuth 2.0',
      'description': 'description',
      'annotations': [

      ],
      'settings': {
        'scopes': [

        ]
      },
      'customSettings': [

      ],
      'describedBy': {
        'headers': [

        ],
        'queryParameters': [

        ],
        'responses': [

        ]
      },
      '__id': '548c994d-ab76-41bf-bb1d-cc59b40e1728'
    }
  ],
  'resources': [
    {
      'path': '\/path',
      'name': '',
      'type': '42ab8ff7-d590-4d2d-b0af-f5936af99c2f',
      'description': '',
      'pathVariables': [

      ],
      'securedBy': [
        '548c994d-ab76-41bf-bb1d-cc59b40e1728'
      ],
      'queryParameters': [

      ],
      'resources': [

      ],
      'annotations': [
        {
          'name': 'MyLibrary.LibraryAnnotationType',
          'type': 'string',
          'enum': [

          ],
          'pattern': '',
          'description': 'desription',
          'value': '1'
        }
      ],
      'methods': [
        {
          'active': false,
          'name': 'GET',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': true,
          'name': 'POST',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ],
          'annotations': [

          ],
          'body': [
            {
              'annotations': [

              ],
              'contentType': 'application\/json',
              'selectedExamples': [

              ],
              'type': 'f00f7ae3-7001-44f1-9bed-49ef59cdd83d'
            }
          ]
        },
        {
          'active': false,
          'name': 'PUT',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'DELETE',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'PATCH',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'OPTIONS',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'HEAD',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        },
        {
          'active': false,
          'name': 'TRACE',
          'description': '',
          'queryParameters': [

          ],
          'headers': [

          ],
          'responses': [

          ]
        }
      ],
      '__id': '193d1454-f1b1-4b9a-8893-5f5fe56923e9',
      'selectedTraits': [
        'f8649cb3-5d56-4f2f-91ea-0638ec9bdaf7'
      ]
    }
  ],
  'dataTypes': [
    {
      'type': 'integer',
      'description': '1',
      'name': 'ProjectDataType',
      'example': 3,
      'default': 2,
      'format': 'int32',
      'minimum': 1,
      'maximum': 3,
      'multipleOf': 1,
      '__id': 'e50011c4-081a-43f6-b610-3c29ab53cdf1'
    },
    {
      'type': 'boolean',
      'description': 'description',
      'name': 'LibraryDataType',
      'example': true,
      'default': false,
      '__id': 'f00f7ae3-7001-44f1-9bed-49ef59cdd83d'
    }
  ],
  'folder': [

  ],
  'settings': {
    'baseUri': 'http:\/\/project.net',
    'version': '',
    'title': 'Project',
    'annotations': [

    ],
    'protocols': [

    ],
    'baseUriParameters': [

    ],
    'securedBy': [

    ]
  },
  'entityTypeName': 'api'
};

export { originalProject, resultObject };