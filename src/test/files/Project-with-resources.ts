import * as ApiInterfaces from './../../ms3/ms3-v1-api-interface';

const originalProject: object = {
  'settings': {
    'title': 'params',
    'baseUri': 'http://params'
  },
  'ms3_version': '1.0.1',
  'entityTypeName': 'api',
  'resources': [
    {
      'path': '/res',
      'name': 'res',
      'type': null,
      'description': '',
      'pathVariables': [],
      'securedBy': [],
      'queryParameters': [],
      'resources': [
        {
          'id': '880ddafe-81a1-4ff3-841e-5bb80c146997',
          'path': '/nested'
        }
      ],
      'annotations': [],
      'methods': [
        {
          'active': true,
          'name': 'GET',
          'description': 'desc',
          'queryParameters': [],
          'headers': [
            {
              'displayName': 'header',
              'description': '',
              'type': 'number',
              'enum': [],
              'pattern': '',
              'minLength': '',
              'maxLength': '',
              'minimum': '',
              'maximum': '',
              'example': '',
              'default': '',
              'repeat': true,
              'required': false
            }
          ],
          'responses': [],
          'annotations': []
        },
        {
          'active': true,
          'name': 'POST',
          'description': '',
          'queryParameters': [],
          'headers': [],
          'responses': [
            {
              'code': '200',
              'description': '',
              'body': [
                {
                  'annotations': [],
                  'contentType': 'application/pdf',
                  'selectedExamples': '',
                  'type': ''
                }
              ],
              'headers': [],
              'annotations': []
            }
          ],
          'annotations': []
        },
        {
          'active': true,
          'name': 'PUT',
          'description': '',
          'queryParameters': [],
          'headers': [],
          'responses': []
        },
        {
          'active': true,
          'name': 'DELETE',
          'description': '',
          'queryParameters': [],
          'headers': [],
          'responses': []
        },
        {
          'active': false,
          'name': 'PATCH',
          'description': '',
          'queryParameters': [],
          'headers': [],
          'responses': []
        },
        {
          'active': false,
          'name': 'OPTIONS',
          'description': '',
          'queryParameters': [],
          'headers': [],
          'responses': []
        },
        {
          'active': false,
          'name': 'HEAD',
          'description': '',
          'queryParameters': [],
          'headers': [],
          'responses': []
        },
        {
          'active': false,
          'name': 'TRACE',
          'description': '',
          'queryParameters': [],
          'headers': [],
          'responses': []
        }
      ],
      '__id': 'f068746b-acd9-40c8-af83-83a89095b0a0',
      'selectedTraits': []
    },
    {
      'path': '/nested',
      'name': '',
      'type': null,
      'description': '',
      'pathVariables': [],
      'securedBy': [],
      'queryParameters': [],
      'resources': [],
      'parentId': 'f068746b-acd9-40c8-af83-83a89095b0a0',
      'annotations': [],
      'methods': [
        {
          'active': false,
          'name': 'GET',
          'description': '',
          'queryParameters': [],
          'headers': [],
          'responses': []
        },
        {
          'active': false,
          'name': 'POST',
          'description': '',
          'queryParameters': [],
          'headers': [],
          'responses': []
        },
        {
          'active': false,
          'name': 'PUT',
          'description': '',
          'queryParameters': [],
          'headers': [],
          'responses': []
        },
        {
          'active': false,
          'name': 'DELETE',
          'description': '',
          'queryParameters': [],
          'headers': [],
          'responses': []
        },
        {
          'active': false,
          'name': 'PATCH',
          'description': '',
          'queryParameters': [],
          'headers': [],
          'responses': []
        },
        {
          'active': false,
          'name': 'OPTIONS',
          'description': '',
          'queryParameters': [],
          'headers': [],
          'responses': []
        },
        {
          'active': false,
          'name': 'HEAD',
          'description': '',
          'queryParameters': [],
          'headers': [],
          'responses': []
        },
        {
          'active': false,
          'name': 'TRACE',
          'description': '',
          'queryParameters': [],
          'headers': [],
          'responses': []
        }
      ],
      '__id': '880ddafe-81a1-4ff3-841e-5bb80c146997'
    }
  ]
};

const resultProject: ApiInterfaces.API = {
  'settings': {
    'title': 'params',
    'baseUri': 'http://params'
  },
  'ms3_version': '1.0.1',
  'entityTypeName': 'api',
  'resources': [
    {
      'path': '/res',
      'name': 'res',
      'resources': [
        {
          'id': '880ddafe-81a1-4ff3-841e-5bb80c146997',
          'path': '/nested'
        }
      ],
      'methods': [
        {
          'active': true,
          'name': 'GET',
          'description': 'desc',
          'headers': [
            {
              'displayName': 'header',
              'type': 'number',
              'repeat': true,
              'required': false
            }
          ]
        },
        {
          'active': true,
          'name': 'POST',
          'responses': [
            {
              'code': '200',
              'body': [
                {
                  'contentType': 'application/pdf',
                }
              ]
            }
          ]
        },
        {
          'active': true,
          'name': 'PUT'
        },
        {
          'active': true,
          'name': 'DELETE'
        },
        {
          'active': false,
          'name': 'PATCH'
        },
        {
          'active': false,
          'name': 'OPTIONS'
        },
        {
          'active': false,
          'name': 'HEAD'
        },
        {
          'active': false,
          'name': 'TRACE'
        }
      ],
      '__id': 'f068746b-acd9-40c8-af83-83a89095b0a0'
    },
    {
      'path': '/nested',
      'parentId': 'f068746b-acd9-40c8-af83-83a89095b0a0',
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
          'active': false,
          'name': 'PUT'
        },
        {
          'active': false,
          'name': 'DELETE'
        },
        {
          'active': false,
          'name': 'PATCH'
        },
        {
          'active': false,
          'name': 'OPTIONS'
        },
        {
          'active': false,
          'name': 'HEAD'
        },
        {
          'active': false,
          'name': 'TRACE'
        }
      ],
      '__id': '880ddafe-81a1-4ff3-841e-5bb80c146997'
    }
  ]
};

export { originalProject, resultProject };